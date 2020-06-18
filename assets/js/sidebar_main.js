(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

  /*Something to do with a card*/

  $(document).ready(function() {
	$(".menu-icon").on("click", function() {
		  $("nav ul").toggleClass("showing");
	});
});

// Scrolling Effect

$(window).on("scroll", function() {
	if($(window).scrollTop()) {
		  $('nav').addClass('black');
	}

	else {
		  $('nav').removeClass('black');
	}
})

})(jQuery);