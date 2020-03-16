$(document).ready(function(){

  //Funcion DesplazamientoSlide


  $(function(){

     $('a[href*=seguridad]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 500);

                 return false;

            }

       }

   });

});



    $(function(){

     $('a[href*=ambiente]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 500);

                 return false;

            }

       }

   });

});


  $(function(){

     $('a[href*=inicio]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 500);

                 return false;

            }

       }

   });

});


    $(function(){

     $('a[href*=contacto]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 500);

                 return false;

            }

       }

   });

});


     $(function(){

     $('a[href*=organismos]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 500);

                 return false;

            }

       }

   });

});


    $(function(){

     $('a[href*=consorcio]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 500);

                 return false;

            }

       }

   });

});


    $('#consultar').click(function(){
      e.preventDefault();
      e.stopImmediatePropagation();


     $.ajax({
              url: 'process.php',
              type: 'POST',
              data: $('#contacto').serialize(),
              success: function() {
                
                
                $('#contacto').hide();
                $('#contacto').append("<p class='thanks'>Gracias por contactarnos. Nos comunicaremos a la brevedad</p>")
             
               }

       });
    });













             
   
});








