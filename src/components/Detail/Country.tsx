import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';



const Country: React.FC = () => {


  const {darkMode} = useSelector((state:RootState) => state.theme);
  const {data} = useSelector((state:RootState) => state.countryInfo);


  console.log(data);


  return (
    <div
      className={`${
        darkMode && "dark"
      } flex flex-col lg:flex-row w-full  mt-10`}
    >
      <div className=" h-auto basis-[50%]">
        <img
          className="  w-full self-center lg:h-full"
          src={data.flags.png}
          alt="flag"
        />
      </div>
      <div className="">
        <div className=" lg:px-28 py-16">
          <p className=" text-2xl font-bold ">{data.name}</p>

          <div className="flex flex-col lg:flex-row w-[35rem] justify-between my-5 lg:my-10">
            <div className="mb-8 lg:mb-0">
              <p>
                <span className=" font-semibold">Native Name: </span>
                {data.nativeName}
              </p>
              <p>
                <span className=" font-semibold">Population: </span>
                {data.population.toLocaleString()}
              </p>
              <p>
                <span className=" font-semibold">Region: </span> {data.region}
              </p>
              <p>
                <span className=" font-semibold">Sub Region: </span>
                {data?.subregion || "No Sub Region"}
              </p>
              <p>
                <span className=" font-semibold">Capital: </span>
                {data.capital}
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Top Level Domain: </span>
                {data?.topLevelDomain.map((item: string) => item).join(", ")}
              </p>
              <p>
                <span className="font-semibold">Currencies: </span>
                {data.currencies?.map((item: any) => item.name).join(", ")}
              </p>
              <p>
                <span className="font-semibold">Languages: </span>
                {data.languages.map((item: any) => item.name).join(", ")}
              </p>
            </div>
          </div>

          <div className=" flex flex-col lg:flex-row  gap-5">
            <div className=" basis-[40%]">
              <p className="font-semibold">Border Countries:</p>
            </div>
            <div className=" gap-3 max-w-full ">
              <button className=" shadow-md dark:bg-[#243038] px-3 mr-1 mb-1 py-2 lg:mb-2 lg:mx-2">
                Newzeland{}
              </button>
              <button className=" shadow-md dark:bg-[#243038] px-3 mr-1 mb-1 py-2 lg:mx-2">
                Newzeland{}
              </button>
              <button className=" shadow-md dark:bg-[#243038] px-3 mr-1 mb-1 py-2 lg:mx-2">
                Newzeland{}
              </button>
              <button className=" shadow-md dark:bg-[#243038] px-3 mr-1 mb-1 py-2 lg:mx-2">
                Newzeland{}
              </button>
              <button className=" shadow-md dark:bg-[#243038] px-3 mr-1 mb-1 py-2 lg:mx-2">
                Newzeland{}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country