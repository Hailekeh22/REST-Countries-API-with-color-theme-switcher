import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/MainContent/loader/Loading";
import Country from "../components/Detail/Country";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RootState } from "../redux/store";

const Info: React.FC = () => {
  const { loading } = useSelector((state: RootState) => state.countryInfo);
  const { darkMode } = useSelector((state: RootState) => state.theme);




  return (
    <div
      className={`${
        darkMode && "dark"
      } px-6 py-8  lg:px-20 lg:py-4 duration-300 ease-out dark:text-white min-h-[100vh] dark:bg-[#1e272e]`}
    >
      <Link to="/">
        <div className="shadow-md w-32 px-5 py-2 dark:bg-[#243038] flex justify-center">
          <div className="flex items-center gap-2">
            <FaArrowLeftLong /> <p className="w-full h-full">Back</p>
          </div>
        </div>
      </Link>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Country />
        </div>
      )}
    </div>
  );
};

export default Info;
