import React from "react"


interface propValues {
    flag:string,
    name: string,
    population: number,
    region: string,
    capital: string
}

const Card:React.FC<propValues> = (props) => {
  return (
    <div className=" w-auto">
        <img src={props.flag} alt="Flag" />
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