// pages/teacherSubmit/teacherSubmit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['东湖区', '西湖区', '青云谱区', '青山湖区', '新建区', '红谷滩区', '南昌县', '安义县', '进贤县'],
    index: 0,
  },
  infoForm(data) {
    // console.log(data.detail.value)
    var data1 = data.detail.value;
    var title = data.detail.value.title;
    console.log(title)
    wx.request({
      url: 'http://localhost:8080/mvc_changeImge_war/user/getData', //仅为示例，并非真实的接口地址
      data: {
        data:data.detail.value
      },
      
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      },
      fail(res) {
        console.log(data1)
      }
      
    })
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})