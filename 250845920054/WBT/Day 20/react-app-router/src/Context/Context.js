import { createContext } from "react";

export const MyContext = createContext();
export const MyProvider=({children})=>{

    const user={
        name:"Pranit",
        age:22,
        isLoggedIn:false,
        currentLocation:"Pune"
    }
    return( 
        <>
        <MyContext.Provider value={user}>
            {children}
            </MyContext.Provider>
        </>
    )
}

