import {User} from "../models/model.js"
import {mockData} from "../mocks/user18.js"

export default async function getData(userID, mock = false) {
  let userData, userActivity, userAverageSessions, userPerformance
  if (mock) {
    userData = mockData.userData
    userActivity = mockData.userActivity
    userAverageSessions = mockData.userAverageSessions
    userPerformance = mockData.userPerformance
  }
  else {
    const url = 'http://localhost:3000/user/' + userID + "/"
    userData = await getUserData(url)
    userActivity = await getUserData(url + "activity")
    userAverageSessions = await getUserData(url + "average-sessions")
    userPerformance = await getUserData(url + "performance")
  }
    return new User(
      userData.data.id, 
      userData.data.userInfos, 
      userData.data.keyData, 
      userData.data.score, 
      userData.data.todayScore, 
      userActivity.data.sessions, 
      userAverageSessions.data.sessions,
      userPerformance.data.data,
    )
}

async function getUserData(url) {
  const response = await fetch(url)
  return await response.json()
}