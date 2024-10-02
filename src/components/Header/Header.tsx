import React from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setDarkTheme, setLightTheme } from "../../redux/reducers/themeSlice";




const Header:React.FC = () => {

  const dispatch = useDispatch();
  const {darkMode} = useSelector((state:RootState) => state.theme)


  return (
    <div
      className={`${
        darkMode && "dark"
      } w-full relative z-10 shadow-lg px-6 py-8  lg:px-20 lg:py-4 duration-300 ease-out dark:text-white dark:bg-[#243038]`}
    >
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        <div>
          <p className=" font-bold">Where in the world?</p>
        </div>
        <div >
          {darkMode ? (
            <button onClick={() => dispatch(setLightTheme())} className="flex items-center justify-center">
              <MdOutlineWbSunny />{" "}
              <p className=" font-semibold ml-2">Light Mode</p>
            </button>
          ) : (
            <button onClick={() => dispatch(setDarkTheme())} className="flex items-center justify-center">
              <IoMoon /> <p className=" font-semibold ml-2">Dark Mode</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;