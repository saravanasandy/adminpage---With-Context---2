import { createContext, useState } from 'react';

let UserContext = createContext();




export const UserProvider = ({children})=>{
    const [username,setUsername] = useState("Saravana");
    const [userId,setuserId] = useState("");
   

    return (
        <UserContext.Provider value={{username,setUsername,userId,setuserId}}>
            {children}
        </UserContext.Provider>
    )
}



export default UserContext ;

// Context 
//  Provider 