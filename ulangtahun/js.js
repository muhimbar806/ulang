// create floating hearts
const loveContainer = document.getElementById('balloons');
for (let i = 0; i < 30; i++) {
  const heart = document.createElement('div');
  heart.className = 'love';
  heart.textContent = '❤️';
  heart.style.left = Math.random() * 100 + '%';
  heart.style.animationDelay = Math.random() * 5 + 's';
  heart.style.fontSize = 16 + Math.random() * 36 + 'px';
  loveContainer.appendChild(heart);
}

const startScreen = document.getElementById('startScreen');
const nameInputBox = document.getElementById('nameInputBox');
const enterNameIcon = document.getElementById('enterNameIcon');
const enterBtn = document.getElementById('enterBtn');
const birthdaySection = document.getElementById('birthdaySection');
const birthdayInner = document.getElementById('birthdayInner');
const displayName = document.getElementById('displayName');
const birthdayMessage = document.getElementById('birthdayMessage');
const bgMusic = document.getElementById('bgMusic');
const exitBtn = document.getElementById('exitBtn');

// show input when icon clicked
enterNameIcon.addEventListener('click', () => {
  startScreen.style.display = 'none';
  nameInputBox.style.display = 'flex';
  document.getElementById('username').focus();
});

// enter button behavior
enterBtn.addEventListener('click', () => enterBirthday());

function enterBirthday() {
  const name = document.getElementById('username').value.trim();
  if (!name) return alert('Isi nama dulu ya 😘');

  // hide input and show birthday section
  nameInputBox.style.display = 'none';
  birthdaySection.style.display = 'block';

  // set texts (use existing ids)
  displayName.textContent = name;
  birthdayMessage.textContent =
    'Selamat ulang tahun! Aku tidak bisa menjanjikan bahwa hidup akan selalu mudah, tapi aku berjanji kamu tidak akan pernah menghadapinya sendirian. Bertambahnya usiamu adalah bertambahnya juga rasa sayangku padamu. Semoga kita bisa merayakan ulang tahunmu tahun ini, tahun depan, dan tahun-tahun seterusnya bersama-sama.  I love you';

  // fade-in
  requestAnimationFrame(() => {
    birthdayInner.classList.add('show');
  });
}

// exit button: play music and go back to start
exitBtn.addEventListener('click', () => {
  // try to play music — user gesture allows play
  bgMusic.currentTime = 0;
  const p = bgMusic.play();
  if (p !== undefined) {
    p.catch(() => {});
  }

  // go back to start screen after a short delay so music starts
  birthdaySection.style.display = 'none';
  startScreen.style.display = 'flex';
});

// small: allow Enter key on input
document.getElementById('username').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') enterBirthday();
});

// placeholder image fallback if images missing
document.querySelectorAll('.polaroid img').forEach((img) => {
  img.addEventListener('error', () => {
    const svg = encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='480'><rect width='100%' height='100%' fill='#f8e6ef'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#c06082' font-family='Poppins,Arial' font-size='20'>Ganti foto di folder yang sama</text></svg>`
    );
    img.src = 'data:image/svg+xml;charset=utf-8,' + svg;
  });
});
