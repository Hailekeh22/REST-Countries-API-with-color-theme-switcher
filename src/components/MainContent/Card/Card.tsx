import React from "react"


interface propValues {
    flag:string,
    name: string,
    population: number,
    region: string,
    capital: string,
    dark:boolean
}

const Card:React.FC<propValues> = (props) => {
  return (
    <div
      className={`${
        props.dark && "dark"
      } w-auto dark:text-white dark:bg-[#243038] shadow-lg duration-300 ease-out rounded-md flex flex-col `}
    >
      <img src={props.flag} className="w-full h-44 bg-cover" alt="Flag" />
      <div className=" min-h-36 p-3">
        <h2 className=" font-bold mb-2">{props.name}</h2>
        <p>Population: {props.population.toLocaleString()}</p>
        <p>Region: {props.region}</p>
        <p>Capital: {props.capital}</p>
      </div>
    </div>
  );
}

export default Card