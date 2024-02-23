import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contactus from './components/Contact/Contact';
import Home from './Home/Home';
import LoginForm from './components/Login/Login';
import Services from './components/Services/Services';
import About from './components/About/About';
import Register from './components/Register/Register';
import Mahendra from './components/Coaches/Mahendra';
import Smriti from './components/Coaches/Smriti';
import Sunil from './components/Coaches/Sunil';
import Mandeep from './components/Coaches/Mandeep';
import Vijender from './components/Coaches/Vijender';
import Vishesh from './components/Coaches/Vishesh';
import Vinit from './components/Coaches/Vinit';
import Ashalata from './components/Coaches/Ashalata';
import Savita from './components/Coaches/Savita';
import Mary from './components/Coaches/Mary';
import Raspreet from './components/Coaches/Raspreet';
import Nirmal from './components/Coaches/Nirmal';
import Events from './components/Events/Events';
import Error from './components/Error/Error';
import Admin from './components/Login/Admin';




function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/contactus" element={<Contactus/>}></Route>
        <Route exact path="/loginform" element={<LoginForm/>}></Route>
        <Route exact path="/services" element={<Services/>}></Route>  
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/registerform" element={<Register/>}></Route>
        <Route exact path="/Mahendra" element={<Mahendra/>}></Route>
        <Route exact path="/Smriti" element={<Smriti/>}></Route>
        <Route exact path="/Sunil" element={<Sunil/>}></Route>
        <Route exact path="/Mandeep" element={<Mandeep/>}></Route>
        <Route exact path="/Vijender" element={<Vijender/>}></Route>
        <Route exact path="/Vishesh" element={<Vishesh/>}></Route>
        <Route exact path="/Vinit" element={<Vinit/>}></Route>
        <Route exact path="/Ashalata" element={<Ashalata/>}></Route>
        <Route exact path="/Savita" element={<Savita/>}></Route>
        <Route exact path="/Mary" element={<Mary/>}></Route>
        <Route exact path="/Raspreet" element={<Raspreet/>}></Route>
        <Route exact path="/Nirmal" element={<Nirmal/>}></Route>
        <Route exact path="/events" element={<Events/>}></Route>
        <Route exact path="/error" element={<Error/>}></Route>
        <Route exact path="/admin" element={<Admin/>}></Route>


        

        </Routes>
      </BrowserRouter>

      
      {/* <Caro/>
    <Footer/> */}
    </>
  );
}

export default App;
