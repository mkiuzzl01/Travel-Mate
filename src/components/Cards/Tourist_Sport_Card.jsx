import PropTypes from "prop-types";
import { FiTag } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { SiTripadvisor } from "react-icons/si";
import { MdAttachMoney } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { Link } from "react-router-dom";

const Tourist_Sport_Card = ({ sport }) => {
  const {
    _id,
    sport_name,
    country_Name,
    location,
    description,
    average_cost,
    travel_time,
    photo,
    total_visitor,
    seasonal,
  } = sport;
  return (
    <div data-aos="zoom-in">
      <div className="card card-compact bg-base-100 border-blue-300 border-2">
        <figure>
          <img src={photo} alt={sport_name} className="w-full lg:h-80" />
        </figure>
        <div className="card-body grow">
          <div className="flex justify-between border-b-2 border-dashed p-2">
            <p className="flex items-center font-semibold space-x-2">
              <span className="text-lg">
                <FiTag />
              </span>{" "}
              <span>{seasonal}</span>
            </p>
            <p className="flex items-center space-x-1 ">
              <span>
                <SiTripadvisor className="text-lg" />
              </span>
              <span>{total_visitor}</span>
            </p>
            <p className="flex items-center space-x-1 ">
              <span>
                <MdAttachMoney className="text-lg" />
              </span>
              <span>{average_cost}</span>
            </p>
            <p className="flex items-center space-x-1 ">
              <span>
                <IoIosTimer className="text-lg" />
              </span>
              <span>{travel_time}</span>
            </p>
          </div>
          <h2 className="text-2xl font-bold font-Merriweather">
            {sport_name}
          </h2>
          <p className="text-lg font-medium">{location}</p>
          <p className="font-PT_Sans">{description}</p>
          <div>
            <p className="flex items-center font-semibold space-x-2">
              <span className="text-lg">
                <IoLocationSharp />
              </span>{" "}
              <span>{country_Name}</span>
            </p>
          </div>
          <div className="card-actions justify-center">
            <Link to={`/View_Details/${_id}`}>
              <button className="btn btn-outline btn-success">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Tourist_Sport_Card.propTypes = {
  sport: PropTypes.object
};

export default Tourist_Sport_Card;
