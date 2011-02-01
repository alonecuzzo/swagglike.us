$(document).ready(function(){
	/* This code is executed after the DOM has been completely loaded */
	
	$('nav a,#myheader a.up, #back-to-top-button a.up').click(function(e){
								
		// If a link has been clicked, scroll the page to the link's hash target:
		$.scrollTo( this.hash || 0, 1500);
		e.preventDefault();
	});
	
	// $('body').css('position','absolute');
	
	
	$('#back-to-top-button').fadeOut(1);
	
	
	window.onscroll = function()
	{
	    var offsetX = $('#articles').offset();
        
	    if( window.XMLHttpRequest ) {
			 $('#myheader').css('position','fixed');
	         $('#myheader').css('top','0');
	         
	         $('#right-panel').css('position','fixed');
 	         $('#right-panel').css('top','55px');
 	         $('#right-panel').css('margin-left', offsetX.left);
 	         
 	         $('.login-form').css('position','fixed');
 	         $('.login-form').css('top','20px');
 	         $('.login-form').css('margin-left', offsetX.left);
 	         
 	         //fade button here
 	         if (document.documentElement.scrollTop > 675 || self.pageYOffset > 675) {
 	             $('#back-to-top-button').fadeIn();
             } else {
                 $('#back-to-top-button').fadeOut();
             }
	    }
	}


    window.onresize = function()
    {
        var offsetY = self.pageYOffset;
        var offsetX = screen.width/2-300;
        
        if( window.XMLHttpRequest ) {
            $('#right-panel').css('position','absolute');
            $('#right-panel').css('float','right');
            $('#right-panel').css('top', offsetY);
            $('#right-panel').css('margin-left', '0');
            
            $('.login-form').css('position','absolute');
            $('.login-form').css('float','right');
            $('.login-form').css('top', '20px' );
            $('.login-form').css('left', '60.5%');
            
            $('#myheader').css('width', $(window).width());
         }
    }
      
	//alert( "get that voting going")
	//activate the voting
    activate_voting();
    activate_tags();
    $('#myheader').css('width', $(window).width());
    //alert($(window).width())
    
});