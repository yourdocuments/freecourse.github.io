```javascript
/* =========================================================
   SNK IT INSTITUTE — FINAL SCRIPT.JS
   USHA OPEN / CLOSE + FOOTER YEAR
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const chatbot = document.getElementById("chatbot");

    const ushaFloating =
        document.getElementById("ushaFloating");

    const openUshaBanner =
        document.getElementById("openUshaBanner");

    const navUsha =
        document.getElementById("navUsha");

    const closeChat =
        document.getElementById("closeChat");

    const yearElement =
        document.getElementById("year");


    /* =====================================================
       OPEN USHA
    ===================================================== */

    function openUSHA() {

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

    function closeUSHA() {

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
                event.stopPropagation();

                if (
                    chatbot &&
                    chatbot.classList.contains("active")
                ) {

                    closeUSHA();

                } else {

                    openUSHA();

                }

            }
        );

    }


    /* =====================================================
       USHA BANNER BUTTON
    ===================================================== */

    if (openUshaBanner) {

        openUshaBanner.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                openUSHA();

            }
        );

    }


    /* =====================================================
       NAV — ASK USHA
    ===================================================== */

    if (navUsha) {

        navUsha.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                openUSHA();

            }
        );

    }


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    if (closeChat) {

        closeChat.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                closeUSHA();

            }
        );

    }


    /* =====================================================
       CLICK INSIDE CHAT
       Don't close chatbot
    ===================================================== */

    if (chatbot) {

        chatbot.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

            }
        );

    }


    /* =====================================================
       CHAT OPTION LINKS
       Allow normal <a href=""> links to work
    ===================================================== */

    const chatOptions =
        document.querySelectorAll(".chat-option");

    chatOptions.forEach(function (option) {

        option.addEventListener(
            "click",
            function () {

                /*
                 * এখানে preventDefault ব্যবহার করা হয়নি।
                 *
                 * তাই আপনার HTML-এর href link
                 * স্বাভাবিকভাবে কাজ করবে।
                 */

                console.log(
                    "USHA option clicked:",
                    option.href
                );

            }
        );

    });


    /* =====================================================
       CLICK OUTSIDE USHA
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (!chatbot) return;

            if (
                !chatbot.classList.contains("active")
            ) {
                return;
            }


            const clickedFloating =
                ushaFloating &&
                ushaFloating.contains(event.target);


            const clickedBanner =
                openUshaBanner &&
                openUshaBanner.contains(event.target);


            const clickedNav =
                navUsha &&
                navUsha.contains(event.target);


            if (
                !chatbot.contains(event.target) &&
                !clickedFloating &&
                !clickedBanner &&
                !clickedNav
            ) {

                closeUSHA();

            }

        }
    );


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeUSHA();

            }

        }
    );


    /* =====================================================
       FOOTER YEAR
    ===================================================== */

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    if (chatbot) {

        chatbot.classList.remove("active");

        chatbot.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    /* =====================================================
       DEBUG
    ===================================================== */

    console.log(
        "SNK IT Institute — USHA Script Loaded Successfully"
    );

});
```
