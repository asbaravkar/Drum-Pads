var image_url;
const api_call = () => {
    const URL = 'https://api.unsplash.com/photos/random?query=drum'
    fetch(URL, {
        headers : {
            'Authorization' : 'Client-ID 3KwYJC8ztFLH-Ypp3Q0bKexakRc85lAwFlfQi4mVUd0'
        }
    }).then(res => res.json()).then(res => {image_url=res.urls.small; change_background(image_url)}).catch(err=>console.log(err))
}
api_call()


const change_background = (image_src) => {
    let container_style = document.getElementsByClassName("container")[0].style
    let bg_color = getComputedStyle(document.documentElement).getPropertyValue("--background_low")
    container_style.background = `linear gradient(300deg, ${bg_color}, ${bg_color}), url(${image_src})`

}


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


//theme-1
const theme_1__background = "#091921"
const theme_1__background_low = "rgba(9,25,33,0.8)"
const theme_1__text = "#00fff1"

//theme-2
const theme_2__background = "#f7c340"
const theme_2__background_low = "rgba(247,195,64,0.85)"
const theme_2__text = "#2d2d2d"


const changeTheme = (theme) => {
    let root = document.documentElement
    if(theme === "theme_1") {
        root.style.setProperty("--background", theme_1__background)
        root.style.setProperty("--background_low", theme_1__background_low)
        root.style.setProperty("--text", theme_1__text)
    } else {
        root.style.setProperty("--background", theme_2__background)
        root.style.setProperty("--background_low", theme_2__background_low)
        root.style.setProperty("--text", theme_2__text)
    }
}


var curr_theme = "theme_1"
const themeChanger = document.getElementById("util__button-theme")
themeChanger.addEventListener("click", (e)=> {
    themeChanger.classList.add("change_theme__pressed")
    setInterval(()=>{
        themeChanger.classList.remove("change_theme__pressed")
    }, 200)
    if(curr_theme==="theme_1") {
        changeTheme("theme_2")
        curr_theme = "theme_2"
    } else {
        changeTheme("theme_1")
        curr_theme = "theme_1"
    }
})