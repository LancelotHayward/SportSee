import { default_activity, default_session_lengths, default_stats } from "../services/defaultData"

export class User {
  #id
  #userInfos
  #keyData
  #score
  #todayScore
  #activity
  #session_lengths
  #stats
  constructor(id, userInfos, keyData, score = undefined, todayScore = undefined, activity = undefined, session_lengths = undefined, stats = undefined) {
    this.#id = id
    this.#userInfos = userInfos
    this.#keyData = keyData
    this.#score = score
    this.#todayScore = todayScore
    this.#activity = activity
    this.#session_lengths = session_lengths
    this.#stats = stats
  }

  getId() {
    return this.#id
  }
  getUserInfos() {
    return this.#userInfos
  }
  getKeyData() {
    return this.#keyData
  }
  getScore() {
    if (this.#score === undefined) {
      return this.#todayScore
    }
    return this.#score
  }
  getActivity() {
    if (this.#activity === undefined) {
      return default_activity
    }
    return this.#activity
  }
  getSessionLengths() {
    if (this.#session_lengths === undefined) {
      return default_session_lengths
    }
    return this.#session_lengths
  }
  getStats() {
    if (this.#stats === undefined) {
      return default_stats
    }
    return this.#stats
  }
}