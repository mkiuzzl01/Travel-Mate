
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const View_Country = () => {
    const CountryData = useLoaderData()
    console.log(CountryData);
    return (
        <div>
            <div
      className="grid grid-cols-1 lg:grid-cols-2 items-center p-2 font-PT_Sans"
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
          <h1 className="font-bold text-4xl py-2">{CountryData.tourists_spot_name}</h1>
          <p className="py-2">
            <span className="font-medium">{CountryData.short_description}</span>{" "}
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
          <div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default View_Country;