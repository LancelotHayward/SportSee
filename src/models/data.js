import { useParams } from "react-router-dom";
import { useState, useEffect} from 'react';

function GetData(data) {
    const params = useParams()
    const userID = params.userID
    const [userData, setData] = useState(data)
    useEffect(() => {
      fetch('http://localhost:3000/user/' + userID)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error))
    }, [userID])
    console.log(userData)
}

export default GetData