console.log("",
    "Самооценка:\n\n",

    "Реализация burger menu на обеих страницах: +26\n",
    "Реализация слайдера-карусели на странице Main: +36\n",
    "Реализация пагинации на странице Pets: +36\n",
    "Реализация попап на обеих страницах: +12\n\n",
   
    "ИТОГО: 110 баллов\n");


//burger-menu
"use sctrict"
const burger = document.querySelector(".header__burger");
const burgerNav = document.querySelector(".header__nav");
const overlayNav = document.querySelector(".overlayNav");
const navItems = document.querySelectorAll(".header__nav-item");

burger.addEventListener("click", () => {
    if (burger.classList.contains("active")) {
        closeBurgerNav();
    } else {
        openBurgerNav();
    }
})
overlayNav.addEventListener("click", closeBurgerNav)
overlayNav.addEventListener("click", closeModal)
navItems.forEach(item => {
    item.addEventListener("click", () => {
        if (burger.classList.contains("active")) {
            closeBurgerNav();
        };
    })
})

function closeBurgerNav() {
    burger.classList.remove("active");
    burgerNav.classList.remove("active");
    document.body.style.overflow = "";
    overlayNav.style.opacity = "0";
    overlayNav.style.visibility = "hidden";
}
function openBurgerNav() {
    burger.classList.add("active");
    burgerNav.classList.add("active");
    document.body.style.overflow = "hidden";
    overlayNav.style.opacity = "1";
    overlayNav.style.visibility = "visible";

}
//create basic cards
const sliderForPets = document.querySelector(".our-friends__wrapper-slider");
const containerForPets = document.querySelector(".our-friends__wrapper-items");
const containerForPetsLeft = document.querySelector(".our-friends__wrapper-items-left");
const containerForPetsActive = document.querySelector(".our-friends__wrapper-items-active");
const containerForPetsRight = document.querySelector(".our-friends__wrapper-items-right");
const nextBtn = document.querySelector(".our-friends-right");
const prevBtn = document.querySelector(".our-friends-left");
let arrRandom = [];



function random0to7() {
    return Math.round(Math.random() * 7);
}


function addArray(count) {
    let newArr = [];
    add();
    function add() {
        let r = random0to7();
        do {
            if (!arrRandom.includes(r) && !newArr.includes(r)) {
                newArr.push(r);
            } else {
                add();
            }
        } while (newArr.length !== count);
    }
    return newArr;
}




class CreateCard {
    constructor(name, img, position) {
        this.name = name;
        this.img = img;
        this.position = position;
    }
    createDiv() {
        let div = document.createElement("div");
        div.classList.add("our-friends__wrapper-item")
        div.innerHTML = `
                    <div class="our-friends__wrapper-item-img">
                        <img src=${this.img} alt="pets">
                    </div>
                    <div class="our-friends__wrapper-item-name">${this.name}</div>
                    <button class="our-friends__wrapper-item-btn">Learn more</button>`;
        if (this.position == "right") {
            containerForPetsRight.appendChild(div);
        } else if (this.position == "left") {
            containerForPetsLeft.appendChild(div);
        } else {
            containerForPetsActive.appendChild(div);
        }
    }

}


fetch("../../pets.json")
    .then(response => response.json())
    .then(json => {


        if (window.innerWidth >= 1246) {
            arrRandom = [...addArray(3)]
            arrRandom.forEach(item => {
                new CreateCard(json[item].name, json[item].img, "active").createDiv()
            })
            document.querySelectorAll(".our-friends__wrapper-item").forEach(item => item.addEventListener("click", chooseCard))
        } else if (window.innerWidth < 1246 && window.innerWidth > 767) {

            arrRandom = [...addArray(2)]
            arrRandom.forEach(item => {
                new CreateCard(json[item].name, json[item].img, "active").createDiv()
            })
            document.querySelectorAll(".our-friends__wrapper-item").forEach(item => item.addEventListener("click", chooseCard))
        } else {
            arrRandom = [...addArray(1)]
            arrRandom.forEach(item => {
                new CreateCard(json[item].name, json[item].img, "active").createDiv()
            })
            document.querySelectorAll(".our-friends__wrapper-item").forEach(item => item.addEventListener("click", chooseCard))
        }




        window.matchMedia('(min-width: 1246px)').addEventListener("change", (e) => {
            if (e.matches) {
                containerForPetsLeft.innerHTML = "";
                containerForPetsActive.innerHTML = "";
                containerForPetsRight.innerHTML = "";
                arrRandom = [...addArray(3)]
                arrRandom.forEach(item => {
                    new CreateCard(json[item].name, json[item].img, "active").createDiv()
                })
                document.querySelectorAll(".our-friends__wrapper-item").forEach(item => item.addEventListener("click", chooseCard))
            }
        })
        window.matchMedia('(min-width: 768px) and (max-width:1245px)').addEventListener("change", (e) => {
            if (e.matches) {
                containerForPetsLeft.innerHTML = "";
                containerForPetsActive.innerHTML = "";
                containerForPetsRight.innerHTML = "";
                arrRandom = [...addArray(2)]
                arrRandom.forEach(item => {
                    new CreateCard(json[item].name, json[item].img, "active").createDiv()
                })
                document.querySelectorAll(".our-friends__wrapper-item").forEach(item => item.addEventListener("click", chooseCard))
            }
        })
        window.matchMedia('(max-width:767px)').addEventListener("change", (e) => {
            if (e.matches) {
                containerForPetsLeft.innerHTML = "";
                containerForPetsActive.innerHTML = "";
                containerForPetsRight.innerHTML = "";
                arrRandom = [...addArray(1)]
                arrRandom.forEach(item => {
                    new CreateCard(json[item].name, json[item].img, "active").createDiv()
                })
                document.querySelectorAll(".our-friends__wrapper-item").forEach(item => item.addEventListener("click", chooseCard))
            }
        })



        function prevSlide(count) {
            if (arrRandom.length > count && containerForPetsRight.children.length != 0) {
                containerForPets.classList.add("moveLeft");
                document.querySelector(".our-friends__wrapper-items-active").addEventListener("click", chooseCard)
            } else if (arrRandom.length > count && containerForPetsRight.children.length == 0) {
                arrRandom = arrRandom.slice(count);
                containerForPets.classList.add("moveLeft");
                let newArr = addArray(count);
                arrRandom = [...arrRandom, ...newArr]
                newArr.forEach(item => {
                    new CreateCard(json[item].name, json[item].img, "right").createDiv()

                })
                document.querySelector(".our-friends__wrapper-items-active").addEventListener("click", chooseCard)

            } else {
                containerForPets.classList.add("moveLeft");
                let newArr = addArray(count);
                arrRandom = [...arrRandom, ...newArr]
                newArr.forEach(item => {
                    new CreateCard(json[item].name, json[item].img, "right").createDiv()
                })
                document.querySelector(".our-friends__wrapper-items-active").addEventListener("click", chooseCard)

            }
        }
        function nextSlide(count) {
            if (arrRandom.length > count && containerForPetsLeft.children.length != 0) {
                containerForPets.classList.add("moveRight");
            } else if (arrRandom.length > count && containerForPetsLeft.children.length == 0) {
                arrRandom = arrRandom.slice(0, count);
                containerForPets.classList.add("moveRight");
                let newArr = addArray(count);
                arrRandom = [...newArr, ...arrRandom]
                newArr.forEach(item => {
                    new CreateCard(json[item].name, json[item].img, "left").createDiv()
                })
                document.querySelector(".our-friends__wrapper-items-active").addEventListener("click", chooseCard)
            } else {
                containerForPets.classList.add("moveRight");
                let newArr = addArray(count);
                arrRandom = [...newArr, ...arrRandom]
                newArr.forEach(item => {
                    new CreateCard(json[item].name, json[item].img, "left").createDiv()
                })
                document.querySelector(".our-friends__wrapper-items-active").addEventListener("click", chooseCard)
            }
        }

        prevBtn.addEventListener("click", () => {
            if (window.innerWidth >= 1246) {
                prevSlide(3);
            } else if (window.innerWidth < 1246 && window.innerWidth > 767) {
                prevSlide(2);
            } else {
                prevSlide(1);
            }
        })

        nextBtn.addEventListener("click", () => {
            if (window.innerWidth >= 1246) {
                nextSlide(3);
            } else if (window.innerWidth < 1246 && window.innerWidth > 767) {
                nextSlide(2);
            } else {
                nextSlide(1);
            }
        })

        containerForPets.addEventListener("animationend", (animationEvent) => {
            if (animationEvent.animationName == "moveLeft") {
                containerForPets.classList.remove("moveLeft");
                containerForPetsLeft.innerHTML = containerForPetsActive.innerHTML;
                containerForPetsActive.innerHTML = containerForPetsRight.innerHTML;
                containerForPetsRight.innerHTML = "";
            } else {
                containerForPets.classList.remove("moveRight");
                containerForPetsRight.innerHTML = containerForPetsActive.innerHTML;
                containerForPetsActive.innerHTML = containerForPetsLeft.innerHTML;
                containerForPetsLeft.innerHTML = "";
            }

        })
    })


//popup
const modal = document.querySelector(".popup");

const petName = document.querySelector(".popup__descr__name");
const petKind = document.querySelector(".popup__descr__kind");
const petText = document.querySelector(".popup__descr__text");





function openModal() {
    document.body.style.overflow = "hidden";
    overlayNav.style.opacity = "1";
    overlayNav.style.visibility = "visible";
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
}

function closeModal() {
    document.body.style.overflow = "";
    overlayNav.style.opacity = "0";
    overlayNav.style.visibility = "hidden";
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
}

function chooseCard(e) {
    let link;
    if (e.target.classList.contains("our-friends__wrapper-item")) {
        link = e.target.firstElementChild.firstElementChild.getAttribute("src");

    } else if (e.target.parentElement.classList.contains("our-friends__wrapper-item")) {
        link = e.target.parentElement.firstElementChild.firstElementChild.getAttribute("src");
    } else {
        link = e.target.getAttribute("src");
    }
    fetch("../../pets.json")
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            json.forEach(item => {
                if (item.img == link) {
                    modal.innerHTML = `
                    <div class="popup__img">
                <img src="${item.img}" alt="pets">
                </div>
                <div class="popup__wrapper">
                <div class="popup__descr">
                    <h4 class="popup__descr__name">${item.name}</h4>
                    <div class="popup__descr__kind">${item.type} - ${item.breed}</div>
                    <div class="popup__descr__text">
                    ${item.description}
                    </div>
                    <ul class="popup__descr__list">
                        <li class="popup__descr__list-age"><span>Age:</span> ${item.age}</li>
                        <li class="popup__descr__list-inoculations"><span>Inoculations:</span> ${item.inoculations}</li>
                        <li class="popup__descr__list-diseases"><span>Diseases:</span> ${item.diseases}</li>
                        <li class="popup__descr__list-parasites"><span>Parasites:</span> ${item.parasites}</li>
                    </ul>
                    <div class="popup__close">
                     <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/>
                            </svg>
                    </div>
                </div>
                </div>`;
                const modalClose = document.querySelector(".popup__close");
                modalClose.addEventListener("click", closeModal);
                }
            })

        })

    openModal()


}

