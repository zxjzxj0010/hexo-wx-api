/***
 * @Description: 主要的配置文件
 * @Author: Harry
 * @Date: 2021-09-04 17:01:59
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-09-11 20:06:49
 * @LastEditors: Harry
 */


//配置域名,域名只修改此处。可以配置为根域名 u.mr90.top/blog
const DOMAIN = "www.rubbish.press";
const WEBSITENAME = "Rubbish ｜ 落碑拾工作室"; //网站名称
const ZANIMAGEURL = '../../static/images/zanshang.jpg'; //微信鼓励的图片链接，用于个人小程序的赞赏
const LOGO = "../../static/images/logo-icon.png"; // 网站的logo图片
const ARTICLE_AUTHOR_NAME = "Harry" // 文章作者的名称
const ARTICLE_AUTHOR_img = "../../static/images/author.jpg" // 文章作者的头像,这里是相对于文章页的地址
const IMAGE_PROXY_PREFIX = "https://images.weserv.nl/?url=" // 远程图片代理地址, 解决部分图床 403 防盗链
const IMAGE_PROXY_HOSTS = ["img.rubbish.press"] // 命中这些域名会自动走代理
const FORCE_PROXY_ALL_REMOTE = false // true 时所有远程图片都走代理
//首页图标导航
//参数说明：'name'为名称，'image'为图标路径，'url'为跳转的页面，'redirecttype'为跳转的类型，apppage为本小程序的页面，miniapp为其他微信小程序,webpage为web-view的页面
//redirecttype 是 miniapp 就是跳转其他小程序  url 为其他小程序的页面
//redirecttype 为 apppage 就是跳转本小程序的页面，url为本小程序的页面路径
//'appid' 当redirecttype为miniapp时，这个值为其他微信小程序的appid，如果redirecttype为apppage，webpage时，这个值设置为空。
//'extraData'当redirecttype为miniapp时，这个值为提交到其他微信小程序的参数，如果redirecttype为apppage，webpage时，这个值设置为空。
const ISAD = {
  "enable": false,
  "bannerId": 'adunit-c9dae21126085de9'
};  // 是否开启广告

 const INDEXNAV = [
//  {
//   id: '5',
//   name: '搜索文章',
//   image: '../../static/icon/index/2.png',
//   url: '../discuss/discuss',
//   redirecttype: 'apppage',
//   appid: '',
//   extraData: ''
// },
// {
//   id: '7',
//   name: '问答讨论',
//   image: '../../static/icon/index/3.png',
//   url: '../list/list',
//   redirecttype: 'apppage',
//   appid: '',
//   extraData: ''
// },
// {
//   id: '10',
//   name: '关于我们',
//   image: '../../static/icon/index/4.png',
//   url: '../about/about',
//   redirecttype: 'apppage',
//   appid: '',
//   extraData: ''
//  }
 ];




export default {
  getDomain: DOMAIN,
  getWebsiteName: WEBSITENAME,
  getIndexNav: INDEXNAV,
  getZanImageUrl: ZANIMAGEURL,
  getLogo: LOGO,
  getAuthorname: ARTICLE_AUTHOR_NAME,
  getAuthorImg: ARTICLE_AUTHOR_img,
  getImageProxyPrefix: IMAGE_PROXY_PREFIX,
  getImageProxyHosts: IMAGE_PROXY_HOSTS,
  getForceProxyAllRemote: FORCE_PROXY_ALL_REMOTE,
  getAd: ISAD
}