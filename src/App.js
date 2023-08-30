import NavBar from './components/navbar/NavBar';
import { HashRouter, Routes ,Route} from 'react-router-dom';
import React, { useState} from 'react';
import Banner from './components/banner/Banner';
import Comedy from './pages/Comedy';
import Horror from './pages/Horror';
import Trending from './pages/Trending';
import Action from './pages/Action';
import Romance from './pages/Romance';
import Home from './pages/Home';
import './App.css';
import {originalurl,actionurl,horrorurl,comedyurl,documentaryurl,romanceurl,trendingurl,imageurl,apikey,baseurl} from './constants'
import Youtube from './components/youtube/Youtube'
import { AppContext } from './AppContext';
import Documentary from './pages/Documentary';
function App() {
  const [banner,setBanner]=useState({});
  const[video,setVideo]=useState();
  const[searchList,setSearchList]=useState();
  const[avatar,setAvatar]=useState(false);
  return (
    <div className="App">
      <HashRouter>
      <AppContext.Provider value={{banner,avatar,setAvatar,video,searchList,setBanner,setVideo,setSearchList,originalurl,trendingurl,actionurl,comedyurl,romanceurl,documentaryurl,imageurl,horrorurl,apikey,baseurl}}>
      <NavBar/>
      <Banner/>
      {video && <Youtube video={video.key} height="315px" width="100%" autoplay="1"/>}
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/action' element={<Action/>}></Route>
        <Route path='/comedy' element={<Comedy/>}></Route>
        <Route path='/romance' element={<Romance/>}></Route>
        <Route path='/trending' element={<Trending/>}></Route>
        <Route path='/documentary' element={<Documentary/>}></Route>
        <Route path='/horror' element={<Horror/>}></Route>
      </Routes>
      </AppContext.Provider>
      </HashRouter>
    </div>
  );
}

export default App;
