function LengthToolTip({active, payload, label}) {
    if (active && payload && payload.length) {
        return (
            <p className="label">
                {`${payload[0].value} min`}
            </p>
        )
    }
    return null
}

export default LengthToolTip