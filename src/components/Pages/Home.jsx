import { useLoaderData } from "react-router-dom";
import Tourist_Sport_Card from "./Tourist_Sport_Card";
import { Helmet } from "react-helmet";
import Banner from "../Layout/Banner";
import Contact_Us from "./Contact_Us";
import { useContext, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Country_Card from "./Country_Card";
import Our_Client from "../Our_Client/Our_Client";

const Home = () => {
  const { setLoading } = useContext(AuthContext);
  const sports = useLoaderData();
  const [countries, setCountries] = useState([]);
 

  useEffect(() => {
    setLoading(true);
    fetch("https://travel-mate-server-theta.vercel.app/Countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      });
  }, [countries]);

  

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="">
      <Helmet>
        <title>Travel-Mate | Home </title>
      </Helmet>
      <div>
        <Banner></Banner>
      </div>
      <section>
        <div className="my-8 text-center border-y-2 border-dashed py-8 border-purple-400">
          <h1 className="text-4xl font-semibold text-center font-serif">
            Tourists Spots
          </h1>
          <p className="font-sans">
            At Travel Mate, we understand that no two travelers are alike.{" "}
            <br /> That's why we specialize in crafting personalized experiences
            that cater to your individual preferences and interests. <br />{" "}
            Whether you're a history buff, a foodie aficionado, an adrenaline
            junkie, or a nature enthusiast, our team of experienced travel
            experts will work tirelessly to curate the perfect itinerary just
            for you.
          </p>
        </div>
      </section>
      <section data-aos="zoom-out">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 my-4">
          {sports.map((sport) => (
            <Tourist_Sport_Card
              key={sport._id}
              sport={sport}
            ></Tourist_Sport_Card>
          ))}
        </div>
      </section>
      <section>
        <div className="my-8 text-center border-y-2 border-dashed py-8 border-purple-400">
          <h1 className="text-4xl font-semibold text-center font-serif">
            Countries
          </h1>
          <p className="font-sans">
            At Travel Mate, we understand that no two travelers are alike.{" "}
            <br /> That's why we specialize in crafting personalized experiences
            that cater to your individual preferences and interests. <br />{" "}
            Whether you're a history buff, a foodie aficionado, an adrenaline
            junkie, or a nature enthusiast, our team of experienced travel
            experts will work tirelessly to curate the perfect itinerary just
            for you.
          </p>
        </div>
      </section>
      <section data-aos="flip-down">
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 my-8">
          {countries.map((country) => (
            <Country_Card key={country._id} country={country}></Country_Card>
          ))}
        </div>
      </section>

      {/* this is client section */}
      <section>
        <Our_Client></Our_Client>
      </section>
      
      <section>
        <Contact_Us></Contact_Us>
      </section>
    </div>
  );
};

export default Home;
