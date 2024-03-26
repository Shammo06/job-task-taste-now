
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'

function App() {


  return (
    <>
      <div style={{ borderRadius: '0 0 50% 50%', backgroundColor:'aliceblue'}} className="header-nav">
        <Navbar></Navbar>
        <Banner></Banner>
      </div> 
      <Outlet></Outlet>
    </>
  )
}

export default App
