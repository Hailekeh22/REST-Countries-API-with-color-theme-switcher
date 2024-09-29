import { useState } from "react"
import Header from "./components/Header/Header"

const App = () => {

  const [darkMode ,setDarkMode] = useState(false);


  return (
    <div className={`bg-white min-h-[100vh] ${darkMode && "dark"} duration-300 ease-out dark:bg-[#1e272e]`}>
      <Header darkMode={darkMode} setDark={setDarkMode} />
    </div>
  );
}

export default App