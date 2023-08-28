import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import Rowposter from '../components/rowposter/Rowposter'
function Trending() {
    const {trendingurl}=useContext(AppContext)
  return (
    <div>
        <Rowposter url={trendingurl+"&page=1"} title='Trending'/>
       <Rowposter url={trendingurl+"&page=2"} title=""/>
       <Rowposter url={trendingurl+"&page=3"} title=""/>
    </div>
  )
}

export default Trending