function activate_login()
{
    $('.input-field').focus(
       function(){
          $(this).attr('value', "");
     });
     
     $('.input-field').blur(
        function(){
            if($(this).attr('value')=='')
            {
                if($(this).attr('name')=='name')
                {
                    $(this).attr('value', "USERNAME");
                } else {
                    $(this).attr('value', "PASSWORD");
                }  
            }
      });
}