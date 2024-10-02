import HomePage from "./Pages/HomePage";
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header";
import Info from "./Pages/Info";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { useEffect } from "react";

import { setDarkTheme } from "./redux/reducers/themeSlice";


const App = () => {

  const dispatch = useDispatch()

    useEffect(() => {
      const dark = localStorage.getItem("mode");

      if (dark == "true") {
        dispatch(setDarkTheme());
      }
    }, []);
  const {darkMode} = useSelector((state:RootState) => state.theme)

  useEffect(() => {
    localStorage.setItem("mode", darkMode.toString());
  },[darkMode])





  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage/>}
        />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
}

export default App