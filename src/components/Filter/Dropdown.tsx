import { Select } from "@mantine/core";


const Dropdown = () => {
  return (
    <>
      <Select
        
        className=" bg-transparent"
        placeholder="Filter by Region"
        data={["All", "Africa", "America", "Asia", "Europe", "Oceania"]}
      />
    </>
  );
}

export default Dropdown