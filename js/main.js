window.addEventListener("keydown", playSound);
const allKeys = Array.from(document.querySelectorAll(".key"));
allKeys.forEach(key => key.addEventListener("transitionend", removeTransition));

function playSound(e){
    // get the audio element.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    const key = document.querySelector(`section[data-key="${e.keyCode}"]`);
    key.classList.add("playing");
    audio.currentTime = 0; // reset time to play sound from beginning.
    audio.play();
}

function removeTransition(e){
    if(e.propertyName === "transform"){
        e.target.classList.remove("playing");
    }
}