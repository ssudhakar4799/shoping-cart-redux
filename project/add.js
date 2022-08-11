import { useSelector } from 'react-redux/es/hooks/useSelector'

import React from 'react'

export default function Add() {
    const state=useSelector((state)=>state)
    console.log(state);
  return (
    <div>add
        {
            state.cart.cart.map((datas,index)=>{
                return(
                    <div key={index}>
                        <h1>{datas.name}</h1></div>
                )
            })
        }
    </div>
  )
}
