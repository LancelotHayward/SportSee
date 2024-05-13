import "./Dashboard.scss"

import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import DailyActivity from "../../components/DailyActivity/DailyActivity.jsx"
import SessionLength from "../../components/SessionLength/SessionLength.jsx"
import SpiderGraph from "../../components/SpiderGraph/SpiderGraph.jsx"
import Score from "../../components/Score/Score.jsx"
import Metric from "../../components/Metric/Metric.jsx"

function Dashboard() {
    const username = "Thomas"
    const encouragement = "Félicitations ! Vous avez explosé vos objectifs hier 👏"
    const calories = "1,930kCal"
    const proteines = "155g"
    const glucides = "290g"
    const lipides = "50g"
    
	return (
		<div id="dashboard">
			<Sidebar />
			<main>
				<section id="header">
					<p> Bonjour <strong>{username}</strong></p>
					<p id="encouragement">{encouragement}</p>
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
                        <Metric type="calories" count={calories}/>
                        <Metric type="proteines" count={proteines}/>
                        <Metric type="glucides" count={glucides}/>
                        <Metric type="lipides" count={lipides}/>
                    </div>
                </section>
			</main>
		</div>
	)
}

export default Dashboard
