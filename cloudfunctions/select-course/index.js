// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

function updateElectiveCourse(course) {
  console.log(course)
  return cloud.database().collection('elective-course')
    .where({
      name: course
    })
    .update({
      data: {
        remains: cloud.database().command.inc(-1)
      }
    })
    .then(res => {
      return true
    })
    .catch(err => {
      return false
    })
}

function addSelectCourseStats(uid, course) {
  return cloud.database().collection('select-course-stats')
    .add({
      data: {
        uid: uid,
        course: course
      }
    })
    .then(res => {
      return true
    })
    .catch(err => {
      return false
    })
}

// 云函数入口函数
exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext()

  if (await updateElectiveCourse(event.course) === true && await addSelectCourseStats(event.uid, event.course) === true) {
    return true
  } else {
    return false
  }
}