import React from 'react'
import Rowposter from '../components/rowposter/Rowposter'
import { getcookie } from '../cookie'

function Mylist() {
  console.log(getcookie())
  return (
    <div>
    <Rowposter list={getcookie()} title="My List"/>
    <p className='disclaimer' style={{color:'white',margin:'auto',fontWeight:'bold'}}>Your My List will lost if you not visit this site for more than 30 days</p>
    </div>
  )
}

export default Mylist