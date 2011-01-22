$(document).ready(function(){
	/* This code is executed after the DOM has been completely loaded */
	
	$('nav a,footer a.up').click(function(e){
								
		// If a link has been clicked, scroll the page to the link's hash target:
		$.scrollTo( this.hash || 0, 1500);
		e.preventDefault();
	});
	
	// $('body').css('position','absolute');
	
	$('#myheader').css('width', screen.width);
	
	window.onscroll = function()
	{
	    var offsetX = $('#articles').offset();
        
	    if( window.XMLHttpRequest ) {
			 $('#myheader').css('position','fixed');
	         $('#myheader').css('top','0');
	         $('#tags').css('position','fixed');
 	         $('#tags').css('top','55px');
 	         $('#tags').css('margin-left', offsetX.left);
	    }
	}


    window.onresize = function()
    {
        var offsetY = self.pageYOffset;
        if( window.XMLHttpRequest ) {
            $('#tags').css('position','absolute');
            $('#tags').css('float','right');
            $('#tags').css('top', offsetY);
            $('#tags').css('margin-left', '0');
            $('#myheader').css('width', screen.width);
         }
    }
      
	//alert( "get that voting going")
	//activate the voting
    activate_voting();
    activate_tags();
    
});