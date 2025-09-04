// $(document).ready(function () {
//     $('.courusel__inner').slick({
//         speed: 600,
//         dots: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/chevron_left.png" alt="slide"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="img/slider/chevron_right.png" alt="slide"></button>',
//         // prevArrow: '<img class="slick-prev" src="../img/slider/chevron_left.png" alt="slide">',
//         // nextArrow: '<img class="slick-next" src="../img/slider/chevron_right.png" alt="slide">',
//         responsive: [
//             {
//                 breakpoint: 480,
//                 settings: {
//                     arrows: false,
//                     dots: true,
//                     slidesToShow: 1,
//                     autoplay: false

//                 }
//             }
//         ]
//     });
// });

const slider = tns({
    container: '.courusel__inner',
    controls: false,
    items: 1,
    slideBy: 'page',
    autoplay: false,
    speed: 600,
    navPosition: "bottom"

});

document.querySelector('.prev').addEventListener("click", function () {
    slider.goTo("prev");
});
document.querySelector('.next').addEventListener("click", function () {
    slider.goTo("next");
});

document.querySelectorAll('.catalog-item__link').forEach((item, i) => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelectorAll('.catalog-item__content')[i].classList.remove("catalog-item__content_active");
        document.querySelectorAll('.catalog-item__list')[i].classList.add("catalog-item__list_active");
    });
});

document.querySelectorAll('.catalog-item__link-back').forEach((item, i) => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelectorAll('.catalog-item__content')[i].classList.add("catalog-item__content_active");
        document.querySelectorAll('.catalog-item__list')[i].classList.remove("catalog-item__list_active");
    });
});

document.querySelectorAll('.catalog__tab').forEach((item, i) => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelectorAll('.catalog__tab').forEach(content => {
            content.classList.remove("catalog__tab_active");
        });

        document.querySelectorAll('.catalog__content').forEach(content => {
            content.classList.remove("catalog__content_active");
        });

        document.querySelectorAll('.catalog__tab')[i].classList.add("catalog__tab_active");
        document.querySelectorAll('.catalog__content')[i].classList.add("catalog__content_active");

    });
});


document.querySelectorAll('[data-modal="consultation"]').forEach(button => {
    button.addEventListener("click", e => {
        document.querySelector(".overlay").style.display = "block";
        document.querySelector("#consultation").style.display = "block";
        document.body.style.overflow = "hidden";
    });
});

document.querySelectorAll('[data-modal="order"]').forEach((modal, i) => {
    modal.addEventListener("click", e => {
        document.querySelector(".overlay").style.display = "block";
        document.querySelector("#order").querySelector(".modal__descr").textContent = document.querySelectorAll(".catalog-item__subtitle")[i].textContent;
        document.querySelector("#order").style.display = "block";

        document.body.style.overflow = "hidden";
    });
});

document.querySelectorAll('.modal__close').forEach(closeButton => {
    closeButton.addEventListener("click", () => {
        document.querySelectorAll('.modal').forEach(modal => {
            document.querySelector(".overlay").style.display = "none";
            modal.style.display = "none";
            document.body.style.overflow = "";
        });
    });
});


$("[name=tel]").mask("+375(99)999-99-99");

// отправка формы
const forms = document.querySelectorAll("form");

forms.forEach(form => postData(form));

function postData(form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        const request = new XMLHttpRequest();
        request.open("POST", "mailer/smart.php");
        const formData = new FormData(form);
        let jsonRequest = {};
        formData.forEach((item, key) => {
            jsonRequest[key] = encodeURI(item);
        });
        console.log(formData);
        console.log(jsonRequest);
        console.log(JSON.stringify(jsonRequest));
        request.send(JSON.stringify(jsonRequest));

        request.addEventListener("load", () => {
            console.log(request.status);
        });
    });
}




$('form').submit(function (e) {
    e.preventDefault();
    console.log($(this).serialize());
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()

    }

    ).done(function () {

        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});


