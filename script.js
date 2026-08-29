/* =========================================================
   SNK IT INSTITUTE
   COMPLETE SCRIPT.JS
========================================================= */


/* =========================================================
   LINKS
========================================================= */

const LINKS = {

    zoom:
        "https://us05web.zoom.us/j/84311190995?pwd=d0j0VRyKL6Zxg5qN6rIaxAJb9Dk8rf.1",

    whatsapp:
        "https://wa.me/8801636363801",

    freeCourse:
        "https://www.youtube.com/playlist?list=PLJe-RU9VQd38",

    paidCourse:
        "https://www.youtube.com/playlist?list=PLfz6zuYhx-uU",

    shopping:
        "https://yourdocuments.github.io/shopingmela.github.io"

};


/* =========================================================
   YEAR
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================================
   USHA CHATBOT
========================================================= */

const chatbot = document.getElementById("chatbot");
const ushaFloating = document.getElementById("ushaFloating");


function openChat(event) {

    if (event) {
        event.preventDefault();
    }

    if (!chatbot) return;

    chatbot.classList.add("active");

    /*
       Floating button hide
       while chatbot is open
    */

    if (ushaFloating) {
        ushaFloating.style.display = "none";
    }

}


function closeChat() {

    if (!chatbot) return;

    chatbot.classList.remove("active");

    if (ushaFloating) {
        ushaFloating.style.display = "flex";
    }

}


function toggleChat() {

    if (!chatbot) return;

    if (chatbot.classList.contains("active")) {

        closeChat();

    } else {

        openChat();

    }

}


/* =========================================================
   ZOOM
========================================================= */

function joinZoom(event) {

    if (event) {
        event.preventDefault();
    }

    window.open(
        LINKS.zoom,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================================================
   FREE COURSE
========================================================= */

function openFreeCourse() {

    window.open(
        LINKS.freeCourse,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================================================
   PAID COURSE
========================================================= */

function openPaidCourse() {

    window.open(
        LINKS.paidCourse,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================================================
   WHATSAPP
========================================================= */

function openWhatsApp() {

    window.open(
        LINKS.whatsapp,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================================================
   SHOPPING BAZAR
========================================================= */

function openShopping() {

    window.open(
        LINKS.shopping,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================================================
   DISCOUNT PROMO ANIMATION
========================================================= */

const promoBar = document.getElementById("promoBar");

if (promoBar) {

    const promoMessages = [

        {
            badge: "36% Discount",
            text: "Shopping Bazar-এ বিশেষ ছাড়",
            code: "SHOPPING36"
        },

        {
            badge: "Limited Offer",
            text: "আজই Shopping Bazar থেকে কেনাকাটা করুন",
            code: "SHOPPING36"
        },

        {
            badge: "Special Deal",
            text: "Promo Code ব্যবহার করে ছাড় নিন",
            code: "SHOPPING36"
        }

    ];


    let promoIndex = 0;


    function changePromo() {

        const inner =
            promoBar.querySelector(".promo-inner");

        const badge =
            promoBar.querySelector(".discount-badge span");

        const text =
            promoBar.querySelector(".promo-text");

        const code =
            promoBar.querySelector(".promo-code strong");


        if (!inner || !badge || !text || !code) {
            return;
        }


        /*
           Exit animation
        */

        inner.style.animation = "none";

        void inner.offsetWidth;


        /*
           Next message
        */

        promoIndex++;

        if (promoIndex >= promoMessages.length) {
            promoIndex = 0;
        }


        badge.textContent =
            promoMessages[promoIndex].badge;


        text.textContent =
            promoMessages[promoIndex].text;


        code.textContent =
            promoMessages[promoIndex].code;


        /*
           Enter animation
        */

        inner.style.animation =
            "promoSlide .7s ease";

    }


    /*
       Change every 4 seconds
    */

    setInterval(
        changePromo,
        4000
    );

}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeChat();

        }

    }
);


/* =========================================================
   CLICK OUTSIDE CHATBOT
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        if (!chatbot) return;

        if (!chatbot.classList.contains("active")) {
            return;
        }


        const clickedInsideChat =
            chatbot.contains(event.target);


        const clickedUshaButton =
            ushaFloating &&
            ushaFloating.contains(event.target);


        const clickedChatButton =
            event.target.closest(
                ".chat-banner-btn, .nav-usha"
            );


        if (
            !clickedInsideChat &&
            !clickedUshaButton &&
            !clickedChatButton
        ) {

            closeChat();

        }

    }
);


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    }
);


/* =========================================================
   INTERSECTION ANIMATION
========================================================= */

const animatedCards =
    document.querySelectorAll(
        ".quick-card, .recorded-card, .class-card"
    );


if (
    "IntersectionObserver"
    in window
) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    animatedCards.forEach(
        function (card) {

            card.style.opacity = "0";

            card.style.transform =
                "translateY(18px)";

            card.style.transition =
                "opacity .5s ease, transform .5s ease";

            observer.observe(card);

        }
    );

}


/* =========================================================
   CONSOLE
========================================================= */

console.log(
    "%cSNK IT Institute",
    "font-size:20px;font-weight:bold;"
);

console.log(
    "USHA AI Assistant is ready."
);
