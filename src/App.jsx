import { useState } from 'react'
import './App.css'
import {HashRouter as Router, Routes,Route} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './components/Home'
import Stage1 from './components/Stage1';
import Stage2 from './components/Stage2';
import Stage3 from './components/Stage3';
import Stage4 from './components/Stage4';
import Guidelines from './components/Guidelines';
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:team_name/guidelines' element={<Guidelines/>} />
        <Route path='/:team_name/stage1' element={<Stage1/>} />
        <Route path='/:team_name/stage2' element={<Stage2/>} />
        <Route path='/:team_name/stage3' element={<Stage3/>} />
        <Route path='/:team_name/stage4' element={<Stage4/>} />
      </Routes>
    </Router>
      {/* <Home/> */}
    </>
  )
}

export default App
