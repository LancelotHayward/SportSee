import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip } from 'recharts';
import "./Score.scss"

function Score({data}) {
    console.log(data)
    return (
        <div id="score">
            <p>Score</p>
            <RadialBarChart 
                width={260} 
                height={260} 
                innerRadius="60%" 
                outerRadius="73%" 
                data={[{score: data*100, fill: "#FF0000"}]} 
                startAngle={180} 
                endAngle={180-data*360}
            >       
                <RadialBar minAngle={0} background clockWise dataKey='score' cornerRadius={100}/>
            </RadialBarChart>
            <div id="score-text">
                <strong>{data*100}%</strong>
                <p>de votre objectif</p>
            </div>
        </div>
    )
}

export default Score