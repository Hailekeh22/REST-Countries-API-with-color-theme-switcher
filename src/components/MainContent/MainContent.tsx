import { fetchData } from "../../redux/reducers/DataSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card/Card";
import Loading from "./loader/Loading";
import { RootState } from "../../redux/store";
import { AppDispatch } from "../../redux/store";


const MainContent:React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { data,loading } = useSelector((state:RootState) => state.countries);


  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);



  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 max-w-screen-2xl mx-auto gap-6 py-8 lg:py-4">
          {data.map((value: any, index: number) => (
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