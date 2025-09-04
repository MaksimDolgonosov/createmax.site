// burger menu activation

const burgerMenu = document.querySelector(".header__nav-burger-menu");
const burgerWrapper = document.querySelector(".header__nav-burger");
const burgerItem = document.querySelectorAll(".header__nav-burger_item");

function toggleBurger() {
    if (burgerMenu.classList.contains("active")) {
        burgerMenu.classList.remove("active");
        burgerWrapper.classList.remove("active")
        document.body.style.overflow = 'visible';
    } else {
        burgerMenu.classList.add("active");
        burgerWrapper.classList.add("active");
        document.body.style.overflow = 'hidden';
    }
}


burgerMenu.addEventListener("click", toggleBurger);
burgerItem.forEach(item => {
    item.addEventListener("click", toggleBurger)
})

const scrollUp = document.querySelector("#upScrolling");
// resize
window.addEventListener('resize', () => {
    if (document.body.clientWidth > 768) {
        burgerMenu.classList.remove("active");
        burgerWrapper.classList.remove("active");
        document.body.style.overflow = 'visible';


        scrollUp.style.opacity = "0";
        scrollUp.style.overflow = "hidden";
        scrollUp.style.zIndex = "1";
    } else if (document.body.clientWidth <= 768 && window.scrollY >= 300) {
        scrollUp.style.opacity = "1";
        scrollUp.style.overflow = "visible";
        scrollUp.style.zIndex = "100";
    }
});


// gifts

const gifts = [
    {
        "name": "Bug Magnet",
        "description": "Able to find bugs in code like they were placed there on purpose.",
        "category": "For Work",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+200",
            "dream": "+400"
        }
    },

    {
        "name": "Console.log Guru",
        "description": "Uses console.log like a crystal ball to find any issue.",
        "category": "For Work",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+200",
            "dream": "+400"
        }
    },

    {
        "name": "Shortcut Cheater",
        "description": "Knows every keyboard shortcut like they were born with them.",
        "category": "For Work",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+400",
            "dream": "+200"
        }
    },

    {
        "name": "Merge Master",
        "description": "Merges branches in Git without conflicts, like a wizard during an exam.",
        "category": "For Work",
        "superpowers": {
            "live": "+200",
            "create": "+500",
            "love": "+200",
            "dream": "+300"
        }
    },

    {
        "name": "Async Tamer",
        "description": "Handles asynchronous code and promises like well-trained pets.",
        "category": "For Work",
        "superpowers": {
            "live": "+100",
            "create": "+400",
            "love": "+200",
            "dream": "+300"
        }
    },

    {
        "name": "CSS Tamer",
        "description": "Can make Flexbox and Grid work together like they were always best friends.",
        "category": "For Work",
        "superpowers": {
            "live": "+200",
            "create": "+500",
            "love": "+200",
            "dream": "+300"
        }
    },

    {
        "name": "Time Hacker",
        "description": "Writes code at the last moment but always meets the deadline.",
        "category": "For Work",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+500",
            "dream": "+200"
        }
    },

    {
        "name": "Layout Master",
        "description": "Creates perfect layouts on the first try, like they can read the designer's mind.",
        "category": "For Work",
        "superpowers": {
            "live": "+500",
            "create": "+300",
            "love": "+200",
            "dream": "+200"
        }
    },

    {
        "name": "Documentation Whisperer",
        "description": "Understands cryptic documentation as if they wrote it themselves.",
        "category": "For Work",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+200",
            "dream": "+100"
        }
    },

    {
        "name": "Feedback Master",
        "description": "Accepts client revisions with the Zen calm of Buddha.",
        "category": "For Work",
        "superpowers": {
            "live": "+300",
            "create": "+500",
            "love": "+300",
            "dream": "+400"
        }
    },

    {
        "name": "Code Minimalist",
        "description": "Writes code so concise that one line does more than a whole file.",
        "category": "For Work",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+500",
            "dream": "+200"
        }
    },

    {
        "name": "Pixel-Perfect Magician",
        "description": "Aligns elements to the last pixel, even when the design looks abstract.",
        "category": "For Work",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+400",
            "dream": "+400"
        }
    },

    {
        "name": "Posture Levitation",
        "description": "Can sit for hours, but maintains perfect posture like a ballerina.",
        "category": "For Health",
        "superpowers": {
            "live": "+400",
            "create": "+500",
            "love": "+500",
            "dream": "+400"
        }
    },

    {
        "name": "Step Master",
        "description": "Gets 10,000 steps a day even while sitting at the computer.",
        "category": "For Health",
        "superpowers": {
            "live": "+400",
            "create": "+300",
            "love": "+500",
            "dream": "+400"
        }
    },

    {
        "name": "Snack Resister",
        "description": "Ignoring desktop snacks like a strict dietician.",
        "category": "For Health",
        "superpowers": {
            "live": "+400",
            "create": "+100",
            "love": "+200",
            "dream": "+400"
        }
    },

    {
        "name": "Hydration Bot",
        "description": "Drinks the recommended 2 liters of water a day like a health-programmed robot.",
        "category": "For Health",
        "superpowers": {
            "live": "+500",
            "create": "+300",
            "love": "+500",
            "dream": "+500"
        }
    },

    {
        "name": "Sleep Overlord",
        "description": "Sleeps 6 hours but feels like they had 10.",
        "category": "For Health",
        "superpowers": {
            "live": "+400",
            "create": "+500",
            "love": "+500",
            "dream": "+500"
        }
    },

    {
        "name": "Break Guru",
        "description": "Takes a stretch break every hour without forgetting, no matter how focused.",
        "category": "For Health",
        "superpowers": {
            "live": "+300",
            "create": "+300",
            "love": "+300",
            "dream": "+400"
        }
    },

    {
        "name": "Eye Protector",
        "description": "Can work all day at the monitor without feeling like their eyes are on fire.",
        "category": "For Health",
        "superpowers": {
            "live": "+100",
            "create": "+300",
            "love": "+500",
            "dream": "+400"
        }
    },

    {
        "name": "Stress Dodger",
        "description": "Masters meditation right at the keyboard.",
        "category": "For Health",
        "superpowers": {
            "live": "+100",
            "create": "+400",
            "love": "+200",
            "dream": "+400"
        }
    },

    {
        "name": "Yoga Coder",
        "description": "Easily switches from coding to yoga and back.",
        "category": "For Health",
        "superpowers": {
            "live": "+400",
            "create": "+400",
            "love": "+400",
            "dream": "+400"
        }
    },

    {
        "name": "Healthy Snacker",
        "description": "Always picks fruit, even when chocolate is within arm’s reach.",
        "category": "For Health",
        "superpowers": {
            "live": "+400",
            "create": "+300",
            "love": "+200",
            "dream": "+400"
        }
    },

    {
        "name": "Chair Exerciser",
        "description": "Manages to work out without leaving the chair.",
        "category": "For Health",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+500",
            "dream": "+400"
        }
    },

    {
        "name": "Caffeine Filter",
        "description": "Drinks coffee at night and still falls asleep with no problem.",
        "category": "For Health",
        "superpowers": {
            "live": "+400",
            "create": "+300",
            "love": "+500",
            "dream": "+200"
        }
    },

    {
        "name": "Joy Charger",
        "description": "Finds joy in the little things—even in a build that finishes unexpectedly fast.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+200",
            "create": "+200",
            "love": "+500",
            "dream": "+500"
        }
    },

    {
        "name": "Error Laugher",
        "description": "Laughs at code errors like they’re jokes instead of getting angry.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+500",
            "dream": "+500"
        }
    },

    {
        "name": "Bug Acceptance Guru",
        "description": "Accepts bugs as part of the journey to perfection — it’s just another task.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+500",
            "dream": "+400"
        }
    },

    {
        "name": "Spontaneous Coding Philosopher",
        "description": "Philosophically accepts any client suggestion after a long refactor.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+500",
            "dream": "+400"
        }
    },

    {
        "name": "Deadline Sage",
        "description": "Remains zen even when the deadline is close and the project manager is stressed.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+200",
            "create": "+200",
            "love": "+300",
            "dream": "+500"
        }
    },

    {
        "name": "Inspiration Maestro",
        "description": "Finds inspiration on an empty screen as if masterpieces are already there.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+400",
            "dream": "+100"
        }
    },

    {
        "name": "Peace Keeper",
        "description": "Maintains inner calm even in moments of intense crisis.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+200",
            "create": "+200",
            "love": "+500",
            "dream": "+500"
        }
    },

    {
        "name": "Empathy Guru",
        "description": "Feels the team’s mood and can lift everyone’s spirits.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+500",
            "create": "+200",
            "love": "+500",
            "dream": "+500"
        }
    },

    {
        "name": "Laughter Generator",
        "description": "Can lighten any tense situation with a joke that even bugs laugh at.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+200",
            "dream": "+500"
        }
    },

    {
        "name": "Pause Master",
        "description": "Knows when to just step back from the keyboard and breathe.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+100",
            "dream": "+100"
        }
    },

    {
        "name": "Coder Healer",
        "description": "Can support a colleague in their darkest hour, even if it’s a 500 error.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+500",
            "dream": "+500"
        }
    },

    {
        "name": "Music Code Curator",
        "description": "Creates work playlists so good, even deadlines follow the rhythm.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+300",
            "dream": "+200"
        }
    }
]



const cardItems = document.querySelector(".best-gifts__items");
gifts.forEach(card => {
    cardItems.innerHTML += `
    <div class="best-gifts__item" data-app=${card.category.replace("For ", "").toLowerCase()}>
    <div class="best-gifts__item-img">
        <img src="./images/gift-${card.category.replace("For ", "for-").toLowerCase()}.png" alt="gift-${card.category.replace("For ", "for-").toLowerCase()}">
    </div>
    <div class="best-gifts__item-descr">
        <div class="best-gifts__item-descr-header ${card.category.replace("For ", "").toLowerCase()}">${card.category}</div>
        <div class="best-gifts__item-descr-text">${card.name}</div>
    </div>
    </div>
    `
})

const tabs = document.querySelectorAll(".gifts__tab");

tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        tabs.forEach(item => {
            item.classList.remove("active");
        });
        e.target.classList.add("active")
        cardItems.innerHTML = "";
        switch (e.target.getAttribute("data-tab")) {
            case "work":
                const workArr = gifts.filter(gift => gift.category === "For Work");
                workArr.forEach(card => {
                    cardItems.innerHTML += `
                    <div class="best-gifts__item" data-app=${card.category.replace("For ", "").toLowerCase()}>
                    <div class="best-gifts__item-img">
                        <img src="./images/gift-${card.category.replace("For ", "for-").toLowerCase()}.png" alt="gift-${card.category.replace("For ", "for-").toLowerCase()}">
                    </div>
                    <div class="best-gifts__item-descr">
                        <div class="best-gifts__item-descr-header ${card.category.replace("For ", "").toLowerCase()}">${card.category}</div>
                        <div class="best-gifts__item-descr-text">${card.name}</div>
                    </div>
                    </div>
                    `
                })
                break;
            case "health":
                const healthArr = gifts.filter(gift => gift.category === "For Health");
                healthArr.forEach(card => {
                    cardItems.innerHTML += `
                        <div class="best-gifts__item" data-app=${card.category.replace("For ", "").toLowerCase()}>
                        <div class="best-gifts__item-img">
                            <img src="./images/gift-${card.category.replace("For ", "for-").toLowerCase()}.png" alt="gift-${card.category.replace("For ", "for-").toLowerCase()}">
                        </div>
                        <div class="best-gifts__item-descr">
                            <div class="best-gifts__item-descr-header ${card.category.replace("For ", "").toLowerCase()}">${card.category}</div>
                            <div class="best-gifts__item-descr-text">${card.name}</div>
                        </div>
                        </div>
                        `
                })
                break;
            case "harmony":
                const harmonyhArr = gifts.filter(gift => gift.category === "For Harmony");
                harmonyhArr.forEach(card => {
                    cardItems.innerHTML += `
                            <div class="best-gifts__item" data-app=${card.category.replace("For ", "").toLowerCase()}>
                            <div class="best-gifts__item-img">
                                <img src="./images/gift-${card.category.replace("For ", "for-").toLowerCase()}.png" alt="gift-${card.category.replace("For ", "for-").toLowerCase()}">
                            </div>
                            <div class="best-gifts__item-descr">
                                <div class="best-gifts__item-descr-header ${card.category.replace("For ", "").toLowerCase()}">${card.category}</div>
                                <div class="best-gifts__item-descr-text">${card.name}</div>
                            </div>
                            </div>
                            `
                })
                break;
            default:
                gifts.forEach(card => {
                    cardItems.innerHTML += `
                            <div class="best-gifts__item" data-app=${card.category.replace("For ", "").toLowerCase()}>
                            <div class="best-gifts__item-img">
                                <img src="./images/gift-${card.category.replace("For ", "for-").toLowerCase()}.png" alt="gift-${card.category.replace("For ", "for-").toLowerCase()}">
                            </div>
                            <div class="best-gifts__item-descr">
                                <div class="best-gifts__item-descr-header ${card.category.replace("For ", "").toLowerCase()}">${card.category}</div>
                                <div class="best-gifts__item-descr-text">${card.name}</div>
                            </div>
                            </div>
                            `
                })
        }
        const items = document.querySelectorAll(".best-gifts__item");
        const modal = document.querySelector(".modal");


        items.forEach(item => {
            item.addEventListener("click", (e) => {
                const el = e.target.closest(".best-gifts__item");
                const name = el.querySelector(".best-gifts__item-descr-text");
                // console.log(name.textContent);
                const card = gifts.filter(gift => gift.name === name.textContent)[0];
                const life = +card.superpowers.live.replace("+", "").replace("00", "");
                const create = +card.superpowers.create.replace("+", "").replace("00", "");
                const love = +card.superpowers.love.replace("+", "").replace("00", "");
                const dream = +card.superpowers.dream.replace("+", "").replace("00", "");
                const lifeArr = [0.1, 0.1, 0.1, 0.1, 0.1].fill(1, 0, life);
                const createArr = [0.1, 0.1, 0.1, 0.1, 0.1].fill(1, 0, create);
                const loveArr = [0.1, 0.1, 0.1, 0.1, 0.1].fill(1, 0, love);
                const dreamArr = [0.1, 0.1, 0.1, 0.1, 0.1].fill(1, 0, dream);
                document.body.style.overflow = 'hidden';
                modal.style.display = "flex";
                modal.innerHTML = `
                <div class="modal__item" data-app="${card.category.replace("For ", "").toLowerCase()}">
                    <div class="modal__item-img">
                        <img src="./images/gift-for-${card.category.replace("For ", "").toLowerCase()}.png" alt="gift-for-${card.category.replace("For ", "").toLowerCase()}">
        
                    </div>
                    <div class="modal__item-descr">
                        <div class="modal__item-descr-header ${card.category.replace("For ", "").toLowerCase()}">${card.category}</div>
                        <div class="modal__item-descr-text">${card.name}</div>
                        <div class="modal__item-descr-description">${card.description}</div>
                        <div class="modal__item-descr-rating">Adds superpowers to:</div>
                        <div class="modal__item-descr-superpowers">
                            <div class="modal__item-descr-superpowers-item">
                                <div class="modal__item-descr-superpowers-name">Live</div>
                                <div class="modal__item-descr-superpowers-rating">${card.superpowers.live}</div>
                                <div class="modal__item-descr-superpowers-stars">
                                    <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${lifeArr[0]}'>
                                    <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${lifeArr[1]}'>
                                    <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${lifeArr[2]}'>
                                    <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${lifeArr[3]}'>
                                    <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${lifeArr[4]}'>
                                </div>
                            </div>
                            <div class="modal__item-descr-superpowers-item">
                                <div class="modal__item-descr-superpowers-name">Create</div>
                                <div class="modal__item-descr-superpowers-rating">${card.superpowers.create}</div>
                                <div class="modal__item-descr-superpowers-stars">
                                    <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${createArr[0]}'>
                                    <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${createArr[1]}'>
                                    <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${createArr[2]}'>
                                    <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${createArr[3]}'>
                                    <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${createArr[4]}'>
                                </div>
                            </div>
                            <div class="modal__item-descr-superpowers-item">
                                <div class="modal__item-descr-superpowers-name">Love</div>
                                <div class="modal__item-descr-superpowers-rating">${card.superpowers.love}</div>
                                <div class="modal__item-descr-superpowers-stars">
                                    <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${loveArr[0]}'>
                                    <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${loveArr[1]}'>
                                    <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${loveArr[2]}'>
                                    <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${loveArr[3]}'>
                                    <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${loveArr[4]}'>
                                </div>
                            </div>
                            <div class="modal__item-descr-superpowers-item">
                                <div class="modal__item-descr-superpowers-name">Dream</div>
                                <div class="modal__item-descr-superpowers-rating">${card.superpowers.dream}</div>
                                <div class="modal__item-descr-superpowers-stars">
                                    <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${dreamArr[0]}'>
                                    <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${dreamArr[1]}'>
                                    <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${dreamArr[2]}'>
                                    <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${dreamArr[3]}'>
                                    <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${dreamArr[4]}'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal_close">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 10L10 30" stroke="#181C29" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M10 10L30 30" stroke="#181C29" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>`;
                const modal_close = document.querySelector(".modal_close");

                modal_close.addEventListener("click", () => {
                    document.body.style.overflow = 'visible';
                    modal.style.display = "none";
                })
            })
        })



        modal.addEventListener("click", (e) => {
            if (e.target.classList.contains("modal")) {
                document.body.style.overflow = 'visible';
                modal.style.display = "none";
            }
        })
    })
})



// scrolling up

window.addEventListener("scroll", () => {

    if (window.scrollY >= 300 && document.body.clientWidth <= 768) {
        scrollUp.style.opacity = "1";
        scrollUp.style.overflow = "visible";
        scrollUp.style.zIndex = "100";
        // scrollUp.style.display = "flex";
    } else {
        scrollUp.style.opacity = "0";
        scrollUp.style.overflow = "hidden";
        scrollUp.style.zIndex = "1";
        // scrollUp.style.display = "none";
    }

})

//modal

const items = document.querySelectorAll(".best-gifts__item");
const modal = document.querySelector(".modal");


items.forEach(item => {
    item.addEventListener("click", (e) => {
        const el = e.target.closest(".best-gifts__item");
        const name = el.querySelector(".best-gifts__item-descr-text");
        // console.log(name.textContent);
        const card = gifts.filter(gift => gift.name === name.textContent)[0];
        const life = +card.superpowers.live.replace("+", "").replace("00", "");
        const create = +card.superpowers.create.replace("+", "").replace("00", "");
        const love = +card.superpowers.love.replace("+", "").replace("00", "");
        const dream = +card.superpowers.dream.replace("+", "").replace("00", "");
        const lifeArr = [0.1, 0.1, 0.1, 0.1, 0.1].fill(1, 0, life);
        const createArr = [0.1, 0.1, 0.1, 0.1, 0.1].fill(1, 0, create);
        const loveArr = [0.1, 0.1, 0.1, 0.1, 0.1].fill(1, 0, love);
        const dreamArr = [0.1, 0.1, 0.1, 0.1, 0.1].fill(1, 0, dream);
        document.body.style.overflow = 'hidden';
        modal.style.display = "flex";
        modal.innerHTML = `
        <div class="modal__item" data-app="${card.category.replace("For ", "").toLowerCase()}">
            <div class="modal__item-img">
                <img src="./images/gift-for-${card.category.replace("For ", "").toLowerCase()}.png" alt="gift-for-${card.category.replace("For ", "").toLowerCase()}">

            </div>
            <div class="modal__item-descr">
                <div class="modal__item-descr-header ${card.category.replace("For ", "").toLowerCase()}">${card.category}</div>
                <div class="modal__item-descr-text">${card.name}</div>
                <div class="modal__item-descr-description">${card.description}</div>
                <div class="modal__item-descr-rating">Adds superpowers to:</div>
                <div class="modal__item-descr-superpowers">
                    <div class="modal__item-descr-superpowers-item">
                        <div class="modal__item-descr-superpowers-name">Live</div>
                        <div class="modal__item-descr-superpowers-rating">${card.superpowers.live}</div>
                        <div class="modal__item-descr-superpowers-stars">
                            <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${lifeArr[0]}'>
                            <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${lifeArr[1]}'>
                            <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${lifeArr[2]}'>
                            <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${lifeArr[3]}'>
                            <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${lifeArr[4]}'>
                        </div>
                    </div>
                    <div class="modal__item-descr-superpowers-item">
                        <div class="modal__item-descr-superpowers-name">Create</div>
                        <div class="modal__item-descr-superpowers-rating">${card.superpowers.create}</div>
                        <div class="modal__item-descr-superpowers-stars">
                            <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${createArr[0]}'>
                            <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${createArr[1]}'>
                            <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${createArr[2]}'>
                            <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${createArr[3]}'>
                            <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${createArr[4]}'>
                        </div>
                    </div>
                    <div class="modal__item-descr-superpowers-item">
                        <div class="modal__item-descr-superpowers-name">Love</div>
                        <div class="modal__item-descr-superpowers-rating">${card.superpowers.love}</div>
                        <div class="modal__item-descr-superpowers-stars">
                            <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${loveArr[0]}'>
                            <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${loveArr[1]}'>
                            <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${loveArr[2]}'>
                            <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${loveArr[3]}'>
                            <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${loveArr[4]}'>
                        </div>
                    </div>
                    <div class="modal__item-descr-superpowers-item">
                        <div class="modal__item-descr-superpowers-name">Dream</div>
                        <div class="modal__item-descr-superpowers-rating">${card.superpowers.dream}</div>
                        <div class="modal__item-descr-superpowers-stars">
                            <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${dreamArr[0]}'>
                            <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${dreamArr[1]}'>
                            <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${dreamArr[2]}'>
                            <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${dreamArr[3]}'>
                            <img src="./icons/snowflake-opa-1.svg" alt="snowflake" style='opacity:${dreamArr[4]}'>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal_close">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 10L10 30" stroke="#181C29" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M10 10L30 30" stroke="#181C29" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
        </div>`;
        const modal_close = document.querySelector(".modal_close");

        modal_close.addEventListener("click", () => {
            document.body.style.overflow = 'visible';
            modal.style.display = "none";
        })
    })
})


modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        document.body.style.overflow = 'visible';
        modal.style.display = "none";
    }
})


