//your JS code here. If required.
function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function handleKeyDown(event) {
  const keyCode = event.keyCode;
  playSound(keyCode);
}

function removePlayingClass(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

window.addEventListener('keydown', handleKeyDown);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removePlayingClass));

