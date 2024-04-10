import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


import AuthorPage from './components/pages/AuthorPage'
import Registration from './components/pages/Registration'
import DetailedAuthors from './components/pages/DetailedAuthors'
import CreateAuthor from './components/pages/CreateAuthor'
import UpdatePage from './components/pages/UpdatePage'




function App() {
  

  return (
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="/author" element={<AuthorPage />}/>
        <Route path="/author/:authorId" element={<DetailedAuthors />}/>
        <Route path="/create" element={<CreateAuthor />}/>
        <Route path='/author/update/:authorId' element={<UpdatePage />} />
       

      </Routes>
    </BrowserRouter>      
    
  )
}

export default App;