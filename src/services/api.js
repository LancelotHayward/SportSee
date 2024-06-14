import {User} from "../models/model.js"

export default async function getData(userID) {
  const url = 'http://localhost:3000/user/' + userID + "/"
  const userData = await getUserData(url)
  const userActivity = await getUserData(url + "activity")
  const userAverageSessions = await getUserData(url + "average-sessions")
  const userPerformance = await getUserData(url + "performance")
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