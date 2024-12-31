import HomePage from "./Pages/HomePage";
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header";
import Info from "./Pages/Info";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { useEffect } from "react";

import { setDarkTheme } from "./redux/reducers/themeSlice";
import { fetchData } from "./redux/reducers/DataSlice";
import { AppDispatch } from "./redux/store";


const App = () => {

  const {darkMode} = useSelector((state:RootState) => state.theme)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchData());
  }, []);

    useEffect(() => {
      const dark = localStorage.getItem("mode");

      if (dark == "true") {
        dispatch(setDarkTheme());
      }
    }, []);

  useEffect(() => {
    localStorage.setItem("mode", darkMode.toString());
  },[darkMode])

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  





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