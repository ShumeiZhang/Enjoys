// 整个项目组件
<script>
import {get, showSuccess} from './util'
import qcloud from 'wafer2-client-sdk'
import config from './config'

export default {
  async create () {
    let user = wx.getStorageSync('userinfo');
    if (!user) {
      // 设置登录地址
      qcloud.setLoginUrl(config.loginUrl);
      qcloud.login({
          success: function (userInfo) {
              console.log('登录成功', userinfo)
              showSuccess('登录成功')
              wx.setStorageSync('userinfo', userinfo)
          },
          fail: function (err) {
              // console.log('登录失败', err);
          }
      });
    }


    // const res = await get('weapp/demo')
    // console.log('mae ' + res)

    // wx.request({
    //   url: config.host + '/weapp/demo',
    //   success: function(res){
    //     // success
    //   }
    // })
    console.log('已启动')
  }
}
</script>

<style>
.text-footer{
  text-align: center;
  font-size: 12px;
  margin-bottom:5px;
}
.text-primary{
  color:#EA5149;
}
.page-title{
  padding-left:20px;
  background:#eee;
  line-height: 40px;
  font-size: 14px;
}
.right{
  float: right;
}
.btn{
  color:white;
  background:#EA5A49;
  margin-bottom: 10px;
  padding-left: 15px;
  padding-left: 15px;
  border-radius: 2px;
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  width: 100%;
}
.btn:active{
  background: #FA5A49;
}
</style>


