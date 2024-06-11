import { BarChart, CartesianGrid, Tooltip, Legend, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import "./DailyActivity.scss"

function DailyActivity({data}) {
    return (
        <div id="daily-activity">
            <div id="daily-header">
                <p>Activité quotidienne</p>
                <div>
                    <div class="black dot">Poids (kg)</div>
                    <div class="red dot">Calories brûlées (kCal)</div>
                </div>
            </div>
            {/* <ResponsiveContainer width={"100%"} height={"100%"}> */}
                <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip/>
                    <XAxis dataKey="day" axisLine={false} />
                    <YAxis orientation='right' axisLine={false} //domain={[69, 71]}/>
                    />
                    <Bar dataKey="poids" fill="#282D30" radius={[10, 10, 0, 0]} barSize={10}/>
                    <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} barSize={10}/>
                </BarChart>
            {/* </ResponsiveContainer> */}
        </div>
    )
}

export default DailyActivity