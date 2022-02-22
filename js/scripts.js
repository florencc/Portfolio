/*!
    * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

/*
		var camera, scene, renderer;
		var video, videoTexture,videoMaterial;
		var composer;
		var shaderTime = 0;
		var badTVParams, badTVPass;		
		var staticParams, staticPass;		
		var rgbParams, rgbPass;	
		var filmParams, filmPass;	
		var renderPass, copyPass;
		var gui;
		var pnoise, globalParams;
		var inter = 0;
		
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		var ctx = new AudioContext(), currentOsc, isMouseDown, lastY;

		init();

		function init() {
			onParamsChange();
      randomizeParams();
			prepareRandomizeParams();
		}

		function prepareRandomizeParams(){
			inter = parseInt((Math.random()*500)+1);
			stopWave();
			randomizeParams();
			setTimeout(prepareRandomizeParams, inter);
		}


		function playWave() {
		    var o = ctx.createOscillator();
		    lastY = Math.random()*100;
		    isMouseDown = true;
		    var arrr = ["sine", "sawtooth", "square", "triangle"];
		    var r = parseInt(Math.random()*1);
		    o.type = arrr[0];
		    o.frequency.value = Math.random()*90;
		    o.start(0);
		    o.connect(ctx.destination);
		    currentOsc = o;
		}

		function stopWave() {
		    isMouseDown = false;
		    currentOsc.stop(0);
		}

		function changeFreq() {
		    if (isMouseDown) {
		    	var rr = Math.random()*2;
		    	var rrr = Math.random()*2;
		        if (rr > rrr) {
		            currentOsc.frequency.value -= 1;
		            lastY = rr;
		        }
		        else if (rr < rrr) {
		            currentOsc.frequency.value += 1;
		            lastY = rr;
            }
		    }
		}

		function onParamsChange() {
			playWave();
			changeFreq();
		}


		function randomizeParams() {
		  onParamsChange();
		} */
