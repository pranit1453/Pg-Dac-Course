import { useEffect, useState } from "react";

const CounterTable = () => {

    const [count, setCount] = useState(0)
    const [tableData, setTableData] = useState([])  //[] empty array

    useEffect(() => {
        if (count > 0) {
            setTableData(
                prevData => [...prevData, { id: count, value: count }]
            )
        }
    }, [count]) // Dependency array ensures this runs only when count get changes

    function clickHandle() {
        setCount(count + 1)
    }
    return (
        <>
            <div>
                <h1>Table Counter</h1>
                <h3>Table Counter:{count}</h3>
                <button onClick={clickHandle}>Click to Display</button>

                {/* Display table only if there's data */}
                {tableData.length > 0 && (
                    <table >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Without the parentheses () or an explicit return, the arrow function doesn't return anything,
                            so React doesn't render the rows.
                            {<arrName>.map(()=>())} */}
                            {tableData.map((row) => (
                                // key={row.id} is essential for React reconciliation process to optimize rendering. 
                                // Unique Identification.
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>{row.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    )
}

export default CounterTable;

/*
                Message

    useEffect is watching count. Every time count changes, it adds a new row to the table.

    setTableData([...prevData, { id: count, value: count }]) appends the new counter value.

    The table is conditionally rendered only if there's data.
*/