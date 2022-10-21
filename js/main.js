$(document).ready(function () {
  // body
  $("body").niceScroll({
    cursorwidth: "10px",
    railpadding: { top: 0, right: 10, left: 0, bottom: 0 },
  });

  // 위로가기 기능
  let goTop = $(".gotop");

  goTop.click(function () {
    gsap.to("html", {
      duration: 1.5,
      scrollTop: 0,
    });
  });
});

window.onload = function () {
  // AOS 실행
  AOS.init();

  // waypoint 옵션
  function MyWaypoint(_what, _effect, _offset, _delay) {
    _what.each(function (index, el) {
      new Waypoint({
        element: el,
        handler: function (direction) {
          var element = $(this.element);
          setTimeout(function () {
            element.addClass(_effect);
          }, _delay);
          // this.destroy();
        },
        offset: _offset,
      });
    });
  }
  // on/off
  function MyWaypointOnOff(_fromWhere, _what, _onClass, _offset) {
    new Waypoint({
      element: _fromWhere,
      handler: function (direction) {
        if (direction == "down") {
          _what.addClass(_onClass);
        } else if (direction == "up") {
          _what.removeClass(_onClass);
        }
      },
      offset: _offset,
    });
  }

  MyWaypoint($(".pf1-bg"), "pf1-bg_on", "80%", 0);

  MyWaypointOnOff($(".about"), $(".sideMenu_wrap"), "sideMenu_wrap_on", "50%"); // sideMenu on/off
  MyWaypointOnOff($(".about"), $(".gotop"), "gotop_on", "20%"); // sideMenu on/off
  MyWaypointOnOff($(".about"), $(".goPDF"), "goPDF_on", "20%"); // sideMenu on/off

  // study swiper img
  let sw_study_container = new Swiper(".sw-study-container", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      700: {
        slidesPerView: 2, //브라우저가 768보다 클 때
        spaceBetween: 40,
      },
      1025: {
        slidesPerView: 3, //브라우저가 768보다 클 때
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 4, //브라우저가 1024보다 클 때
        spaceBetween: 30,
      },
    },

    spaceBetween: 30,
    speed: 1400,
    // pg
    pagination: {
      el: ".sw-study-pg",
    },
  });
};
