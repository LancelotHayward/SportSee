import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';


import "./SpiderGraph.scss"

function SpiderGraph() {
  return (
    <RadarChart outerRadius={90} width={730} height={250} data={[{ 'subject': 'a', 'key': 100, 'secondKey': 50, 'fullMark': 150 }]}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  )
}

export default SpiderGraph;