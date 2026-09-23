/* ========================= */
/* GET HTML ELEMENTS */
/* ========================= */

const unwrapBtn =
    document.getElementById("unwrapBtn");

const birthdayMusic =
    document.getElementById("birthdayMusic");

const firstScreen =
    document.getElementById("firstScreen");

const animationScreen =
    document.getElementById("animationScreen");

const animationNextBtn =
    document.getElementById("animationNextBtn");

const interactiveScreen =
    document.getElementById("interactiveScreen");

const surpriseScreen =
    document.getElementById("surpriseScreen");

const blowBtn =
    document.getElementById("blowBtn");

const birthdayScreen =
    document.getElementById("birthdayScreen");

const openLetterBtn =
    document.getElementById("openLetterBtn");

const letterScreen =
    document.getElementById("letterScreen");


/* ========================= */
/* UNWRAP → A LITTLE SURPRISE */
/* ========================= */

unwrapBtn.addEventListener(
    "click",
    function () {

        birthdayMusic.play();
        
        firstScreen.style.display =
            "none";

        animationScreen.classList.remove(
            "hidden"
        );

        setTimeout(function () {

            animationScreen.classList.add(
                "show"
            );

        }, 50);

    }
);


/* ========================= */
/* A LITTLE SURPRISE → ZIP */
/* ========================= */

animationNextBtn.addEventListener(
    "click",
    function () {

        animationScreen.style.display =
            "none";

        interactiveScreen.classList.remove(
            "hidden"
        );

        setTimeout(function () {

            interactiveScreen.classList.add(
                "show"
            );

        }, 50);

    }
);


/* ========================= */
/* ZIP → MAKE A WISH */
/* ========================= */

window.addEventListener(
    "message",
    function (event) {

        if (event.data === "interactiveGiftNext") {

            interactiveScreen.style.display =
                "none";

            surpriseScreen.classList.remove(
                "hidden"
            );

            setTimeout(function () {

                surpriseScreen.classList.add(
                    "show"
                );

            }, 50);

        }

    }
);


/* ========================= */
/* MAKE A WISH */
/* ========================= */

blowBtn.addEventListener(
    "click",
    function () {

        const flame =
            document.querySelector(".flame");


        /* Hide candle flame */

        flame.style.display =
            "none";

        createWishConfetti();


        /* Change button text */

        blowBtn.innerText =
            "Wish Made! ❤️";


        /* Wait */

        setTimeout(function () {

            surpriseScreen.style.display =
                "none";


            /* Show birthday screen */

            birthdayScreen.classList.remove(
                "hidden"
            );


            setTimeout(function () {

                birthdayScreen.classList.add(
                    "show"
                );

            }, 50);

        }, 5000);

    }
);


/* ========================= */
/* OPEN FINAL LETTER */
/* ========================= */

openLetterBtn.addEventListener(
    "click",
    function () {

        birthdayScreen.style.display =
            "none";

        letterScreen.classList.remove(
            "hidden"
        );

        setTimeout(function () {

            letterScreen.classList.add(
                "show"
            );

            startTyping();

        }, 100);

    }
);


/* ========================= */
/* TYPING EFFECT */
/* ========================= */

const typingText =
    document.getElementById("typingText");

const typingText2 =
    document.getElementById("typingText2");


const message1 =
    "Sorry pahh unkoooda iruka vendiya nerathula ennala iruka mudiyala. Enna mannipanu nanaikuren.";

const message2 =
    "Anyway intha nal enaku romba mukiyamana nal bcz it's your birthday athuku tha naney coding potu itha ready panniruken.Na unna en lifela eppovumey maraka maten. Ennaikum ni tha ennoda special person . Ni enga irunthalo yarukooda irunthalo eppovumey happy ah irukanum okvaa☺️.";


function typeMessage(
    element,
    message,
    callback
) {

    let index = 0;

    element.innerHTML = "";


    function typeCharacter() {

        if (index < message.length) {

            element.innerHTML +=
                message.charAt(index);

            index++;

            setTimeout(
                typeCharacter,
                45
            );

        }

        else {

            if (callback) {
                callback();
            }

        }

    }

    typeCharacter();

}


function startTyping() {

    typingText.innerHTML = "";

    typingText2.innerHTML = "";

    typeMessage(
        typingText,
        message1,
        function () {

            setTimeout(function () {

                typeMessage(
                    typingText2,
                    message2
                );

            }, 500);

        }
    );

}


/* ========================= */
/* WISH CONFETTI */
/* ========================= */

function createWishConfetti() {

    const container =
        document.getElementById("wishConfetti");

    container.innerHTML = "";


    const colors = [
        "#ff4d6d",
        "#ffd166",
        "#06d6a0",
        "#4cc9f0",
        "#c77dff",
        "#ffffff"
    ];


    for (let i = 0; i < 80; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add(
            "wish-piece"
        );


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.animationDelay =
            Math.random() * 5.0 + "s";


        piece.style.width =
            (6 + Math.random() * 7) + "px";


        piece.style.height =
            (10 + Math.random() * 12) + "px";


        container.appendChild(piece);

    }

}
