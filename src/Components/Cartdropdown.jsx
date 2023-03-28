import React, { useState, useEffect } from "react";
import "./cartdropdown.css";
import Button from '@mui/material/Button';
function Cartdropdown({ cartEle,clicked }) {
  const [cardDataArr, setcardDataArr] = useState([]);
  const DataArr = [];
  const [filcardDataArr, setfilcardDataArr] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) =>{ setcardDataArr(json);
        // console.log(cardDataArr)
        // console.log(cartEle);
        ;});
      
      
      
  },[]);
  useEffect(() => {
    cartEle.forEach(element => {
        for (let i of cardDataArr){
            // console.log(i);
            let id=i.id;
            if (id==element) {
                setfilcardDataArr((prev)=>[...prev,i]);
                // console.log(filcardDataArr);
                
            }
        }
      });
  
    return ()=>{
        setfilcardDataArr([]);
    }
  }, [cartEle])
  function remove(params) {
// console.log(params);

    // let removed= filcardDataArr.filter((e)=>e.id!=params);
    setfilcardDataArr(filcardDataArr.filter((e)=> e.id !== params));
    console.log(cartEle);
    
    cartEle.splice(cartEle.indexOf(params), 1)
    
    console.log(cartEle);
    
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
          {filcardDataArr.length>0?filcardDataArr.map((el) => {
            {/* console.log("hi") */}
            return (
              <tr>
                <td>₹{el.price}</td>
                <td>{el.title}</td>
                <td>{el.category}</td>
                <td>{el.rating.rate}⭐</td>
                <td><img src={el.image} alt="" srcset="" style={{width:"100%",height:"100%"}}/></td>
                <td><Button variant="contained" sx={{fontSize:"small",color:"black",backgroundColor:"yellow",fontWeight:"bold"}} onClick={()=> remove(el.id)
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
