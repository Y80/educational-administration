const cloud = require('wx-server-sdk')
cloud.init( {env: cloud.DYNAMIC_CURRENT_ENV} )

var rst = {}

exports.main = (event) => {

  rst.event = event
  rst.message = "这条信息来自微信云服务😀"

  return rst
}