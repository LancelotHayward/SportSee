import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';


import "./SpiderGraph.scss"

function SpiderGraph() {
  const data = [
    {stat: "Intensité", level: 2},
    {stat: "Vitesse", level: 6},
    {stat: "Force", level: 4.5},
    {stat: "Endurance", level: 6},
    {stat: "Energie", level: 6},
    {stat: "Cardio", level: 2},
  ]
  return (
    <RadarChart outerRadius={90} width={260} height={260} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="stat" />
      <PolarRadiusAxis angle={30} domain={[0, 7]} />
      <Radar dataKey="level" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
    </RadarChart>
  )
}

export default SpiderGraph;