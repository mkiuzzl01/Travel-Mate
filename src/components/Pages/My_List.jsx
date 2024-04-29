import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const My_List = () => {
  const { user } = useContext(AuthContext);
  const [myData, setMyData] = useState([]);
  console.log(myData);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/My_List/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyData(data);
        });
    }
  }, [user.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/Tourist_Sports/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Sport has been deleted.",
                icon: "success",
              });
              const remaining = myData.filter((data) => data._id !== _id);
              setMyData(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
      <Helmet>
          <title>Travel-Mate | My List </title>
      </Helmet>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Sport Name</th>
              <th>Location</th>
              <th>Average Cost</th>
              <th>Travel Time</th>
              <th>Total Visitor per Year</th>
              <th>Seasonally</th>
              <th>Country Name</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myData.map((data, idx) => (
              <tr key={data._id}>
                <th>{idx + 1}</th>
                <td>{data.sport_name}</td>
                <td>{data.location}</td>
                <td>{data.average_cost}</td>
                <td>{data.travel_time}</td>
                <td>{data.total_visitor}</td>
                <td>{data.seasonal}</td>
                <td>{data.country_Name}</td>
                <td>
                  <img src={data.photo} alt="" className="w-1/5" />
                </td>
                <td>
                  <Link to={`/Update_Tourist_Sport/${data._id}`}>
                    <button className="btn">Update</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(data._id)}
                    className="btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default My_List;
