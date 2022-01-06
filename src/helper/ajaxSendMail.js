
export const sendMail = (formData, $) => {
    console.log($)
    console.log('open server')
    const body = $(formData).serialize();

    $.ajax({
        type: 'POST',
        contentType:"application/json",
        dataType:'jsonp',
        crossDomain:true,
        url: 'https://codebug-server.herokuapp.com/sendmail.php',
        data: body,
        success: function(response) { 
            alert(response.success); 
        },
        error: function(xhr, status, error){
            console.log(error, status); 
        }
    });

}


