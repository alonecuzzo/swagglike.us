// This code adds functionality to the voting stars.
// Initially it will loop through and slap functionality to the existing stars, but it will eventually need to handle the adding of dynamic content to the 
// main feed or galleries etc.

// **********************************************
// Initial assignment
// **********************************************

function activate_voting()
{
    // Clicking functionality- cookies need to be enabled later
    $('.voting-star').bind('click',
       function(){
           // This will be our unique identifier that will be added later
           // var uid = $(this).parent().parent().find(".uid").attr("uid");
           
           // if ($.cookies.get('voting-id' + uid))
           //            {
           //            } else {

               // $.cookies.set('voting-id' + uid, 'true');
               //               var sessid = $.cookies.get('voting-id' + uid);
               var starId = $(this).attr("id");
               switch (starId)
               {
               case 'star1':
                   bid = 1;
                   break;
               case 'star2':
                   bid = 2;
                   break;
               case 'star3':
                   bid = 3;
                   break;
               case 'star4':
                   bid = 4;
                   break;
               case 'star5':
                   bid = 5;
                   break;
               }
               alert("congrats you voted:" + bid);
              // window.location.href = "/vote/"+ bid + "/" + uid;
           //}
       }
     );
     
     
     //Hovering functionality
     $('.voting-star').mouseover(function() {
         var leash = $(this).parent();
         // var uid = $(this).parent().parent().find(".uid").attr("uid");
         //determine the correct dom leash
         // if($(this).parent().attr("id") === "carousel-voting-star")
         //          {
         //              //it's on the carousel side
         //              leash = $(this).parent().parent();
         //              uid = $(this).parent().parent().parent().find("#facebook-id").text();
         //          }

         // if ($.cookies.get('voting-id' + uid))
         //           {
         // 
         //           } else {

             var idName = $(this).attr("id");

             if ($(this).attr("src") === "img/voting-star-off.png")
             {
                 $(this).attr("src", "img/voting-star-on.png");

                 switch (idName)
                 {
                 case 'star1':
                     leash.find('#star2').attr("src", "img/voting-star-off.png");
                     leash.find('#star3').attr("src", "img/voting-star-off.png");
                     leash.find('#star4').attr("src", "img/voting-star-off.png");
                     leash.find('#star5').attr("src", "img/voting-star-off.png");
                     break;
                 case 'star2':
                     leash.find('#star1').attr("src", "img/voting-star-on.png");
                     leash.find('#star3').attr("src", "img/voting-star-off.png");
                     leash.find('#star4').attr("src", "img/voting-star-off.png");
                     leash.find('#star5').attr("src", "img/voting-star-off.png");
                     break;
                 case 'star3':
                     leash.find('#star1').attr("src", "img/voting-star-on.png");
                     leash.find('#star2').attr("src", "img/voting-star-on.png");
                     leash.find('#star4').attr("src", "img/voting-star-off.png");
                     leash.find('#star5').attr("src", "img/voting-star-off.png");
                     break;
                 case 'star4':
                     leash.find('#star1').attr("src", "img/voting-star-on.png");
                     leash.find('#star2').attr("src", "img/voting-star-on.png");
                     leash.find('#star3').attr("src", "img/voting-star-on.png");
                     leash.find('#star5').attr("src", "img/voting-star-off.png");
                     break;
                 case 'star5':
                      leash.find('#star1').attr("src", "img/voting-star-on.png");
                      leash.find('#star2').attr("src", "img/voting-star-on.png");
                      leash.find('#star3').attr("src", "img/voting-star-on.png");
                      leash.find('#star4').attr("src", "img/voting-star-on.png");
                      break;
                 }

             } else {

                 switch (idName)
                 {
                 case 'star1':
                     leash.find('#star1').attr("src", "img/voting-star-on.png");
                     leash.find('#star2').attr("src", "img/voting-star-off.png");
                     leash.find('#star3').attr("src", "img/voting-star-off.png");
                     leash.find('#star4').attr("src", "img/voting-star-off.png");
                     leash.find('#star5').attr("src", "img/voting-star-off.png");
                     break;
                 case 'star2':
                     leash.find('#star2').attr("src", "img/voting-star-on.png");
                     leash.find('#star3').attr("src", "img/voting-star-off.png");
                     leash.find('#star4').attr("src", "img/voting-star-off.png");
                     leash.find('#star5').attr("src", "img/voting-star-off.png");
                     break;
                 case 'star3':
                     leash.find('#star1').attr("src", "img/voting-star-on.png");
                     leash.find('#star2').attr("src", "img/voting-star-on.png");
                     leash.find('#star3').attr("src", "img/voting-star-on.png");
                     leash.find('#star4').attr("src", "img/voting-star-off.png");
                     leash.find('#star5').attr("src", "img/voting-star-off.png");
                     break;
                 case 'star4':
                     leash.find('#star1').attr("src", "img/voting-star-on.png");
                     leash.find('#star2').attr("src", "img/voting-star-on.png");
                     leash.find('#star3').attr("src", "img/voting-star-on.png");
                     leash.find('#star4').attr("src", "img/voting-star-on.png");
                     leash.find('#star5').attr("src", "img/voting-star-off.png");
                     break;
                 case 'star5':
                      leash.find('#star1').attr("src", "img/voting-star-on.png");
                      leash.find('#star2').attr("src", "img/voting-star-on.png");
                      leash.find('#star4').attr("src", "img/voting-star-on.png");
                      break;
                 }
             }

         //}
     });
     
     
     //Rollout functionality
     $('.voting-star').mouseout(function() {
         // Will need to be assigined dynamically once the DB is built
         //var defaultPosition = $(this).parent().parent().find(".uid").attr("defaultValue");
         var defaultPosition = '1';
         var leash = $(this).parent();
         //determine the correct dom leash
         //this will become more important later
        // if($(this).parent().attr("id") === "carousel-voting-star")
        //          {
        //              //it's on the carousel side
        //              leash = $(this).parent().parent();
        //              defaultPosition = $(this).parent().parent().parent().find(".uid").attr("defaultValue");
        //          }
        
       // alert('leash: ' + leash.find("#star1").attr("id"));
         switch (defaultPosition)
         {
         case '1':
             leash.find('#star1').attr("src", "img/voting-star-on.png");
             leash.find('#star2').attr("src", "img/voting-star-off.png");
             leash.find('#star3').attr("src", "img/voting-star-off.png");
             leash.find('#star4').attr("src", "img/voting-star-off.png");
             leash.find('#star5').attr("src", "img/voting-star-off.png");
             break;
         case '2':
             leash.find('#star1').attr("src", "img/voting-star-on.png");
             leash.find('#star2').attr("src", "img/voting-star-on.png");
             leash.find('#star3').attr("src", "img/voting-star-off.png");
             leash.find('#star4').attr("src", "img/voting-star-off.png");
             leash.find('#star5').attr("src", "img/voting-star-off.png");
             break;
         case '3':
             leash.find('#star1').attr("src", "img/voting-star-on.png");
             leash.find('#star2').attr("src", "img/voting-star-on.png");
             leash.find('#star3').attr("src", "img/voting-star-on.png");
             leash.find('#star4').attr("src", "img/voting-star-off.png");
             leash.find('#star5').attr("src", "img/voting-star-off.png");
             break;
         case '4':
             leash.find('#star1').attr("src", "img/voting-star-on.png");
             leash.find('#star2').attr("src", "img/voting-star-on.png");
             leash.find('#star3').attr("src", "img/voting-star-on.png");
             leash.find('#star4').attr("src", "img/voting-star-on.png");
             leash.find('#star5').attr("src", "img/voting-star-off.png");
             break;
        case '5':
              leash.find('#star1').attr("src", "img/voting-star-on.png");
              leash.find('#star2').attr("src", "img/voting-star-on.png");
              leash.find('#star3').attr("src", "img/voting-star-on.png");
              leash.find('#star4').attr("src", "img/voting-star-on.png");
              leash.find('#star5').attr("src", "img/voting-star-on.png");
              break;
         default:
             leash.find('#star1').attr("src", "img/voting-star-off.png");
             leash.find('#star2').attr("src", "img/voting-star-off.png");
             leash.find('#star3').attr("src", "img/voting-star-off.png");
             leash.find('#star4').attr("src", "img/voting-star-off.png");
             leash.find('#star5').attr("src", "img/voting-star-off.png");
             break;
         }
     });
     
};