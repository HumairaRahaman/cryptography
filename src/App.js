import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Decode from './components/Decode/Decode'
import Encode from './components/Encode/Encode'
import EncodeDecode from './components/EncodeDecode/EncodeDecode'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div className=" max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/encode' element={<Encode></Encode>}></Route>
     <Route path='/decode' element={<Decode></Decode>}></Route>
     <Route path='/encodeDecode' element={<EncodeDecode></EncodeDecode>}></Route>
   </Routes>
   </div>
  )
}

export default App
