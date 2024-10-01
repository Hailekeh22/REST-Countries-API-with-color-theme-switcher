import { useEffect, useState } from "react"
import HomePage from "./Pages/HomePage";
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header";
import Info from "./Pages/Info";


const App = () => {


  useEffect(() => {  
    const theme = localStorage.getItem("darkTheme");
    if(theme == "true") {
      setDarkMode(true);
    }
  }, [])



  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const setTheme = () => {
    localStorage.setItem("darkTheme", darkMode.toString());
    }
    setTheme();
  }, [darkMode])



  return (
    <>
      <Header darkMode={darkMode} setDark={setDarkMode} />
      <Routes>
        <Route
          path="/"
          element={<HomePage darkMode={darkMode} setDark={setDarkMode} />}
        />
        <Route path="/info" element={<Info darkMode={darkMode} />} />
      </Routes>
    </>
  );
}

export default App