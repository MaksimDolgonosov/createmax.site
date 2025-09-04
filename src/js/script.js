window.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const close = document.querySelector(".menu__close");
    const overlay = document.querySelector(".menu__overlay");

    hamburger.addEventListener("click", () => {
        menu.classList.add("active");
    });

    function closeMenu() {
        menu.classList.remove("active");
    }
    close.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);


    const usagePercents = document.querySelectorAll(".usage__wrapper-perc");
    const subLine = document.querySelectorAll(".usage__wrapper-line-subline");

    usagePercents.forEach((item, i) => {
        subLine[i].style.width = item.innerHTML;
    });


    const social = document.querySelector(".sidepanel__text");
    const divider = document.querySelector(".sidepanel__divider");
    const socialSvg = document.querySelectorAll(".sidepanel__link svg path");




    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop >= 480) {
            social.classList.add("mainColToSocial");
            divider.classList.add("mainColToDivider");
            socialSvg.forEach(el => {
                el.classList.add("mainColToSocialLink");
            });
        } else {
            social.classList.remove("mainColToSocial");
            divider.classList.remove("mainColToDivider");
            socialSvg.forEach(el => {
                el.classList.remove("mainColToSocialLink");
            });
        }
    });

    // отправка формы
    const forms = document.querySelectorAll("form");

    forms.forEach(form => postData(form));

    function postData(form) {
        form.addEventListener("submit", e => {
            e.preventDefault();
            const request = new XMLHttpRequest();
            request.open("POST", "mailer/smart.php");
            const formData = new FormData(form);
            request.send(formData);
            request.addEventListener("load", () => {
                // console.log(request.status);
                // console.log(formData);
                if (request.status == 200) {
                    form.reset();
                    document.querySelector('.overlay').style.visibility = "visible";
                    document.querySelector('.modal_thanks').style.visibility = "visible";
                    document.querySelector('.overlay').style.opacity = "1";
                    document.querySelector('.modal_thanks').style.opacity = "1";
                    document.body.style.overflow = "none";
                    setTimeout(() => {
                        document.querySelector('.overlay').style.visibility = "hidden";
                        document.querySelector('.modal_thanks').style.visibility = "hidden";
                        document.querySelector('.overlay').style.opacity = "0";
                        document.querySelector('.modal_thanks').style.opacity = "0";
                        document.body.style.overflow = "";
                    }, 3000);


                    // document.querySelector('.overlay').style.display = "block";
                    // document.querySelector('.modal_thanks').style.display = "block";
                    // document.body.style.overflow = "none";
                    // setTimeout(() => {
                    //     document.querySelector('.overlay').style.display = "none";
                    //     document.querySelector('.modal_thanks').style.display = "none";
                    //     document.body.style.overflow = "";
                    // }, 3000);
                } else {

                    document.querySelector('.overlay').style.visibility = "visible";
                    document.querySelector('.modal_error').style.visibility = "visible";
                    document.querySelector('.overlay').style.opacity = "1";
                    document.querySelector('.modal_error').style.opacity = "1";
                    document.body.style.overflow = "none";
                    setTimeout(() => {
                        document.querySelector('.overlay').style.visibility = "hidden";
                        document.querySelector('.modal_error').style.visibility = "hidden";
                        document.querySelector('.overlay').style.opacity = "0";
                        document.querySelector('.modal_error').style.opacity = "0";
                        document.body.style.overflow = "";
                    }, 3000);


                    // document.querySelector('.overlay').style.display = "block";
                    // document.querySelector('.modal_error').style.display = "block";
                    // document.body.style.overflow = "none";
                    // setTimeout(() => {
                    //     document.querySelector('.overlay').style.display = "none";
                    //     document.querySelector('.modal_error').style.display = "none";
                    //     document.body.style.overflow = "";
                    // }, 3000);
                }

            });
        });
    }




    // $('form').submit(function (e) {
    //     e.preventDefault();
    //     console.log($(this).serialize());
    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize()

    //     }

    //     ).done(function () {

    //         $(this).find("input").val("");
    //         $('#consultation, #order').fadeOut();
    //         $('.overlay, #thanks').fadeIn('slow');

    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });


    // Scrolling with raf

    let links = document.querySelectorAll('[href^="#"]');
    let speed = 0.2;
    // console.log(links);
    links.forEach(link => {
        if (link.getAttribute("href") != "#") {

            link.addEventListener('click', function (event) {
                event.preventDefault();

                let widthTop = document.documentElement.scrollTop,
                    hash = this.hash,
                    toBlock = document.querySelector(hash).getBoundingClientRect().top, // метод, позволяющий получить количество пикселей до элемента(его верхней границы)
                    start = null;

                requestAnimationFrame(step);

                function step(time) { //time - время, прошедшее с момента начала загрузки страницы в милисекундах. Это callback функция requestAnimationFrame

                    if (start === null) {
                        start = time;
                    }

                    let progress = time - start;

                    let r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r);

                    if (r != widthTop + toBlock) {
                        requestAnimationFrame(step);
                    } else {
                        location.hash = hash;
                    }
                }

            });
        }
    });




});