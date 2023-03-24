import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Page/Login";
import Register from "./components/Page/Register";
import Statistics from "./components/Page/Statistics";
import About from "./components/Page/Footer_About"
import Frequent from "./components/Page/Footer_Frequent"
import Policies from "./components/Page/Footer_Policies"
import Terms from "./components/Page/Footer_Terms"
import RegisterESP from "./components/Page/RegisterESP";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path="/Statistics" element={<Statistics/>}/>
        <Route path="/RegisterESP" element={<RegisterESP/>}/>
        
       
        <Route path='/About' element={<About />} />
        <Route path='/Frequent' element={<Frequent />} />
        <Route path='/Policies' element={<Policies />} />
        <Route path='/Terms' element={<Terms />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
