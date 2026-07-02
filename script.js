// =========================
// ELEMENTS
// =========================

const screens = document.querySelectorAll(".screen");

const loading = document.getElementById("loading");
const story = document.getElementById("story");
const question = document.getElementById("question");
const finalScreen = document.getElementById("final");

const progress = document.getElementById("progress");

const typing = document.getElementById("typing");

const continueBtn = document.getElementById("continueBtn");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const funnyText = document.getElementById("funnyText");




// =========================
// TEXTS
// =========================

const storyText =
"I don't know if today is special... but meeting you definitely made my world a little brighter. ❤️";

const funnyMessages = [

    "Nice try 😂",

    "No is disabled 😜",

    "Only YES works 💖",

    "You can't catch me 🙈",

    "Come on... press YES ❤️"

];



// =========================
// CHANGE SCREEN
// =========================

function showScreen(screen){

    screens.forEach(s=>{

        s.classList.remove("active");

    });

    screen.classList.add("active");

}



// =========================
// LOADING
// =========================

let value = 0;

const loader = setInterval(()=>{

    value++;

    progress.style.width = value + "%";

    if(value >= 100){

        clearInterval(loader);

        setTimeout(()=>{

            showScreen(story);

            typeWriter();

        },500);

    }

},25);



// =========================
// TYPE WRITER
// =========================

function typeWriter(){

    let i = 0;

    typing.innerHTML = "";

    const timer = setInterval(()=>{

        typing.innerHTML += storyText.charAt(i);

        i++;

        if(i >= storyText.length){

            clearInterval(timer);

        }

    },40);

}



// =========================
// CONTINUE
// =========================

continueBtn.addEventListener("click",()=>{

    showScreen(question);

    

});



// =========================
// YES
// =========================

yesBtn.addEventListener("click",()=>{

    showScreen(finalScreen);

});

// =========================
// NO BUTTON
// =========================

function moveNoButton(){

    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    funnyText.textContent =
        funnyMessages[Math.floor(Math.random()*funnyMessages.length)];

    if(navigator.vibrate){

        navigator.vibrate(25);

    }

}

noBtn.addEventListener("mouseenter",moveNoButton);

noBtn.addEventListener("touchstart",(e)=>{

    e.preventDefault();

    moveNoButton();

},{passive:false});



// =========================
// HEART EXPLOSION
// =========================

function createHeart(){

    const heart=document.createElement("img");

    heart.src="assets/images/heart.png";

    heart.className="heartParticle";

    heart.style.left=Math.random()*window.innerWidth+"px";

    heart.style.top=window.innerHeight+"px";

    heart.style.width=(20+Math.random()*25)+"px";

    heart.style.animationDuration=(2+Math.random()*2)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },4000);

}

function heartExplosion(){

    for(let i=0;i<250;i++){

        const heart = document.createElement("img");

        heart.src = "assets/images/heart.png";

        heart.className = "heartParticle";

        // شروع از مرکز صفحه
        heart.style.left = "50%";
        heart.style.top = "50%";

        // جهت تصادفی
        const angle = Math.random() * Math.PI * 2;

        // فاصله حرکت
        const distance = 250 + Math.random() * 450;

        heart.style.setProperty("--x", Math.cos(angle) * distance + "px");
        heart.style.setProperty("--y", Math.sin(angle) * distance + "px");

        // اندازه تصادفی
        heart.style.width = (18 + Math.random() * 30) + "px";

        // مدت زمان
        heart.style.animationDuration = (1.8 + Math.random()) + "s";

        setTimeout(()=>{

    document.body.appendChild(heart);

},i*8);

        setTimeout(() => {

            heart.remove();

        }, 3000);

    }

}



// =========================
// PETALS
// =========================

function createPetal(){

    const petal=document.createElement("img");

    petal.src="assets/images/petal.png";

    petal.className="petal";

    petal.style.left=Math.random()*window.innerWidth+"px";

    petal.style.setProperty(
    "--moveX",
    (-120 + Math.random()*240) + "px"
);

    petal.style.animationDuration=(5+Math.random()*4)+"s";

   petal.style.width = (110 + Math.random()*110) + "px";

    document.querySelector(".petals").appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

}

setInterval(createPetal,350);



// =========================
// FINAL
// =========================

yesBtn.addEventListener("click",()=>{

    heartExplosion();

    

});