(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Screenshot carousel
    $(".screenshot-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: true,
        items: 1
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);









// New part
// Show-hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // Change Icons <i class="fa-solid fa-minus"></i>
        const icon = faq.querySelector('.faq-icon i');
        if(icon.className === 'fa-solid fa-plus') {
            icon.className = "fa-solid fa-minus";
        }else {
            icon.className = "fa-solid fa-plus"
        }
    })
});
// sign in

// Get elements
const BuyNow = document.getElementById('BuyNow')
const ConfirmCloseBtn = document.getElementById('ConfirmCloseBtn')
const loginLink = document.getElementById('loginLink');
const Send = document.getElementById('send');
const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');
const openLoginPopup = document.getElementById('openLoginPopup'); 
const requestLogin = document.getElementById('requestLogin'); 
const tab1Open = document.getElementById('tab1-open'); 
const tab2Open = document.getElementById('tab2-open'); 
const tab3Open = document.getElementById('tab3-open'); 
const loginPopup = document.getElementById('loginPopup');
const closeBtn = document.getElementById('closeBtn');
const loginForm = document.getElementById('loginForm');
const confirmationPopup = document.getElementById('confirmationPopup');

loginLink.onclick = function() {
    loginPopup.style.display = 'block';
}
requestLogin.onclick = function() {
    loginPopup.style.display = 'block';
}
tab1Open.onclick = function() {
    loginPopup.style.display = 'block';
}
tab2Open.onclick = function() {
    loginPopup.style.display = 'block';
}
tab3Open.onclick = function() {
    loginPopup.style.display = 'block';
}
question1.onclick = function() {
    loginPopup.style.display = 'block';
}
question2.onclick = function() {
    loginPopup.style.display = 'block';
}
question3.onclick = function() {
    loginPopup.style.display = 'block';
}
BuyNow.onclick = function() {
    loginPopup.style.display = 'block';
}

openLoginPopup.onclick = function() {
    loginPopup.style.display = 'block';
}

closeBtn.onclick = function() {
    loginPopup.style.display = 'none';
}
ConfirmCloseBtn.onclick = function() {
    confirmationPopup.style.display = 'none';
}


window.onclick = function(event) {
    if (event.target === loginPopup) {
        loginPopup.style.display = 'none';
    }else(event.target === confirmationPopup)
    {
        confirmationPopup.style.display = 'none';
    }
}



loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    loginPopup.style.display = 'none';

    confirmationPopup.style.display = 'block';

});




// form 
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    const data = {
      formType: 'form1',
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value
    };
    
    fetch('https://script.google.com/macros/s/AKfycbxtTDetESV2KuzFb624CETOVjX231Zi9DQFI6FU2ScTwXitXH-m__mvDFb_lP-bMECCrA/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(() => {
        form.reset();
        alert("Form submitted successfully!");
    })
    .catch(error => console.error("Error:", error));
});
  

// form 2

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    const data = {
      formType: 'form2',
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      companyName: form.companyName.value,
      companyLink: form.companyLink.value

    };
    
    fetch('https://script.google.com/macros/s/AKfycbxtTDetESV2KuzFb624CETOVjX231Zi9DQFI6FU2ScTwXitXH-m__mvDFb_lP-bMECCrA/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(() => {
        console.log(data)
        form.reset();
        // alert("Form submitted successfully!");
    })
    .catch(error => console.error("Error:", error));
});
  

// https://script.google.com/macros/s/AKfycbw0-7w-lDR4yw6Gg750RE2fjJPB9ytbmd0LMAFv9yCtL9c4RqY9mtQcIdJt8nsIqjWqWg/exec