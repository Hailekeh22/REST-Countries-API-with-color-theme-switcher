import React from "react";
import { CiSearch } from "react-icons/ci";
import Dropdown from "./Dropdown";


const Filter: React.FC<{dark:boolean}> = (props) => {
  return (
    <div className="  lg:flex lg:items-center lg:justify-between w-full px-4 py-10 lg:px-20 bg-transparent">
      <div className="flex items-center gap-3 shadow-md py-2 px-8 min-w-[20rem] lg:min-w-[27rem]  border-2 duration-300 ease-out  dark:bg-[#243038] dark:border-[#243038]">
        {props.dark ? <CiSearch style={{ color: "white" }} /> : <CiSearch />}
        <input
          type="text"
          className="bg-transparent w-full border-0 outline-none text-white"
          placeholder="Search for a country..."
        />
      </div>
      <div className="mt-14 lg:mt-0 max-w-[13rem] lg:pt-0 shadow-lg ">
        <Dropdown />
      </div>
    </div>
  );
};

export default Filter;
