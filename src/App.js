import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Contacts from './pages/contacts/Contacts';

function App() {
  return (    
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />    
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contact' element={<Contacts />} />  
        </Routes>       
        <Footer/>
      </BrowserRouter>        
    </div>
  );
}

export default App;
