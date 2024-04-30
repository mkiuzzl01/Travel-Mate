import { Link, useLoaderData } from "react-router-dom";
import Tourist_Sport_Card from "./Tourist_Sport_Card";
import { Helmet } from "react-helmet";
import Banner from "../Layout/Banner";
import Contact from "./Contact_Us";
import Contact_Us from "./Contact_Us";

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
          <Link to="/Bangladesh">
            <div>
              <div className="card card-compact border-2 border-green-500 bg-base-100">
                <figure>
                  <img
                    src="https://i.postimg.cc/SRGYRKmy/manzur-alam-AMqr-W1-Sxx3g-unsplash.jpg"
                    alt="Bangladesh"
                    className="w-full lg:h-80"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Bangladesh</h2>
                  <p>
                    {" "}
                    Located in South Asia, Bangladesh is known for its lush
                    greenery, vibrant culture, and the world's largest river
                    delta formed by the Ganges and Brahmaputra rivers. It's
                    densely populated and has a rich history, with landmarks
                    such as the Sundarbans mangrove forest and ancient
                    archaeological sites like the Mahasthangarh.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/Thailand">
            <div>
              <div className="card card-compact border-2 border-green-500 bg-base-100">
                <figure>
                  <img
                    src="https://i.postimg.cc/3NNnCzWQ/alejandro-cartagena-B64-B6-k-AWlw-unsplash.jpg"
                    alt="Bangladesh"
                    className="w-full lg:h-80"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Thailand</h2>
                  <p>
                    Situated in Southeast Asia, Thailand is renowned for its
                    stunning beaches, ornate temples, and bustling street
                    markets. It's a popular tourist destination, offering a mix
                    of vibrant cities like Bangkok, cultural heritage sites like
                    Ayutthaya, and serene natural landscapes such as Phang Nga
                    Bay and Chiang Mai's mountains.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/Indonesia">
            <div>
              <div>
                <div className="card card-compact border-2 border-green-500 bg-base-100">
                  <figure>
                    <img
                      src="https://i.postimg.cc/zfwtJn46/esmonde-yong-9-B08udu-My-Y-unsplash.jpg"
                      alt="Bangladesh"
                      className="w-full lg:h-80"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Malaysia</h2>
                    <p>
                      Located in Southeast Asia, Malaysia is known for its
                      multicultural society, encompassing Malay, Chinese,
                      Indian, and indigenous cultures. It's characterized by
                      modern cities like Kuala Lumpur, tropical rainforests in
                      Borneo, and beautiful islands such as Langkawi and Penang.
                      Malaysia is also famous for its cuisine, which reflects
                      its diverse heritage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/Malaysia">
            <div>
              <div>
                <div className="card card-compact border-2 border-green-500 bg-base-100">
                  <figure>
                    <img
                      src="https://i.postimg.cc/50xPjXV0/ammie-ngo-vcu-OZBxx-Rk-unsplash.jpg"
                      alt="Bangladesh"
                      className="w-full lg:h-80"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Vietnam</h2>
                    <p>
                      {" "}
                      Situated on the easternmost Indochinese Peninsula, Vietnam
                      is renowned for its scenic landscapes, rich history, and
                      delicious cuisine. Highlights include the bustling streets
                      of Hanoi, the ancient town of Hoi An, the limestone karsts
                      of Halong Bay, and the vibrant Mekong Delta. Vietnam
                      offers a blend of traditional charm and modern
                      development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/Vietnam">
            <div>
              <div>
                <div className="card card-compact border-2 border-green-500 bg-base-100">
                  <figure>
                    <img
                      src="https://i.postimg.cc/cHXF3dxc/allphoto-bangkok-gt3g-K-Wob2g-unsplash.jpg"
                      alt="Bangladesh"
                      className="w-full lg:h-80"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Cambodia</h2>
                    <p>
                      Known for its magnificent temples, Cambodia is located in
                      Southeast Asia. The most famous attraction is the UNESCO
                      World Heritage Site of Angkor Wat, but the country also
                      offers vibrant cities like Phnom Penh, stunning coastal
                      areas like Sihanoukville, and rural landscapes with rice
                      paddies and floating villages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/Cambodia">
            <div>
              <div>
                <div className="card card-compact border-2 border-green-500 bg-base-100">
                  <figure>
                    <img
                      src="https://i.postimg.cc/vmw2FP25/jeremy-bishop-QUw-LZNchflk-unsplash.jpg"
                      alt="Bangladesh"
                      className="w-full lg:h-80"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Indonesia</h2>
                    <p>
                      As the largest archipelago in the world, Indonesia is a
                      diverse country boasting over 17,000 islands. It's famous
                      for its rich biodiversity, with attractions like the lush
                      jungles of Sumatra, the pristine beaches of Bali, and the
                      cultural heritage of Yogyakarta. Indonesia is also home to
                      vibrant cities like Jakarta and Bandung.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section>
       <Contact_Us></Contact_Us>
      </section>
    </div>
  );
};

export default Home;
