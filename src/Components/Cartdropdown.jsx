import React, { useState, useEffect } from "react";
import "./cartdropdown.css";
import Button from '@mui/material/Button';
import cartSlice, { add, remove } from "../store/cart-slice";
import { useSelector, useDispatch } from 'react-redux'


function Cartdropdown({ clicked }) {
  const cart=useSelector(state=>state.cart);
  const [cardDataArr, setcardDataArr] = useState([]);
  const DataArr = [];
  const dispatch=useDispatch();
  const [filcardDataArr, setfilcardDataArr] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) =>{ setcardDataArr(json);
        // console.log(cardDataArr)
        // console.log(cartEle);
        ;});
      
      
      
  },[]);
  
  
    
  function removeEl(params) {
// console.log(params);
dispatch(remove(params))
    // let removed= filcardDataArr.filter((e)=>e.id!=params);
    
    
  }

  return (
    <>
      <div
        className={`cartWrapper ${(!clicked )?"none":""}`}
        style={{ position: "absolute", top: "2rem", right: "-.4rem" ,zIndex:"2"}}
      >
        <table>
          <thead style={{backgroundColor:"#a0a0e2"}}>
          <tr>
            <th>Price</th>
            <th>Product</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Product Image</th>
            <th>Action</th>
          </tr>

          </thead>
          <tbody>
          {cart.length>0?cart.map((el) => {
            {/* console.log("hi") */}
            return (
              <tr>
                <td>₹{el.price}</td>
                <td>{el.title}</td>
                <td>{el.category}</td>
                <td>{el.rating.rate}⭐</td>
                <td><img src={el.image} alt="" srcset="" style={{width:"100%",height:"100%"}}/></td>
                <td><Button variant="contained" sx={{fontSize:"small",color:"black",backgroundColor:"yellow",fontWeight:"bold"}} onClick={()=> removeEl(el)
                }>Remove</Button></td>
              </tr>
            );
          }):""}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Cartdropdown;
