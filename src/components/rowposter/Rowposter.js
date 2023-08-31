import React from 'react'
import axios from 'axios'
import { useState,useEffect} from 'react'
import { useContext } from 'react'
import { AppContext } from '../../AppContext'
import './Rowposter.css'

function Rowposter(props) {
  const [poster,setPoster]=useState([])
  const {setBanner,imageurl}=useContext(AppContext)
  useEffect(()=>{
    if(props.url){
    axios.get(props.url).then((response)=>{
      response?setPoster(response.data.results):setPoster("")
    })}else{
      setPoster(props.list)
    }
  },[])
  return (
    <div className='rowposter'>
      <h3 className="typehead">{props.title}</h3>
      <div className='container' >
        {
          poster.map((obj,index)=>{
            return(
            <img key={index} className='poster' src={imageurl+obj.poster_path} alt="POSTER" onClick={()=>{
              setBanner(obj);
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