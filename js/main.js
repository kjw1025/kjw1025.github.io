$(document).ready(function () {

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

    MyWaypoint($('.pf_bg_1'), 'down-go', '10%', 0); // pf_bg
    MyWaypoint($('.headerBox'), 'togolong', '50%', 0); // headerBox


    // swiper

    // study swiper img
    let swStudy_Img = new Swiper('.sw_study_img', {
        slidesPerView: 4
    });


}