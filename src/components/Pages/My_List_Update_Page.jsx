
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const My_List_Update_Page = () => {
  const initialData = useLoaderData();
  const {
    _id,
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
  } = initialData;

  console.log(initialData);
  const [select, setSelect] = useState();

  const handleSubmit = (e) => {
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

    const info = {sport_name,country_Name,location,description,average_cost,travel_time,total_visitor,photo,seasonal,userEmail,userName}
    console.log(info);

    fetch(`http://localhost:5000/Tourist_Sports/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(info)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourist Sport Updated Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
            form.reset();
        })
  };
  return (
    <div className="max-w-4xl m-auto bg-[#F4F3F0] p-6 my-4 ">
      <div>
        <div className="space-y-4 mb-4">
          <h1 className="text-4xl text-center dark:text-black">
            Update Tourist Sport
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="form-control p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-control">
              <label htmlFor="sport_name">
                <span className="dark:text-black">Sport Name:</span>
              </label>
              <input
                required
                defaultValue={sport_name}
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
                defaultValue={country_Name}
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
                defaultValue={location}
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
                defaultValue={description}
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
                defaultValue={average_cost}
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
                defaultValue={travel_time}
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
                value={select}
                onChange={(e) => setSelect(e.target.value)}
                defaultValue={seasonal}
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
                defaultValue={total_visitor}
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
                defaultValue={userName}
                name="user_email"
                type="text"
                placeholder="User Email"
                id="user_email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label htmlFor="user_name">
                <span className="dark:text-black">User Name:</span>
              </label>
              <input
                required
                defaultValue={userEmail}
                name="user_name"
                type="text"
                placeholder="User Name"
                id="user_name"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="form-control lg:col-span-2">
              <label htmlFor="photo">
                <span className="dark:text-black">Photo URL:</span>
              </label>
              <input
                required
                defaultValue={photo}
                name="photo"
                type="text"
                placeholder="Photo URL"
                id="photo"
                className="input input-bordered w-full"
              />
            </div>
            <div className="lg:col-span-2">
              <input
                required
                type="submit"
                className="btn bg-[#D2B48C] w-full dark:text-black dark:hover:text-white"
                value="Submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default My_List_Update_Page;
