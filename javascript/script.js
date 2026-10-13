//get DOM elements
const openBtn = document.getElementById('openVideo');
const closeBtn = document.getElementById('closeVideo');
const overlay = document.getElementById('videoPopup');
const video = document. getElementById('myVideo');


//Function to open click box and autoplay
openBtn.addEventListener('click', ()=>{
    overlay.classList.add('open');
    video.play();
})

//Function to close the click box and stop the video
closeBtn.addEventListener('click', ()=>{
    overlay.classList.remove('open');
    video.pause();
    video.currentTime=0;
})

overlay.addEventListener('click', (e)=>{
    if(e.target===overlay){
        overlay.classList.remove('open');
        video.pause();
        video.currentTime=0;
    }
})