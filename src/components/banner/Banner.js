import React from 'react'
import axios from 'axios'
import{imageurl,originalurl,baseurl,apikey} from '../../constants'
import { useEffect } from 'react'
const random=Math.floor(Math.random()*21);
let playflag=0;
function Banner(props) {
  useEffect(()=>{
    axios.get(originalurl).then((response)=>{
         props.setBanner(response.data.results[random])
         console.log(response.data.results[random])
    })
  },[])
  

  return (
    <div className='banner' style={{backgroundImage:`url(${props.banner?props.banner.backdrop_path?imageurl+props.banner.backdrop_path:imageurl+props.banner.poster_path:""})`}}>
        <div className='banner_content'>
                <div className='nseries'><div><img className="logo_n" src="https://loodibee.com/wp-content/uploads/Netflix-N-Symbol-logo.png" alt="N" /></div><div className='nseries_series'>SERIES</div></div>
                <div className='title'><h1 >{props.banner?props.banner.name?props.banner.name:props.banner.title:""}</h1></div>
                <div className='banner_button'><button onClick={()=>{
              axios.get(baseurl+`/movie/${props.banner.id}/videos?api_key=${apikey}&language=en-US`).then((response)=>{
               if(response.data.results.length!==0&&playflag===0){
                 props.setVideo(response.data.results[0]);
                 playflag=1;
                 console.log("play clicked")
               }else if(playflag===1){
                props.setVideo(null);
                playflag=0;
               }else{
                console.log("array empty");
               }
               })}}><i className='fa fa-play'></i>&nbsp; Play</button><button><i className='fa fa-plus'></i>&nbsp; My List</button></div>
                <div className='banner_discription'><h3>Overview</h3><p>{props.banner?props.banner.overview:""}</p></div>
        </div>
        <div className='gradient'></div> 
    </div>
  );
}

export default Banner