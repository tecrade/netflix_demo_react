import axios from 'axios'
import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'
import Menu from '../genresMenu/Menu'
import './NavBar.css'

function NavBar() {
  const {setAvatar,searchList,avatar,apikey,setBanner,setSearchList}=useContext(AppContext)
  return (
    <header className='navbar'>
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix"/>
        <div className='searchbar'>
        <div><input className='search' type="search" placeholder=' search for movies' onChange={(e)=>{
           axios.get(`https://api.themoviedb.org/3/search/movie?query=${e.target.value}&api_key=${apikey}&page=1`).then((response)=>{
            setSearchList(response.data.results);
            console.log(searchList,e.target.value);
        })}}/><i className='material-icons'>search</i></div>
        <div className="searchList">
       {  searchList && searchList.map((item,index)=>{
              return(
                <div className="searchitem" key={index} onClick={()=>{setBanner(item)}}>{item.title}</div>
              )
            })
       }
       </div>
       </div>
        <div className="avatarContainer" onClick={()=>{
          !avatar?setAvatar(true):setAvatar(false)
        }}><img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar"/></div>
        {avatar && <Menu/>}
    </header>
  )
}

export default NavBar
