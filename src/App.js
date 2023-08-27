import NavBar from './components/navbar/NavBar';
import React, { useState } from 'react';
import Banner from './components/banner/Banner';
import Rowposter from './components/rowposter/Rowposter';
import './App.css';
import './components/navbar/NavBar.css';
import './components/banner/Banner.css';
import './components/rowposter/Rowposter.css';
import {originalurl,actionurl,horrorurl,comedyurl,documentaryurl,romanceurl,trendingurl} from './constants'
import Youtube from './components/youtube/Youtube'
function App() {
  const [banner,setBanner]=useState({});
  const[video,setVideo]=useState();
  const[searchList,setSearchList]=useState();
  return (
    <div className="App">
      <NavBar setBanner={setBanner} searchList={searchList} setSearchList={setSearchList}/>
      <Banner banner={banner} setBanner={setBanner} setVideo={setVideo} />
      {video && <Youtube video={video.key} height="315px" width="100%" autoplay="1"/>}
      <Rowposter url={originalurl} title='Netflix Originals' setBanner={setBanner} />
      <Rowposter url={trendingurl} title='Trending Now' setBanner={setBanner}/>
      <Rowposter url={actionurl} title='Action' setBanner={setBanner}/>
      <Rowposter url={comedyurl} title='Comedy' setBanner={setBanner}/>
      <Rowposter url={romanceurl} title='Romance' setBanner={setBanner}/>
      <Rowposter url={horrorurl} title='Horror' setBanner={setBanner}/>
      <Rowposter url={documentaryurl} title='Documentary' setBanner={setBanner}/>
    </div>
  );
}

export default App;
