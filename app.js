// 1) Play the audio when i click on play icon

// identify the audio file

const myAudioFile = document.querySelector("audio")//<audio src="audios/audio1.mp3"></audio>

const myPlayButton = document.querySelector("#play")

// perform which event ==> click 

// Logic to handle both play and pause 

// When the audio is playing, we should change play icon to pause icon

let isAudioPlaying = false

function playAudio()
{
    myAudioFile.play()
    //Logic to change from play icon to pause icon
    // change the class fa-play to fa-pause
    // classlist will target the class
    myPlayButton.classList.replace("fa-play", "fa-pause")
    isAudioPlaying = true
}

function pauseAudio()
{
    myAudioFile.pause()
    myPlayButton.classList.replace("fa-pause", "fa-play")
    isAudioPlaying = false
}

myPlayButton.addEventListener("click", function()
{
    if(isAudioPlaying)
    {
        pauseAudio()
    }  
    else
    {
        playAudio()
    }
})

const songsData = [
    {
        imageName: "image2.jpg",
        audioName: "audio2.mp3",
        songName: "Pagliaro Pagliaro",
        singerName: "John Atkinson"
    },
    {
        imageName: "image3.jpg",
        audioName: "audio3.mp3",
        songName: "Sleeping Man",
        singerName: "Mark Waugh"
    },
    {
        imageName: "image4.jpg",
        audioName: "audio4.mp3",
        songName: "Rample in the Sky",
        singerName: "Justin Beiber"
    }
]

// I want to load the first song which is present inside the array, when i click on 
// forward button

// info = {
//     imageName: "image2.jpg",
//     audioName: "audio2.mp3",
//     songName: "Pagliaro Pagliaro",
//     singerName: "John Atkinson"
// }

const myImage = document.querySelector("img")
const mySongName = document.querySelector("h2")
const mySingerName = document.querySelector("h3")
const myForwardIcon = document.querySelector("#forward")

function loadSong(info)
{
    myImage.src = `images/${info.imageName}`//image2.jpg
    myAudioFile.src = `audios/${info.audioName}`
    mySongName.textContent = `${info.songName}`
    mySingerName.textContent = `${info.singerName}`

}

let songIndex = 0

myForwardIcon.addEventListener("click", function()
{
    if(songIndex > songsData.length - 1)
    {
        songIndex = 0
    }

    loadSong(songsData[songIndex])
     //Play the audio
     playAudio()
    songIndex++
})



// When i click on forward button or backward button 
// 1) Image should change
// 2) Song name
// 3) Singer name
// 4) Audio file

// 10:50

// Focus on Forward Button 

// We need to get the exact value of currenttime and totalduration for a audio file

const myTotalDuration = document.querySelector(".totalduration")
const myCurrentTimee = document.querySelector(".currenttime")

myAudioFile.addEventListener("timeupdate", function(output)
{
    let myCurrentTime = output.srcElement.currentTime
    let myDuration = output.srcElement.duration//193 seconds ==> 3 min 13 seconds

    // lets focus on duration 
    // convert seconds to minutes ==> / 60
    
    let durationInMinutes = Math.floor(myDuration / 60)//Minutes
    let durationInRemainingSeconds = Math.floor(myDuration % 60)//After dividing it gives the Remainder
    
    let totalDuration = `${durationInMinutes}:${durationInRemainingSeconds}`

    myTotalDuration.textContent = totalDuration


    let currentTimeInMinutes = Math.floor(myCurrentTime / 60)//Minutes
    let currentTimeInRemainingSeconds = Math.floor(myCurrentTime % 60)//After dividing it gives the Remainder
    
    if(currentTimeInRemainingSeconds < 10)
    {
        currentTimeInRemainingSeconds = `0${currentTimeInRemainingSeconds}`
    }

    let actualCurrentTime = `${currentTimeInMinutes}:${currentTimeInRemainingSeconds}`

    myCurrentTimee.textContent = actualCurrentTime

})