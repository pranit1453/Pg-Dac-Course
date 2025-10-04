import { useContext } from "react";
import { MyContext } from "./Context";
const Profile=()=>{

    const user = useContext(MyContext);
    return(
        <>
        <h2>Profile</h2>
        <p>Name:{user.name}</p>
        <p>Age: {user.age}</p>
        <p>isLoggedIn:{user.isLoggedIn}</p>
        <p>currentLocation:{user.currentLocation}</p>
        <p></p>
        </>
    )
}

export default Profile;