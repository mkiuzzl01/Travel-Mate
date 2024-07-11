import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Our_Client = () => {
  const [clients, setClients] = useState([]);
  const { setLoading } = useContext(AuthContext);

  const clientData = async () => {
    setLoading(true);
    const { data } = await axios.get('https://travel-mate-server-theta.vercel.app/Our-client');
    setLoading(false);
    setClients(data);
  };

  useEffect(() => {
    clientData();
  }, []);

  return (
    <section>
      <div className="my-8 text-center border-y-2 border-dashed py-8 border-purple-400">
        <h1 className="text-4xl font-semibold text-center font-serif">
          Our Client
        </h1>
        <p className="font-sans">
          At Travel Mate, we understand that no two travelers are alike. <br />{" "}
          That's why we specialize in crafting personalized experiences that
          cater to your individual preferences and interests. <br /> Whether
          you're a history buff, a foodie aficionado, an adrenaline junkie, or a
          nature enthusiast, our team of experienced travel experts will work
          tirelessly to curate the perfect itinerary just for you.
        </p>
      </div>

      <div className="swiper-container" style={{ height: '350px', overflow: 'hidden' }}>
        <Swiper
          direction={'vertical'}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // Responsive breakpoints
            640: {
              direction: 'horizontal',
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              direction: 'horizontal',
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              direction: 'horizontal',
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1280: {
              direction: 'vertical',
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
          style={{ height: '100%' }}
        >
          {clients.map((client, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center max-w-3xl m-auto p-5 border-2 rounded-lg bg-base-200">
                <figure className="max-w-40">
                  <img
                    src={
                      client?.userImage
                        ? client.userImage
                        : "https://i.postimg.cc/vTN8PMKb/blank-profile-picture-973460-1280.png"
                    }
                    alt={client ? client?.userName : "Unknown"}
                  />
                </figure>
                <div className="flex flex-col items-center">
                  <h1>{client ? client?.userName : "Unknown"}</h1>
                  <p className="font-mono text-center font-semibold">
                    "This site is a wonderful and friendly. If you want to create a tour plan, trust this site."
                  </p>
                  <p>{client?.userEmail}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Our_Client;
