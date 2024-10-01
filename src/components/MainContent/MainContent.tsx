import { fetchData } from "../../redux/reducers/DataSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card/Card";
import Loading from "./loader/Loading";


const MainContent:React.FC<{dark:boolean}> = (props) => {

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.countries);


  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);


  return (
    <div className="w-full grid lg:grid-cols-4 gap-6 px-6 py-8  lg:px-20 lg:py-4">
      {loading ? (
        <Loading  />
      ) : (
        data.map((value: any, index: number) => (
          <Card
            key={index}
            flag={value.flags.png}
            name={value.name.common}
            population={value.population}
            region={value.region}
            capital={value.capital}
            dark={props.dark}
          />
        ))
      )}
    </div>
  );
}

export default MainContent