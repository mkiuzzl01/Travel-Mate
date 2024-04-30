import { Helmet } from "react-helmet";
import { IoIosTimer } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";

const Bangladesh = () => {
  const country = useLoaderData();
  return (
    <div>
      <h1>Welcome to Bangladesh</h1>
      <div>
        <Helmet>
          <title> Travel-Mate | Thailand </title>
        </Helmet>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
          {country.map((count) => (
            <div key={count.id}>
              <div className="card card-compact bg-base-100 border-2">
                <figure>
                  <img
                    src={count.image}
                    alt={count.tourists_spot_name}
                    className="w-full lg:h-80"
                  />
                </figure>
                <div className="card-body grow">
                  <div className="flex justify-between border-b-2 border-dashed p-2">
                    <p className="flex items-center space-x-1 ">
                      <span className="text-lg">
                        <IoLocationSharp />
                      </span>{" "}
                      <span>{count.location}</span>
                    </p>
                    <p className="flex items-center space-x-1 ">
                      <span>{count.average_cost}</span>
                    </p>
                    <p className="flex items-center space-x-1 ">
                      <span>
                        <IoIosTimer className="text-lg" />
                      </span>
                      <span>{count.season_type}</span>
                    </p>
                  </div>
                  <h2 className="text-2xl font-bold font-Merriweather">
                    {count.tourists_spot_name}
                  </h2>
                  <p className="text-lg font-medium">{count.country_Name}</p>
                  <p className="font-PT_Sans">{count.short_description}</p>
                  <div>
                    <p className="flex items-center font-semibold space-x-2"></p>
                  </div>
                  <div className="card-actions justify-center">
                    <Link to={`/Bangladesh/${count.id}`}>
                      <button className="btn btn-outline btn-success">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bangladesh;
