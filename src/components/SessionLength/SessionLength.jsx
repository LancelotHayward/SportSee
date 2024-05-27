import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import "./SessionLength.scss"

function SessionLength() {
    return (
        <LineChart width={730} height={250} data={{name: 'a', value: 12}}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Durée" stroke="#8884d8" />
        </LineChart>
    )
}

export default SessionLength