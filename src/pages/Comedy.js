import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import Rowposter from '../components/rowposter/Rowposter'
function Comedy() {
    const {comedyurl}=useContext(AppContext)
  return (
    <div>
        <Rowposter url={comedyurl+"&page=1"} title='Comedy'/>
       <Rowposter url={comedyurl+"&page=2"} title=""/>
       <Rowposter url={comedyurl+"&page=3"} title=""/>
    </div>
  )
}

export default Comedy