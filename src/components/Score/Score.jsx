import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
import "./Score.scss"

function Score({data}) {
    return (
        <RadialBarChart 
            width={260} 
            height={260} 
            innerRadius="10%" 
            outerRadius="80%" 
            data={[{score: data}]} 
            startAngle={180} 
            endAngle={0}
        >   
            <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='score' />
            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
            <Tooltip />
        </RadialBarChart>
    )
}

export default Score