import "./Metric.scss"

function Metric({type, count}) {
    const icon_source = "metric-" + type + ".png"
    return (
        <div className="Metric">
            <img src={icon_source} alt={type}/>
            <div>
                <strong>{count}</strong>
                <p>{type}</p>
            </div>
        </div>
    )
}

export default Metric