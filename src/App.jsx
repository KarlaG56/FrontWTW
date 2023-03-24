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
        <Route path='/' element={<Login />} />
        <Route path='/Registro' element={<Register />} />
        <Route path="/Estadistica" element={<Statistics/>}/>
        <Route path="/Registro-ESP32" element={<RegisterESP/>}/>
        <Route path='/SObre-nosotros' element={<About />} />
        <Route path='/Preguntas-frecuentes' element={<Frequent />} />
        <Route path='/Politicas' element={<Policies />} />
        <Route path='/Terminos' element={<Terms />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
