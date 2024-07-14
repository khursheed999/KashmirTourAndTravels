import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Booking from './Components/Pages/Booking';
import Contact from './Components/Pages/Contact';
import Packages from './Components/Pages/Packages';
import Navbar from './Components/Header/NavBar';
import Footer from './Components/Footer/Footer';
import { Store } from './ContextStore/ContextStore';
function App() {
 

  return <Router>
   <Store>
   <div className='app'>
     <Navbar/>
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Booking' element={<Booking/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Packages' element={<Packages/>}/>
    </Routes>
    </div>
    <Footer/>
   </div>

   </Store>
   </Router>
}

export default App
