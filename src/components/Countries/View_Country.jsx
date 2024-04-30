import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'

const View_Country = () => {
  const CountryData = useLoaderData();

  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    <div className="m-4 border-green-400 border-2 rounded-lg" data-aos="zoom-in">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 p-2 items-center"
        data-aos="zoom-out"
      >
        <Helmet>
          <title>Travel-Mate | Country Details </title>
        </Helmet>
        <div className="bg-[#1313130D] p-8 flex justify-center items-center">
          <img src={CountryData.image} className="" alt="" />
        </div>
        <div className="ms-8">
          <div className="">
            <h1 className="font-bold text-4xl py-2">
              {CountryData.tourists_spot_name}
            </h1>
            <p className="py-2">
              <span className="font-medium">
                {CountryData.short_description}
              </span>{" "}
            </p>
            <p className="font-medium border-y-2 py-2">
              {CountryData.location}
            </p>
            <p className="py-2">
              <span className="font-bold">Average Cost: </span>
              <span>{CountryData.average_cost}</span>
            </p>
            <div className="flex items-center border-b-2 py-2">
              <p>
                <span className="font-bold">Season Type: </span>
                {CountryData.season_type}
              </p>
              <div className="text-center p-2 flex"></div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View_Country;
