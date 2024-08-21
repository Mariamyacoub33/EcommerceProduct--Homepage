import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect , useState } from "react";
import './App.css';
import Layoutpage from "./Pages/Layoutpage/Layoutpage";
import Collections from "./Pages/Collections";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Homepage from "./Pages/Homepage";
import Contact from "./Pages/Contact";
import Productpage from "./Pages/Productpage";


function App() {
  
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layoutpage />}>
      <Route path="Collections" element={<Collections/>}></Route>
      <Route path="Men" element={<Men/>}></Route>
      <Route path="Women" element={<Women/>}></Route>
      <Route index element={<Homepage/>}></Route>
      <Route path="Contact" element={<Contact/>}></Route>
      <Route path="/details/:id" element={<Productpage/>} ></Route>
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;
