// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'animate.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Banner = () => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
 

  const handleLogin = () =>{
    if(user){
      return Swal.fire({
        title: 'Warning!',
        text: 'You are already login!',
        icon: 'warning',
        showConfirmButton: false,
        timer: 1500
      })
    }
    navigate('/LogIn');
  }

  return (
    <div className="my-4">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[url(https://i.postimg.cc/3xsfCpfw/denissa-devy-f-U2-Mus9qm-N8-unsplash.jpg)] w-full min-h-[600px] bg-no-repeat bg-cover bg-center rounded-lg">
            <div className="p-10 lg:p-20 bg-blue-500 bg-opacity-50 min-h-[600px] space-y-8 rounded-lg">
              <h1 className="animate__animated animate__fadeInDown">
                <span className="text-5xl font-bold text-white">
                  Welcome to{" "}
                  <span className="text-pink-800">
                    Travel-Mate__
                  </span>
                  
                </span>{" "}
                <br />{" "}
                <span className="text-3xl font-semibold text-violet-100">
                  Your Companion on the Journey of Exploration At Travel Mate,
                </span>
              </h1>

              <p className="text-2xl text-yellow-100 animate__animated animate__pulse">
                {" "}
                we believe that every journey is an opportunity for adventure,
                discovery, and connection. <br /> Whether you're embarking on a
                solo backpacking expedition, planning a family vacation, or
                organizing <br /> a group tour with friends, we're here to be
                your trusted companion every step of the way.
              </p>
              <div>
                  <button onClick={handleLogin} className="btn">Login Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-[url(https://i.postimg.cc/Y0Cdqx0d/ebadur-rehman-kaium-GBYWXNWO81-A-unsplash.jpg)] w-full min-h-[600px] bg-no-repeat bg-cover bg-center rounded-lg">
            <div className="p-10 lg:p-20 bg-blue-500 bg-opacity-50 min-h-[600px] space-y-8 rounded-lg">
              <h1 className="animate__animated animate__fadeInDown">
                <span className="text-5xl font-bold text-white">
                  Welcome to{" "}
                  <span className="text-pink-800">
                    Travel-Mate__
                  </span>
                  
                </span>{" "}
                <br />{" "}
                <span className="text-3xl font-semibold text-violet-100">
                  Your Companion on the Journey of Exploration At Travel Mate,
                </span>
              </h1>

              <p className="text-2xl text-yellow-100 animate__animated animate__pulse">
                {" "}
                we believe that every journey is an opportunity for adventure,
                discovery, and connection. <br /> Whether you're embarking on a
                solo backpacking expedition, planning a family vacation, or
                organizing <br /> a group tour with friends, we're here to be
                your trusted companion every step of the way.
              </p>
              <div>
              <div>
                  <button onClick={handleLogin} className="btn">Login Now</button>
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-[url(https://i.postimg.cc/NfXqmgpB/alice-g52-OIhol73-M-unsplash.jpg)] w-full min-h-[600px] bg-no-repeat bg-cover bg-center rounded-lg">
            <div className="p-10 lg:p-20 bg-blue-500 bg-opacity-50 min-h-[600px] space-y-8 rounded-lg">
              <h1 className="animate__animated animate__fadeInDown">
                <span className="text-5xl font-bold text-white">
                  Welcome to{" "}
                  <span className="text-pink-800">
                    Travel-Mate__
                  </span>
                  
                </span>{" "}
                <br />{" "}
                <span className="text-3xl font-semibold text-violet-100">
                  Your Companion on the Journey of Exploration At Travel Mate,
                </span>
              </h1>

              <p className="text-2xl text-yellow-100 animate__animated animate__pulse">
                {" "}
                we believe that every journey is an opportunity for adventure,
                discovery, and connection. <br /> Whether you're embarking on a
                solo backpacking expedition, planning a family vacation, or
                organizing <br /> a group tour with friends, we're here to be
                your trusted companion every step of the way.
              </p>
              <div>
              <div>
                  <button onClick={handleLogin} className="btn">Login Now</button>
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-[url(https://i.postimg.cc/5yLJ41r4/digitalarbyter-ma-J7h-JBE654-unsplash.jpg)] w-full min-h-[600px] bg-no-repeat bg-cover bg-center rounded-lg">
            <div className="p-10 lg:p-20 bg-blue-500 bg-opacity-50 min-h-[600px] space-y-8 rounded-lg">
              <h1 className="animate__animated animate__fadeInDown">
                <span className="text-5xl font-bold text-white">
                  Welcome to{" "}
                  <span className="text-pink-800">
                    Travel-Mate__
                  </span>
                  
                </span>{" "}
                <br />{" "}
                <span className="text-3xl font-semibold text-violet-100">
                  Your Companion on the Journey of Exploration At Travel Mate,
                </span>
              </h1>

              <p className="text-2xl text-yellow-100 animate__animated animate__pulse">
                {" "}
                we believe that every journey is an opportunity for adventure,
                discovery, and connection. <br /> Whether you're embarking on a
                solo backpacking expedition, planning a family vacation, or
                organizing <br /> a group tour with friends, we're here to be
                your trusted companion every step of the way.
              </p>
              <div>
              <div>
                  <button onClick={handleLogin} className="btn">Login Now</button>
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
