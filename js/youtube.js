const tag = document.createElement('script')

tag.src = 'https://www.youtube.com/iframe_api'
const firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: '-uHlspyMIo0', // 최초 재생 유튜브 영상 ID
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: '-uHlspyMIo0', // 반복 재생할 유튜브 영상 ID
    },
    events: {
      onReady: function (event) {
        event.target.mute() // 음소거
      },
    },
  })
}
