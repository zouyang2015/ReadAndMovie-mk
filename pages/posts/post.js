var postData = require('../../data/posts-data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/post/main_01.jpg',
      '/images/post/main_02.jpg',
      '/images/post/main_03.jpg',
      '/images/post/main_04.jpg',
      '/images/post/main_05.jpg'
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
    
    this.setData({
      postLists: postData.postList
    })
  },
  goDetail(event) {
    let postId = event.currentTarget.dataset.postid
    wx.navigateTo({
      url: 'post-detail/post-detail',
    })
  }
})