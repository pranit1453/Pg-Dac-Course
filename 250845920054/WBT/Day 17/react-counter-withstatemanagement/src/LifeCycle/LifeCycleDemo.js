/*
    In class components, we had lifecycle methods like componentDidMount,componentDidUpdate,and componentWillUnmount. 
    In functional components, we use useEffect to replicate these behaviors.
*/

import { useEffect } from "react";


const LifeCycleDemo = () => {

    //Runs once after the component mounts
    useEffect(() => {
        console.log('Component Is mounted')
        // Cleanup function runs before the component unmounts
        return () => {
            console.log('Component is unmounted')
        }
    }, [])

    useEffect(() => {
        // Runs every time the component re-renders
        console.log('component is updated')
    })
    return (
        <>
            <div>
                <h2>Checking About LifeCycle with Reference to Functional Component</h2>

            </div>
        </>
    )
}

export default LifeCycleDemo;

/*
              Working 

    useEffect(() => {}, []) → mimics componentDidMount

    useEffect(() => {}, [dependencies]) → similar to (mimics) componentDidUpdate

    return () => {} inside useEffect → mimics componentWillUnmount

*/