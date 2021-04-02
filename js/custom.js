AOS.init();
//-------start nav 

$(function(){      
    $(window).scroll(function(){
      if($(window).scrollTop() > 20){
           $(".header").css("display","none");
           $(".navbar").css("position","fixed");
      }else {
           $(".header").css("display","block");
           $(".navbar").css("position","relative");
      }  
    });
});

$(function(){      
    $(".nav-link").click(function(){
        $(this).parent().siblings().find(".nav-link").removeClass("active-item");
        $(this).addClass("active-item")
    });
});

$(window).scroll(function(){
    $(".block").each(function(){
        if($(window).scrollTop() > ($(this).offset().top - 1)){
            var blockId = $(this).attr("id");
            $(".navbar a").removeClass("active-item");
            $(".navbar li a[data-scroll=" + blockId + "]").addClass("active-item")      
        }     
    });
});

//--------end nav

//--------start back to top btn
$(function(){      
    $(window).scroll(function(){
      if($(window).scrollTop() > 300){
           $(".back-top-btn").css("display","block");
      }else{
          $(".back-top-btn").css("display","none");
      }  
    });
}); 


$(function(){      
    $(".back-top-btn").click(function(){ 
        $('html').animate({scrollTop:0}, 50);
    });
});
//------end back to top btn

//------start carouserl
$(function(){    
    $(".previos-item").click(function(){
        if ($(".f-c-item").hasClass("active")){
            
           $(".f-c-item").removeClass("active"); 
           $(".t-c-item").addClass("active") ;
           $(".f-pointer").removeClass("active");
           $(".t-pointer").addClass("active");    
        }else if ($(".s-c-item").hasClass("active")){
            
           $(".s-c-item").removeClass("active"); 
           $(".f-c-item").addClass("active") ; 
           $(".s-pointer").removeClass("active");
           $(".f-pointer").addClass("active");
        }else if ($(".t-c-item").hasClass("active")){
            
           $(".t-c-item").removeClass("active"); 
           $(".s-c-item").addClass("active") ; 
           $(".t-pointer").removeClass("active");
           $(".s-pointer").addClass("active");
        }      
    });
 });

$(function(){    
    $(".next-item").click(function(){
        if ($(".f-c-item").hasClass("active")){
            
           $(".f-c-item").removeClass("active"); 
           $(".s-c-item").addClass("active") ;
           $(".f-pointer").removeClass("active");
           $(".s-pointer").addClass("active");    
        }else if ($(".s-c-item").hasClass("active")){
            
           $(".s-c-item").removeClass("active"); 
           $(".t-c-item").addClass("active") ;
           $(".s-pointer").removeClass("active");
           $(".t-pointer").addClass("active");
        }else if ($(".t-c-item").hasClass("active")){
            
           $(".t-c-item").removeClass("active"); 
           $(".f-c-item").addClass("active") ; 
           $(".t-pointer").removeClass("active");
           $(".f-pointer").addClass("active");    
        }      
    });
 });

//-------end caursel

//-------start portfolio
$(function(){
    $("#app-button").click(function(){
        
        $("#app").css("display" , "block");
        $("#app").siblings().css("display" , "none");
    }); 
});

$(function(){
    $("#card-button").click(function(){
        
        $("#card").css("display" , "block");
        $("#card").siblings().css("display" , "none");
    });
});

$(function(){    
    $("#web-button").click(function(){
        
        $("#web").css("display" , "block");
        $("#web").siblings().css("display" , "none");
    });    
});

$(function(){    
    $("#all-button").click(function(){
      

        $("#all").css("display" , "block");
        $("#all").siblings().css("display" , "none");

    });
});
//btn color
$(function(){    
    $(".portfolio-btn").click(function(){
        
       if(! $(this).hasClass("selcted-btn")){
           $(this).addClass("selcted-btn");
           $(this).parentsUntil(".links-container").siblings().find(".portfolio-btn").removeClass("selcted-btn");  
        }

    });
});

//info
$(function(){    
    $(".portfolio-img").mouseover(function(){  
        $(this).find(".portfolio-info").css("display" , "block");
    });
    
    $(".portfolio-img").mouseout(function(){  
        $(this).find(".portfolio-info").css("display" , "none");
    });
});


//------end portfolio
//--------start form
$(function(){    
    $(".send-messege").click(function(){
        //name
        var emptyName = $(".form-name").val() ;
        if (emptyName == ""){
          $(".form-name").addClass("error");
          $(".error-name").slideDown(500);       
        }else{
          $(".form-name").addClass("correct");
          $(".error-name").slideUp(50);    
        }
        //email
        var emptyEmail = $(".form-email").val() ;
        if (emptyEmail == ""){
          $(".form-email").addClass("error");
          $(".error-email").slideDown(500);       
        }else{
          $(".form-email").addClass("correct");
          $(".error-email").slideUp(50);$(".s-error-text").slideUp(50);     
        }
        //subject
        var emptySubject = $(".form-subject").val() ;
        if (emptySubject == ""){
          $(".form-subject").addClass("error");
          $(".error-subject").slideDown(500);       
        }else{
          $(".form-subject").addClass("correct");
          $(".error-subject").slideUp(50);     
        }
        //messege
        var emptyMessge = $(".form-messege").val() ;
        if (emptyMessge == ""){
          $(".form-messege").addClass("error");
          $(".error-messege").slideDown(500);       
        }else{
          $(".form-messege").addClass("correct");
          $(".error-messege").slideUp(50);     
        }
        
    });
});
//end form
  
