 async function getData(userID) {
  const response = await fetch('http://localhost:3000/user/' + userID)
  const userData = await response.json()
  return userData
}

function getCalories() {
  
}

function getProteins() {

}

export default getData