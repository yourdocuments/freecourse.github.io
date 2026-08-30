```javascript
/* =========================================================
   SNK IT INSTITUTE
   FINAL SCRIPT.JS
   USHA AI + ALL BUTTONS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const chatbot = document.getElementById("chatbot");
    const ushaFloating = document.getElementById("ushaFloating");
    const openUshaBanner = document.getElementById("openUshaBanner");
    const navUsha = document.getElementById("navUsha");
    const closeChat = document.getElementById("closeChat");

    const chatBody = document.querySelector(".chat-body");
    const chatOptions = document.querySelector(".chat-options");


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

        document.body.classList.add("usha-open");

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

        document.body.classList.remove("usha-open");

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

                openUSHA();

            }
        );

    }


    /* =====================================================
       BANNER ASK USHA BUTTON
    ===================================================== */

    if (openUshaBanner) {

        openUshaBanner.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                openUSHA();

            }
        );

    }


    /* =====================================================
       NAV ASK USHA
    ===================================================== */

    if (navUsha) {

        navUsha.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                openUSHA();

            }
        );

    }


    /* =====================================================
       CLOSE USHA
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
       USHA OPTION LINKS
       
       IMPORTANT:
       এখানে আমরা link আটকাচ্ছি না।
       তাই HTML-এর সব <a href=""> ঠিকভাবে কাজ করবে।
    ===================================================== */

    if (chatOptions) {

        const options =
            chatOptions.querySelectorAll(
                "a.chat-option"
            );


        options.forEach(function (option) {

            option.addEventListener(
                "click",
                function (event) {

                    /*
                     * Link-এর normal action বন্ধ করা হচ্ছে না।
                     * ফলে Zoom / YouTube / WhatsApp / Facebook
                     * সব link স্বাভাবিকভাবে খুলবে।
                     */

                    event.stopPropagation();

                }
            );

        });

    }


    /* =====================================================
       CLICK OUTSIDE USHA TO CLOSE
       
       Option/link-এর ভিতরে click করলে close হবে না।
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (!chatbot) return;

            if (!chatbot.classList.contains("active")) {
                return;
            }


            const clickedInsideChat =
                chatbot.contains(event.target);


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
                !clickedInsideChat &&
                !clickedFloating &&
                !clickedBanner &&
                !clickedNav
            ) {

                closeUSHA();

            }

        }
    );


    /* =====================================================
       FOOTER YEAR
    ===================================================== */

    const yearElement =
        document.getElementById("year");


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       QUICK QUESTION
       
       Future USHA AI support-এর জন্য রাখা হয়েছে।
    ===================================================== */

    window.quickQuestion =
        function (question) {

            openUSHA();

            console.log(
                "USHA Question:",
                question
            );

        };


    /* =====================================================
       CHAT FORM
       
       আপনার বর্তমান HTML-এ chat form নেই,
       তাই থাকলে কাজ করবে।
    ===================================================== */

    const chatForm =
        document.getElementById("chatForm");


    const chatInput =
        document.getElementById("chatInput");


    if (chatForm && chatInput) {

        chatForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const message =
                    chatInput.value.trim();


                if (!message) {

                    return;

                }


                console.log(
                    "USHA Message:",
                    message
                );


                chatInput.value = "";

            }
        );

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
       SUCCESS MESSAGE
    ===================================================== */

    console.log(
        "✅ SNK IT Institute website loaded."
    );

    console.log(
        "✅ USHA AI loaded successfully."
    );

});
```
