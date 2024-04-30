import { Link, useLoaderData } from "react-router-dom";
import Tourist_Sport_Card from "./Tourist_Sport_Card";
import { Helmet } from "react-helmet";
import Banner from "../Layout/Banner";
import Contact_Us from "./Contact_Us";
import { useContext, useEffect, useState } from "react";
import MyUsers from "./MyUsers";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay,FreeMode,Pagination } from "swiper/modules";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Country_Card from "./Country_Card";

const Home = () => {
  const {setLoading} = useContext(AuthContext)
  const sports = useLoaderData();
  const [countries,setCountries] = useState([]);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:5000/Countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false)
      });
  }, [countries]);

  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:5000/Users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false)
      });
  }, [users]);


  return (
    <div className="">
      <Helmet>
        <title>Travel-Mate | Home </title>
      </Helmet>
      <div>
        <Banner></Banner>
      </div>
      <section>
        <div className="my-8 text-center border-y-2 border-dashed py-8">
          <h1 className="text-4xl font-semibold text-center">Tourists Spots</h1>
          <p>
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
      <section>
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
        <div className="my-8 text-center border-y-2 border-dashed py-8">
          <h1 className="text-4xl font-semibold text-center">Countries</h1>
          <p>
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
      <section>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 my-8">
        {
          countries.map(country=> <Country_Card key={country._id} country={country}></Country_Card>)
        }
        </div>
      </section>
      <section>
        <div className="my-8 text-center border-y-2 border-dashed py-8">
          <h1 className="text-4xl font-semibold text-center">Our Client</h1>
          <p>
            At Travel Mate, we understand that no two travelers are alike.{" "}
            <br /> That's why we specialize in crafting personalized experiences
            that cater to your individual preferences and interests. <br />{" "}
            Whether you're a history buff, a foodie aficionado, an adrenaline
            junkie, or a nature enthusiast, our team of experienced travel
            experts will work tirelessly to curate the perfect itinerary just
            for you.
          </p>
        </div>

        <div>
          <Swiper
            modules={[FreeMode,Pagination, Autoplay]}
            loop={true}
            slidesPerView={3}
            spaceBetween={30}
            autoplay ={{
              delay: 1000,
              disableOnInteraction: false,
            }}

            pagination={{
              clickable: true,
            }}
            freeMode={true}
            className="mySwiper"
          >
            <div>
              {users.map((user, idx) => (
                <SwiperSlide key={idx}>
                  <MyUsers user={user}></MyUsers>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </section>
      <section>
        <Contact_Us></Contact_Us>
      </section>
    </div>
  );
};

export default Home;
