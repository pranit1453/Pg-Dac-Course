const GraduateComponent = ({ onChange, data, errors }) => {
    return (
        <>
            <div>
                <label>Degree: <input type="text" name="degree" value={data.degree} onChange={onChange}></input></label>
                 {/* {errors.degree && <span className="error">{errors.degree}</span>}<br/> */}<br/>
                <label>Year: <input type="text" name="year" value={data.year} onChange={onChange}></input></label>
                 {/* {errors.year && <span className="error">{errors.year}</span>}<br/> */}<br/>
                <label>Final Year Score: <input type="text" name="score" value={data.score} onChange={onChange}></input></label>
                 {/* {errors.score && <span className="error">{errors.score}</span>}<br/> */}<br/>
                <label>University: <input type="text" name="univ" value={data.univ} onChange={onChange}></input></label>
                 {/* {errors.univ && <span className="error">{errors.univ}</span>}<br/> */}<br/>
            </div>
        </>
    )
}

export default GraduateComponent;