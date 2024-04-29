import { useLoaderData } from "react-router-dom";
import Tourist_Sport_Card from "./Tourist_Sport_Card";
import { Helmet } from "react-helmet";
import Banner from "../Layout/Banner";

const Home = () => {
  const sports = useLoaderData();

  return (
    <div className="">
      <Helmet>
        <title>Travel-Mate | Home </title>
      </Helmet>
      <div>
        <Banner></Banner>
      </div>
      <div className="my-8 text-center border-y-2 border-dashed p-4">
        <h1 className="text-4xl font-semibold text-center">Tourists Spots</h1>
        <p>At Travel Mate, we understand that no two travelers are alike. <br /> That's why we specialize in crafting personalized experiences that cater to your individual preferences and interests. <br /> Whether you're a history buff, a foodie aficionado, an adrenaline junkie, or a nature enthusiast, our team of experienced travel experts will work tirelessly to curate the perfect itinerary just for you.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
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

export default Home;
