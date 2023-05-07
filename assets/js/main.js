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

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}