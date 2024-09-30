import { useState } from "react"
import HomePage from "./Pages/HomePage";
import {Routes, Route} from "react-router-dom"
import Info from "./Pages/Info";


const App = () => {

  const [darkMode ,setDarkMode] = useState(false);


  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage darkMode={darkMode} setDark={setDarkMode} />} />
      <Route path="/info" element={<Info />} />
    </Routes>
    </>
  );
}

export default App