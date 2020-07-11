new Vue({
  el: '#app',
  data: {
    // 現在日時
    current: new Date(),
  },
  // 起動時にタイマーを設定する
  created: function () {
    let that = this
    this.timer = setInterval(function () {
      that.current = new Date()
    }, 1000)
  },
  // 終了前にタイマーを破棄する
  beforeDestroy: function () {
    clearInterval(this.timer)
  },
})
