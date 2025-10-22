import './App.css'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import CategoryBlog from './Pages/CategoryBlogs/CategoryBlog'
import DedicatedBlogs from './Pages/DedicatedBlogs/DedicatedBlogs'
import { Route,Routes } from 'react-router-dom'

 
function App() {

  return (
    <>

    <Navbar/>   
    
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/CategoryBlogs' element={<CategoryBlog/>}/>
          <Route path='/DedicatedBlogs' element={<DedicatedBlogs/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
        
        </Routes>
    
    <Footer/>
    </>
  )
}

export default App
