import { BarChart, CartesianGrid, Tooltip, Legend, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import "./DailyActivity.scss"

function DailyActivity() {
    return (
        // <ResponsiveContainer width={"100%"} height={"100%"}>
            <BarChart width={730} height={250} data={[{day: "1", poids:"68", calories:"356"},{day: "2", poids:"65", calories:"400"}]}>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip/>
                <Legend />
                <XAxis dataKey="day"/>
                <Bar dataKey="poids" fill="#8884d8" />
                <Bar dataKey="calories" fill="#82ca9d" />
            </BarChart>
        // </ResponsiveContainer>
    )
}

export default DailyActivity