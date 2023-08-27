import React from 'react'
import axios from 'axios'
import{imageurl}from '../../constants'
import { useState,useEffect} from 'react'

function Rowposter(props) {
  const [poster,setPoster]=useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setPoster(response.data.results);
    })
  },[])
  return (
    <div className='rowposter'>
      <h3 className="typehead">{props.title}</h3>
      <div className='container' >
        {
          poster.map((obj,index)=>{
            return(
            <img key={index} className='poster' src={imageurl+obj.poster_path} alt="POSTER" onClick={()=>{
              props.setBanner(obj);
              console.log("poster clicked")
              console.log(obj)
            }}/>

            )
          })    
        }
       </div>
    </div>
  )
}
export default Rowposter