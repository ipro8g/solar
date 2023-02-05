

   $(document).ready(function(){
           $(".content1").hide();
		   

           $("#main .all_content h2").click(function(){
               $(this).next(".content1").fadeToggle(2000);
			   $(this).toggleClass("close");
               
           });
          
        });

