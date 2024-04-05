
$(document).ready(function () {

  //==========Language Selector======//
  $('#lang-select').on('change', function () {

    $('html').toggleClass(function () {
      return $(this).is('.rtl-direction, .ltr-direction') ? 'rtl-direction ltr-direction' : 'rtl-direction';
    })

  });

//==============HasTag Selector JS===============//
  $('.input-tags').tagsInput({
    'height': '45px',
    'width': '100%',
    'interactive': false,
  });

  $(".get-tag").click(function (e) {
    e.preventDefault();
    var i = $(this).data("value");

    $('.input-tags').addTag(i);

  });


  /*Color Selector 1 For the Color Digit */
    $(".get-black1").click(function () {
      $(".digit-color1").addClass("black");
      $(".digit-color1").removeClass("red");

    });


  $(".get-red1").click(function () {
    $(".digit-color1").addClass("red");
    $(".digit-color1").removeClass("black");

  });

  /*Color Selector 2 For the Color Digit */
  $(".get-black2").click(function () {
    $(".digit-color2").addClass("black");
    $(".digit-color2").removeClass("red");

  });

  $(".get-red2").click(function () {
    $(".digit-color2").addClass("red");
    $(".digit-color2").removeClass("black");

  });

  /*Color Selector 3 For the Color Digit */
  $(".get-black3").click(function () {
    $(".digit-color3").addClass("black");
    $(".digit-color3").removeClass("red");

  });

  $(".get-red3").click(function () {
    $(".digit-color3").addClass("red");
    $(".digit-color3").removeClass("black");

  });

  /*Color Selector 4 For the Color Digit */

  $(".get-black4").click(function () {
    $(".digit-color4").addClass("black");
    $(".digit-color4").removeClass("red");

  });

  $(".get-red4").click(function () {
    $(".digit-color4").addClass("red");
    $(".digit-color4").removeClass("black");

  });

  /*Color Selector 5 For the Color Digit */
  $(".get-black5").click(function () {
    $(".digit-color5").addClass("black");
    $(".digit-color5").removeClass("red");

  });

  $(".get-red5").click(function () {
    $(".digit-color5").addClass("red");
    $(".digit-color5").removeClass("black");

  });




//==============Hero Slider Counter==========//
  $('.counter').counterUp({
    delay: 50,
    time: 3000
  });

  $(".register").click(function () {
    $(".register").hide();
  $(".profile").show();
});

//=====Hero Section Slider=====//
  $('.here-slider').slick({
        arrows: false,
        dots: true,
    autoplay:true,
    speed: 800,
    pauseOnHover:false,
    slidesToShow: 1
 
  });

  
//=========Featured Number Plate Slider=======//
  $('.favorite-plates').slick({
    arrows: true,
    dots: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '.plate-prev-btn',
    nextArrow:'.plate-next-btn',
    responsive: [{

      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
      }

    }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }

    }, {

      breakpoint: 578,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '20px',
      }
    }]

  });



  //==========Featured Mobile Number Slider========//
  $('.favorite-number').slick({
    arrows: true,
    dots: false,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '.number-prev-btn',
    nextArrow: '.number-next-btn',
    responsive: [{

      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
      }

    }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }

    }, {

      breakpoint: 578,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '20px',
      }
    }]

  });

  //==========Releted License Number Slider for the Details Page========//
  $('.related-plates').slick({
    arrows: true,
    dots: false,
    autoplay: false,
    slidesToShow: 3,
    speed: 500,
    centerMode: false,
    slidesToScroll: 1,
    prevArrow: '.releted-prev-btn',
    nextArrow: '.releted-next-btn',
    responsive: [{

      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
      }

    }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }

    }, {

      breakpoint: 578,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '20px',
      }
    }]

  });

 
//==========----Partner Slider on HOme Page-----=====//
  $('.partner').slick({
    arrows:false,
    dots: false,
  pauseOnHover: false,
    centerMode: false,
    slidesToShow: 5,

    responsive: [{

      breakpoint: 1600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
   
      }

    }, {

      breakpoint: 570,
      settings: {
        slidesToShow: 2,
        autoplay: true,
     
      }
    }]
    
  });


  //==========Pattern Selector JS Function Call=====//
  $('.licence-pattern').slick({
    arrows: false,
    dots: false,
    variableWidth: true,
    infinite: false,
    centerMode: false,
  });

  //==========Pattern Selector JS Function Call=====//
  $('.mobile-pattern').slick({
    arrows: false,
    dots: false,
    infinite: false,
    variableWidth: true,
    centerMode: false,
  });



//===-=====Sticky Header NavBar=========/// 
  const nav = document.querySelector("nav");
  const navHeight = 70;
  // the point the scroll starts from (in px)
  let lastScrollY = 0;
  const delta = 10;
  function scrolled() {
    let sy = window.scrollY;
    if (Math.abs(lastScrollY - sy) > delta) {
      if (sy > lastScrollY && sy > navHeight) {
        nav.classList.add("nav-up");
      }
      else if (sy < lastScrollY) {
        nav.classList.remove("nav-up");
      }
      lastScrollY = sy
    }
  }

  // Add event listener & debounce so not constantly checking for scroll
  let didScroll = false;
  window.addEventListener("scroll", function (e) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      scrolled();
      didScroll = false;
    }
  }, 250)


//========Tab Funciton for the Dashboard=========//
  new SiTabs({
    tabClass: 'tab',
    tabbedClass: 'tabbed',
    defaultTabClass: 'tabbed_default',
    activeTabClass: 'tab_active',
    disabledTabClass: 'tab_disabled'
  });


  //========These JS code for the Dahsboard Profile Tab=========//
  $(".name").click(function () {
    var name_input = document.querySelector('#user-name').value;
    document.querySelector('.update-name').innerHTML = name_input;

  });

  $(".email").click(function () {
    var email_input = document.querySelector('#user-email').value;
    document.querySelector('.update-email').innerHTML = email_input;

  });

  $(".mobile").click(function () {
    var mobile_input = document.querySelector('#mobile_number').value;
    document.querySelector('.update-number').innerHTML = mobile_input;

  });


  $(".bio").click(function () {
    var date_input = document.querySelector('#user-bio').value;
    document.querySelector('.update-bio').innerHTML = date_input;

  });


  $(".address").click(function () {
    var street_input = document.querySelector('#billing_city').value;
    document.querySelector('.street-update').innerHTML = street_input;

    var city_input = document.querySelector('#billing_street').value;
    document.querySelector('.city-update').innerHTML = city_input;
  });



  //============Internation Phone Code=========//
  let input = document.querySelector("#mobile_number");
  window.intlTelInput(input, {
    showSelectedDialCode: true,
    initialCountry: "ae",
    //onlyCountries: ["ae", "bh", "kw", "qa", "sa", "bd"],
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.16/build/js/utils.js"
  }); 

  let input2 = document.querySelector("#mobile_number2");
  window.intlTelInput(input2, {
    showSelectedDialCode: true,
    initialCountry: "ae",
    //onlyCountries: ["ae", "bh", "kw", "qa", "sa", "bd"],
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.16/build/js/utils.js"
  }); 
 

  

});

