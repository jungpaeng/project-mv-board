const videoContainer: HTMLElement = document.getElementById('jsVideoPlayer')
const videoPlayer: HTMLVideoElement = document.querySelector('#jsVideoPlayer video')
const playBtn: HTMLElement = document.getElementById('jsPlayButton')

const handlePlayClick = () => {
  if (videoPlayer.paused) {
    videoPlayer.play()
    playBtn.innerHTML = '<i class="fas fa-pause"/>'
  } else {
    videoPlayer.pause()
    playBtn.innerHTML = '<i class="fas fa-play"/>'
  }
}

const init = () => {
  playBtn.addEventListener(
    'click',
    handlePlayClick
  )
}

if (videoContainer) {
  init()
}
