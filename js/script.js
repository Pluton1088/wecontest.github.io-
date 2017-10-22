 		$(window).ready(function(){
	/* делаем плавное появление */
	setTimeout ( "$('#black').fadeTo(1500, 1);",1000);
	setTimeout ( "$('#menu').fadeTo(1500, 0.7);",1000);
	setTimeout ( "$('#text-block1').fadeTo(1500, 1);",1000);
	setTimeout ( "$('#text-block2').fadeTo(1500, 1);",1000);
	setTimeout ( "$('#text-block3').fadeTo(1500, 1);",1000);
   setTimeout ( "$('#logo').fadeTo(1500, 1);",1000);
   
       $('.partners').on('mouseover', function() {
       	$('#svg-line2').show();

       	
       
});

        $('.registration').on('mouseover', function() {
       	$('#svg-line3').show();

       	
       
});

      $('.speakers').on('mouseover', function() {
       	$('#svg-line4').show();

       	
       
});

   

      $('.information').on('mouseover', function() {
       	$('#svg-line11').show();

       	
       
});

            $('.about-us').on('mouseover', function() {
       	$('#svg-line12').show();

       	
       
});
            $('.contacts').on('mouseover', function() {
            	 $('#svg-line13').show();
            	 setTimeout ( "$('#black-block-container').fadeTo(1500, 1);",1000);
				 setTimeout ( "$('#black-contacts').fadeTo(1000, 1);",0);  
          setTimeout ( "$('#contact').fadeTo(1000, 1);",0);        
				 setTimeout ( "$('#logo-footer').fadeTo(1500, 1);",1900);  
});



            $('.download').on('mouseover', function() {
       	$('#svg-line5').show();
       	$('#svg-line6').show();
       		$('#svg-line7').show();
       			$('#svg-line8').show();
       				$('#svg-line9').show();
       				$('#svg-line10').show();

       	
       
});

     
   var h_hght = 20; // высота шапки
   var h_mrg = 0;     // отступ когда шапка уже не видна
   $(function(){
    $(window).scroll(function(){

       var top = $(this).scrollTop();
       var elem = $('#menu');
       if (top+h_mrg < h_hght) {
        elem.css('top', (h_hght-top));
       } else {
        elem.css('top', h_mrg);
       }
     });
   });

   var h_hght = 20; // высота шапки
   var h_mrg = 0;     // отступ когда шапка уже не видна
   $(function(){
    $(window).scroll(function(){

       var top = $(this).scrollTop();
       var elem = $('#menu-mobile');
       if (top+h_mrg < h_hght) {
        elem.css('top', (h_hght-top));
       } else {
        elem.css('top', h_mrg);
       }
     });
   });




   $(document).ready(function(){

    $("#menu").on("click","a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();

 

        //забираем идентификатор бока с атрибута href

        var id  = $(this).attr('href'),

 

        //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top;

         

        //анимируем переход на расстояние - top за 1500 мс

        $('body,html').animate({scrollTop: top}, 600);

    });

});




$(document).ready(function(){
  $('.a1').click(function(){
    $('.ch1').show(500);
    $('.ch0, .ch2, .ch3, .ch4, .ch5, .ch6, .ch7').hide(500);

  });
  $('.a2').click(function(){
    $('.ch2').show(500);
    $('.ch0, .ch1, .ch3, .ch4, .ch5, .ch6, .ch7').hide(500);

  });
  $('.a3').click(function(){
    $('.ch3').show(500);
    $('.ch0, .ch1, .ch2, .ch4, .ch5, .ch6, .ch7').hide(500);

  });
  $('.a4').click(function(){
    $('.ch4').show(500);
    $('.ch0, .ch1, .ch3, .ch2, .ch5, .ch6, .ch7').hide(500);

  });
  $('.a5').click(function(){
    $('.ch5').show(500);
    $('.ch0, .ch1, .ch3, .ch2, .ch4, .ch6, .ch7').hide(500);

  });
  $('.a6').click(function(){
    $('.ch6').show(500);
    $('.ch0, .ch1, .ch3, .ch2, .ch4, .ch5, .ch7').hide(500);
  });
  $('.a7').click(function(){
    $('.ch7').show(500);
    $('.ch0, .ch1, .ch3, .ch2, .ch4, .ch5, .ch6').hide(500);
  });
  
});

});

