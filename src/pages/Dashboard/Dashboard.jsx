import { useParams } from "react-router-dom";
import { useState, useEffect} from 'react';

import "./Dashboard.scss"

import getData from "../../services/api.js"

import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import DailyActivity from "../../components/DailyActivity/DailyActivity.jsx"
import SessionLength from "../../components/SessionLength/SessionLength.jsx"
import SpiderGraph from "../../components/SpiderGraph/SpiderGraph.jsx"
import Score from "../../components/Score/Score.jsx"
import Metric from "../../components/Metric/Metric.jsx"

const nonMockedData = {
    "encouragement": "Félicitations ! Vous avez explosé vos objectifs hier 👏",
    "average_session": "68 min"
}

function Dashboard({data, performance, userID}) {
    const params = useParams()
    userID = params.userID
    const [userData, setData] = useState()
    useEffect(() => {
        async function getTheData() {
            setData(await getData(userID))
        }
        getTheData()
    }, [userID])
	return (
		<div id="dashboard">
			<Sidebar />
			<main>
				<section id="header">
					<p> Bonjour <strong>{userData?.getUserInfos().firstName}</strong></p>
					<p id="encouragement">{nonMockedData.encouragement}</p>
				</section>
                <section id="stats">
                    <div id="graphs">
                        <DailyActivity data={userData?.getActivity()}/>
                        <div id="three">
                            <SessionLength data={userData?.getSessionLengths()}/>
                            <SpiderGraph data={userData?.getPerformance()}/>
                            <Score data={userData?.getScore()}/>
                        </div>
                    </div>
                    <div id="metrics">
                        <Metric type="calories" count={userData?.getKeyData().calorieCount}/>
                        <Metric type="proteines" count={userData?.getKeyData().proteinCount}/>
                        <Metric type="glucides" count={userData?.getKeyData().carbohydrateCount}/>
                        <Metric type="lipides" count={userData?.getKeyData().lipidCount}/>
                    </div>
                </section>
			</main>
		</div>
	)
}

export default Dashboard
