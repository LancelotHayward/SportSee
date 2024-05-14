import "./Dashboard.scss"

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

function Dashboard({data, performance}) {
	return (
		<div id="dashboard">
			<Sidebar />
			<main>
				<section id="header">
					<p> Bonjour <strong>{data.userInfos.firstName}</strong></p>
					<p id="encouragement">{nonMockedData.encouragement}</p>
				</section>
                <section id="stats">
                    <div id="graphs">
                        <DailyActivity/>
                        <div>
                            <SessionLength/>
                            <SpiderGraph/>
                            <Score/>
                        </div>
                    </div>
                    <div id="metrics">
                        <Metric type="calories" count={data.keyData.calorieCount}/>
                        <Metric type="proteines" count={data.keyData.proteinCount}/>
                        <Metric type="glucides" count={data.keyData.carbohydrateCount}/>
                        <Metric type="lipides" count={data.keyData.lipidCount}/>
                    </div>
                </section>
			</main>
		</div>
	)
}

export default Dashboard
