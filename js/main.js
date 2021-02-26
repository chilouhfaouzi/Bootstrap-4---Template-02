/* global $  */
$(function() { 
   'use strict';
   //Ajust height of slider
   var winH = $(window).height(),
       upperH=$('.upper-bar').innerHeight(),   /*Bach yahsab hta l padding  */
       navH  =$('.navbar').innerHeight() ;   

   $('.slider ,.carousel-item').height(winH -(upperH+navH));


   //Featured work shuffle
   $('.featured-work .row span').click(function(){
     $(this).addClass('active').siblings().removeClass('active');
     if($(this).data('class')==='all'){
         $('.featured-work .Ft-img').css('opacity','1');
     }
     else{
        $('.featured-work .Ft-img').css('opacity','.1');
        $('.featured-work .Ft-img '+ $(this).data('class')).parent().css({'opacity' : '1' ,'width':'120%'});
     }
   });
  
   
});//End window.ready();