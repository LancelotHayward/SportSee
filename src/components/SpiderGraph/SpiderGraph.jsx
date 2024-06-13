import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';


import "./SpiderGraph.scss"

function SpiderGraph({data}) {
  return (
    <div id="spidergraph">
      <RadarChart outerRadius={75} width={260} height={260} data={data}>
      <PolarGrid stroke='#FFF' strokeWidth={2} gridType='polygon' radialLines={false} polarRadius={[5 ,15 , 25, 38 , 50]}/>
      <PolarAngleAxis dataKey="stat" stroke="white" tickLine="100px"/>
      <PolarRadiusAxis domain={[0, 7]} tick={false}/>
      <Radar dataKey="level" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </div>
  )
}

export default SpiderGraph;