<?php

namespace App\Actions\Fortify;

use App\Models\User;
use App\Models\AdminData;
use App\Models\InvestorData;
use App\Models\StartupData;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Mail\VerifyAccount;


class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */

    public $role;

    public function __construct($role)
    {
        $this->role = $role;
    }

    public function create(array $input)
    {
        Validator::make($input, [
            'firstname' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'phone_number' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
        ])->validate();

        
        DB::beginTransaction();
          
        try {

            //code...
            $user = User::create([
                'firstname' => $input['firstname'],
                'lastname' => $input['lastname'],
                'phone_number' => $input['phone_number'],
                'email' => $input['email'],
                'verify_code' => mt_rand(100000, 999999),
                'password' => Hash::make($input['password']),
                'role' => $this->role
            ]);

            //Store Custom Data
            if($this->role === 'patient') {
                //DO Somthing here

            }
            
            //Send a verification mail
            Mail::to($user->email)->send(new VerifyAccount($user));

            DB::commit();

            return $response = [
               'status' => 201,
               'message' => "Account created successfully",
               'user' => $user,
               'file-info' => [
                    'image_origin_url' => env('CLOUDINARY_SECURE_URL').'/'.env('IMAGE_FOLDER'),
                    'round_format' => 'w_200,c_fill,ar_1:1,g_auto,r_max/',
                    'square_format' => 'w_200,ar_1:1,c_fill,g_auto/'
                ]
            ];
           
        } catch (\Exception $e) {

            DB::rollBack();

            return $response = [
                'status' => 501,
                'message' => 'An Error Occurred while processing registration',
                'hint' => $e->getMessage(),
                'user' => $user
             ];
        }

    }

    
}
