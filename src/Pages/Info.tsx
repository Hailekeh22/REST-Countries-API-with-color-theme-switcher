import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../components/MainContent/loader/Loading";
import Country from "../components/Detail/Country";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RootState } from "../redux/store";
import { AppDispatch } from "../redux/store";
import { fetchBorders } from "../redux/reducers/borderSlice";




const Info: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector((state: RootState) => state.countryInfo);
  const { darkMode } = useSelector((state: RootState) => state.theme);

useEffect(() => {
 const fetchborderdata = async () => {
   if (data.borders && data.borders.length > 0) {
     const borders: string = await data.borders.map((item: string) => item).join(",");
     await dispatch(fetchBorders(borders));
   } else {
     await dispatch(fetchBorders(""));
   }
 }
 fetchborderdata();

}, [dispatch,data]);




  return (
    <div
      className={`${
        darkMode && "dark"
      } dark:bg-[#1e272e] w-full flex justify-center items-center lg:px-20 px-4 py-14`}
    >
      <div className=" max-w-screen-2xl mx-auto  duration-300 ease-out w-full h-full dark:text-white min-h-[80vh] dark:bg-[#1e272e]">
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
    </div>
  );
};

export default Info;
