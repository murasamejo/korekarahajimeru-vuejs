let app = new Vue({
  el: '#app',
  data: function () {
    return {
      author: {
        name: '山田',
      },
    }
  },
  created: function () {
    let that = this
    this.timer = setTimeout(function () {
      // 次の行をコメントアウトすると、HTML上に author.company は反映されない（検知できないから）
      // that.author.name = 'Y. YAMADA'
      that.author.company = 'WINGSプロジェクト'
    }, 3000)
  },
  beforeDestroy: function () {
    clearInterval(this.timer)
  },
})

// 上記のリアクティブシステムの制約を回避する一つの方法は Vue.set を使う方法になる
// Vue.set(that.author, 'company', 'WINGSプロジェクト')
// Vue.set の反対で、Vue.remove を使うと、削除できる
