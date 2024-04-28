import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { stringify } from "postcss";

const Add_Tourist_Sport = () => {
    const [select,setSelect] = useState();
    const {user} = useContext(AuthContext);

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
      userEmail
    }

   //send data to server
   fetch('http://localhost:5000/Tourist_Sports',{
    method:"POST",
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(info)
   })
   .then(res=> res.json())
   .then(data => {
    if (data.insertedId){
      form.reset();
      alert('data submit successful')
    }
   })
  };
  return (
    <div className="max-w-4xl m-auto bg-[#F4F3F0] p-6 my-4">
      <div>
        <div className="space-y-4 mb-4">
          <h1 className="text-4xl text-center">Add Tourist Sport</h1>
        </div>
        <form onSubmit={addTouristSport} className="form-control p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-control">
              <label htmlFor="sport_name">
                <span>Sport Name:</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Tourist Sport Name"
                id="sport_name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label htmlFor="country_Name">
                <span>Country Name</span>
              </label>
              <input
                name="country_Name"
                type="text"
                placeholder="Country Name"
                id="country_Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label htmlFor="location">
                <span>Location:</span>
              </label>
              <input
                name="location"
                type="text"
                placeholder="Location"
                id="location"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label htmlFor="description">
                <span>Description:</span>
              </label>
              <input
                name="description"
                type="text"
                placeholder="Description"
                id="description"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label htmlFor="average_cost">
                <span>Average Cost:</span>
              </label>
              <input
                name="average_cost"
                type="text"
                placeholder="Average Cost"
                id="average_cost"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label htmlFor="travel_time">
                <span>Travel Time:</span>
              </label>
              <input
                name="travel_time"
                type="text"
                placeholder="Travel Time"
                id="travel_time"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <span>Seasonality:</span>
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
                <span>Total Visitor Per Year:</span>
              </label>
              <input
                name="total_visitor"
                type="text"
                placeholder="Total Visitor Per Year"
                id="total_visitor"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label htmlFor="user_email">
                <span>User Email:</span>
              </label>
              <input
                name="user_email"
                type="text"
                placeholder="User Email"
                id="user_email"
                defaultValue={user.email}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label htmlFor="user_name">
                <span>User Name:</span>
              </label>
              <input
                name="user_name"
                type="text"
                placeholder="User Name"
                id="user_name"
                defaultValue={user.displayName}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="form-control lg:col-span-2">
              <label htmlFor="photo">
                <span>Photo URL:</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Photo URL"
                id="photo"
                className="input input-bordered w-full"
              />
            </div>
            <div className="lg:col-span-2">
              <input
                type="submit"
                className="btn bg-[#D2B48C] w-full"
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
