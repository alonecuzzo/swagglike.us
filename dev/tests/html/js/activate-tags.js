// *******************************************
// activates the tags in the right menu
// *******************************************

function activate_tags()
{
    $('.tag').bind('click',
       function(){
           var tag = $(this).text();
           alert('you clicked esttag: ' + tag);  
       }
   );
    
}