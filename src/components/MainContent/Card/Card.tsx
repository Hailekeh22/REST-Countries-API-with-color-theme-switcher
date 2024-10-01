import React from "react";
import { Link } from "react-router-dom";


interface propValues {
    flag:string,
    name: string,
    population: number,
    region: string,
    capital: string,
    dark:boolean
}

const Card:React.FC<propValues> = (props) => {

  const states = {
    name: props.name,
  }

  return (
    <div
      className={`${
        props.dark && "dark"
      } w-auto dark:text-white dark:bg-[#243038] cursor-pointer shadow-lg duration-300 ease-out rounded-md flex flex-col `}
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