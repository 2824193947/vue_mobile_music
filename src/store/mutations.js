const mutations = {
  setPlayingState (state, playing) {
    state.playing = playing
  },
  setSequenceList (state, list) {
    state.sequenceList = list
  },
  setPlaylist (state, list) {
    state.playlist = list
  },
  setPlayMode (state, mode) {
    state.playMode = mode
  },
  setCurrentIndex (state, index) {
    state.currentIndex = index
  },
  setFullScreen (state, fullScreen) {
    state.fullScreen = fullScreen
  },
  setFavoriteList (state, list) {
    state.favoriteList = list
  },

  // 缓存请求过的歌词
  addSongLyric (state, { song, lyric }) {
    state.sequenceList.map((item) => {
      if (item.mid === song.mid) {
        item.lyric = lyric
      }
      return item
    })
  },
  // 搜索历史
  setSearchHistory (state, searches) {
    state.searchHistory = searches
  },
  // 歌曲播放历史
  setPlayHistory (state, songs) {
    state.playHistory = songs
  }
}

export default mutations
