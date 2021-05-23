// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

const request = require("request");

exports.main = async (event, context) => {
  var objPromise = new Promise( async (resolve, reject) => {
    await request('https://gitee.com/okii/COR/raw/master/test.json', (err, rsp, body) => {
      if (err) {
        reject(err)
      } else {
        resolve(body)
      }
    })
  })

  return objPromise
}

// exports.main = async (event, context) => {
//   var a = new Promise((resolve, reject) => {
//     // 在 3 秒后返回结果给调用方（小程序 / 其他云函数）
//     setTimeout(() => {
//       resolve(false)
//     }, 3000)
//   })

//   console.log(a)
//   console.log(a)
//   return a
// }