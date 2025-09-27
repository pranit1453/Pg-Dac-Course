const UGComponent = ({ onChange, data ,errors}) => {
    return (
        <>
            <div>
                <label>SSC Score: <input type="text" name="ssc" value={data.ssc} onChange={onChange}></input></label>
                 {/* {errors.ssc && <span className="error">{errors.ssc}</span>}<br/> */}<br/>
                <label>HSC Score: <input type="text" name="hsc" value={data.hsc} onChange={onChange}></input></label>
                 {/* {errors.hsc && <span className="error">{errors.hsc}</span>}<br/> */}<br/>
            </div>
        </>
    )
}

export default UGComponent;