import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RootState, AppDispatch } from "../../../redux/store";
import { countryInformation } from "../../../redux/reducers/countrySlice";
import { removeSearch } from "../../../redux/reducers/filterSlice";

interface propValues {
    flag:string,
    name: string,
    population: number,
    region: string,
    capital: string,
    code: string

}

const Card:React.FC<propValues> = (props) => {

  const dispatch = useDispatch<AppDispatch>();
  const {darkMode} = useSelector((state:RootState) => state.theme);

  const countryData = () => {
    dispatch(countryInformation(props.code));
    dispatch(removeSearch());
  }

  const states = {
    code: props.code,
  };

  return (
    <div
      onClick={countryData}
      className={`${
        darkMode && "dark"
      } w-auto dark:text-white hover:scale-[103%] hover:shadow-slate-700 dark:hover:shadow-white hover:shadow-sm dark:bg-[#243038] cursor-pointer shadow-lg duration-300 ease-out rounded-md flex flex-col `}
    >
      <Link to="/info" state={states}>
        <img src={props.flag} className="w-full h-44 bg-cover" alt="Flag" />
        <div className=" min-h-36 p-3">
          <h2 className=" font-bold mb-2">{props.name}</h2>
          <p>Population: {props.population.toLocaleString()}</p>
          <p>Region: {props.region}</p>
          <p>Capital: {props.capital}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card