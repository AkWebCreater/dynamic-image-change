      $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    // Do something
        var el = '';
        $('.hstry-cont .main-content section').each(function(){
          var of = $(this).offset().top ;
          var eq = of - Math.floor(scroll);
          var eqal =     Math.floor( eq );  
          var rs =  eqal - 105
          console.log(rs)
          if (rs < 50 && rs > 1   ){
            el = $(this).attr('data-trigger');
//             alert(el)
//             alert(rs)
          }
        })
      $(el).addClass('active');
      $(el).siblings().removeClass('active');      
});
