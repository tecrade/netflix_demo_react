import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import Rowposter from '../components/rowposter/Rowposter'
function Romance() {
    const {romanceurl}=useContext(AppContext)
  return (
    <div>
        <Rowposter url={romanceurl+"&page=1"} title='Romance'/>
       <Rowposter url={romanceurl+"&page=2"} title=""/>
       <Rowposter url={romanceurl+"&page=3"} title=""/>
    </div>
  )
}

export default Romance