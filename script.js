/* =========================================================
   SNK IT INSTITUTE
   FINAL SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const chatbot = document.getElementById("chatbot");
    const ushaFloating = document.getElementById("ushaFloating");
    const closeChat = document.getElementById("closeChat");
    const openUshaBanner = document.getElementById("openUshaBanner");

    const yearElement = document.getElementById("year");


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =====================================================
       OPEN USHA
    ===================================================== */

    function openChatbot() {

        if (!chatbot) return;

        chatbot.classList.add("active");

        chatbot.setAttribute(
            "aria-hidden",
            "false"
        );

    }


    /* =====================================================
       CLOSE USHA
    ===================================================== */

    function closeChatbot() {

        if (!chatbot) return;

        chatbot.classList.remove("active");

        chatbot.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    /* =====================================================
       FLOATING USHA BUTTON
    ===================================================== */

    if (ushaFloating) {

        ushaFloating.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                if (
                    chatbot &&
                    chatbot.classList.contains("active")
                ) {

                    closeChatbot();

                } else {

                    openChatbot();

                }

            }
        );

    }


    /* =====================================================
       USHA COVER BUTTON
    ===================================================== */

    if (openUshaBanner) {

        openUshaBanner.addEventListener(
            "click",
            function () {

                openChatbot();

            }
        );

    }


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    if (closeChat) {

        closeChat.addEventListener(
            "click",
            function () {

                closeChatbot();

            }
        );

    }


    /* =====================================================
       ESC KEY CLOSE
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeChatbot();

            }

        }
    );


    /* =====================================================
       CLICK OUTSIDE CHATBOT
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (!chatbot) return;

            const clickedInsideChat =
                chatbot.contains(event.target);

            const clickedFloatingButton =
                ushaFloating &&
                ushaFloating.contains(event.target);

            const clickedBannerButton =
                openUshaBanner &&
                openUshaBanner.contains(event.target);

            if (
                chatbot.classList.contains("active") &&
                !clickedInsideChat &&
                !clickedFloatingButton &&
                !clickedBannerButton
            ) {

                closeChatbot();

            }

        }
    );


    /* =====================================================
       PREVENT CHAT OPTION FROM BEING BLOCKED
       External links use normal <a> navigation.
    ===================================================== */

    const chatOptions =
        document.querySelectorAll(
            ".chat-option"
        );

    chatOptions.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                /*
                   Do not preventDefault().
                   This allows:
                   Zoom
                   YouTube
                   WhatsApp
                   Shopping Bazar
                   to work normally.
                */

            }
        );

    });


    /* =====================================================
       PROMO BAR SLIDE ANIMATION
    ===================================================== */

    const promoInner =
        document.querySelector(
            ".promo-inner"
        );

    if (promoInner) {

        let promoVisible = true;

        setInterval(function () {

            promoVisible = !promoVisible;

            promoInner.style.animation =
                "none";

            /*
               Force browser reflow
            */

            void promoInner.offsetWidth;

            if (promoVisible) {

                promoInner.style.animation =
                    "promoSlide .45s ease";

            } else {

                promoInner.style.animation =
                    "promoSlide .45s ease";

            }

        }, 5000);

    }


    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    internalLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");

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

    });


    /* =====================================================
       EXTERNAL LINK SAFETY
    ===================================================== */

    const externalLinks =
        document.querySelectorAll(
            'a[target="_blank"]'
        );

    externalLinks.forEach(function (link) {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    /* =====================================================
       IMAGE ERROR HANDLING
    ===================================================== */

    const images =
        document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener(
            "error",
            function () {

                image.classList.add(
                    "image-error"
                );

            }
        );

    });


    /* =====================================================
       CHATBOT OPEN WITH URL HASH
       Example:
       index.html#usha
    ===================================================== */

    if (
        window.location.hash === "#usha"
    ) {

        setTimeout(
            function () {

                openChatbot();

            },
            300
        );

    }


    /* =====================================================
       CONSOLE CHECK
    ===================================================== */

    console.log(
        "SNK IT Institute website loaded successfully."
    );

});
