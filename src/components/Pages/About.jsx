import { Helmet } from "react-helmet";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const About = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    <div className="space-y-6 py-10" data-aos="zoom-in">
      <Helmet>
        <title> Travel-Mate | About Us </title>
      </Helmet>
      <div>
        <h1 className="text-3xl font-semibold font-serif">
          Welcome to Travel-Mate
        </h1>
        <p>
          where we redefine the art of travel management to deliver unparalleled
          experiences to our valued clients. With a deep-rooted passion for
          exploration and a commitment to excellence, we strive to create
          unforgettable journeys that leave a lasting impression.
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-semibold font-serif">Our Mission:</h1>
        <p>
          At Travel-Mate, our mission is simple yet profound: to inspire and
          empower travelers to discover the world in all its splendor. We
          believe that travel is not just about visiting new places but about
          immersing oneself in different cultures, forging connections, and
          creating memories that endure a lifetime.
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-semibold font-serif">What We Do:</h1>
        <p>
          As a premier destination management company, we specialize in curating
          bespoke travel experiences tailored to the unique preferences and
          interests of each client. From luxurious getaways to
          off-the-beaten-path adventures, we pride ourselves on our ability to
          transform dreams into reality.
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-semibold font-serif">Our Approach:</h1>
        <p>
          What sets us apart is our personalized approach to travel management.
          We understand that no two travelers are alike, which is why we take
          the time to listen, understand, and anticipate the needs of our
          clients. Whether you're planning a romantic honeymoon, a family
          vacation, or a corporate retreat, we go above and beyond to ensure
          that every detail is meticulously planned and executed with precision.
        </p>
      </div>
    </div>
  );
};

export default About;
