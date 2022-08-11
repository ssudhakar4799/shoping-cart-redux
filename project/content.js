import Product from "../productlist/products.json"

import React from 'react'
import { useSelector,useDispatch} from "react-redux/es/exports"

import { addcart ,favorite} from "./slices";

export default function Content() {

    const state=useSelector((state)=>state);
    const dispatch=useDispatch();
    console.log(state);



  function add(items) {
    dispatch(addcart([...state.cart.cart,items]))
    
  }

  function fav(items) {
    dispatch(favorite([...state.fav.fav,items]))
    
  }
  return (
    <div>content
        {
            Product.map((data,index)=>{
                return(
                    <div key={index}>
                        <h1>{data.name}</h1>
                        <button onClick={()=>add(data)}>addcart</button>
                        <button onClick={()=>fav(data)}>favorite</button>
                    </div>
                )

            })
        }
    </div>
  )
}
