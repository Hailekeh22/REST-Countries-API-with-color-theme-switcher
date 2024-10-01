import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { countryInformation } from "../redux/reducers/countrySlice";
import Loading from "../components/MainContent/loader/Loading";
import Country from "../components/Detail/Country";
import { FaArrowLeftLong } from "react-icons/fa6";




const Info:React.FC<{darkMode: boolean}> = (props) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.countryInfo);
  const location = useLocation();
  const {name} = location.state;


  useEffect(() => {   

       dispatch(countryInformation(name)); 

  },[dispatch,name])

  console.log(data)

  const allProps = {
    darkMode: props.darkMode,
  };


  return (
    <div
      className={`${
        props.darkMode && "dark"
      } px-6 py-8  lg:px-20 lg:py-4 duration-300 ease-out dark:text-white min-h-[100vh] dark:bg-[#1e272e]`}
    >
      <Link to="/">
        <div className=" shadow-md w-32 px-5 py-2  dark:bg-[#243038] flex justify-center">
         <div className=" flex items-center gap-2">
            <FaArrowLeftLong /> <p className="w-full h-full"> Back</p>
         </div>
        </div>
      </Link>
      {loading ? <Loading /> : <Country {...allProps} />}
    </div>
  );
}

export default Info;