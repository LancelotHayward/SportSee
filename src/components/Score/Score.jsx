import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
import "./Score.scss"

function Score() {
    return (
        <RadialBarChart 
            width={260} 
            height={260} 
            innerRadius="10%" 
            outerRadius="80%" 
            data={{name: 'uv', value: 12}} 
            startAngle={180} 
            endAngle={0}
        >   
            <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
            <Tooltip />
        </RadialBarChart>
    )
}

export default Score