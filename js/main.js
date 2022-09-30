$(document).ready(function () {
  // body
  $("body").niceScroll({
    cursorwidth: "10px",
    railpadding: { top: 0, right: 10, left: 0, bottom: 0 },
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

  MyWaypointOnOff(
    $(".about_Me"),
    $(".sideMenu_wrap"),
    "sideMenu_wrap_on",
    "50%"
  ); // sideMenu on/off

  //  ani

  MyWaypoint($(".pf_bg_1"), "down-go", "10%", 0); // pf_bg
  // MyWaypoint($(".portfolio-part_2 .headerBox"), "togolong-left", "70%", 0); // headerBox
  // MyWaypoint($(".portfolio-part_3 .headerBox"), "togolong-right", "70%", 0); // headerBox

  // swiper

  // study swiper img
  let swStudy_Img = new Swiper(".sw_study_img", {
    loop: true,
    autoplay: true,
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 1400,
  });

  let popopo = $(".popopo");
  let popopo_Dsize = $(".popopo_down_size");

  popopo.mouseenter(function () {
    console.log("aaa");
  });

  // this.mouseenter(() => {});

  $.each(popopo, function (index, item) {
    $(this).mouseenter(function (e) {
      e.preventDefault();
      $(this).not(popopo.addClass("popopo_down_size"));
    });
    $(this).mouseleave(function (e) {
      e.preventDefault();
      $(this).not(popopo.removeClass("popopo_down_size"));
    });
  });
};
