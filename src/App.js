
import './App.css';
import LayoutWebsiteClient from '../src/components/Layouts/LayoutWebsite/LayoutClient'
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Searvices from './components/Searvices';
import Testimonial from './components/Testimonial';
import Works from './components/Works';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LayoutWebsiteClient/>}>       
          <Route index element={< Home/>} />  
          <Route path= 'about'element={< About/>} />
          <Route path= 'contact'element={< Contact/>} /> 
          <Route path= 'searvices'element={< Searvices/>} /> 
          <Route path= 'testimonial'element={< Testimonial/>} /> 
          <Route path= 'works'element={< Works/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
