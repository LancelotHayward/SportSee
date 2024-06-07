import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';


import "./SpiderGraph.scss"

function SpiderGraph({data}) {
  return (
    <div id="spidergraph">
      <RadarChart outerRadius={90} width={260} height={260} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="stat" />
      <PolarRadiusAxis angle={30} domain={[0, 7]} />
      <Radar dataKey="level" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </div>
  )
}

export default SpiderGraph;