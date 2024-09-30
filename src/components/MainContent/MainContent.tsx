import { fetchData } from "../../redux/reducers/DataSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card/Card";


const MainContent = () => {

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.countries);


  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);


  return (
    <div className="w-full grid lg:grid-cols-4 gap-3 px-6 py-8  lg:px-20 lg:py-4">
      {data.map((value:any, index) => (
        <Card
          key={index}
          flag={value.flags.png}
          name={value.name.common}
          population={value.population}
          region={value.region}
          capital={value.capital}
        />
      ))}
    </div>
  );
}

export default MainContent