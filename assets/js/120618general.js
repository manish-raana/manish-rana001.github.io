(function($) {
	

	
function resize(){
//menu	
if ($(window).width() < 1170) {
$('#show-menu').off("click").click(function() {
    $("#menu").slideToggle(this.checked);
    $(".mlbl").fadeOut();
});
$("#menu").hide();
} else {
	$("#menu").show();
}
}	
$(document).ready(function(){
    resize();
    $(window).resize(resize);
});

$('.langC span').click(function() {
    $(".langDrp").slideToggle();
    $(".langC span").toggleClass("active");
});

//header show
if ($(window).width() > 1170) {
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y < 10) {
    $('header').removeClass('fixed');
  } else {
    $('header').addClass('fixed');
  }
});
}

if ($(window).width() < 750) {
// Hide Header on on scroll down MOBILE ONLY
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
 
    if (st > lastScrollTop && st > navbarHeight){
        $('header').addClass('hdr-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('hdr-up');
        }
    }
    
    lastScrollTop = st;
}
}


//Scrolls to the selected menu item on the page
$(function() {
    $('.bashD a').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 30
                }, 500);
                return false;
            }
        }
    });
});




$(window).load(function(){
var cw = $('.round_img').width();
$('.cimg, img.avatar').css({
    'height': cw + 'px'
});
});



setTimeout(function(){
$('.sameHeight').matchHeight();
}, 600);


$(document).ready(function(){
  if(window.navigator.userAgent.indexOf('iPhone') != -1){
    if(window.navigator.standalone == true){
      $('.installApp').hide();
      $('body').removeClass('fixed');
    } else {
        $('.installApp').show();
         $('.howto-android').hide();
    }
  } 
  else {
    $('.installApp').show();
   
  }
});


$(document).ready(function(){
  var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
  if(isAndroid > -1)
  {
   $('.howto').hide();
   $('.howto-android').show();
   $('head').append('<link rel="stylesheet" href="assets/css/android.css" />');
  }     
});



$('#egs1, #egs2, #egs3').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  touchThreshold:20,
   fade: true,
  cssEase: 'linear',
  dots: true
});
$('#profile-slide, #selfie-profile-slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  touchThreshold:2,
  fade: true,
  cssEase: 'linear'
});
$('#selfie-egs1, #selfie-egs2, #selfie-egs3').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  touchThreshold:20,
   fade: true,
  cssEase: 'linear',
  dots: false
});

//slickslider anchor
/*$("#selfie-profile-slide").each(function(k, v){
            
    var search = window.location.search || testurl,
        $slider = $(this),
        queries = search.slice(1).split("&"),
        checkQuery, initialSlide = 0;
    
    for( var query in queries ) {
        checkQuery = queries[query].split("=");
        if( checkQuery[0] === "slick"+k ) {
            initialSlide = parseInt(checkQuery[1],10);
        }
    }

    $slider.slick({
       initialSlide: initialSlide,
       slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  touchThreshold:2,
	  fade: true,
	  cssEase: 'linear'
    });

});*/

$('.girl-list li, #prevprof').click(function(e) {
	 e.preventDefault()
    $(".profprev").addClass("active");
});

$('i.closex, .pnkbar').click(function() {
    $(".profprev").removeClass("active");
});

$('#emoT, .closex2').click(function(e) {
	 e.preventDefault()
    $(".emojC").toggleClass("active");
});

$(document).ready(function(){
	
	$('.emonav a').click(function(e){
		e.preventDefault()
		var tab_id = $(this).attr('data-tab');

		$('.emonav a').removeClass('active');
		$('.emotab').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})

})

$('a#makecall').click(function(e) {
	e.preventDefault()
    $(".voice-call, .bgswht").addClass("active");
     $('#ringaudio').trigger("play");
});

$('i.endcall').click(function() {
    $(".voice-call, .bgswht").removeClass("active");
     $('#ringaudio').trigger("pause");
});

$('i.menuIcon').click(function() {
    $("nav ul").addClass("active");
});

$('i.closexM').click(function() {
    $("nav ul").removeClass("active");
});

$('.imgatch, .vidatch').click(function() {
    $(".sendpay").addClass("active");
    $(".bgswht").addClass("active");
});
$('#acctsnd').click(function() {
    $(".bwlt").addClass("active");
    $(".sendpay").removeClass("active");
    setTimeout(function() {
     	$(".bwlt").removeClass("active");
     	$(".dlcont").addClass("active");
     	$('#prpos').width('100%');
     	 setTimeout(function() {
     	$(".dlcont").removeClass("active");
     	$(".vidrec").addClass("active");
     	 $('#vidreceived').trigger("play");
  	}, 4000);
  	}, 3000);
	
});

$('i.closexblk, .dlcont input').click(function() {
    $(".sendpay, .dlcont, .bwlt, .bgswht").removeClass("active");
});

$('i.closexblk, .vidrec input').click(function() {
     $('#vidreceived').trigger("pause");
     $(".vidrec, .bgswht").removeClass("active");
});

//hide top box
$('i.closexb').on('click', function() {
	 $('.hometopM').addClass('hide');
}); 



setTimeout(function() {
	$("#wp2").removeClass("hide");
	$("#wp1").addClass("hide");
}, 10000);

$('#playcash').click(function() {
     $('#ringaudio').trigger("play");
});


$(document).ready(function(){
	
	$('.tabpd a').click(function(e){
		e.preventDefault();
		var tab_id = $(this).attr('data-tab');

		$('.tabpd a').removeClass('active');
		$('.navtab').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	});
	
	$('.bgtabs a').click(function(e){
		e.preventDefault();
		var tab_id = $(this).attr('data-tab');

		$('.bgtabs a').removeClass('active');
		$('.bgtab').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	});

});

$('.uploadpic li').on('click',function(){
$('#image-1').rcrop({
    minSize : [200,200],
    preserveAspectRatio : true,
    grid : true,
    
    preview : {
        display: true,
        size : [100,100],
    }
});
});

$('.uploadpic li').on('click', function(e) {
	e.preventDefault();
    $('.popupload').addClass('active');
});

$('.mpbg').on('click', function(e) {
	e.preventDefault();
    $('.popupbgsltd').addClass('active');
});

$('i.closex').on('click', function() {
    $('.popupload, .popupbgsltd').removeClass('active');
});

/*$('i.fa-play-circle').click(function() {
     $('#mp3aud').trigger("play");
     $("i.fa-pause-circle").removeClass("hide");
     $("i.fa-play-circle").addClass("hide");
     $(".equalizer").addClass("active");
     $(".equalizer i").addClass("ani");
     $("#equimg").hide();
});

$('i.fa-pause-circle').click(function() {
     $('#mp3aud').trigger("pause");
     $("i.fa-play-circle").removeClass("hide");
     $("i.fa-pause-circle").addClass("hide");
     $(".equalizer").removeClass("active");
     $("#equimg").show();
      $(".equalizer i").removeClass("ani");
});*/

//$('.cr-inner').animate({scrollTop: 5300});
$('.cr-inner').scrollTop($('.cr-inner')[0].scrollHeight);
   
$('#sendpic').click(function(e){
  e.preventDefault();
  $(".user-reply").removeClass("send");
  $(".sendpicp, .bgswht").removeClass("active");
  $('.cr-inner').animate({scrollTop: 2000});
});
$('#cancelpic').click(function(){
  $(".sendpicp, .bgswht").removeClass("active");
});

$('.emotab li img').click(function() {
    var srcken = $(this).attr('src');
   $('#emojisend').attr('src', srcken);
    $(".user-reply").removeClass("send2");
   $(".emojC").removeClass("active");
   $('.cr-inner').animate({scrollTop: 2050});
});

//audio
var h = '<audio controls id="aplayer" src="http://bitcci.de/temp/app/webapp-new/soundtest.mp3"></audio>'
$('#app-audio').html(h)
maudio({
    obj:'audio#aplayer',
    fastStep:10
})


$(function(){
    var $header = $('.cb-top');
    var $mainc2 = $('body');
    var $content2 = $('.cr-inner');
    var $window = $(window).on('resize', function(){
      // var height2 = $mainc2.height() - $header.height() - 150;
       var height2 = $mainc2.height() - $header.height() - 92;
       $content2.height(height2);
    }).trigger('resize'); //on page load
});

$(function(){
    var $emottl = $('.emohdr');
    var $emomain = $('body');
    var $emoc = $('.emotab');
    var $windowemo = $('i.emoIcon').on('click', function(e){
	    e.preventDefault();
       var emoheight = $emomain.height() - 229;
       $emoc.height(emoheight);
    }).trigger('resize'); //on page load

});

$(function(){
    var $charttop = $('.chart');
    var $body2 = $('body');
    var $content3 = $('.cbtmb');
    var $window = $(window).on('resize', function(){
       var height3 = $body2.height() - $charttop.height() - 42;
       $content3.height(height3);
    }).trigger('resize'); //on page load
});

$(function(){
    var $mhdr = $('header');
    var $mbody = $('body');
    var $mcontent = $('.wallet-received');
    var $window = $(window).on('resize', function(){
       var height4 = $mbody.height() - $mhdr.height() - 27;
       $mcontent.height(height4);
    }).trigger('resize'); //on page load
});


//chat simulation
$(document).ready(function() {
  $("#typing").hide();
  var n = "<div class='user-reply'><div class='chatBbl msent'><p>";
  var o = $('#chatWindow');
  var i = $('#inputWindow');
  var s = $('#sendButton');
  var t = $('#typing');      
  var r = 0; 

  //arrays
  var msg = ['msg0<br />','Wo möchtest Du Dich denn treffen ? Magst Du mich zu Hause besuchen ?', 'Schön ich freue mich', 'msg3<br />'];

  //fire send events
  $(s).click(function() {
	runAI();
	$('#inputWindow').removeAttr("style");
  });
  $(i).keydown(function(e) {
  if (e.keyCode == 13) {
        //runAI();
        //$('#inputWindow').removeAttr("style");
  }
  });

  function runAI() {
  if (i.val().length > 0) {
  		$('.cr-inner').animate({scrollTop: 6000});
        r = r + 1;
        o.html(o.html()+n+$("#inputWindow").val()+"</p></div> <div class='chat-avatar'><img src='assets/images/male-user.jpg' /></div></div>" );     
        setTimeout(function(){ $("#typing").show(); $('.cr-inner').animate({scrollTop: 6000}); }, 1000);            
        setTimeout(function(){ o.html(o.html()+"<div class='model-reply'><div class='chat-avatar'><img src='assets/images/chat-avatar2.jpg'/></div><div class=chatBbl><p>"+msg[r]+"</p></div></div>"); }, 3000);
        setTimeout(function(){ $("#typing").hide();i.show();s.show();i.focus(); }, 3000);
        i.val('');
  }
  }
  i.focus();
});

//fixed when keyboard show
// Let's assume the fixed top navbar has id="navbar"
// Cache the fixed element
//var $navbar = $('header');
var $headetop = $('header');
var $cover = $('.floatTop');

function fixFixedPosition() {
  $cover.css({
    position: 'fixed',
    top: document.body.scrollTop - 50 + 'px'
  });
  $headetop.css({
    position: 'fixed',
    top: document.body.scrollTop + 'px'
  });
}
function resetFixedPosition() {
  $cover.css({
    position: 'fixed',
    top: ''
  });
  $headetop.css({
    position: 'fixed',
    top: ''
  });
  $(document).off('scroll', updateScrollTop);
}
function updateScrollTop() {
  $cover.css('top', document.body.scrollTop - 50  + 'px');
  $headetop.css('top', document.body.scrollTop  + 'px');
}

$('input, textarea, [contenteditable=true]').on({
  focus: function() {
    // NOTE: The delay is required.
    setTimeout(fixFixedPosition, 100);
    // Keep the fixed element absolutely positioned at the top
    // when the keyboard is visible
    $(document).scroll(updateScrollTop);
  },
  blur: resetFixedPosition
});

})(jQuery);

//upload
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
		$('.sendpicp, .bgswht').addClass('active');
        reader.onload = function (e) {
            $('#upimg, #upimg2')
                .attr('src', e.target.result)
        };
        reader.readAsDataURL(input.files[0]);
    }
}


//textarea autoexpand
var textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', autosize);
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto;';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}
