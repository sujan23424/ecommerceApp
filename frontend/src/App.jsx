import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Themes from './components/Themes';
import Plugins from './components/Plugins.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx'
import Footer from './components/Footer.jsx'

import {useAuth} from './context/AuthProvider.jsx';


function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          {/* localhost:5173/ */}
          <Route path='/' element={<Home/>}/>
          {/* localhost:5172/themes/ */}
          <Route path='/themes' element={<Themes/>}/>
          <Route path='/plugins' element={authUser ? <Plugins/> : <Navigate to='/signup'/> }/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>

      <div>
        <Footer/>
      </div>
    </div>

  )
}

export default App;