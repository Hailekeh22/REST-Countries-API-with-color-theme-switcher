import React, { useEffect } from "react";
import Filter from "../components/Filter/Filter";
import MainContent from "../components/MainContent/MainContent";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


const HomePage:React.FC = () => {


  useEffect(() => {
    localStorage.removeItem("countryInfo");
  }, [])


  const {darkMode} = useSelector((state:RootState) => state.theme);


  return (
    <div
      className={`bg-white min-h-[100vh] ${
        darkMode && "dark"
      } duration-300 ease-out dark:bg-[#1e272e] lg:px-20 px-4`}
    >
      <Filter />
      <MainContent />
    </div>
  );
}

export default HomePage