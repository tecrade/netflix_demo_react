import React from 'react'
import './Menu.css'
import { NavLink} from 'react-router-dom'
const list=[{name:'Home',path:"/"},{name:'Trending',path:"/trending"},{name:'Action',path:"/action"},{name:'Comedy',path:"/comedy"},{name:'Romance',path:"/romance"},{name:'Horror',path:"/horror"},{name:'Documentary',path:"/documentary"}]
function Menu() {
  return (
    <div className='genresMenu'>
        <ul>
            {
                list.map((obj,index)=>{
                  console.log(obj.path)
                    return(<li key={index}>
                      <NavLink className="genresMenuNavbar" to={obj.path}>{obj.name}</NavLink>
                    </li>)
                })
            }
        </ul>
    </div>
  )
}

export default Menu