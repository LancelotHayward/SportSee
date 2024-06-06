import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import "./SessionLength.scss"

function SessionLength({data}) {
    return (
        <LineChart width={260} height={260} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="day" />
            {/* <YAxis /> */}
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="minutes" stroke="#8884d8" />
        </LineChart>
    )
}

export default SessionLength