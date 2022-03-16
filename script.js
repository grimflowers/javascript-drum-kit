function removeTransition(event) {
    if (event.propertyName !== 'transform') return;

    this.classList.remove('playing');
}

function playSound(event) {
    const audio    = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const keyDiv   = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) return;  // Audio with corresponding key not found

    audio.currentTime = 0;
    audio.play();
    
    keyDiv.classList.add('playing');
}

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
