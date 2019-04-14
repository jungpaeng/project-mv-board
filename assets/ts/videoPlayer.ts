const videoContainer: HTMLElement = document.getElementById('jsVideoPlayer')
const videoPlayer: HTMLVideoElement = document.querySelector('#jsVideoPlayer video')
const playBtn: HTMLElement = document.getElementById('jsPlayButton')
const volumnBtn: HTMLElement = document.getElementById('jsVolumnButton')

const handlePlayClick = () => {
  if (videoPlayer.paused) {
    videoPlayer.play()
    playBtn.innerHTML = '<i class="fas fa-pause"/>'
  } else {
    videoPlayer.pause()
    playBtn.innerHTML = '<i class="fas fa-play"/>'
  }
}

const handleVolumnClick = () => {
  if (videoPlayer.muted) {
    videoPlayer.muted = false
    volumnBtn.innerHTML = '<i class="fas fa-volume-up"/>'
  } else {
    videoPlayer.muted = true
    volumnBtn.innerHTML = '<i class="fas fa-volume-mute"/>'
  }
}

const init = () => {
  videoPlayer.addEventListener('click', handlePlayClick)
  playBtn.addEventListener('click', handlePlayClick)
  volumnBtn.addEventListener('click', handleVolumnClick)
}

if (videoContainer) {
  init()
}
