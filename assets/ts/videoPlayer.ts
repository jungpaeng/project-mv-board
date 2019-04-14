const videoContainer: HTMLElement = document.getElementById('jsVideoPlayer')
const videoPlayer: HTMLVideoElement = document.querySelector('#jsVideoPlayer video')
const playBtn: HTMLElement = document.getElementById('jsPlayButton')

const handlePlayClick = () => {
  if (videoPlayer.paused) {
    videoPlayer.play()
  } else {
    videoPlayer.pause()
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
