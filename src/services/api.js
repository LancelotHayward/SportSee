import {User} from "../models/model.js"

export default async function getData(userID) {
    const response = await fetch('http://localhost:3000/user/' + userID)
    const userData = await response.json()
    return new User(userData.data.id, userData.data.userInfos, userData.data.keyData, userData.data.score, userData.data.todayScore)
  }