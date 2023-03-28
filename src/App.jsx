import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Page/Login";
import Register from "./components/Page/Register";
import Statistics from "./components/Page/Statistics";
import About from "./components/Page/Footer_About"
import Frequent from "./components/Page/Footer_Frequent"
import Policies from "./components/Page/Footer_Policies"
import Terms from "./components/Page/Footer_Terms"
import RegisterESP from "./components/Page/RegisterESP";
import DeleteAccount from "./components/Page/DeleteAccount"
import Tierra from "./components/Page/Tierra"
import Atmosfera from "./components/Page/Atmosfera";
import Ambiente from "./components/Page/Ambiente";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Registro' element={<Register />} />
        <Route path="/" element={<Statistics/>}/>
        <Route path="/Tierra" element={<Tierra/>}/>
        <Route path="/Atmosfera" element={<Atmosfera/>}/>
        <Route path="/Ambiente" element={<Ambiente/>}/>
        <Route path="/Registro-ESP32" element={<RegisterESP/>}/>
        <Route path="/DeleteAccount" element={<DeleteAccount/>}/>
        
       
        <Route path='/Sobre-nosotros' element={<About />} />
        <Route path='/Preguntas-frecuentes' element={<Frequent />} />
        <Route path='/Politicas' element={<Policies />} />
        <Route path='/Terminos' element={<Terms />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
