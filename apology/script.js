// Elements
const envelopeScreen = document.getElementById("envelope-container");
const letterScreen = document.getElementById("letter-container");

const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const letterWindow = document.querySelector(".letter-window");

// Open Envelope
envelopeScreen.addEventListener("click", () => {
  envelopeScreen.style.display = "none";
  letterScreen.style.display = "flex";

  setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);
});

// 🔥 YES button scaling logic (NO grows bigger visually)
let noScale = 3;
const scaleStep = 2;  // each YES click grows NO faster
const maxScale = 12;     // maximum NO size

// Make NO grow from its center
noBtn.style.transformOrigin = "center center";

yesBtn.addEventListener("click", () => {
  // Grow NO visually
  noScale += scaleStep;
  if (noScale > maxScale) noScale = maxScale;
  noBtn.style.transform = `scale(${noScale})`;

  // Hide YES when NO fully covers it
  const noRect = noBtn.getBoundingClientRect();
  const yesRect = yesBtn.getBoundingClientRect();

  if (
    noRect.left <= yesRect.left &&
    noRect.right >= yesRect.right &&
    noRect.top <= yesRect.top &&
    noRect.bottom >= yesRect.bottom
  ) {
    yesBtn.style.visibility = "hidden";
  }

  // YES hop animation (fun only)
  yesBtn.classList.remove("hop");
  void yesBtn.offsetWidth;
  yesBtn.classList.add("hop");
});

// NO clicked → final happy ending (only NO proceeds)
noBtn.addEventListener("click", () => {
  title.textContent = "Ap please naraz na hova karen 😔🙏";
  catImg.src = "cat_dance.gif";

  letterWindow.classList.add("final");

  buttons.style.display = "none";
  finalText.style.display = "block";
});
