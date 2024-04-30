import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Country_Card = ({country}) => {
    const {_id,countryName,description,image} = country;
  return (
    <div>
      <Link to={`${countryName}`}>
        <div>
          <div className="card card-compact border-2 border-green-500 bg-base-100">
            <figure>
              <img
                src={image}
                alt={countryName}
                className="w-full lg:h-80"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{countryName}</h2>
              <p>
               {description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

Country_Card.propTypes = {
    country:PropTypes.object
};

export default Country_Card;
