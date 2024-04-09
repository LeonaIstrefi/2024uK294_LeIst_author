import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


import AuthorPage from './components/pages/AuthorPage'
import Registration from './components/pages/Registration'



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

export default App;