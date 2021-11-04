$(document).ready(function() {
 
	var owl = $("#header-slider");

	owl.owlCarousel({
		singleItem : true,
		navigation : true,
		navigationText : ["<i class='ion-ios-arrow-thin-left'></i>","<i class='ion-ios-arrow-thin-right'></i>"],
		transitionStyle : "fade",
		pagination: true,
	});

	$("#Client_Logo").owlCarousel({
		autoPlay : 5000,
	    items : 6,
	    responsiveClass:true,
	    responsive: {
            0:{
                items : 1
            },
            480:{
                items : 1
            },
            768:{
                items : 3
            },
            1200:{
                items: 3
            }
        }
	});

    $("#blog-post").owlCarousel({
        autoPlay : 5000,
        items : 3,
        responsiveClass:true,
        responsive: {
            0:{
                items : 1
            },
            480:{
                items : 1
            },
            768:{
                items : 3
            },
            1200:{
                items: 3
            }
        }
    });


	$(function(){
	    $('#mixed-items').mixItUp();
	});


	new WOW().init();

	// DOM Content Load Event Actions;
	$( window ).load(function() {
		$('div#loading').remove();
		$('body').removeClass('loading');
	});


     $('.menu').onePageNav({
         currentClass: 'active',
         changeHash: true,
         scrollSpeed: 1200,
         top : 0
    });

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });





	  $('.carousel').carousel();



    // Animated Scrolling
    (function(){
        var topoffset = 0;

          // explore scroll function
          $('#scroll').click(function() {
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top-topoffset
                }, 1000);
                return false;
              } // target.length
            } //location hostname
          }); //on click

          // mouse icon scroll function
          $('#scroll2').click(function() {
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top-topoffset
                }, 1000);
                return false;
              } // target.length
            } //location hostname
          });

          // header logo scroll function
          $('#scroll3').click(function() {
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top-topoffset
                }, 1000);
                return false;
              } // target.length
            } //location hostname   
          });

          // read less scroll function
          $('#scroll4').click(function() {
            // literature read less function
            const see_more = document.querySelector("#see-more");
            const see_less = document.querySelector("#see-less");

            document.querySelector("#less-view").style.display = "block";
            document.querySelector("#more-view").style.display = "none";
            see_more.style.display = "flex";
            see_less.style.display = "none";

            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top-topoffset
                }, 1000);
                return false;
              } // target.length
            } //location hostname
            
          });

          $.scrollUp({
            scrollDistance: 2000,
            scrollSpeed: 1200,
          });
      }())

      
 
});

// Literature content reed more & less
const see_more = document.querySelector("#see-more");
const see_less = document.querySelector("#see-less");

see_more.onclick = function(){
  document.querySelector("#less-view").style.display = "none";
  document.querySelector("#more-view").style.display = "block";
  see_less.style.display = "flex";
  see_more.style.display = "none";
}


