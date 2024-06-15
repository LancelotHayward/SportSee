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
    return this.#score || this.#todayScore
  }
  getActivity() {
    return this.#activity.map(activity => {
      return {...activity, day:activity.day.substring(9,10)}
    })
  }
  getSessionLengths() {
    const days = ["L", "M", "M", "J", "V", "S", "D"]
    return this.#session_lengths.map(session => {
      return {...session, day:days[session.day-1]}
    })
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
    const performance = this.#performance.map(stat => {
      const label = kindTranslations.find(translation => stat.kind === translation.kind).translation
      return {...stat, kind:label}
    })
    performance.reverse()
    return performance
  }
}