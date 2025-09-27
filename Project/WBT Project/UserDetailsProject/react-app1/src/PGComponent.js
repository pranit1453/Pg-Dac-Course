const PGComponent = ({ onChange, data, errors }) => {
    return (
        <>
            <div>
                <label>Year: <input type="text" name="pgyear" value={data.pgyear} onChange={onChange}></input></label>
                 {/* {errors.pgyear && <span className="error">{errors.pgyear}</span>}<br/> */}<br/>
                <label>Thesis Subject: <input type="text" name="thesis" value={data.thesis} onChange={onChange}></input></label>
                 {/* {errors.thesis && <span className="error">{errors.thesis}</span>}<br/> */}<br/>
            </div>
        </>
    )
}

export default PGComponent;