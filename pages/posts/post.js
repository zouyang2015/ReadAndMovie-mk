Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/image/post/main_01.jpg',
      '/image/post/main_02.jpg',
      '/image/post/main_03.jpg',
      '/image/post/main_04.jpg',
      '/image/post/main_05.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,

    postLists: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let postLists = [
      {
        date: 'Nov 25 2016',
        title: '正是虾胖蟹壮时',
        imgSrc: '/image/avatar/1.png',
        mainSrc: '/image/post/crab.png',
        content: '正是虾胖蟹壮时,正是虾胖蟹壮时,正是虾胖蟹壮时,正是虾胖蟹壮时,正是虾胖蟹壮时,正是虾胖蟹壮时,正是虾胖蟹壮时,正是虾胖蟹壮时,正是虾胖蟹壮时',
        view_num: '92',
        collect_num: '112'
      },
      {
        date: 'Nov 25 2016',
        title: '正是虾胖蟹壮时',
        imgSrc: '/image/avatar/2.png',
        mainSrc: '/image/post/cat.png',
        content: '正是虾胖蟹壮时,正是虾胖蟹壮时,正是虾胖蟹壮时,正是虾胖蟹壮时,正是虾胖蟹壮时,正是虾胖蟹壮时,正是虾胖蟹壮时,正是虾胖蟹壮时,正是虾胖蟹壮时',
        view_num: '92',
        collect_num: '112'
      }
    ]
    this.setData({
      postLists
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('onShareAppMessage')
  }
})