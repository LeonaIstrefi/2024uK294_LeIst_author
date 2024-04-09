import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


import AuthorPage from './components/pages/AuthorPage'
import Registration from './components/pages/Registration'
import DetailedAuthors from './components/pages/DetailedAuthors'



function App() {
  

  return (
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="/author" element={<AuthorPage />}/>
        <Route path="/authorbyid" element={<DetailedAuthors />}/>

      </Routes>
    </BrowserRouter>      
    
  )
}

export default App;