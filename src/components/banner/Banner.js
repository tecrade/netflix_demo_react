import React, { useContext } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { AppContext } from '../../AppContext' 
import './Banner.css'
import { setCookie,updatecookie,getcookie,removecookie} from '../../cookie'

const random=Math.floor(Math.random()*21);
let playflag=0;
let cookieArray=[];
function Banner() {
  const {banner,setBanner,setVideo,trendingurl,baseurl,apikey,imageurl,mylist,setMylist}=useContext(AppContext)
  useEffect(()=>{
    axios.get(trendingurl).then((response)=>{
         setBanner(response.data.results[random])
         console.log(response.data.results[random])
    })
  },[])

function checklist(){
  if(document.cookie){
    let data=getcookie();
    for(let i=0;i<data.length;i++){
      if(data[i].id===banner.id){
        setMylist(true)
        break;
      }
      else{
        setMylist(false)
        continue;
      }
    }
    console.log(mylist)
  }}

  return (
    <div className='banner' style={{backgroundImage:`url(${banner?banner.backdrop_path?imageurl+banner.backdrop_path:imageurl+banner.poster_path:""})`}}>
        <div className='banner_content'>
                <div className='nseries'><div><img className="logo_n" src="https://loodibee.com/wp-content/uploads/Netflix-N-Symbol-logo.png" alt="N" /></div><div className='nseries_series'>SERIES</div></div>
                <div className='title'><h1 >{banner?banner.name?banner.name:banner.title:""}</h1></div>
                <div className='banner_button'><button onClick={()=>{
              axios.get(baseurl+`/movie/${banner.id}/videos?api_key=${apikey}&language=en-US`).then((response)=>{
               if(response.data.results.length!==0&&playflag===0){
                 setVideo(response.data.results[0]);
                 playflag=1;
                 console.log("play clicked")
               }else if(playflag===1){
                setVideo(null);
                playflag=0;
               }else{
                console.log("array empty");
               }
               })}}><i className='fa fa-play'></i>&nbsp; Play</button>
               
               <button onClick={()=>{
                if(!mylist){
                if(document.cookie){
                  updatecookie(banner)
                }else{
                  cookieArray.push(banner)
                  setCookie("myList",cookieArray,30);
                }
                setMylist(true);
               }else{
                 removecookie(banner)
                 setMylist(false)
                 console.log(getcookie())
               }
              }
               }><i className={mylist?'fa fa-minus':'fa fa-plus'}></i>&nbsp; {mylist?'Remove List':'My List'}</button></div>
               <div className='banner_rating'><i className="fas fa-star"></i>&nbsp;{banner.vote_average?banner.vote_average:""}</div>
                <div className='banner_discription'><h3>Overview</h3><p>{banner?banner.overview:""}</p></div>
        </div>
        <div className='gradient'></div> 
        {banner?checklist():setMylist(false)}
    </div>
  );
}

export default Banner