import React from 'react';
import { 
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet } from 'react-router-dom';

  import Home from './pages/Home';
  import About from './pages/About';
  import Contact from './pages/Contact';
  import Skills from './pages/Skills';

const router = createBrowserRouter( createRoutesFromElements( 
  <>
    
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} /> 
    <Route path="/contact" element={<Contact />} />
    <Route path="/skills" element={<Skills />} />

  </>
));

function App() {
  return (
    <div className="App">
      <RouterProvider router={ router } /> 
    </div>
  );
}

export default App;