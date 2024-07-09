import React, { useContext, useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Our_Client = () => {
    const [users, setUsers] = useState([]);
    const { setLoading } = useContext(AuthContext);

    useEffect(() => {
        setLoading(true);
        fetch("https://travel-mate-server-theta.vercel.app/Users")
          .then((res) => res.json())
          .then((data) => {
            setUsers(data);
            setLoading(false);
          });
      }, [users]);

    const [sliderRef] = useKeenSlider(
        {
          loop: true,
          vertical: true,
        },
        [
          (slider) => {
            let timeout;
            let mouseOver = false;
            function clearNextTimeout() {
              clearTimeout(timeout);
            }
            function nextTimeout() {
              clearTimeout(timeout);
              if (mouseOver) return;
              timeout = setTimeout(() => {
                slider.next();
              }, 2000);
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true;
                clearNextTimeout();
              });
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false;
                nextTimeout();
              });
              nextTimeout();
            });
            slider.on("dragStarted", clearNextTimeout);
            slider.on("animationEnded", nextTimeout);
            slider.on("updated", nextTimeout);
          },
        ]
      );
    
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

      <div>
        <div ref={sliderRef} className="keen-slider" style={{ height: 300 }}>
          {users.map((user) => (
            <div className="keen-slider__slide">
              <div className="card border-2 bg-base-100 m-auto">
                <figure className="w-40 h-40 rounded-lg">
                  <img
                    src={
                      user?.photoURL
                        ? user.photoURL
                        : "https://i.postimg.cc/vTN8PMKb/blank-profile-picture-973460-1280.png"
                    }
                    alt={user ? user?.name : user?.Name}
                  />
                </figure>
                <div className="card-body">
                  <h1>{user ? user?.name : user?.Name}</h1>
                  <p className="font-mono font-semibold">
                    This site is a wonderful and friendly.if you want create to
                    a tour plan so trust this site"
                  </p>
                  <p>{user ? user?.email : user?.Email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Our_Client;
