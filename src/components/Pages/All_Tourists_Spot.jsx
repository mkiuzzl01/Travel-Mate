import { useLoaderData } from "react-router-dom";
import Tourist_Sport_Card from "./Tourist_Sport_Card";
import { useState } from "react";

const All_Tourists_Spot = () => {
  const initialSports = useLoaderData();
  const [sports,setSpots] = useState(initialSports);

  const minCost = ()=>{
    const info = sports.sort(function(a,b){
        return parseInt(a.average_cost) - parseInt(b.average_cost);
    })
    console.log(info);
    setSpots(info);
  }

  const maxCost = ()=>{
    const info = sports.sort(function(a,b){
        return parseInt(a.average_cost) - parseInt(b.average_cost);
    })
    info.reverse();
    console.log(info);
    setSpots(info);
  }

  return (
    <div>
      <div className="text-center my-4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Short by
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={()=> minCost()}>
              <a>Minimum Cost</a>
            </li>
            <li onClick={()=>maxCost()}>
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
