$(document).ready(function () {

    $(function() {  

        // body
        $("body").niceScroll({
            cursorwidth: "10px",
            railpadding: { top: 0, right: 10, left: 0, bottom: 0 }
        });
        // po1
        $(".po1").niceScroll({
            cursorcolor: "#29306A",
            cursoropacitymax: 0.8,
            cursorwidth: "5px",
            cursorborder: "1px solid transparent",
            railpadding: { top: 0, right: 2, left: 0, bottom: 0 }
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
                offset: _offset
            });

        });
    }

    //  ani 

    // MyWaypoint($('.pf_bg_1'), 'down-go', '10%', 0); // pf_bg
    MyWaypoint($('.portfolio-part_2 .headerBox'), 'togolong-left', '70%', 0); // headerBox
    MyWaypoint($('.portfolio-part_3 .headerBox'), 'togolong-right', '70%', 0); // headerBox


    // swiper

    // study swiper img
    let swStudy_Img = new Swiper('.sw_study_img', {
        loop: true,
        autoplay: true,
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 1400
    });


}