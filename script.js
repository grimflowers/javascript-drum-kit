function removeTransition(event) {
    const keyDiv = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if(keyDiv) {
        keyDiv.classList.remove('playing');
    }
}

function playSound(event) {
    if (event.repeat) {return}

    const audio  = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const keyDiv = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) return;  // Audio with corresponding key not found

    audio.currentTime = 0;
    audio.play();
    
    keyDiv.classList.add('playing');
}

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeTransition);
