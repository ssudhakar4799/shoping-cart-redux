
import { useSelector } from 'react-redux/es/hooks/useSelector'
import React from 'react'

export default function Fav() {
    const state =useSelector((state)=>state);
    console.log(state);
  return (
    <div>fav
        {
            state.fav.fav.map((data,index)=>{
                return(
                <div key={index}>
                    <h1>{data.name}</h1>
                </div>

            )})
        }
    </div>
  )
}
