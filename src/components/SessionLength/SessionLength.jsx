import { LineChart, XAxis,Tooltip, Legend, Line } from 'recharts';
import LengthToolTip from "./LengthToolTip.jsx"
import "./SessionLength.scss"

function SessionLength({data}) {
    return (
        <div id="session-length">
            <p id="session-header">Durée moyenne des sessions</p>
            <LineChart width={260} height={260} data={data}
                dot={{r:2}}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="day" axisLine={false} stroke="rgba(255, 255, 255, 1)"/>
                <Tooltip content={<LengthToolTip/>}/>
                <Legend />
                <Line type="monotone" dataKey="sessionLength" stroke="white" dot={<div></div>}/>
            </LineChart>
        </div>
    )
}

export default SessionLength