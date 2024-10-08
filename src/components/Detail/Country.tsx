import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchBorders } from "../../redux/reducers/borderSlice";
import { AppDispatch } from "../../redux/store";
import { countryInformation } from "../../redux/reducers/countrySlice";


const Country: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { darkMode } = useSelector((state: RootState) => state.theme);
  const { data } = useSelector((state: RootState) => state.countryInfo);
  const { borderData, fetchingBorders } = useSelector((state: RootState) => state.border);

  useEffect(() => {

    if (data?.borders && data.borders.length > 0) {
      dispatch(fetchBorders(data.borders.join(","))); 
    } else {
      dispatch({ type: "borders/noBorder" });
    }
  }, [data, dispatch]);



  const fetchNew = (alpha:string) => {
    dispatch(countryInformation(alpha));
    dispatch(fetchBorders(alpha));
  }



  if (!data || Object.keys(data).length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div
      className={`${
        darkMode && "dark"
      } flex flex-col md:flex-col lg:flex-row w-full h-full mt-10`}
    >
      <div className="w-full">
        <img
          className="self-center object-fill max-h-[30rem] w-full lg:max-w-[90%] h-full"
          src={data.flags?.png}
          alt="flag"
        />
      </div>
      <div className="w-full">
        <div className="lg:px-18 py-16">
          <p className="text-2xl font-bold">{data.name}</p>

          <div className="flex flex-col lg:flex-row md:flex-row w-full justify-between my-5 lg:my-10">
            <div className="mb-8 lg:mb-0">
              <p>
                <span className="font-semibold">Native Name: </span>
                {data.nativeName}
              </p>
              <p>
                <span className="font-semibold">Population: </span>
                {data.population?.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Region: </span> {data.region}
              </p>
              <p>
                <span className="font-semibold">Sub Region: </span>
                {data.subregion || "No Sub Region"}
              </p>
              <p>
                <span className="font-semibold">Capital: </span>
                {data.capital}
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Top Level Domain: </span>
                {data.topLevelDomain?.map((item: string) => item).join(", ")}
              </p>
              <p>
                <span className="font-semibold">Currencies: </span>
                {data.currencies?.map((item: any) => item.name).join(", ")}
              </p>
              <p>
                <span className="font-semibold">Languages: </span>
                {data.languages?.map((item: any) => item.name).join(", ")}
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            <div className="basis-[30%]">
              <p className="font-semibold">Border Countries:</p>
            </div>
            <div className="gap-3 max-w-full">
              {fetchingBorders ? (
                <p>Fetching borders...</p>
              ) : borderData.length === 0 || borderData[0] === "No Border" ? (
                <p>This country has no bordering nations.</p>
              ) : (
                borderData.map((item: any, index: number) => (
                  <button
                    key={index}
                    className="shadow-md hover:scale-[105%] bg-slate-200 hover:shadow-sm hover:shadow-black duration-200 dark:hover:shadow-white dark:bg-[#243038] px-3 mr-1 mb-1 py-2 lg:mb-2 lg:mx-2"
                    onClick={() => fetchNew(item.alpha3Code)}
                  >
                    {item.name}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
