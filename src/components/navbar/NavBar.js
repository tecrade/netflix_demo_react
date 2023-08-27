import axios from 'axios'
import React from 'react'
import { apikey } from '../../constants'

function NavBar(props) {
  const searchList=props.searchList
  return (
    <header className='navbar'>
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix"/>
        <div className='searchbar'>
        <p><input className='search' type="search" placeholder=' search for movies' onChange={(e)=>{
           axios.get(`https://api.themoviedb.org/3/search/movie?query=${e.target.value}&api_key=${apikey}&page=1`).then((response)=>{
            props.setSearchList(response.data.results);
            console.log(searchList,e.target.value);
        })}}/><i className='material-icons'>search</i></p>
        <div className="searchList">
       {  searchList && searchList.map((item,index)=>{
              return(
                <div className="searchitem" key={index} onClick={()=>{props.setBanner(item)}}>{item.title}</div>
              )
            })
       }
       </div>
       </div>
        <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar"/>
    </header>
  )
}

export default NavBar
/* onChange={(e)=>{
          console.log(e.target.value)
           return(
            <ul>
              <li>itemnjnjnnnknjnjnj</li>
               {
               searchList && searchList.map((item,index)=>{
                console.log(item.title)
                   return(
                    <li key={index}>{item.title}</li>
                   );
                 });
                })
              }
            </ul>
           )
        }} */