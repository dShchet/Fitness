// Menu
$('#burgerOpen').on('click', function() {
    $(this).removeClass('active');
    $('#burgerClose').addClass('active');
    $('#nav').show(100);
    $('body').addClass('active');
})

$('#burgerClose').on('click', function() {
    $(this).removeClass('active');
    $('#burgerOpen').addClass('active');
    $('#nav').hide(100);
    $('body').removeClass('active');
})

$("[data-mouse]").on("mouseover", function() {

    let $this = $(this);
        // blockId = $this.data('mouse');
    $('.nav__link').removeClass('active');
    $('.nav__number__item').removeClass('active');
    $this.addClass("active");
    // blockId.addClass('active');

    if ($('#link__01').hasClass('active')) {
        $('#01').addClass('active');
    }
    if ($('#link__02').hasClass('active')) {
        $('#02').addClass('active');
    }
    if ($('#link__03').hasClass('active')) {
        $('#03').addClass('active');
    }
    if ($('#link__04').hasClass('active')) {
        $('#04').addClass('active');
    }
    if ($('#link__05').hasClass('active')) {
        $('#05').addClass('active');
    }
});

// Slider
$('#phoneSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // arrows: false,
    autoplaySpeed: 2000,
    nextArrow: $('#sliderNext'),
    prevArrow: $('#sliderPrev')
  });

  // White arrows

  $('#sliderPrev').on("mouseover", function() {
    $(this).attr("src","./img/arrowActivePrev.png");

    })

    $('#sliderPrev').on("mouseout", function() {
        $(this).attr("src","./img/arrowPrev.png");

        })

    $('#sliderNext').on("mouseover", function() {
        $(this).attr("src","./img/arrowActiveNext.png");
    
        })
    
    $('#sliderNext').on("mouseout", function() {
        $(this).attr("src","./img/arrowNext.png");

        })

    // Yello arrows

    $('.arrow__yellow--next').on("mouseover", function() {
        $(this).attr("src","./img/arrowActiveNext.png");
    
        })
    
    $('.arrow__yellow--next').on("mouseout", function() {
        $(this).attr("src","./img/arrowYellow--next.png");

        })

    $('.arrow__yellow--prev').on("mouseover", function() {
        $(this).attr("src","./img/arrowActivePrev.png");
    
        })
    
    $('.arrow__yellow--prev').on("mouseout", function() {
        $(this).attr("src","./img/arrowYellow--prev.png");

        })
    

// Tranings Item

$('#traningItem-1').on("mouseover", function() {
    $('#traningContent-1').addClass('active');
    $("#traningBorder-1").attr("src","./img/border-yellow.svg");

})

$('#traningItem-2').on("mouseover", function() {
    $('#traningContent-2').addClass('active');
    $("#traningBorder-2").attr("src","./img/border-yellow.svg");

})

$('#traningItem-3').on("mouseover", function() {
    $('#traningContent-3').addClass('active');
    $("#traningBorder-3").attr("src","./img/border-yellow.svg");

})

$('#traningItem-4').on("mouseover", function() {
    $('#traningContent-4').addClass('active');
    $("#traningBorder-4").attr("src","./img/border-yellow.svg");

})

$('.tranings__item').on("mouseout", function() {
    $('.tranings__item__content').removeClass('active');
    $('.tranings__item__border').attr("src","./img/border.svg");
})

// Offers Item

$('#offersItem-1').on("mouseover", function() {
    $("#offersLine-1").attr("src","./img/offers_line--yellow.svg");
})

$('#offersItem-2').on("mouseover", function() {
    $("#offersLine-2").attr("src","./img/offers_line--yellow.svg");
})

$('#offersItem-3').on("mouseover", function() {
    $("#offersLine-3").attr("src","./img/offers_line--yellow.svg");
})

$('#offersItem-4').on("mouseover", function() {
    $("#offersLine-4").attr("src","./img/offers_line--yellow.svg");
})

$('.offers__item').on("mouseout", function() {
    $(".offers__line").attr("src","./img/offers_line.svg");
})

// установим обработчик события resize
$(window).resize(function(){
    if ($(window).width() <= '1199'){
        // Intro
        // $('.intro__woman').attr("src","./img/woman--tablet.png");
        // $('.intro__img__fitness').attr("src","./img/Fitness--tablet.svg");
        sliderIsLive = true;
        // Tranings
        $('.tranings__inner').addClass('tranings__slider');
        $('.tranings__item__border').removeAttr('id');
        $('.tranings__slider').not('.slick-initialized').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            nextArrow: $('#traningsNext'),
            prevArrow: $('#traningsPrev')
          });

        // Offers
        $('.offers__title').text('Акции');
        $('.offers__inner').addClass('offers__slider');
        $('.offers__slider').not('.slick-initialized').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            nextArrow: $('#offersNext'),
            prevArrow: $('#offersPrev')
          });
    } else {
        $('.offers__inner').filter('.slick-initialized').slick('unslick');
        $('.tranings__inner').filter('.slick-initialized').slick('unslick');
    }

   if ($(window).width() <= '767'){
        $('#inputEmail').attr("placeholder", "Ваше имя*");
        $('#inputMessage').attr("placeholder", "Телефон*");
    }
  });

  

  
   
  // вызовем событие resize
  $(window).resize();