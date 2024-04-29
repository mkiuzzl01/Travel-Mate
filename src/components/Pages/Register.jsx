import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuEyeOff } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { registerUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const Name = form.name;
    const Email = form.email.value;
    const PhotoURL = form.image.value;
    const Password = form.password.value;
    console.log(Name, Email, PhotoURL, Password);

    setError();
    if (Password.length < 6) {
      return setError("Password must be at least 6 character or longer");
    } else if (!/[A-Z]/.test(Password)) {
      return setError("Should contain at least one upper case");
    } else if (!/[a-z]/.test(Password)) {
      return setError("Should contain at least one lower case");
    }

    registerUser(Email, Password)
      .then((result) => {
        updateUser(Name, PhotoURL)
          .then(() => {})
          .catch((error) => {
            console.error(error);
          });
        
          Swal.fire({
            title: 'Success!',
            text: 'User Registration Successfully!',
            icon: 'success',
            confirmButtonText: 'Ok'
          })

        form.reset();
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        console.error(error);
        setError(error.message.split("/")[1].split(")"));
      });
  };
  return (
    <div>
      <div
        className="flex flex-col lg:flex-row md:justify-center items-center bg-gradient-to-b from-teal-500 to-teal-300   rounded-lg my-4 p-4 font-PT_Sans"
        data-aos="flip-up"
      >
        <Helmet>
          <title>Travel-Mate | Register </title>
      </Helmet>
        <div>
          <img src="https://i.ibb.co/rx78H9q/Brazuca-Planning-1.png" alt="" />
        </div>
        <div className="w-full lg:w-1/2 space-y-3 rounded-xl bg-transparent ">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-4xl font-bold text-yellow-200 text-center">
              Register
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="text-white">Name:</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input w-full  "
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">Email:</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input w-full  "
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">Photo URL:</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input w-full  "
                name="image"
              />
            </div>
            <div className="form-control">
              <span className="text-white my-2">Password:</span>
              <label className="input w-full  flex items-center gap-2">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  className="grow"
                  name="password"
                  required
                />
                <div>
                  <span onClick={() => setShowPass(!showPass)}>
                    {showPass ? <LuEyeOff /> : <FiEye />}
                  </span>
                </div>
              </label>
              <p className="text-red-600">{error}</p>
            </div>
            <div className="form-control mt-6">
              <button className="block w-full  p-3 text-center rounded-sm text-black bg-yellow-200  hover:bg-green-600">
                Register
              </button>
            </div>
            <p className="text-sm text-center sm:px-6 text-white">
              Your have an account?
              <Link to="/LogIn" className="font-bold">
                LogIn
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
