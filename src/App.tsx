import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Registration from './components/pages/Registration'



function App() {
  

  return (
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Registration/>}/>

      </Routes>
    </BrowserRouter>      
    
  )
}

export default App
