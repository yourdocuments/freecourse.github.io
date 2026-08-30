/* =========================================================
   SNK IT INSTITUTE — FINAL SCRIPT.JS
   USHA AI CHATBOT
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       DOM READY
    ===================================================== */

    document.addEventListener("DOMContentLoaded", function () {


        /* =================================================
           ELEMENTS
        ================================================= */

        const ushaButton =
            document.getElementById("ushaButton");

        const chatbot =
            document.getElementById("chatbot");

        const closeChat =
            document.getElementById("closeChat");

        const chatMessages =
            document.getElementById("chatMessages");

        const chatForm =
            document.getElementById("chatForm");

        const chatInput =
            document.getElementById("chatInput");

        const navUsha =
            document.getElementById("navUsha");

        const openUshaBanner =
            document.getElementById("openUshaBanner");

        const year =
            document.getElementById("year");


        /* =================================================
           CHECK REQUIRED ELEMENTS
        ================================================= */

        if (!ushaButton) {
            console.warn("USHA: #ushaButton not found.");
        }

        if (!chatbot) {
            console.warn("USHA: #chatbot not found.");
        }


        /* =================================================
           OPEN USHA
        ================================================= */

        function openUSHA() {

            if (!chatbot) return;

            chatbot.classList.add("show");

            chatbot.setAttribute(
                "aria-hidden",
                "false"
            );

            setTimeout(function () {

                if (chatInput) {
                    chatInput.focus();
                }

            }, 150);

        }


        /* =================================================
           CLOSE USHA
        ================================================= */

        function closeUSHA() {

            if (!chatbot) return;

            chatbot.classList.remove("show");

            chatbot.setAttribute(
                "aria-hidden",
                "true"
            );

        }


        /* =================================================
           FLOATING USHA BUTTON
        ================================================= */

        if (ushaButton) {

            ushaButton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    if (
                        chatbot &&
                        chatbot.classList.contains("show")
                    ) {

                        closeUSHA();

                    } else {

                        openUSHA();

                    }

                }
            );

        }


        /* =================================================
           CLOSE BUTTON
        ================================================= */

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


        /* =================================================
           NAV — ASK USHA
        ================================================= */

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


        /* =================================================
           BANNER — ASK USHA
        ================================================= */

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


        /* =================================================
           CLICK INSIDE CHAT
        ================================================= */

        if (chatbot) {

            chatbot.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                }
            );

        }


        /* =================================================
           ADD MESSAGE
        ================================================= */

        function addMessage(text, type) {

            if (!chatMessages) return;

            const message =
                document.createElement("div");

            message.classList.add("message");

            if (type === "user") {

                message.classList.add(
                    "user-message"
                );

            } else {

                message.classList.add(
                    "bot-message"
                );

            }

            message.innerHTML = text;

            chatMessages.appendChild(message);

            scrollBottom();

        }


        /* =================================================
           SCROLL
        ================================================= */

        function scrollBottom() {

            if (!chatMessages) return;

            chatMessages.scrollTop =
                chatMessages.scrollHeight;

        }


        /* =================================================
           ESCAPE HTML
        ================================================= */

        function escapeHTML(text) {

            const div =
                document.createElement("div");

            div.textContent = text;

            return div.innerHTML;

        }


        /* =================================================
           TYPING
        ================================================= */

        function showTyping() {

            if (!chatMessages) return;

            hideTyping();

            const typing =
                document.createElement("div");

            typing.id =
                "ushaTyping";

            typing.className =
                "message bot-message";

            typing.innerHTML = `
                <div class="typing-message">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            `;

            chatMessages.appendChild(
                typing
            );

            scrollBottom();

        }


        /* =================================================
           HIDE TYPING
        ================================================= */

        function hideTyping() {

            const typing =
                document.getElementById(
                    "ushaTyping"
                );

            if (typing) {
                typing.remove();
            }

        }


        /* =================================================
           NORMALIZE TEXT
        ================================================= */

        function normalizeText(text) {

            return String(text || "")
                .toLowerCase()
                .trim();

        }


        /* =================================================
           USHA RESPONSE
        ================================================= */

        function getUshaReply(question) {

            const q =
                normalizeText(question);


            /* =============================================
               GREETING
            ============================================= */

            if (
                q.includes("hi") ||
                q.includes("hello") ||
                q.includes("হাই") ||
                q.includes("হ্যালো") ||
                q.includes("আসসালামু") ||
                q.includes("salam")
            ) {

                return `
                    👋 ওয়ালাইকুম আসসালাম!

                    <br><br>

                    আমি <strong>USHA AI</strong>।

                    <br><br>

                    Free Course, Paid Course,
                    Live Class, Zoom,
                    Recorded Course,
                    WhatsApp এবং Shopping
                    সম্পর্কে আপনাকে সাহায্য করতে পারি।

                    <br><br>

                    কী জানতে চান? 😊
                `;

            }


            /* =============================================
               FREE COURSE
            ============================================= */

            if (
                q.includes("free course") ||
                q.includes("free") ||
                q.includes("ফ্রি") ||
                q.includes("ফ্রী")
            ) {

                return `
                    🎓 <strong>Free Course</strong>

                    <br><br>

                    আমাদের Free Course-এর
                    recorded classes দেখতে
                    নিচের button-এ click করুন।

                    <br><br>

                    <a
                        class="usha-link"
                        href="https://yourdocuments.github.io/freecourse.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        🎓 Open Free Course
                    </a>

                    <br><br>

                    YouTube Free Playlist:

                    <br>

                    <a
                        class="usha-link"
                        href="https://www.youtube.com/playlist?list=PLJe-RU9VQd38"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ▶️ Watch Free Classes
                    </a>
                `;

            }


            /* =============================================
               PAID COURSE
            ============================================= */

            if (
                q.includes("paid") ||
                q.includes("premium") ||
                q.includes("পেইড") ||
                q.includes("প্রিমিয়াম") ||
                q.includes("প্রিমিয়াম")
            ) {

                return `
                    💎 <strong>Paid Course</strong>

                    <br><br>

                    Paid Recorded Classes
                    দেখতে নিচের button-এ click করুন।

                    <br><br>

                    <a
                        class="usha-link dark"
                        href="https://www.youtube.com/playlist?list=PLfz6zuYhx-uU"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        💎 Watch Paid Classes
                    </a>

                    <br><br>

                    আরও তথ্যের জন্য Support-এ
                    যোগাযোগ করতে পারেন।

                    <br><br>

                    <a
                        class="usha-link"
                        href="https://wa.me/8801636363801"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        💬 Contact Support
                    </a>
                `;

            }


            /* =============================================
               LIVE CLASS
            ============================================= */

            if (
                q.includes("live") ||
                q.includes("লাইভ")
            ) {

                return `
                    📹 <strong>Live Class</strong>

                    <br><br>

                    Live Zoom Class-এ join করতে
                    নিচের button ব্যবহার করুন।

                    <br><br>

                    <a
                        class="usha-link blue"
                        href="https://us05web.zoom.us/j/84311190995?pwd=d0j0VRyKL6Zxg5qN6rIaxAJb9Dk8rf.1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        📹 JOIN LIVE CLASS
                    </a>
                `;

            }


            /* =============================================
               ZOOM
            ============================================= */

            if (
                q.includes("zoom") ||
                q.includes("জুম")
            ) {

                return `
                    🔵 <strong>Zoom Class</strong>

                    <br><br>

                    Zoom meeting-এ join করতে
                    নিচের button-এ click করুন।

                    <br><br>

                    <a
                        class="usha-link blue"
                        href="https://us05web.zoom.us/j/84311190995?pwd=d0j0VRyKL6Zxg5qN6rIaxAJb9Dk8rf.1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        🔵 JOIN ZOOM
                    </a>
                `;

            }


            /* =============================================
               RECORDED
            ============================================= */

            if (
                q.includes("recorded") ||
                q.includes("record") ||
                q.includes("রেকর্ড")
            ) {

                return `
                    ▶️ <strong>Recorded Classes</strong>

                    <br><br>

                    Free এবং Paid recorded
                    classes দেখতে নিচের option ব্যবহার করুন।

                    <br><br>

                    <a
                        class="usha-link"
                        href="https://www.youtube.com/playlist?list=PLJe-RU9VQd38"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ▶️ Free Classes
                    </a>

                    <br>

                    <a
                        class="usha-link dark"
                        href="https://www.youtube.com/playlist?list=PLfz6zuYhx-uU"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        💎 Paid Classes
                    </a>
                `;

            }


            /* =============================================
               WHATSAPP
            ============================================= */

            if (
                q.includes("whatsapp") ||
                q.includes("হোয়াটসঅ্যাপ") ||
                q.includes("হোয়াটসঅ্যাপ") ||
                q.includes("support") ||
                q.includes("সাপোর্ট")
            ) {

                return `
                    💬 <strong>WhatsApp Support</strong>

                    <br><br>

                    সরাসরি WhatsApp-এ যোগাযোগ করুন।

                    <br><br>

                    <a
                        class="usha-link"
                        href="https://wa.me/8801636363801"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        💬 WhatsApp Support
                    </a>

                    <br><br>

                    📢 WhatsApp Channel:

                    <br>

                    <a
                        class="usha-link"
                        href="https://whatsapp.com/channel/0029VbD6LlH6RGJJ1QsBN93x"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        📢 Join Channel
                    </a>
                `;

            }


            /* =============================================
               SHOPPING
            ============================================= */

            if (
                q.includes("shopping") ||
                q.includes("shop") ||
                q.includes("শপিং") ||
                q.includes("discount") ||
                q.includes("ডিসকাউন্ট") ||
                q.includes("ছাড়") ||
                q.includes("ছাড়") ||
                q.includes("offer") ||
                q.includes("অফার") ||
                q.includes("promo") ||
                q.includes("coupon") ||
                q.includes("কুপন") ||
                q.includes("shoping36") ||
                q.includes("36")
            ) {

                return `
                    🛍️ <strong>Shopping Mela</strong>

                    <br><br>

                    🎉 <strong>36% Discount</strong>

                    <br><br>

                    Promo Code:
                    <strong>SHOPING36</strong>

                    <br><br>

                    <a
                        class="usha-link"
                        href="https://yourdocuments.github.io/shopingmela/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        🛍️ SHOP NOW
                    </a>
                `;

            }


            /* =============================================
               FACEBOOK
            ============================================= */

            if (
                q.includes("facebook") ||
                q.includes("ফেসবুক")
            ) {

                return `
                    📘 <strong>Facebook</strong>

                    <br><br>

                    SNK IT Institute Facebook page-এ
                    যেতে নিচের button চাপুন।

                    <br><br>

                    <a
                        class="usha-link blue"
                        href="https://www.facebook.com/snkitinstitute"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        📘 Open Facebook
                    </a>
                `;

            }


            /* =============================================
               YOUTUBE
            ============================================= */

            if (
                q.includes("youtube") ||
                q.includes("ইউটিউব")
            ) {

                return `
                    ▶️ <strong>YouTube</strong>

                    <br><br>

                    SNK IT Institute YouTube channel
                    দেখতে নিচের button চাপুন।

                    <br><br>

                    <a
                        class="usha-link"
                        href="https://www.youtube.com/@snkguideup"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ▶️ Open YouTube
                    </a>
                `;

            }


            /* =============================================
               PRICE
            ============================================= */

            if (
                q.includes("price") ||
                q.includes("দাম") ||
                q.includes("মূল্য")
            ) {

                return `
                    💰 কোন Course-এর দাম জানতে
                    চাচ্ছেন?

                    <br><br>

                    Course-এর নাম লিখুন অথবা
                    Support-এ যোগাযোগ করুন।

                    <br><br>

                    <a
                        class="usha-link dark"
                        href="https://wa.me/8801636363801"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        💬 Ask Support
                    </a>
                `;

            }


            /* =============================================
               THANK YOU
            ============================================= */

            if (
                q.includes("thank") ||
                q.includes("thanks") ||
                q.includes("ধন্যবাদ")
            ) {

                return `
                    😊 আপনাকেও ধন্যবাদ!

                    <br><br>

                    প্রয়োজন হলে আবার
                    <strong>USHA AI</strong>-কে
                    জিজ্ঞেস করুন।
                `;

            }


            /* =============================================
               DEFAULT
            ============================================= */

            return `
                😊 আপনার প্রশ্নটি আমি
                পুরোপুরি বুঝতে পারিনি।

                <br><br>

                আপনি জানতে পারেন:

                <br><br>

                🎓 Free Course
                <br>
                💎 Paid Course
                <br>
                📹 Live Class
                <br>
                🔵 Zoom
                <br>
                ▶️ Recorded Course
                <br>
                💬 WhatsApp Support
                <br>
                🛍️ Shopping Discount

                <br><br>

                নিচের button থেকেও
                একটি option নির্বাচন করুন।
            `;

        }


        /* =================================================
           SEND MESSAGE
        ================================================= */

        function sendMessage(question) {

            question =
                String(question || "").trim();

            if (!question) return;


            /* USER */

            addMessage(
                escapeHTML(question),
                "user"
            );


            /* CLEAR */

            if (chatInput) {
                chatInput.value = "";
            }


            /* TYPING */

            showTyping();


            /* RESPONSE DELAY */

            const delay =
                600 +
                Math.floor(
                    Math.random() * 600
                );


            setTimeout(function () {

                hideTyping();

                const reply =
                    getUshaReply(question);

                addMessage(
                    reply,
                    "bot"
                );

            }, delay);

        }


        /* =================================================
           FORM SUBMIT
        ================================================= */

        if (chatForm) {

            chatForm.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();

                    if (!chatInput) return;

                    sendMessage(
                        chatInput.value
                    );

                }
            );

        }


        /* =================================================
           QUICK QUESTION
        ================================================= */

        window.quickQuestion =
            function (question) {

                openUSHA();

                sendMessage(
                    question
                );

            };


        /* =================================================
           ENTER KEY
        ================================================= */

        if (chatInput) {

            chatInput.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Enter" &&
                        !event.shiftKey
                    ) {

                        event.preventDefault();

                        sendMessage(
                            chatInput.value
                        );

                    }

                }
            );

        }


        /* =================================================
           ESC CLOSE
        ================================================= */

        document.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Escape") {

                    closeUSHA();

                }

            }
        );


        /* =================================================
           CLICK OUTSIDE
        ================================================= */

        document.addEventListener(
            "click",
            function (event) {

                if (!chatbot) return;

                if (
                    !chatbot.classList.contains("show")
                ) {
                    return;
                }


                if (
                    chatbot.contains(event.target) ||
                    (ushaButton &&
                        ushaButton.contains(event.target)) ||
                    (navUsha &&
                        navUsha.contains(event.target)) ||
                    (openUshaBanner &&
                        openUshaBanner.contains(event.target))
                ) {

                    return;

                }


                closeUSHA();

            }
        );


        /* =================================================
           FOOTER YEAR
        ================================================= */

        if (year) {

            year.textContent =
                new Date().getFullYear();

        }


        /* =================================================
           INITIAL STATE
        ================================================= */

        if (chatbot) {

            chatbot.classList.remove("show");

            chatbot.setAttribute(
                "aria-hidden",
                "true"
            );

        }


        /* =================================================
           READY
        ================================================= */

        console.log(
            "SNK IT Institute — USHA AI loaded successfully."
        );

    });

})();
