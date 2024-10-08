import { Select } from "@mantine/core";
import { filterByRegion } from "../../redux/reducers/filterSlice";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";


const Dropdown = () => {

  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    dispatch(filterByRegion(value))
  },[value, dispatch])



  return (
    <>
      <Select
        className=" bg-transparent"
        placeholder="Filter by Region"
        data={["All", "Africa", "Americas", "Asia", "Europe", "Oceania"]}
        value={value ? value : null}
        onChange={( option:any) => setValue(option)}
      />
    </>
  );
}

export default Dropdown