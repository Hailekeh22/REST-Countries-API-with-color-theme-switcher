import { fetchData, searchByRegion } from "../../redux/reducers/DataSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card/Card";
import Loading from "./loader/Loading";
import { RootState } from "../../redux/store";
import { AppDispatch } from "../../redux/store";



const MainContent:React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector((state: RootState) => state.countries);
  const { searchTerm } = useSelector((state: RootState) => state.search);
  const { region } = useSelector((state: RootState) => state.search);

    useEffect(() => {
       if(region == "") {
        return ;
      } else if (region == "All") {
        dispatch(fetchData());
      } else {
        dispatch(searchByRegion(region));
      }
    }, [region]); 

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const filteredSearch = searchTerm ? data.filter((value: any) =>
      value.name.common.toLowerCase().includes(searchTerm.toLowerCase())) : data; 

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 max-w-screen-2xl mx-auto gap-8 py-8 lg:py-4">
          {filteredSearch.map((value: any, index: number) => (
            <Card
              key={index}
              flag={value.flags.png}
              name={value.name.common}
              population={value.population}
              region={value.region}
              capital={value.capital}
              code={value.cca2}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default MainContent