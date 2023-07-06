import { useState } from 'react'
import { context } from './store/context';
 
import 'bootstrap/dist/css/bootstrap.min.css';


import Navibar from './components/Navbar'
import { Route,Routes } from 'react-router-dom';
import Create from './components/Create';
import List from './components/List';
import Display from './components/Display';

function App() {

  const [text,setText]=useState([])
  

  return (
    <>
    <Navibar />
    <context.Provider value={{text,setText}}>

    <Routes>
      <Route  path='/' element={<Create/>} />
      <Route  path='/list' element={<List/>} />
      <Route   path="/list/:id" element={<Display/>}   />
      



    </Routes>
    </context.Provider>


      
    </>
  )
}

export default App
