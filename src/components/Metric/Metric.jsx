import "./Metric.scss"

function getUnit(type) {
    if (type === "calories") {
        return "kCal"
    }
    return "g"
}

function Metric({type, count}) {
    const icon_source = "metric-" + type + ".png"
    return (
        <div className="Metric">
            <img src={icon_source} alt={type + " icon"}/>
            <div>
                <strong>{count + getUnit(type)}</strong>
                <p>{type}</p>
            </div>
        </div>
    )
}

export default Metric