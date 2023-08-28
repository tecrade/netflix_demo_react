import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import Rowposter from '../components/rowposter/Rowposter'

function Documentary() {
    const {documentaryurl}=useContext(AppContext)
  return (
    <div>
        <Rowposter url={documentaryurl+"&page=1"} title='Documentary'/>
       <Rowposter url={documentaryurl+"&page=2"} title=""/>
       <Rowposter url={documentaryurl+"&page=3"} title=""/>
    </div>
  )
}

export default Documentary