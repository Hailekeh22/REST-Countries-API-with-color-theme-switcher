import { fetchData } from "../../redux/reducers/DataSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const MainContent = () => {

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.countries);


  useEffect(() => {
    dispatch(fetchData());
  }, []);

  console.log(data);



  return <div className="w-full px-6 py-8  lg:px-20 lg:py-4">
    <h2>Countris description section</h2>
  </div>;
}

export default MainContent