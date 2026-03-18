// pages/about/about.js
const config = require('../../config/config')
const { proxyImageUrl } = require('../../utils/imageProxy')

const imageProxyOptions = {
  domain: config.domain,
  imageProxyPrefix: config.getImageProxyPrefix,
  proxyImageHosts: config.getImageProxyHosts,
  forceProxyAllRemote: config.getForceProxyAllRemote
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: 'Rubbish',
    slogen: proxyImageUrl('https://www.rubbish.press/img/slogen.svg', imageProxyOptions),
    description: '这是Rubbish官方微信小程序，专注做无厘头、大众化、独树一帜又轻松解压的内容。我们虽不是传统意义上的学术期刊，却以期刊的态度做有趣内容。我们认同费曼所言：科研的奖赏是“发现的乐趣”，而非压力与负担，因此致力打造人人能看懂、对人有帮助、让学生开心、甚至看似疯癫的内容。从汉堡测评到铁锅炖、从趣味话题到失败实验，我们的内容未必严谨，却能让普通人收获快乐，让失败实验拥有价值。未来我们将持续推出好玩、有用、脑洞大开的内容，坚信论文不是科学的唯一，乐趣、好奇与应用同样重要。欢迎大家随心投稿，用兴趣与特长点亮平凡生活。'
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