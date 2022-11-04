import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './component/Home.jsx'
import Contact from './component/Contact.jsx'
import toast, { Toaster } from "react-hot-toast";

function App() {
  
  return (
    <section className="bg-white ">
    
   <Routes>
   <Route exact path="/" element={<Home/>}/>  
   <Route path="/contact" element={<Contact/>}/>
   </Routes>
   <Toaster
  position="top-right"
  reverseOrder={false}
/>
    
    </section>
  );
}

export default App;
