import React, { useContext } from 'react'
import Rowposter from '../components/rowposter/Rowposter'
import { AppContext } from '../AppContext'
function Horror() {
    const {horrorurl}=useContext(AppContext)
  return (
    <div>
        <Rowposter url={horrorurl+"&page=1"} title='Horror'/>
       <Rowposter url={horrorurl+"&page=2"} title=""/>
       <Rowposter url={horrorurl+"&page=3"} title=""/>
    </div>
  )
}

export default Horror