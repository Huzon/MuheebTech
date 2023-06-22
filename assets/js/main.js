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
// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }

/* Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";

    } else {
        x.className = "navbar";
    }
}

$(".menu-icon").click(function () {
    $(".menu").toggleClass('show');
});

function showServices() {

    // var html = `<div class="service-card">
    //     <div class="info">
    //         <div class="text">Some Text</div>
    //         <button>Book Now</button>
    //     </div>
    //     <img src="assets/img/services/1.png" alt="">
    // </div>`

    for (i = 1; i <= 12; i++) {
        $("#services").append(getServiceCard(i));

    }
}

function getServiceCard(i) {
    var title;
    switch (i) {
        case 1:
            title = 'Blinds and Curtains'
            break;
        case 2:
            title = 'Roller, Spray and Structured Paint'
            break;
        case 3:
            title = 'A/C Servicing'
            break;
        case 4:
            title = 'Wooden flooring, SPC, PVC, Venyl'
            break;
        case 5:
            title = 'POP and False Ceiling'
            break;
        case 6:
            title = 'Fit-out from Shell and core to complete finalization'
            break;
        case 7:
            title = 'Hardwood works'
            break;
        case 8:
            title = 'Designing 2D, 3D, AutoCAD'
            break;
        case 9:
            title = 'Customised furniture'
            break;
        case 10:
            title = 'Fixinng of wallpaper, wall sticker, WPC, Cladding'
            break;
        case 11:
            title = 'Interior designing'
            break;
        case 12:
            title = 'Equipment Installation'
            break;

    }

    return `<div class="service-card">
    <div class="info">
        <div class="text">${title}</div>
        <button onclick="toContact()">Book Now</button>
    </div>
    <img src="assets/img/services/${i}.png" alt="">
</div>`;
}
function toContact() {
    window.location.href = "./contact.html";
}
window.onscroll = function () { scrollfunction(); }
function scrollfunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('nav').style.top = "0";

    } else {
        document.getElementById("nav").style.top = "-100px";
    }
}
$(function () {
    var mouseY = 0;
    var navbarHeight = $("#nav").outerHeight();
    document.addEventListener('mousemove', function (e) {
        mouseY = e.clientY || e.pageY;
        if (mouseY < navbarHeight) {
            document.getElementById('nav').style.top = "0";
        }
    }, false);

    $('#nav').mouseout(function () {
        // if ($(window).scrollTop() > navbarHeight) {
        document.getElementById("nav").style.top = "-100px";
        // }
    });
})
