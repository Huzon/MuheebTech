$(document).ready(function () {
    var scroll = 0;
    $(document).scroll(function () {
        console.log(scroll);

        scroll = $(this).scrollTop();
        console.log(scroll);
        if (scroll < 100) {
            $('.navbar').addClass('top');
        } else {
            $('.navbar').removeClass('top');
        }
    });
});