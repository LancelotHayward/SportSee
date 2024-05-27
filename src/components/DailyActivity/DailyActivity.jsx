import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
import "./DailyActivity.scss"

function DailyActivity() {
    return (
        <BarChart width={730} height={250} data={{ name: 'a', value: [5, 12] }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Poids" fill="#8884d8" />
            <Bar dataKey="Calories" fill="#82ca9d" />
        </BarChart>
    )
}

export default DailyActivity