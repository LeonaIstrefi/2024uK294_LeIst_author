import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Registration from './components/pages/Registration'
import AuthorPage from './components/pages/AuthorPage'



function App() {
  

  return (
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="/author" element={<AuthorPage />}/>

      </Routes>
    </BrowserRouter>      
    
  )
}

export default App
