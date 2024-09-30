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
    <div className=" w-auto ">
        <img src={props.flag} className="w-full h-44 bg-cover" alt="Flag" />
        <div>
            <h2>{props.name}</h2>
            <p>{props.population}</p>
            <p>{props.region}</p>
            <p>{props.capital}</p>
        </div>
    </div>
  )
}

export default Card