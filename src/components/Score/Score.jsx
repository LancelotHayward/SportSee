import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip } from 'recharts';
import "./Score.scss"

function Score({data}) {
    return (
        <div id="score">
            <p>Score</p>
            {/* <ResponsiveContainer width="70%" height="70%"> */}
                <RadialBarChart 
                    width={260} 
                    height={260} 
                    innerRadius="85%" 
                    outerRadius="100%" 
                    data={[{score: data*100, fill: "#FF0000"}]} 
                    startAngle={90} 
                    endAngle={450}
                >       
                {/* <RadialBar
						data={[{ value: 1 }]}
						dataKey="score"
						barSize={170}
						fill="#FFF"
						isAnimationActive={false}
					/> */}
                    <RadialBar minAngle={0} background clockWise={true} dataKey='score' cornerRadius={100}/>
                {/* <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" /> */}
                    <Tooltip />
                </RadialBarChart>
            {/* </ResponsiveContainer> */}
            <div id="score-text">
                <strong>{data*100}%</strong>
                <p>de votre objectif</p>
            </div>
        </div>
    )
}

export default Score