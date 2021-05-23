const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

exports.main = (event, context) => {
  const OPENID = event.userInfo.openId
  const account = cloud.database().collection('account')

  switch (event.trigger) {
    case 'onLoad':
      return account.where({
          openid: OPENID
        })
        .get()
        .then(res => {
          let data = res.data
          return data;
        })

    case 'loginByPsw':
      return account.where({
          uid: event.uid,
          password: event.password
        })
        .get()
        .then(res => {
          return res.data;
        })
  }
}