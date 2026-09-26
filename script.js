const heartButton =
    document.getElementById("heartButton");

const heartScreen =
    document.getElementById("heartScreen");

const messageScreen =
    document.getElementById("messageScreen");

const messageBox =
    document.getElementById("messageBox");

const letterScreen =
    document.getElementById("letterScreen");

const closeButton =
    document.getElementById("closeButton");

const floatingHearts =
    document.getElementById("floatingHearts");


let heartOpened = false;


/* =========================================
   STEP 1
   CLICK HEART
========================================= */

heartButton.addEventListener("click", () => {

    if (heartOpened) return;

    heartOpened = true;


    // Heart pop
    heartButton.classList.add("pop");


    // Burst of hearts
    createHeartBurst();


    // Hide heart
    setTimeout(() => {

        heartScreen.classList.add("hide");

    }, 600);


    // Show message
    setTimeout(() => {

        messageScreen.classList.add("show");

    }, 900);

});


/* =========================================
   STEP 2
   CLICK MESSAGE
========================================= */

messageBox.addEventListener("click", () => {

    // Hide message
    messageScreen.classList.remove("show");


    // Little heart animation
    createHeartBurst();


    // Open letter
    setTimeout(() => {

        letterScreen.classList.add("show");

    }, 500);

});


/* =========================================
   CLOSE LETTER
========================================= */

closeButton.addEventListener("click", () => {

    letterScreen.classList.remove("show");

});


/* Click outside letter */

letterScreen.addEventListener("click", (event) => {

    if (event.target === letterScreen) {

        letterScreen.classList.remove("show");

    }

});


/* =========================================
   HEART BURST
========================================= */

function createHeartBurst() {

    const symbols = [
        "♥",
        "♡",
        "✦",
        "❤",
        "✧"
    ];


    for (let i = 0; i < 18; i++) {

        const heart =
            document.createElement("div");


        heart.classList.add("small-heart");


        heart.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        heart.style.left =
            (42 + Math.random() * 16) + "vw";


        heart.style.bottom =
            (42 + Math.random() * 16) + "vh";


        heart.style.fontSize =
            (14 + Math.random() * 24) + "px";


        heart.style.animationDuration =
            (2.5 + Math.random() * 2) + "s";


        floatingHearts.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 5000);

    }

}