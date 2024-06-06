import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
import "./Score.scss"

function Score({data}) {
    return (
        <div id="score">
            <RadialBarChart 
                width={260} 
                height={260} 
                innerRadius="90%" 
                outerRadius="100%" 
                data={[{score: data*100, fill: "#FF0000"}]} 
                startAngle={180} 
                endAngle={180-data*360}
        >       
                <RadialBar minAngle={0} background clockWise={true} dataKey='score' />
                {/* <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" /> */}
                <Tooltip />
            </RadialBarChart>
            <div id="score-text">
                <strong>{data*100}%</strong>
                <p>de votre objectif</p>
            </div>
        </div>
    )
}

export default Score