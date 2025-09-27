const GraduateComponent = ({ onChange, data }) => {
    return (
        <>
            <div>
                <label>Degree: <input type="text" name="degree" value={data.degree} onChange={onChange}></input></label><br/>
                <label>Year: <input type="text" name="year" value={data.year} onChange={onChange}></input></label><br/>
                <label>Final Year Score: <input type="text" name="score" value={data.score} onChange={onChange}></input></label><br/>
                <label>University: <input type="text" name="univ" value={data.univ} onChange={onChange}></input></label><br/>
            </div>
        </>
    )
}

export default GraduateComponent;