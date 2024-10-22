import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Themes from './components/Themes';
import Plugins from './components/Plugins.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Signup from './components/Signup.jsx';
import Footer from './components/Footer.jsx'


function App() {
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
          <Route path='/plugins' element={<Plugins/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </div>

      <div>
        <Footer/>
      </div>
    </div>

  )
}

export default App;