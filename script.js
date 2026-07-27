// ===================================
// Love Gift Premium v3.0
// Part 1 - Setup & Unlock
// ===================================

// Main Elements
const lockScreen = document.getElementById("lockScreen");
const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");
const website = document.getElementById("website");

// Hero
const heroTitle = document.getElementById("heroTitle");
const heroSubtitle = document.getElementById("heroSubtitle");

// Gallery
const gallery = document.getElementById("galleryContainer");

// Letter & Timer
const letter = document.getElementById("letterText");
const timer = document.getElementById("loveTimer");

// Slider
const sliderImage = document.getElementById("sliderImage");

// Effects
const hearts = document.getElementById("hearts");
const sparkles = document.getElementById("sparkles");
const rain = document.getElementById("rain");

// Image Viewer
const viewer = document.getElementById("imageViewer");
const viewerImg = document.getElementById("viewerImg");
const closeViewer = document.getElementById("closeViewer");

// Buttons
const musicBtn = document.getElementById("musicBtn");
const startBtn = document.getElementById("startBtn");

// Background Music
const audio = new Audio(CONFIG.music);
audio.loop = true;

// Load Config
heroTitle.textContent = CONFIG.heroTitle;
heroSubtitle.textContent = CONFIG.heroSubtitle;

// Load Gallery
CONFIG.photos.forEach(photo => {

    const img = document.createElement("img");

    img.src = photo;
    img.alt = "Love Photo";

    gallery.appendChild(img);

});

// Unlock Website
unlockBtn.addEventListener("click", () => {

    if (passwordInput.value === CONFIG.password) {

        lockScreen.style.display = "none";
        website.style.display = "block";

        audio.play().catch(() => {});

    } else {

        message.textContent = "❌ Wrong Password!";

    }

});

// ===================================
// Love Gift Premium v3.0
// Part 2 - Hearts, Sparkles & Rain
// ===================================

// ---------- Hearts ----------

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (18 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);

}

const heartInterval = setInterval(createHeart, 350);

// ---------- Sparkles ----------

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";
    sparkle.innerHTML = "✨";

    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.fontSize = (10 + Math.random() * 12) + "px";
    sparkle.style.animationDuration = (3 + Math.random() * 2) + "s";

    sparkles.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 6000);

}

const sparkleInterval = setInterval(createSparkle, 250);

// ---------- Rain ----------

function createRain() {

    const drop = document.createElement("div");

    drop.className = "drop";

    drop.style.left = Math.random() * 100 + "%";
    drop.style.animationDuration = (0.5 + Math.random() * 0.5) + "s";

    rain.appendChild(drop);

    setTimeout(() => {
        drop.remove();
    }, 1200);

}

let rainInterval = null;

// ---------- Unlock Effects ----------

unlockBtn.addEventListener("click", () => {

    if (passwordInput.value === CONFIG.password) {

        clearInterval(heartInterval);
        clearInterval(sparkleInterval);

        hearts.style.display = "none";
        sparkles.style.display = "none";

        rain.style.display = "block";

        if (!rainInterval) {
            rainInterval = setInterval(createRain, 40);
        }

    }

});

// ===================================
// Love Gift Premium v3.0
// Part 3 - Typewriter, Slider & Timer
// ===================================

// ---------- Typewriter ----------

let letterIndex = 0;

function typeLetter() {

    if (letterIndex < CONFIG.loveLetter.length) {

        letter.innerHTML += CONFIG.loveLetter.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter, 40);

    }

}

// ---------- Auto Slider ----------

let currentSlide = 0;

sliderImage.src = CONFIG.photos[0];

setInterval(() => {

    currentSlide++;

    if (currentSlide >= CONFIG.photos.length) {

        currentSlide = 0;

    }

    sliderImage.src = CONFIG.photos[currentSlide];

}, 3000);

// ---------- Love Timer ----------

function updateLoveTimer() {

    if (!CONFIG.relationshipDate) return;

    const start = new Date(CONFIG.relationshipDate);
    const now = new Date();

    const diff = now - start;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    timer.innerHTML = `❤️ Together for ${days} Days ❤️`;

}

updateLoveTimer();

// ---------- Start Typewriter After Unlock ----------

unlockBtn.addEventListener("click", () => {

    if (passwordInput.value === CONFIG.password) {

        letter.innerHTML = "";

        letterIndex = 0;

        typeLetter();

    }

});

// ===================================
// Love Gift Premium v3.0
// Part 4 - Viewer, Music & Start Button
// ===================================

// Photo Viewer
gallery.addEventListener("click", (e) => {

    if (e.target.tagName === "IMG") {

        viewer.style.display = "flex";
        viewerImg.src = e.target.src;

    }

});

closeViewer.addEventListener("click", () => {

    viewer.style.display = "none";

});

viewer.addEventListener("click", (e) => {

    if (e.target === viewer) {

        viewer.style.display = "none";

    }

});

// Music Button
musicBtn.addEventListener("click", () => {

    if (audio.paused) {

        audio.play();

        musicBtn.textContent = "⏸ Pause Music";

    } else {

        audio.pause();

        musicBtn.textContent = "▶ Play Music";

    }

});

// Start Button
startBtn.addEventListener("click", () => {

    document.getElementById("gallery").scrollIntoView({

        behavior: "smooth"

    });

});

// ===========================
// Secret Gift Box
// ===========================

const giftBox = document.getElementById("giftBox");
const giftContent = document.getElementById("giftContent");

giftBox.addEventListener("click", () => {

    if (giftContent.style.display === "block") {

        giftContent.style.display = "none";
        giftBox.textContent = "🎁";

    } else {

        giftContent.style.display = "block";
        giftBox.textContent = "💖";

        giftContent.scrollIntoView({
            behavior: "smooth"
        });

    }

});

// ===========================
// Proposal Section
// ===========================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const proposalMessage = document.getElementById("proposalMessage");

// Yes Button
yesBtn.addEventListener("click", () => {

    proposalMessage.innerHTML =
        "💖 Yaaay! I Love You Forever! 💍❤️";

});

// No Button Run Away
function moveNoButton(){

    const x = Math.random() * 180;
    const y = Math.random() * 70;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

}

noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("mouseover", moveNoButton);

// ===========================
// Fireworks Effect
// ===========================

const fireworks = document.getElementById("fireworks");

function createFirework() {

    const fire = document.createElement("div");

    fire.className = "firework";

    fire.style.left = Math.random() * window.innerWidth + "px";
    fire.style.top = Math.random() * window.innerHeight + "px";

    fire.style.background =
        `hsl(${Math.random() * 360},100%,60%)`;

    fireworks.appendChild(fire);

    setTimeout(() => {
        fire.remove();
    }, 1000);

}

// Yes Button Fireworks
yesBtn.addEventListener("click", () => {

    proposalMessage.innerHTML =
        "💖 Yaaay! I Love You Forever! 💍❤️";

    for(let i = 0; i < 30; i++){

        setTimeout(createFirework, i * 80);

    }

});

const finalBtn = document.getElementById("finalBtn");
const finalMessage = document.getElementById("finalMessage");

if (finalBtn) {

    finalBtn.addEventListener("click", () => {

        finalMessage.style.display = "block";

        finalMessage.innerHTML = `
            <h2>💖 I Love You Tahamu 💖</h2>
            <p> আমি হতো তোমার সাথে নাও থাকতে পারি । তবে তোমাকে কোথাও ছেড়ে যাচ্ছি না । সব সময় দূর থেকে তোমায় দেখবো , , আমার প্রয়োজন হয়ে চুপি চুপি Help করবো ।   তবে একা হইতে দিবো না। ❤️</p>
        `;

        finalMessage.scrollIntoView({
            behavior: "smooth"
        });

    });

}