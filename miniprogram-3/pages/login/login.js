var that
Page({
  data: {
    userInfo:{},
    hasUserInfo: false,
    canIUse: false,
    token:'',
    userId:'',
    detail_iv:'',
    detail_encryptedData:'',
    },
  onLoad: function () {
    that=this
  },
  //授权登陆
  getUserProfile() {
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: res => {
        this.setData({
          userInfo: res.userInfo,
        })
        //登陆发送code
        wx.login({
          success(res) {
            if (res.code) {
              //发起网络请求
              wx.request({
                url: 'http://47.102.85.82:8090/wxminiapp/wx/auth/loginByWeixin',
                method: 'POST',
                data: {
                  code: res.code
                },
                header: {
                  'content-type': 'application/json', // 默认值
                },
                success(res) {
                  that.setData({
                    token:res.data.data.token,
                    userId:res.data.data.userId,
                  })
                  wx.setStorageSync('sessionKey', res.data.data.token)
                  wx.navigateTo({   //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）后续可以使用wx.navigateBack 可以返回;
                    url:"/pages/index/index"
                  })

                },
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
      }
    })
  }

})