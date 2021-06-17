
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


var audio_volume = 0.6
const slider = document.getElementById("volume__slider")
slider.oninput = (event) => {
    audio_volume = event.target.value/100
}


const playMusic = (path) => {
    const audio = new Audio(path)
    audio.play()
    audio.volume = audio_volume
}


var autoFlag = false
var autoMusicId;
const startAutoMusic = () => {
    const pads = ["w","a","s","d","j","k","l"]
    autoMusicId = setInterval(() => {
        const randomKey = pads[Math.floor(Math.random() * pads.length)]
        makeSound(randomKey)
        animate(randomKey)
    }, 200);
    
}


const autoStartBtn = document.getElementById("util__button-auto")
autoStartBtn.addEventListener("click", ()=> {
    if(autoFlag) {
        clearInterval(autoMusicId)
        autoFlag = false
        autoStartBtn.innerText = "Random Beats"
        autoStartBtn.classList.remove("auto_music_on")
    }
    else {
        startAutoMusic()
        autoFlag = true
        autoStartBtn.innerText = "Playing..."
        autoStartBtn.classList.add("auto_music_on")
    }
})

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