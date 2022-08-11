import { useSelector, useDispatch } from "react-redux";
import Layouts from "./pages/layouts/layots";
import { addcart } from "./pages/redux/slice";

import React from "react";
import { useNavigate } from "react-router-dom";
import Product from "./pages/productlist/products.json";

import { useState, useEffect } from "react";

export default function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  // const [name, setname] = useState([]);
  // const navi=useNavigate();

  // useEffect(() => {
  //   gettask();
  // }, []);

  // function gettask() {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((json) => setname(json));
  // }

  // function cart(datas) {
  //   dispatch(addcart([...state.cart.cart, datas]));
  //   console.log(state);
  // }

  function add() {
   dispatch(addcart({name:"sudhakar"}))
  }
//   const obj={
//     name:"sudhakar",
//     age:23,
//   }
//  function trans(dd) {

//   console.log(dd);
//  }
  return (
    <div>
      App 
      <button onClick={()=>add()}>click</button>
      <Layouts 
      // obj={obj} get={trans}
      />
      {/* {Product.map((datas, index) => {
        return (
          <div key={index}>
            <h1>{datas.name}</h1>
            <button onClick={() => cart(datas)}>cart</button> */}

            {/* {
                name.map((list,id)=>{
                  return(
                    <div key={id} style={{textAlign:"center"}}>
                      {list.title}
                    </div>
                  )

                })
              } */}

            {/* <h1 onClick={() => navi(`Layots/${name.id}`) }>{name.title}</h1>
          </div> */}
        {/* );
      })} */}
      
    </div>
  );
}
