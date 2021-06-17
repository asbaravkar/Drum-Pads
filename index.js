
const animate = (key) => {
    const currKey = document.querySelector(`.${key}`)
    currKey.classList.add("pressed")
    // console.log(currKey);
    setTimeout(()=>{
        currKey.classList.remove("pressed")
    }, 75)
}


document.addEventListener("keypress", (event)=> {
    const triggeredKey = event.key
    makeSound(triggeredKey)
    animate(triggeredKey)
})

const playMusic = (path) => {
    const audio = new Audio(path)
    audio.play()
}


const makeSound = (key) => {
    switch(key) {
        case "w":playMusic("sounds/sounds_sound-1.mp3"); break;
        case "a":playMusic("sounds/sounds_sound-2.mp3"); break;
        case "s":playMusic("sounds/sounds_sound-3.mp3"); break;
        case "d":playMusic("sounds/sounds_sound-4.mp3"); break;
        case "j":playMusic("sounds/sounds_sound-5.mp3"); break;
        case "k":playMusic("sounds/sounds_sound-6.mp3"); break;
        case "l":playMusic("sounds/sounds_sound-7.mp3"); break;
        default:console.log("Wrong button pressed!");
    }
}

const handleClickDrum = (event) => {
    var innerHTML = event.target.innerHTML
    // console.log(innerHTML);
    animate(innerHTML)
    makeSound(innerHTML)
}

var btnAr = document.querySelectorAll(".pads")

for(let i=0; i<btnAr.length; i++) {
    btnAr[i].addEventListener("click", handleClickDrum)
}