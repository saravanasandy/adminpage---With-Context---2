import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import UserContext from '../../UserContext';

const UserView = () => {

   let context = useContext(UserContext);

  const params = useParams();
        console.log(params);

        // const [searchparams,setsearchparams] = useSearchParams();
        // console.log(...searchparams);

        const [UserDate,setUserData] = useState({});

        useEffect(()=>{
          loaderUser();
        },[])

        let loaderUser = async ()=>{
          try {
        let user =   await axios.get(`https://backendproject-demo-2.onrender.com/user/${params.id}`)
            // console.log(user.data);
            setUserData(user.data);
          } catch (error) {
            
          }    
          
        }

  return (
    <div className='user-card'>
    
      <h2 style={{color:"yellowgreen"}}>{params.id}</h2> 
      <h2 style={{color:"green"}}>{UserDate.name}</h2>  
      <h2 style={{color:"green"}}>{UserDate.position}</h2>  
      <h2 style={{color:"green"}}>{UserDate.office}</h2>  
      <h2 style={{color:"green"}}>{UserDate.age}</h2>  
      <h2 style={{color:"green"}}>{UserDate.startdate}</h2>  
      <h2 style={{color:"darkgreen"}}>{UserDate.salary}</h2> 

     
    </div>
  )
}

export default UserView