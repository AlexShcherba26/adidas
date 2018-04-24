$(document).ready(function () {

    $('#reSize li').click(function(){
       var a = $(this).children('span:eq(0)').text();
       var b = $(this).children('span:eq(1)').text();
   
      $(this).find('#addSize');
      $('#addSize').children('span:eq(0)').text(a);
      $('#addSize').children('span:eq(1)').text(b);
    })

    $('#reSum li').click(function(){
        var c = $(this).children('span:eq(0)').text();
        
       $(this).find('#addSum');
       $('#addSum').children('span:eq(0)').text(c);
     })
     
     $('#reSize li').click(function(){
        $(this).addClass('bgGrey')
        $(this).siblings('li').removeClass('bgGrey')

     })

     $('#reSum li').click(function(){
      $(this).addClass('bgGrey')
      $(this).siblings('li').removeClass('bgGrey')

   })

});