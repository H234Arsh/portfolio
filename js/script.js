// =========================
// MOBILE MENU
// =========================

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// =========================
// CLOSE MOBILE MENU
// =========================

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// =========================
// CURSOR GLOW
// =========================

const glow =
    document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left =
        e.clientX + "px";

    glow.style.top =
        e.clientY + "px";

});

// =========================
// HERO PARALLAX
// =========================

const hero =
    document.querySelector(".hero");

const heroLeft =
    document.querySelector(".hero-left");

const heroRight =
    document.querySelector(".hero-right");

const image =
    document.querySelector(".image-container");

document.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.clientX) / 25;

    const y =
        (window.innerHeight / 2 - e.clientY) / 25;

    // HERO LEFT MOVEMENT

    heroLeft.style.transform =
        `translateX(${-x/2}px)
         translateY(${-y/2}px)`;

    // HERO RIGHT MOVEMENT

    heroRight.style.transform =
        `translateX(${x/2}px)
         translateY(${y/2}px)`;

    // IMAGE 3D TILT

    image.style.transform =

        `rotateY(${-x}deg)
         rotateX(${y}deg)
         scale(1.03)`;

});

// =========================
// RESET SMOOTHLY
// =========================

document.addEventListener("mouseleave", () => {

    heroLeft.style.transform =
        `translateX(0px)
         translateY(0px)`;

    heroRight.style.transform =
        `translateX(0px)
         translateY(0px)`;

    image.style.transform =
        `rotateY(0deg)
         rotateX(0deg)
         scale(1)`;

});

// =========================
// 3D CARD TILT
// =========================

const cards =
    document.querySelectorAll(
        ".about-card, .project-card, .contact-card, .skill-card"
    );

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / 18);

        const rotateY =
            ((centerX - x) / 18);

        card.style.transform =

            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.05)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =

            `perspective(1000px)
             rotateX(0deg)
             rotateY(0deg)
             scale(1)
             translateY(0px)`;

    });

});

// =========================
// BUTTON DEPTH EFFECT
// =========================

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mousemove", (e) => {

        const rect =
            btn.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        btn.style.transform =

            `translateY(-5px)
             rotateX(${(y - rect.height/2)/8}deg)
             rotateY(${(x - rect.width/2)/8}deg)
             scale(1.05)`;

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform =

            `translateY(0px)
             rotateX(0deg)
             rotateY(0deg)
             scale(1)`;

    });

});

// =========================
// NAVBAR MOTION
// =========================

const navbar =
    document.querySelector(".navbar");

document.addEventListener("mousemove", (e) => {

    const moveX =
        (window.innerWidth / 2 - e.clientX) / 80;

    navbar.style.transform =
        `translateX(${-moveX}px)`;

});

// =========================
// TYPING EFFECT
// =========================

const typingText = [

    "AI Engineer",

    "Machine Learning Developer",

    "Cloud & Data Engineer",

    "Full Stack Developer"

];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === typingText.length){

        count = 0;
    }

    currentText = typingText[count];

    letter =
        currentText.slice(0, ++index);

    document.querySelector(".typing-text")
        .textContent = letter;

    if(letter.length === currentText.length){

        count++;
        index = 0;

        setTimeout(type, 1500);

    }
    else{

        setTimeout(type, 80);
    }

})();