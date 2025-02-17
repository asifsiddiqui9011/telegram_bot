
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'


function App() {
  

  return (
    <>
   
    <Navbar/>
    
    <Routes>
      <Route
      path='/dashboard'
      element={<Home/>}/>
      <Route
      path='/'
      element={<Login/>}/>
    </Routes>
   
   </>
  )
}

export default App
