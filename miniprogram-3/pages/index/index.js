Page({
  data: {
    imgUrls: [
      'https://dummyimage.com/360x170&text=1',
      'https://dummyimage.com/360x170&text=2',
      'https://dummyimage.com/360x170&text=3'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    loop:true,
    initialSlide: 0,

  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  getPhoneNumber: function(e) {
        console.log(e)
      }
  }
)
