/* =========================================================
   SNK IT INSTITUTE
   1.3 — FULL JAVASCRIPT
   USHA AI + WEBSITE INTERACTIONS
   ========================================================= */


/* =========================================================
   IMPORTANT LINKS
   ========================================================= */

const LINKS = {

  shopping:
    "https://yourdocuments.github.io/shopingmela/",

  freeCourse:
    "https://yourdocuments.github.io/freecourse.github.io/",

  paidCourse:
    "https://snkitinstitute.github.io",

  guide:
    "https://snkguideup.github.io",

  whatsapp:
    "https://wa.me/8801636363801",

  whatsappChannel:
    "https://whatsapp.com/channel/0029VbD6LlH6RGJJ1QsBN93x",

  zoom:
    "https://us05web.zoom.us/j/84311190995?pwd=d0j0VRyKL6Zxg5qN6rIaxAJb9Dk8rf.1",

  freePlaylist:
    "https://www.youtube.com/playlist?list=PLJe-RU9VQd38",

  paidPlaylist:
    "https://www.youtube.com/playlist?list=PLfz6zuYhx-uU"

};



/* =========================================================
   GET HTML ELEMENTS
   ========================================================= */

const ushaButton =
  document.getElementById("ushaButton");

const chatbot =
  document.getElementById("chatbot");

const closeChat =
  document.getElementById("closeChat");

const chatForm =
  document.getElementById("chatForm");

const chatInput =
  document.getElementById("chatInput");

const chatMessages =
  document.getElementById("chatMessages");



/* =========================================================
   CHECK USHA ELEMENTS
   ========================================================= */

if (
  ushaButton &&
  chatbot
) {

  ushaButton.addEventListener(
    "click",
    function () {

      chatbot.classList.toggle("active");

      if (
        chatbot.classList.contains("active") &&
        chatInput
      ) {

        setTimeout(
          function () {
            chatInput.focus();
          },
          200
        );

      }

    }
  );

}



/* =========================================================
   CLOSE CHAT BUTTON
   ========================================================= */

if (closeChat) {

  closeChat.addEventListener(
    "click",
    function () {

      chatbot.classList.remove("active");

    }
  );

}



/* =========================================================
   SHOPPING BUTTON
   ========================================================= */

function openShopping() {

  window.open(
    LINKS.shopping,
    "_blank",
    "noopener,noreferrer"
  );

}



/* =========================================================
   ADD CHAT MESSAGE
   ========================================================= */

function addMessage(
  text,
  type
) {

  if (!chatMessages) {
    return;
  }


  const message =
    document.createElement("div");


  message.className =
    "message " +
    (
      type === "user"
        ? "user-message"
        : "bot-message"
    );


  message.innerHTML =
    text;


  chatMessages.appendChild(
    message
  );


  chatMessages.scrollTop =
    chatMessages.scrollHeight;

}



/* =========================================================
   SHOW TYPING ANIMATION
   ========================================================= */

function showTyping() {

  if (!chatMessages) {
    return;
  }


  const typing =
    document.createElement("div");


  typing.className =
    "message bot-message";


  typing.id =
    "typingMessage";


  typing.innerHTML = `
    <div class="typing">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;


  chatMessages.appendChild(
    typing
  );


  chatMessages.scrollTop =
    chatMessages.scrollHeight;

}



/* =========================================================
   REMOVE TYPING ANIMATION
   ========================================================= */

function removeTyping() {

  const typing =
    document.getElementById(
      "typingMessage"
    );


  if (typing) {
    typing.remove();
  }

}



/* =========================================================
   USHA RESPONSE ENGINE
   ========================================================= */

function getUshaReply(
  question
) {

  const q =
    question
      .toLowerCase()
      .trim();



  /* =========================================
     GREETING
  ========================================== */

  if (

    q.includes("hello") ||
    q.includes("hi") ||
    q.includes("hey") ||
    q.includes("হাই") ||
    q.includes("হ্যালো") ||
    q.includes("আসসালামু") ||
    q.includes("salam")

  ) {

    return `

      👋 ওয়ালাইকুম আসসালাম!

      <br><br>

      আমি <b>USHA AI</b>।

      <br><br>

      কীভাবে সাহায্য করতে পারি?

      <br><br>

      আপনি আমাকে Free Course,
      Paid Course, Live Class,
      Zoom, WhatsApp অথবা
      Shopping সম্পর্কে জিজ্ঞেস করতে পারেন।

    `;

  }



  /* =========================================
     FREE COURSE
  ========================================== */

  if (

    q.includes("free") ||
    q.includes("ফ্রি") ||
    q.includes("বিনা") ||
    q.includes("ফ্রী")

  ) {

    return `

      🎓 <b>Free Course</b>

      <br><br>

      Free Course দেখতে নিচের
      button-এ ক্লিক করুন।

      <br><br>

      <a
        href="${LINKS.freeCourse}"
        target="_blank"
        rel="noopener noreferrer"
        class="usha-link-button"
      >
        🎓 Open Free Course
      </a>

    `;

  }



  /* =========================================
     FREE VIDEO / PLAYLIST
  ========================================== */

  if (

    q.includes("free video") ||
    q.includes("free playlist") ||
    q.includes("ফ্রি ভিডিও") ||
    q.includes("ফ্রি প্লেলিস্ট")

  ) {

    return `

      ▶️ Free Course-এর recorded
      video playlist এখানে।

      <br><br>

      <a
        href="${LINKS.freePlaylist}"
        target="_blank"
        rel="noopener noreferrer"
        class="usha-link-button"
      >
        ▶️ Open Free Playlist
      </a>

    `;

  }



  /* =========================================
     PAID COURSE
  ========================================== */

  if (

    q.includes("paid") ||
    q.includes("পেইড") ||
    q.includes("পেইড কোর্স") ||
    q.includes("paid course")

  ) {

    return `

      💎 <b>Paid Course</b>

      <br><br>

      Paid Course দেখতে
      নিচের button ব্যবহার করুন।

      <br><br>

      <a
        href="${LINKS.paidCourse}"
        target="_blank"
        rel="noopener noreferrer"
        class="usha-link-button dark"
      >
        💎 Open Paid Course
      </a>

    `;

  }



  /* =========================================
     PAID RECORDED COURSE
  ========================================== */

  if (

    q.includes("recorded") ||
    q.includes("record course") ||
    q.includes("রেকর্ড") ||
    q.includes("রেকর্ডেড")

  ) {

    return `

      🎬 Recorded Course-এর জন্য
      Paid Course section ব্যবহার করুন।

      <br><br>

      <a
        href="${LINKS.paidPlaylist}"
        target="_blank"
        rel="noopener noreferrer"
        class="usha-link-button dark"
      >
        🎬 Open Recorded Course
      </a>

    `;

  }



  /* =========================================
     LIVE CLASS
  ========================================== */

  if (

    q.includes("live") ||
    q.includes("লাইভ") ||
    q.includes("class") ||
    q.includes("ক্লাস")

  ) {

    return `

      📹 <b>Live Class</b>

      <br><br>

      Live class-এর সময় দেওয়া
      Zoom link দিয়ে join করবেন।

      <br><br>

      <a
        href="${LINKS.zoom}"
        target="_blank"
        rel="noopener noreferrer"
        class="usha-link-button blue"
      >
        🔵 Join Zoom Class
      </a>

    `;

  }



  /* =========================================
     ZOOM
  ========================================== */

  if (

    q.includes("zoom") ||
    q.includes("জুম")

  ) {

    return `

      🔵 <b>Zoom Class</b>

      <br><br>

      নিচের button-এ click করে
      Zoom class-এ join করুন।

      <br><br>

      <a
        href="${LINKS.zoom}"
        target="_blank"
        rel="noopener noreferrer"
        class="usha-link-button blue"
      >
        🔵 Join Zoom
      </a>

    `;

  }



  /* =========================================
     WHATSAPP
  ========================================== */

  if (

    q.includes("whatsapp") ||
    q.includes("হোয়াটসঅ্যাপ") ||
    q.includes("হোয়াটসঅ্যাপ") ||
    q.includes("support") ||
    q.includes("সাপোর্ট") ||
    q.includes("যোগাযোগ")

  ) {

    return `

      💬 <b>WhatsApp Support</b>

      <br><br>

      আমাদের সাথে WhatsApp-এ
      যোগাযোগ করতে নিচের button ব্যবহার করুন।

      <br><br>

      <a
        href="${LINKS.whatsapp}"
        target="_blank"
        rel="noopener noreferrer"
        class="usha-link-button"
      >
        💬 WhatsApp Support
      </a>

      <br><br>

      📢 WhatsApp Channel:

      <br><br>

      <a
        href="${LINKS.whatsappChannel}"
        target="_blank"
        rel="noopener noreferrer"
        class="usha-link-button"
      >
        📢 Join WhatsApp Channel
      </a>

    `;

  }



  /* =========================================
     SHOPPING / DISCOUNT
  ========================================== */

  if (

    q.includes("shop") ||
    q.includes("shopping") ||
    q.includes("শপিং") ||
    q.includes("শপিং মেলা") ||
    q.includes("discount") ||
    q.includes("ডিসকাউন্ট") ||
    q.includes("ছাড়") ||
    q.includes("ছাড়") ||
    q.includes("36%") ||
    q.includes("36") ||
    q.includes("promo") ||
    q.includes("promocode") ||
    q.includes("কুপন")

  ) {

    return `

      🛍️ <b>Shopping Mela</b>

      <br><br>

      🎉 <b>36% Discount</b>

      <br><br>

      Promo Code:

      <br>

      <b>SHOPING36</b>

      <br><br>

      Shopping করার সময়
      এই promo code ব্যবহার করুন।

      <br><br>

      <a
        href="${LINKS.shopping}"
        target="_blank"
        rel="noopener noreferrer"
        class="usha-link-button"
      >
        🛍️ SHOP NOW
      </a>

    `;

  }



  /* =========================================
     GUIDE
  ========================================== */

  if (

    q.includes("guide") ||
    q.includes("গাইড")

  ) {

    return `

      📚 Guide এবং learning information
      দেখতে নিচের website-এ যান।

      <br><br>

      <a
        href="${LINKS.guide}"
        target="_blank"
        rel="noopener noreferrer"
        class="usha-link-button dark"
      >
        📚 Open Guide
      </a>

    `;

  }



  /* =========================================
     THANK YOU
  ========================================== */

  if (

    q.includes("thank") ||
    q.includes("thanks") ||
    q.includes("ধন্যবাদ")

  ) {

    return `

      😊 আপনাকেও ধন্যবাদ!

      <br><br>

      প্রয়োজন হলে আবার
      <b>USHA AI</b>-কে জিজ্ঞেস করুন।

    `;

  }



  /* =========================================
     HELP
  ========================================== */

  if (

    q.includes("help") ||
    q.includes("সাহায্য") ||
    q.includes("কি করতে") ||
    q.includes("কী করতে")

  ) {

    return `

      😊 অবশ্যই সাহায্য করব!

      <br><br>

      আপনি আমাকে জিজ্ঞেস করতে পারেন:

      <br><br>

      🎓 Free Course কোথায়?

      <br>

      💎 Paid Course কোথায়?

      <br>

      📹 Live Class কীভাবে join করবো?

      <br>

      🔵 Zoom link কোথায়?

      <br>

      💬 WhatsApp support চাই

      <br>

      🛍️ Shopping discount আছে?

    `;

  }



  /* =========================================
     DEFAULT RESPONSE
  ========================================== */

  return `

    😊 আপনার প্রশ্নটি আমি পুরোপুরি
    বুঝতে পারিনি।

    <br><br>

    আপনি এভাবে প্রশ্ন করতে পারেন:

    <br><br>

    • Free course কোথায়?

    <br>

    • Paid course কোথায়?

    <br>

    • Live class কীভাবে join করবো?

    <br>

    • Zoom কীভাবে join করবো?

    <br>

    • WhatsApp support চাই

    <br>

    • Shopping discount আছে?

  `;

}



/* =========================================================
   SEND MESSAGE
   ========================================================= */

function sendMessage() {

  if (!chatInput) {
    return;
  }


  const question =
    chatInput.value.trim();


  if (!question) {
    return;
  }


  /* User message */

  addMessage(
    question,
    "user"
  );


  /* Clear input */

  chatInput.value = "";


  /* Show typing */

  showTyping();


  /* Simulated AI response */

  const delay =
    650 +
    Math.random() * 700;


  setTimeout(
    function () {

      removeTyping();


      const reply =
        getUshaReply(
          question
        );


      addMessage(
        reply,
        "bot"
      );

    },
    delay
  );

}



/* =========================================================
   FORM SUBMIT
   ========================================================= */

if (chatForm) {

  chatForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();

      sendMessage();

    }
  );

}



/* =========================================================
   QUICK QUESTION
   ========================================================= */

function quickQuestion(
  question
) {

  if (!chatInput) {
    return;
  }


  chatInput.value =
    question;


  sendMessage();

}



/* =========================================================
   ENTER KEY
   ========================================================= */

if (chatInput) {

  chatInput.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Enter" &&
        !event.shiftKey
      ) {

        event.preventDefault();

        sendMessage();

      }

    }
  );

}



/* =========================================================
   CLICK OUTSIDE → CLOSE CHAT
   ========================================================= */

document.addEventListener(
  "click",
  function (event) {

    if (
      chatbot &&
      ushaButton &&
      chatbot.classList.contains("active") &&
      !chatbot.contains(event.target) &&
      !ushaButton.contains(event.target)
    ) {

      chatbot.classList.remove(
        "active"
      );

    }

  }
);



/* =========================================================
   ESC KEY → CLOSE CHAT
   ========================================================= */

document.addEventListener(
  "keydown",
  function (event) {

    if (
      event.key === "Escape" &&
      chatbot
    ) {

      chatbot.classList.remove(
        "active"
      );

    }

  }
);



/* =========================================================
   DISCOUNT BAR KEYBOARD ACCESS
   ========================================================= */

const discountBar =
  document.querySelector(
    ".discount-bar"
  );


if (discountBar) {

  discountBar.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        openShopping();

      }

    }
  );

}



/* =========================================================
   PAGE LOAD
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    console.log(
      "SNK IT Institute website loaded successfully."
    );

    console.log(
      "USHA AI chatbot ready."
    );

  }
);
