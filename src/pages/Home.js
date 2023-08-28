import React, { useContext } from 'react'
import Rowposter from '../components/rowposter/Rowposter'
import { AppContext } from '../AppContext'
function Home() {
    const{originalurl,trendingurl,actionurl,comedyurl,romanceurl,horrorurl,documentaryurl}=useContext(AppContext)
  return (
    <div className='homepage'>
     <Rowposter url={originalurl} title='Netflix Originals'/>
      <Rowposter url={trendingurl} title='Trending Now'/>
      <Rowposter url={actionurl} title='Action'/>
      <Rowposter url={comedyurl} title='Comedy'/>
      <Rowposter url={romanceurl} title='Romance'/>
      <Rowposter url={horrorurl} title='Horror'/>
      <Rowposter url={documentaryurl} title='Documentary'/>
    </div>
  )
}

export default Home