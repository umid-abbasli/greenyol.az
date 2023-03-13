$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("nav").toggleClass("navOpen");
    $("html, body").toggleClass("locked");
    $("#mobile_btn").toggleClass("opened");
  });
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 80);
  });
  $(".open").click(function(){
	$(".dropdown-navv").slideToggle()
  })
  // head slider slick
  $(".sliderSlick").slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    swipe: true,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    touchThreshold: 100,
    pauseOnHover: false,
    touchMove: true,
    draggable: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 500,
    autoplaySpeed: 8000,
    arrows: false,
  });
  $(".slider-nav .slick-prev ").click(function () {
    $(".sliderSlick").slick("slickPrev");
  });

  $(".slider-nav  .slick-next").click(function () {
    $(".sliderSlick").slick("slickNext");
  });
  setInterval(() => {
    $(".animatedcardnumber").html("1500");
    $(".animatedcarddesc").html("kvm istehsalat sahəsi");
    $(".animatedcardnumber").addClass("animate__fadeIn");
    $(".animatedcarddesc").addClass("animate__fadeIn");
    setTimeout(() => {
      $(".animatedcardnumber").removeClass("animate__fadeIn");
      $(".animatedcarddesc").removeClass("animate__fadeIn");
    }, 1400);
  }, 4000);
  setInterval(() => {
    $(".animatedcardnumber").html("14");
    $(".animatedcarddesc").html("illik təcrübə");
    $(".animatedcardnumber").addClass("animate__fadeIn");
    $(".animatedcarddesc").addClass("animate__fadeIn");
    setTimeout(() => {
      $(".animatedcardnumber").removeClass("animate__fadeIn");
      $(".animatedcarddesc").removeClass("animate__fadeIn");
    }, 1400);
  }, 8000);
});

// video play
	// let clip = document.querySelector(".vid");
	// let MyVideoDiv = document.getElementById("video-div")
	// let MyVideoDiv2 = document.getElementById("video-div2")
	// let MyVideoDiv3 = document.getElementById("video-div3")
	// let clip2 = document.querySelector(".vid2");
	// MyVideoDiv.addEventListener("mouseover", function (e) {
	// 	clip.play();
	// });
	// MyVideoDiv.addEventListener("mouseleave", function () {
	// 	clip.pause();
	// });

	// MyVideoDiv2.addEventListener("mouseover", function (e) {
	// 	clip2.play();
	// });
	// MyVideoDiv2.addEventListener("mouseleave", function (e) {
	// 	clip2.pause();
	// });
	// let clip3 = document.querySelector(".vid3");

	// MyVideoDiv3.addEventListener("mouseover", function (e) {
	// 	clip3.play();
	// });
	// MyVideoDiv3.addEventListener("mouseleave", function (e) {
	// 	clip3.pause();
	// });
	var videoContainers = document.querySelectorAll(".video-div");
  var videos = document.querySelectorAll("video");
  
  videoContainers.forEach(function(container, index) {
    var video = videos[index];
    
    container.addEventListener("mouseover", function() {
      // Pause all other videos
      videos.forEach(function(otherVideo) {
        if (otherVideo !== video) {
          otherVideo.pause();
        }
      });
      
      // Play the current video
      video.play();
    });
    
    container.addEventListener("mouseout", function() {
      // Pause the current video
      video.pause();
    });
  });
// video play end
