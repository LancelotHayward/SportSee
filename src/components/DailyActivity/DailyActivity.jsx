import { BarChart, CartesianGrid, Tooltip, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import ActivityToolTip from "./ActivityToolTip.jsx"
import "./DailyActivity.scss"

function DailyActivity({data}) {
    return (
        <div id="daily-activity">
            <div id="daily-header">
                <p>Activité quotidienne</p>
                <div>
                    <div className="black dot">Poids (kg)</div>
                    <div className="red dot">Calories brûlées (kCal)</div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
				<BarChart data={data} barSize={7} barGap={8}>
					<CartesianGrid strokeDasharray="3" vertical={false} />
					<XAxis
						dataKey="day"
						tick={{ fill: '#9B9EAC' }}
						tickLine={false}
						stroke="#DEDEDE"
						strokeWidth={2}
						tickMargin={16}
						
					/>
					<YAxis
						yAxisId="kilogram"
						orientation="right"
						tickMargin={30}
						tick={{ fill: '#9B9EAC' }}
						tickLine={false}
						axisLine={false}
						domain={['dataMin-2', 'dataMax+1']}
						tickCount={3}
					/>
					<YAxis hide yAxisId="calories" />
					<Tooltip
						cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
						content={<ActivityToolTip/>}
					/>
					<Bar
						
						dataKey="kilogram"
						yAxisId="kilogram"
						fill="#282D30"
						radius={[3, 3, 0, 0]}
					/>
					<Bar
						
						dataKey="calories"
						yAxisId="calories"
						fill="#E60000"
						radius={[3, 3, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
        </div>
    )
}

export default DailyActivity