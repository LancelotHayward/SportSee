import { default_activity, default_session_lengths, default_stats } from "../services/defaultData"

export class User {
  #id
  #userInfos
  #keyData
  #score
  #todayScore
  #activity
  #session_lengths
  #performance
  constructor(id, userInfos, keyData, score = undefined, todayScore = undefined, activity = undefined, session_lengths = undefined, performance = undefined) {
    this.#id = id
    this.#userInfos = userInfos
    this.#keyData = keyData
    this.#score = score
    this.#todayScore = todayScore
    this.#activity = activity
    this.#session_lengths = session_lengths
    this.#performance = performance
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
  getPerformance() {
    let kindTranslations = [
      {
      kind: 1,
      translation: "Cardio"
      },
      {
        kind: 2,
        translation: "Energie"
      },
      {
        kind: 3,
        translation: "Endurance"
      },
      {
        kind: 4,
        translation: "Force"
      },
      {
        kind: 5,
        translation: "Vitesse"
      },
      {
        kind: 6,
        translation: "Intensité"
      }
    ]
    const performance = this.#performance || default_stats
    const performance_data = performance.map(stat => {
      const label = kindTranslations.find(translation => stat.kind === translation.kind).translation
      return {...stat, kind:label}
    })
    performance_data.reverse()
    return performance_data
  }
}