import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../UserContext';

const UserView2 = () => {
    let context = useContext(UserContext);
      
          const [UserDate,setUserData] = useState({});
  
          useEffect(()=>{
            loaderUser();
          },[context.userId])
  
          let loaderUser = async ()=>{
            try {
          let user =   await axios.get(`https://6411ca9a37c88aa434a1bc78.mockapi.io/users/${context.userId}`)
              console.log(user.data);
              setUserData(user.data);
            } catch (error) {
              
            }    
            
          }
  
    return (
      <div className='user-card'>
      
        <h2 style={{color:"yellowgreen"}}>{context.userId}</h2> 
        <h2 style={{color:"green"}}>{UserDate.name}</h2>  
        <h2 style={{color:"green"}}>{UserDate.position}</h2>  
        <h2 style={{color:"green"}}>{UserDate.office}</h2>  
        <h2 style={{color:"green"}}>{UserDate.age}</h2>  
        <h2 style={{color:"green"}}>{UserDate.startdate}</h2>  
        <h2 style={{color:"darkgreen"}}>{UserDate.salary}</h2> 
  
       
      </div>
    )
}

export default UserView2