import * as React from 'react';
import {useState, useEffect,useContext} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux'
import cartSlice, { add, remove } from '../store/cart-slice';
// import {add,remove} from

// import store from '../../store';


// import Dispatch from '../Components/Layout'
// import { Dispatch } from '../Reducers/Dispatch';


export default function Home() {
  
  // const dispatch=useContext(Dispatch);
  const dispatch=useDispatch();
  const [expanded, setExpanded] = useState(false);
  // const [buttData, setbuttData] = useState("Add to cart");
  const [cardDataArr,setcardDataArr]=useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((json)=>setcardDataArr(json));
    
  },[])

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDispatch=(e,product)=>{
    // console.log(e.target.innerText);
    
  if (e.target.innerText=="ADD TO CART") {
    e.target.innerText="Remove";
    // console.log(e.target.value);
    // console.log(id);

    
    dispatch(add(product))
  } else {
    e.target.innerText="Add to cart";
    dispatch(remove(product))
  }
  }

  return (
   <>
   <div className="home"style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",placeItems:"center",gap:"1rem"}}>
    {cardDataArr.map((item)=>{
      return <Card sx={{ maxWidth: 345, display:"inline-block",margin:"1rem" }} key={item.id}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item.image}
        sx={{objectFit:"contain"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <Typography variant='body1' sx={{marginLeft:"1rem"}}>{item.rating.rate}⭐</Typography>
      <CardActions>
        <Button size="small" variant='outlined' sx={{marginRight:'40%'}}>₹{item.price}</Button>
        <Button size="small" variant='contained'onClick={(e)=>{
          handleDispatch(e,item);
        }}>Add to cart</Button>
      </CardActions>
    </Card>
      })}
   </div>
   </>
    
    
    )
}
