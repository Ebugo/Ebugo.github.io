<?php

namespace App\Actions\Fortify;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\ResetsUserPasswords;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class ResetUserPassword implements ResetsUserPasswords
{
    use PasswordValidationRules;

    /**
     * Validate and reset the user's forgotten password.
     *
     * @param  mixed  $user
     * @param  array  $input
     * @return void
     */
    public function reset($user, array $input)
    {

        Validator::make($input, [
            'password' => $this->passwordRules(),
        ])->validate();

        DB::beginTransaction();
          
        try {

            $user->forceFill([
                'password' => Hash::make($input['password']),
            ])->save();

            DB::commit();

            return $response = [
               'status' => 200,
               'message' => "Password reset done successfully!",
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
                'message' => 'An Error Occurred while reseting password!',
                'hint' => $e->getMessage()
             ];
        }
    }
}
