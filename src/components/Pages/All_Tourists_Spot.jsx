import { Helmet } from "react-helmet";
import Tourist_Sport_Card from "./Tourist_Sport_Card";
import { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const All_Tourists_Spot = () => {
  const [sports, setSpots] = useState([]);
  console.log(sports);

  useEffect(() => {
    fetch("https://travel-mate-server-theta.vercel.app/Tourist_Sports")
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, []);

  const minCost = () => {
    fetch("https://travel-mate-server-theta.vercel.app/minCost")
      .then((res) => res.json())
      .then((data) => setSpots(Array.from(data)));
  };
  const maxCost = () => {
    fetch("https://travel-mate-server-theta.vercel.app/maxCost")
      .then((res) => res.json())
      .then((data) => setSpots(Array.from(data)));
  };

  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  
  return (
    <div data-aos="zoom-out">
      <div className="text-center my-4">
        <Helmet>
          <title>Travel-Mate | All Tourist Spots </title>
        </Helmet>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Short by
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => minCost()}>
              <a>Minimum Cost</a>
            </li>
            <li onClick={() => maxCost()}>
              <a>Maximum Cost</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        {sports.map((sport) => (
          <Tourist_Sport_Card
            key={sport._id}
            sport={sport}
          ></Tourist_Sport_Card>
        ))}
      </div>
    </div>
  );
};

export default All_Tourists_Spot;
