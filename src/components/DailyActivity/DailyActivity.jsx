import { BarChart, CartesianGrid, Tooltip, Legend, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import "./DailyActivity.scss"

function DailyActivity({data}) {
    return (
        // <ResponsiveContainer width={"100%"} height={"100%"}>
            <BarChart width={730} height={250} data={data}>
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