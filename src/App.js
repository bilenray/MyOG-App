import React from 'react';
import './App.css';
import Filter from './components/Website/Filter/Filter';
import ComNav from './components/Website/Home/ComNav/ComNav';
import HomePage from './components/Website/Home/HomePage/HomePage';
import MobNav from './components/Website/Home/MobNav/MobNav';
import LandingPage from './components/Website/Landing/LandingPage';
import Map from './components/Website/Map/Map';
import SellerCard from './components/Service/SellerCard/SellerCard/SellerCard'
import SellerDetails  from './components/Service/SellerCard/sellerDetails/sellerDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [screenWidth, setScreenWidth] = React.useState(true)

  React.useEffect(()=>{
    console.log("useEffect is running")
    if (window.innerWidth>700){
        setScreenWidth(false)
    }
  },[screenWidth])

  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage navi={screenWidth ? <MobNav sellerCard={<SellerCard/>} /> : <ComNav/>} />}/>
          <Route path='/garage/:id' element={<SellerDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
