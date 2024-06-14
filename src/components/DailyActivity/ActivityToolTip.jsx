function ActivityToolTip({active, payload, label}) {
    if (active && payload && payload.length) {
        return (
            <div className="label">
                <p>{`${payload[0].value}kg`}</p>
                <p>{`${payload[1].value}Kcal`}</p>
            </div>
        )
    }
    return null
}

export default ActivityToolTip