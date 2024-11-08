import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer"
import Landingpage  from "./components/Landingpage"
import Navbar from "./components/Navbar"
import DiagnosePage from "./components/DiagnosePage";
import HasilDiagnose from "./components/HasilDiagnose";

function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/diagnose" element={<DiagnosePage />} />
          <Route path="/hasil" element={<HasilDiagnose/>}/>
        </Routes>
      <Footer/>
    </div>
    </Router>
  )
}

export default App
