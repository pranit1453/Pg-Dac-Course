const UGComponent = ({ onChange, data }) => {
    return (
        <>
            <div>
                <label>SSC Score: <input type="text" name="ssc" value={data.ssc} onChange={onChange}></input></label><br/>
                <label>HSC Score: <input type="text" name="hsc" value={data.hsc} onChange={onChange}></input></label><br/>
            </div>
        </>
    )
}

export default UGComponent;