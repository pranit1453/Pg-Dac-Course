import { useState } from "react";

const OrderedListData = () => {

    const [inputData, setInputData] = useState('');
    const [listItem, setListItem] = useState([]);
    function eventToHandle() {
        const items = inputData
            .split(',')  // used to split the string ','
            .map(items => items.trim())  // used to remove spaces
            .filter(items => items !== '') // used to filter out if there is any empty string
        setListItem(items) // gives the items
    }

    return (
        <>
            <div>
                <h2>Enter items: </h2>
                {/* onChange={(e) => setInputData(e.target.value)} ---> handling input changes in form elements. */}
                <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} placeholder="Apple, Banana, Mango, Grapes"></input>
                <pre>

                </pre>
                <button onClick={eventToHandle}>Output</button>
                <h2>Ordered List</h2>
                {listItem.length > 0 && (
                    <>
                        <h3>Required List: </h3>
                        <ol>
                            {listItem.map((items,index) => (
                                <li key={index}>{items}</li>
                            ))}
                        </ol>
                    </>
                )}
            </div>
        </>
    )
}

export default OrderedListData;