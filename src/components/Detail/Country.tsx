import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


const Country: React.FC = () => {

  const {darkMode} = useSelector((state:RootState) => state.theme)


  return (
    <div className={`${darkMode && "dark"} flex w-full  mt-10`}>
      <div className=" h-[25rem]">
        <img
          className=" h-full"
          src="https://flagcdn.com/w320/co.png"
          alt="flag"
        />
      </div>
      <div>
        <div className=" px-28 py-16">
          <p className=" text-2xl font-bold mb-8">{}Belgium</p>

          <div className="flex w-[25rem] justify-between my-10">
            <div className=" pr-28">
              <p>Native Name: {}</p>
              <p>Population: {}</p>
              <p>Region: {}</p>
              <p>Sub Region: {}</p>
              <p>Capital: {}</p>
            </div>
            <div>
              <p>Top Level Domain: {}</p>
              <p>Currencie: {}</p>
              <p>Languages: {}</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div>
              <p>Border Countries:</p>
            </div>
            <div>
              <button className=" shadow-md dark:bg-[#243038] px-3 py-2 mx-2">
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