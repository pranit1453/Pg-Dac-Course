const PGComponent = ({ onChange, data }) => {
    return (
        <>
            <div>
                <label>Year: <input type="text" name="pgyear" value={data.pgyear} onChange={onChange}></input></label><br/>
                <label>Thesis Subject: <input type="text" name="thesis" value={data.thesis} onChange={onChange}></input></label><br/>
            </div>
        </>
    )
}

export default PGComponent;