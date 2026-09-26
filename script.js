const btn = document.getElementById("darkmodebtn");
btn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});
const ticker = document.getElementById('ticker');
  const container = ticker.parentElement;
  let pos = 380;
  let isPaused = false;

const summaryText = " Mechanical Engineering graduate (B.S., Indus University) with hands-on experience in machine maintenance, installation, and workshop operations. Currently gaining practical industry exposure at Kausar Trade Distributors. Proficient in CAD, technical drawing, and project management tools including Primavera P6 and ClickUp. Seeking an entry-level mechanical engineering or maintenance role where I can apply technical knowledge and grow professionally.";
const summaryEl = document.getElementById('summary-text');
let charIndex = 0;

function typeSummary() {
  if (charIndex < summaryText.length) {
    summaryEl.textContent += summaryText.charAt(charIndex);
    charIndex++;
    setTimeout(typeSummary, 30);
  } else {
    const cursor = document.getElementById('summary-cursor');
    if (cursor) cursor.style.display = 'none';
  }
}

typeSummary();   // <-- ye line hi function ko chalati hai, ye missing thi

  function animate() {
    
    if (!isPaused) {
      pos -= 1;
      if (pos < -ticker.offsetWidth) pos = container.offsetWidth;
      ticker.style.left = pos + 'px';
    }
    requestAnimationFrame(animate);
  }
  animate();

  container.addEventListener('mouseenter', () => { isPaused = true; });
  container.addEventListener('mouseleave', () => { isPaused = false; });

// typeSummary() is now triggered from the welcome-screen Enter button below

// Welcome screen logic
const welcomeScreen = document.getElementById('welcome-screen');
const mainContent = document.getElementById('main-content');
const enterBtn = document.getElementById('enter-btn');

enterBtn.addEventListener('click', () => {
  welcomeScreen.classList.add('hidden');
  mainContent.style.display = 'block';
  typeSummary(); // start the typing effect only once the user enters

  // Fully remove welcome screen after fade-out finishes
  setTimeout(() => {
    welcomeScreen.style.display = 'none';
  }, 600);
});
