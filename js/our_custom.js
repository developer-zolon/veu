$(document).ready(function() {
    //slick slider
    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // video popup
    $('.venobox').venobox({
        framewidth: '600px',
        frameheight: '450px',
        border: '10px',
    });


    //image filter
    $('.portfolios').filterData({
        aspectRatio: '8:5',
        nOfRow: 3,
        itemDistance: 0
    });
    $('.portfolio-controllers button').on('click', function() {
        $('.portfolio-controllers button').removeClass('active-work');
        $(this).addClass('active-work');
    });



    //Progress Bar
    $(".animated-progress span").each(function() {
        $(this).animate({
                width: $(this).attr("data-progress") + "%",
            },
            1000
        );
        $(this).text($(this).attr("data-progress") + "%");
    });


    // typed js
    $(".typed").typed({
        strings: ["More Than 10 Years Experience.", "Web Development", "Web Design", 'Graphics Design'],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 50,
        // time before typing starts
        startDelay: 500,
        // backspacing speed
        backSpeed: 50,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 100,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    });


    // Sticky Top menu js
    $(window).scroll(function() {
        var scrolling = $(this).scrollTop();
        var sticky = $('.sticky-top');
        if (scrolling >= 100) {
            sticky.addClass('nav-bg');
        } else {
            sticky.removeClass('nav-bg');
        }
    });


    // Smooths scrolling
    $('body').scrollspy({ target: ".navbar", offset: 50 });

    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 1500);
                return false;
            }
        }
    });

    // wow js
    new WOW().init();

});