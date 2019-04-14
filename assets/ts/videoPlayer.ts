const videoContainer: HTMLElement = document.getElementById('jsVideoPlayer')
const videoPlayer: HTMLVideoElement = document.querySelector('#jsVideoPlayer video')
const playBtn: HTMLElement = document.getElementById('jsPlayButton')
const volumeBtn: HTMLElement = document.getElementById('jsVolumeButton')
const fullScreenBtn: HTMLElement = document.getElementById('jsFullScreen')

const handlePlayClick = () => {
  if (videoPlayer.paused) {
    videoPlayer.play()
    playBtn.innerHTML = '<i class="fas fa-pause"/>'
  } else {
    videoPlayer.pause()
    playBtn.innerHTML = '<i class="fas fa-play"/>'
  }
}

const handleVolumeClick = () => {
  if (videoPlayer.muted) {
    videoPlayer.muted = false
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"/>'
  } else {
    videoPlayer.muted = true
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"/>'
  }
}

const toFullScreen = () => {
  videoContainer.requestFullscreen()
  fullScreenBtn.removeEventListener('click', toFullScreen)
  fullScreenBtn.addEventListener('click', toOriginalScreen)
  fullScreenBtn.innerHTML = '<i class="fas fa-compress"/>'
}

const toOriginalScreen = () => {
  fullScreenBtn.removeEventListener('click', toOriginalScreen)
  fullScreenBtn.addEventListener('click', toFullScreen)
  fullScreenBtn.innerHTML = '<i class="fas fa-expand"/>'
  document.exitFullscreen()
}

const init = () => {
  videoPlayer.addEventListener('click', handlePlayClick)
  playBtn.addEventListener('click', handlePlayClick)
  volumeBtn.addEventListener('click', handleVolumeClick)
  fullScreenBtn.addEventListener('click', toFullScreen)
}

if (videoContainer) {
  init()
}
