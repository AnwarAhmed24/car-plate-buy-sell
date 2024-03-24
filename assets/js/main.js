
$(document).ready(function () {

  $('#lang-select').on('change', function () {

    $('html').toggleClass(function () {
      return $(this).is('.rtl-direction, .ltr-direction') ? 'rtl-direction ltr-direction' : 'rtl-direction';
    })

  });

 
  $('.counter').counterUp({
    delay: 50,
    time: 3000
  });

  $(".register").click(function () {
    $(".register").hide();
  $(".profile").show();
});

//=====Car Brand Image Slider=====//
  $('.here-slider').slick({
        arrows: false,
        dots: true,
    autoplay:true,
    speed: 800,
    pauseOnHover:false,
    slidesToShow: 1
 
  });

  
//Latest Offer Car Slider//
  $('.favorite-plates').slick({
    arrows: true,
    dots: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
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




  $('.favorite-number').slick({
    arrows: true,
    dots: false,
    autoplay: false,
    slidesToShow: 5,
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


 

  $('.partner').slick({
    arrows:false,
    dots: false,
  pauseOnHover: false,
    centerMode: false,
    responsive: [{

      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
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


 

  //Blog Post Car Slider//
  $('.blog-post-cars, .car-blog-location').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false
  });



  //Scroll to Top Function//

  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      var element = document.querySelector("#scroll-top").style.opacity = "1";

    } else {
      document.querySelector("#scroll-top").style.opacity = "0";

    }
  }

/*     var $slider = $('.car-img-slider');

    if ($slider.length) {
      var currentSlide;
      var slidesCount;
      var sliderCounter = document.createElement('div');
      sliderCounter.classList.add('slider__counter');

      var updateSliderCounter = function (slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).text(currentSlide + '/' + slidesCount);
      };

      $slider.on('init', function (event, slick) {
        $slider.append(sliderCounter);
        updateSliderCounter(slick);
      });

      $slider.on('afterChange', function (event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
      });

      $slider.slick();
    } 
   */

  var $status = $('.slider_counter');
  var $slickElement = $('.car-img-slider');
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + '/' + slick.slideCount);
    });


   
//======Click to Copy Clipboard =====//
  $("#copy-link").on("click", function () {
    var copyText = document.querySelector("#copy-text");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text

    this.innerText = "Copied";
  });

  //  login singup page desgen start  

  // secound modal start
  $('#Password').passwordRulesValidator({
    'rules': {

      'length': {
        'regex': '.{8,}',
        'name': 'length',
        'message': '8 characters',
        'enable': true
      },
      'lowercase': {
        'regex': '[a-z]{1,}',
        'name': 'lowercase',
        'message': '1 lowercase',
        'enable': true
      },
      'uppercase': {
        'regex': '[A-Z]{1,}',
        'name': 'uppercase',
        'message': '1 uppercase',
        'enable': true
      },
      'number': {
        'regex': '[0-9]{1,}',
        'name': 'number',
        'message': '1 digit',
        'enable': true
      },
      'specialChar': {
        'regex': '[^a-zA-Z0-9]{1,}',
        'name': 'special-char',
        'message': '1 special character',
        'enable': true
      },

      //  your custom rules here

    },
  });

  $('.ads-slider').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: false
  });


  $('.tabess').scrollingTabs({
    enableSwiping: false,
  });

  var rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
    let priceGap = 1000;

    priceInput.forEach(input => {
      input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value),
          maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
          if (e.target.className === "input-min") {
            rangeInput[0].value = minPrice;
            range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
          } else {
            rangeInput[1].value = maxPrice;
            range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
          }
        }
      });
    });

    rangeInput.forEach(input => {
      input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
          maxVal = parseInt(rangeInput[1].value);

        if ((maxVal - minVal) < priceGap) {
          if (e.target.className === "range-min") {
            rangeInput[0].value = maxVal - priceGap
          } else {
            rangeInput[1].value = minVal + priceGap;
          }
        } else {
          priceInput[0].value = minVal;
          priceInput[1].value = maxVal;
          range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
          range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
      });
    });
   
 //Mobile Priece Filter//
  var rangeInput2 = document.querySelectorAll(".range-input2 input"),
    priceInput2 = document.querySelectorAll(".price-input2 input"),
    range2 = document.querySelector(".slider2 .progress");
  let priceGap2 = 1000;

  priceInput2.forEach(input => {
    input.addEventListener("input", e => {
      let minPrice = parseInt(priceInput2[0].value),
        maxPrice = parseInt(priceInput2[1].value);

      if ((maxPrice - minPrice >= priceGap2) && maxPrice <= rangeInput2[1].max) {
        if (e.target.className === "input-min") {
          rangeInput2[0].value = minPrice;
          range2.style.left = ((minPrice / rangeInput2[0].max) * 100) + "%";
        } else {
          rangeInput2[1].value = maxPrice;
          range2.style.right = 100 - (maxPrice / rangeInput2[1].max) * 100 + "%";
        }
      }
    });
  });

  rangeInput2.forEach(input => {
    input.addEventListener("input", e => {
      let minVal = parseInt(rangeInput2[0].value),
        maxVal = parseInt(rangeInput2[1].value);

      if ((maxVal - minVal) < priceGap2) {
        if (e.target.className === "range-min") {
          rangeInput2[0].value = maxVal - priceGap2
        } else {
          rangeInput2[1].value = minVal + priceGap2;
        }
      } else {
        priceInput2[0].value = minVal;
        priceInput2[1].value = maxVal;
        range2.style.left = ((minVal / rangeInput2[0].max) * 100) + "%";
        range2.style.right = 100 - (maxVal / rangeInput2[1].max) * 100 + "%";
      }
    });
  });
 
 

  new SiTabs({
    tabClass: 'tab',
    tabbedClass: 'tabbed',
    defaultTabClass: 'tabbed_default',
    activeTabClass: 'tab_active',
    disabledTabClass: 'tab_disabled'
  });

  $(".name").click(function () {
    var name_input = document.querySelector('#user-name').value;
    document.querySelector('.update-name').innerHTML = name_input;

  });

  $(".email").click(function () {
    var email_input = document.querySelector('#user-email').value;
    document.querySelector('.update-email').innerHTML = email_input;

  });

  $(".mobile").click(function () {
    var mobile_input = document.querySelector('#user-number').value;
    document.querySelector('.update-number').innerHTML = mobile_input;

  });


  $(".date").click(function () {
    var date_input = document.querySelector('#user-date').value;
    document.querySelector('.update-date').innerHTML = date_input;

  });

  $(".nationlity").click(function () {
    var nationlity_input = document.querySelector('#user-nationlity').value;
    document.querySelector('.update-nationlity').innerHTML = nationlity_input;

  });

  $(".address").click(function () {
    var street_input = document.querySelector('#billing_city').value;
    document.querySelector('.street-update').innerHTML = street_input;

    var city_input = document.querySelector('#billing_street').value;
    document.querySelector('.city-update').innerHTML = city_input;
  });



  // document.addEventListener("click", function(){
  //         document.getElementById('address');
  //         const city_input = document.getElementById('billing_city').value;

  //         const Street_input = document.getElementById('billing_street').value;

  //         document.getElementById('city-update').innerHTML = city_input;

  //         document.getElementById('street-update').innerHTML = Street_input;
  // });


  //modal section Ends//


  // let input = document.getElementById("inputTag");
  // let imageName = document.getElementById("imageName")

  // input.addEventListener("change", ()=>{
  //     let inputImage = document.querySelector("input[type=file]").files[0];

  //     imageName.innerText = inputImage.name;
  // });

  // /* user daesboard page ends */
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

 
  let input2 = document.querySelector("#contact_number");
  window.intlTelInput(input2, {
    showSelectedDialCode: true,
    initialCountry: "ae",
    //onlyCountries: ["ae", "bh", "kw", "qa", "sa", "bd"],
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.16/build/js/utils.js"
  }); 
  //Internation Phone Code//
  let input = document.querySelector("#phone_number");
  window.intlTelInput(input,  {
    showSelectedDialCode: true,
    initialCountry: "ae",
    //onlyCountries: ["ae", "bh", "kw", "qa", "sa", "bd"],
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.16/build/js/utils.js"
  }); 



    
    






/*     //====Search For Car=====//
    NiceSelect.bind(document.getElementByI("select-city"), { searchable: true, placeholder: 'Select City' });
    NiceSelect.bind(document.getElementById("select-city2"), { searchable: false, placeholder: 'Select Location' });
    NiceSelect.bind(document.getElementById("select-brand"), { searchable: true, placeholder: 'Select Brand' });
    NiceSelect.bind(document.getElementById("select-model"), { searchable: true, placeholder: 'Select Model' });
    NiceSelect.bind(document.getElementById("select-driver"), { searchable: false, placeholder: 'Select with Driver' }); */

  




  

});

