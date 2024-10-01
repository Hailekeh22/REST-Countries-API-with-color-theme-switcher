import React from "react";
import Filter from "../components/Filter/Filter";
import MainContent from "../components/MainContent/MainContent";


interface propValues {
  darkMode: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomePage:React.FC<propValues> = (props) => {
  return (
    <div
      className={`bg-white min-h-[100vh] ${
        props.darkMode && "dark"
      } duration-300 ease-out dark:bg-[#1e272e]`}
    >
      <Filter dark={props.darkMode} />
      <MainContent dark={props.darkMode} />
    </div>
  );
}

export default HomePage