import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { IoMdAdd } from "react-icons/io";
import Aos from "aos";
import 'aos/dist/aos.css'

const Add_Tourist_Sport = () => {
    const [select,setSelect] = useState();
    const {user} = useContext(AuthContext);
    useEffect(()=>{
      Aos.init({duration:1000});
    },[])

  const addTouristSport = (e) => {
    e.preventDefault();
    const form = e.target;
    const sport_name = form.name.value;
    const country_Name = form.country_Name.value;
    const location = form.location.value;
    const description = form.description.value;
    const average_cost = form.average_cost.value;
    const travel_time = form.travel_time.value;
    const total_visitor = form.total_visitor.value;
    const photo = form.photo.value;
    const seasonal = select;
    const userEmail = user.email;
    const userName = user.displayName;
    const userImage = user.photoURL;

    const info = {
      sport_name,
      country_Name,
      location,
      description,
      average_cost,
      travel_time,
      photo,
      total_visitor,
      seasonal,
      userName,
      userEmail,
      userImage
    }

   //send data to server
   fetch('https://travel-mate-server-theta.vercel.app/Tourist_Sports',{
    method:"POST",
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(info)
   })
   .then(res=> res.json())
   .then(data => {
    if (data.insertedId){
      Swal.fire({
        title: 'Success!',
        text: 'Tourist Sport Created Successfully!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      form.reset();
    }
   })
  };
  return (
    <div className="max-w-4xl m-auto bg-gradient-to-b from-green-500 to-teal-300 p-6 my-4" data-aos="zoom-in">
      <Helmet>
          <title>Travel-Mate | Add Tourist Sport </title>
      </Helmet>
      <div>
        <div className="space-y-4 mb-4">
          <h1 className="text-4xl flex justify-center items-center dark:text-black"><span><IoMdAdd className="text-white" /></span><span>Add Tourist Sport</span></h1>
        </div>
        <form onSubmit={addTouristSport} className="form-control p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-control">
              <label htmlFor="sport_name">
                <span className="dark:text-black">Sport Name:</span>
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="Tourist Sport Name"
                id="sport_name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label htmlFor="country_Name">
                <span className="dark:text-black">Country Name</span>
              </label>
              <input
                required
                name="country_Name"
                type="text"
                placeholder="Country Name"
                id="country_Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label htmlFor="location">
                <span className="dark:text-black">Location:</span>
              </label>
              <input
                required
                name="location"
                type="text"
                placeholder="Location"
                id="location"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label htmlFor="description">
                <span className="dark:text-black">Description:</span>
              </label>
              <input
                required
                name="description"
                type="text"
                placeholder="Description"
                id="description"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label htmlFor="average_cost">
                <span className="dark:text-black">Average Cost:</span>
              </label>
              <input
                required
                name="average_cost"
                type="text"
                placeholder="Average Cost"
                id="average_cost"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label htmlFor="travel_time">
                <span className="dark:text-black">Travel Time:</span>
              </label>
              <input
                required
                name="travel_time"
                type="text"
                placeholder="Travel Time"
                id="travel_time"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <span className="dark:text-black">Seasonality:</span>
              <select
              value={select} onChange={e=>setSelect(e.target.value)}
                className="select select-bordered join-item"
              >
                <option disabled selected>
                 Choose
                </option>
                <option>summer</option>
                <option>winter</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="total_visitor">
                <span className="dark:text-black">Total Visitor Per Year:</span>
              </label>
              <input
                required
                name="total_visitor"
                type="text"
                placeholder="Total Visitor Per Year"
                id="total_visitor"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label htmlFor="user_email">
                <span className="dark:text-black">User Email:</span>
              </label>
              <input
                required
                name="user_email"
                type="text"
                placeholder="User Email"
                id="user_email"
                defaultValue={user?.email}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label htmlFor="user_name">
                <span className="dark:text-black">User Name:</span>
              </label>
              <input
                required
                name="user_name"
                type="text"
                placeholder="User Name"
                id="user_name"
                defaultValue={user.displayName}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control lg:col-span-2">
              <label htmlFor="photo">
                <span className="dark:text-black">Photo URL:</span>
              </label>
              <input
                required
                name="photo"
                type="text"
                placeholder="Photo URL"
                id="photo"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="my-8">
            <div className="lg:col-span-2">
              <input
                required
                type="submit"
                className="btn bg-[#D2B48C] w-full dark:text-black dark:hover:text-white"
                value="Add"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add_Tourist_Sport;
