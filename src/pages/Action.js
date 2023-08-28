import React, { useContext } from 'react'
import Rowposter from '../components/rowposter/Rowposter'
import { AppContext } from '../AppContext'

function Action() {
    const{actionurl}=useContext(AppContext)
  return (
    <div>
       <Rowposter url={actionurl+"&page=1"} title='Action'/>
       <Rowposter url={actionurl+"&page=2"} title=""/>
       <Rowposter url={actionurl+"&page=3"} title=""/>
    </div>
  )
}

export default Action