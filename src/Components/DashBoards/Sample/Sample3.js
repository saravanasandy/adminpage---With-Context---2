import React from "react";

const Sample3 = ({cart,setCart}) => {

  const addCart = (cart,setCart)=>{
      setCart(cart + 1);
      console.log(cart);
  }
  return (
    <div>
      Sample 3
      <hr/>
      <button onClick={()=>addCart(cart,setCart)}>Add to cart</button>
            
    
    </div>
  );
};

export default Sample3;
