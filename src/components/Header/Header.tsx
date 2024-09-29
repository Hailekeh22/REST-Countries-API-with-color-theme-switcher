import React from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";



interface propValues{
  darkMode:boolean, 
  setDark:React.Dispatch<React.SetStateAction<boolean>>
}

const Header:React.FC<propValues> = (props) => {
  return (
    <div
      className={`${
        props.darkMode && "dark"
      } w-full shadow-lg px-6 py-8  lg:px-20 lg:py-4  duration-300 ease-out dark:text-white dark:bg-[#243038]`}
    >
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        <div>
          <p className=" font-bold">Where in the world?</p>
        </div>
        <button className="bo" onClick={() => props.setDark(!props.darkMode)}>
          {props.darkMode ? (
            <div className="flex items-center justify-center">
              <MdOutlineWbSunny /> <p className=" font-semibold ml-2">Light Mode</p>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <IoMoon /> <p className=" font-semibold ml-2">Dark Mode</p>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;