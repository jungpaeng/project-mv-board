const videoContainer: HTMLElement = document.getElementById('jsVideoPlayer')
const videoPlayer: HTMLVideoElement = document.querySelector('#jsVideoPlayer video')
const playBtn: HTMLElement = document.getElementById('jsPlayButton')
const volumeBtn: HTMLElement = document.getElementById('jsVolumeButton')
const fullScreenBtn: HTMLElement = document.getElementById('jsFullScreen')
const currentTime = document.getElementById('currentTime')
const totalTime = document.getElementById('totalTime')

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
  if (videoContainer['requestFullscreen']) {
    videoContainer['requestFullscreen']()
  } else if (videoContainer['mozRequestFullScreen']) {
    videoContainer['mozRequestFullScreen']()
  } else if (videoContainer['webkitRequestFullscreen']) {
    videoContainer['webkitRequestFullscreen']()
  } else if (videoContainer['msRequestFullscreen']) {
    videoContainer['msRequestFullscreen']()
  }

  fullScreenBtn.removeEventListener('click', toFullScreen)
  fullScreenBtn.addEventListener('click', toOriginalScreen)
  fullScreenBtn.innerHTML = '<i class="fas fa-compress"/>'
}

const toOriginalScreen = () => {
  fullScreenBtn.removeEventListener('click', toOriginalScreen)
  fullScreenBtn.addEventListener('click', toFullScreen)
  fullScreenBtn.innerHTML = '<i class="fas fa-expand"/>'

  if (document['exitFullscreen']) {
    document['exitFullscreen']()
  } else if (document['mozCancelFullScreen']) {
    document['mozCancelFullScreen']()
  } else if (document['webkitExitFullscreen']) {
    document['webkitExitFullscreen']()
  } else if (document['msExitFullscreen']) {
    document['msExitFullscreen']()
  }
}

const formatVideoTime = (totalSeconds: number) => {
  let hours = String(Math.floor(totalSeconds / 3600))
  let minutes = String(Math.floor((totalSeconds - Number(hours) * 3600) / 60))
  let seconds = String(totalSeconds - Number(hours) * 3600 - Number(minutes) * 60)

  if (Number(hours) < 10) { hours = `0${hours}` }
  if (Number(minutes) < 10) { minutes = `0${minutes}` }
  if (Number(seconds) < 10) { seconds = `0${seconds}` }

  return `${hours}:${minutes}:${seconds}`
}

const getCurrentTime = () => {
  const videoCurrentTime = Math.floor(videoPlayer.currentTime)
  const currentTimeStr = formatVideoTime(videoCurrentTime)
  currentTime.innerHTML = String(currentTimeStr)
}

const setTotalTime = () => {
  const videoTotalTime = Math.floor(videoPlayer.duration)
  const totalTimeStr = formatVideoTime(videoTotalTime)
  totalTime.innerHTML = totalTimeStr
}

const init = () => {
  videoPlayer.addEventListener('click', handlePlayClick)
  videoPlayer.addEventListener('loadedmetadata', setTotalTime)
  videoPlayer.addEventListener('loadedmetadata', () => {
    setInterval(getCurrentTime, 1000)
  })
  playBtn.addEventListener('click', handlePlayClick)
  volumeBtn.addEventListener('click', handleVolumeClick)
  fullScreenBtn.addEventListener('click', toFullScreen)
}

if (videoContainer) {
  init()
}
