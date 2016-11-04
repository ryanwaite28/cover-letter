// Scroll Reveal
$(document).ready(function(){

  var bioPic = {
    origin   : "top",
    distance : "32px",
    duration : 500,
    delay    : 500,
    scale    : 0
  };

  var textContainer = {
    origin   : "top",
    distance : "32px",
    duration : 1000,
    delay    : 1000,
    scale    : 0
  };

  var revONE = {
    origin   : "top",
    distance : "32px",
    duration : 500,
    delay    : 500,
    scale    : 0
  };

  window.sr = ScrollReveal({ duration: 500 });
  sr.reveal('.header-img', bioPic);
  sr.reveal('#head-text-c', textContainer);
  sr.reveal('.rev-1', revONE);

  //

  var reg = $('#top-bar');
  $(window).scroll(function(){

    var height = $(window).height();
    var top = $(window).scrollTop();;

    if( top > height / 2 ) {
      reg.removeClass('reg-1');
    }
    else {
      reg.addClass('reg-1');
    }

  });

  $('#top-links li a').click(function(){

    var id = $(this).attr('name');

    /*$('html, body').animate({
	    scrollTop: pos // $("#sdl").offset().top
	  }, 1000);*/

  });

});

// Main Angular Application
var App = angular.module("myApp", ["firebase"]);

App.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[');
  $interpolateProvider.endSymbol(']}');
}]);

App.controller('masterCtrl', ['$scope', function($scope) {



}])
