import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const View_Details = () => {
  const sport = useLoaderData();

  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 items-center m-4 rounded-lg border-green-500 border-2 p-2"
      data-aos="zoom-out"
    >
      <Helmet>
        <title>Travel-Mate | Spot Details </title>
      </Helmet>
      <div className="bg-[#1313130D] p-8 flex justify-center items-center">
        <img src={sport.photo} className="" alt="" />
      </div>
      <div className="ms-8">
        <div className="">
          <h1 className="font-bold text-4xl py-2">{sport.sport_name}</h1>
          <p className="py-2">
            <span className="font-medium">{sport.description}</span>{" "}
          </p>
          <p className="font-medium border-y-2 py-2">
            {sport.location}
          </p>
          <p className="py-2">
            <span className="font-bold">Average Cost: </span>
            <span>${sport.average_cost}</span>
          </p>
          <div className="flex items-center border-b-2 py-2">
            <p>
              <span className="font-bold">Total Visitor: </span>
              {sport.total_visitor}
            </p>
            <div className="text-center p-2 flex"></div>
          </div>
          <div>
            <table className="table">
              <tr>
                <td>
                  <span>Country:</span>
                </td>
                <td>
                  <span className="font-semibold">{sport.country_Name}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>seasonality:</span>
                </td>
                <td>
                  <span className="font-semibold">
                    {sport.seasonal}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Travel Time:</span>
                </td>
                <td>
                  <span className="font-semibold">
                    {sport.travel_time}
                  </span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View_Details;
