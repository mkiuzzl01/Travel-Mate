import { useContext, useEffect, useState } from "react";
import { FiEye } from "react-icons/fi";
import { LuEyeOff } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import 'aos/dist/aos.css'

const LogIn = () => {
  const [showPass, setShowPass] = useState(false);
  const { logInUser, logInWithGithub,logInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const Email = form.Email.value;
    const Password = form.Password.value;

    setError("");
    logInUser(Email, Password)
      .then(() => {
        console.log("login successful");
        // Navigate After Login
        Swal.fire({
          title: 'Success!',
          text: 'User LogIn Successfully!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        navigate(location?.state ? location.state : "/");
        form.reset();
      })
      .catch(() => {
        toast.error("Something Wrong!", {
          position: "bottom-center"
        });
        setError("Something wrong");
      });
  };

  const handleLogInGoogle = ()=>{
    logInWithGoogle()
    .then((result)=>{
      Swal.fire({
        title: 'Success!',
        text: 'User LogIn Successfully!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })

      //inset to database
      navigate(location?.state ? location.state : "/");
      const name = result.user?.displayName;
      const email = result.user?.email;
      const photoURL = result.user?.photoURL;
      const lastSign = result?.user.metadata.lastSignInTime;
      const info = {name,email,photoURL,lastSign}

      fetch("https://travel-mate-server-theta.vercel.app/Users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body:JSON.stringify(info),
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
        })

    })
    .catch(()=>{
      setError("Something wrong");
      toast.error("Something Wrong!", {
        position: "bottom-center"
      });
    })
  }

  const handleLogInGithub = ()=>{
    logInWithGithub()
    .then((result)=>{
      Swal.fire({
        title: 'Success!',
        text: 'User LogIn Successfully!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      navigate(location?.state ? location.state : "/");

      //inset to database
      const name = result.user?.displayName;
      const email = result.user?.email;
      const photoURL = result.user?.photoURL;
      const lastSign = result?.user.metadata.lastSignInTime;
      const info = {name,email,photoURL,lastSign}

      fetch("https://travel-mate-server-theta.vercel.app/Users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body:JSON.stringify(info),
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
        })

    })
    .catch(()=>{
      toast.error("Something Wrong!", {
        position: "bottom-center"
      });
      setError("Something wrong");
    })
  }

  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  
  return (
    <div
      className="flex flex-col lg:flex-row md:justify-center items-center bg-gradient-to-b from-teal-500 to-teal-300 rounded-lg my-4 p-4 font-PT_Sans "
      data-aos="flip-down"
    >
      <ToastContainer />
      <Helmet>
        <title>Travel-Mate | Login </title>
      </Helmet>
      <div>
        <img src="https://i.ibb.co/ZhJ8g1h/Hands-Unlocked.png" alt="" />
      </div>
      <div className="w-full lg:w-1/2 space-y-3 rounded-xl bg-transparent ">
        <form onSubmit={handleLogIn} className="card-body ">
          <h1 className="text-4xl font-bold text-center text-yellow-200">Login</h1>
          <div className="form-control">
            <span className="text-white">Email:</span>
            <label htmlFor="Email" className="input w-full  flex items-center">
              <input
                type="text"
                name="Email"
                id="Email"
                placeholder="Email"
                required
                className="grow"
              />
            </label>
          </div>
          <div className="form-control">
            <span className="text-white">Password:</span>
            <label
              htmlFor="Password"
              className="input w-full  flex items-center gap-2"
            >
              <input
                type={showPass ? "text" : "password"}
                name="Password"
                id="Password"
                placeholder="Password"
                required
                className="grow"
              />
              <div>
                <span onClick={() => setShowPass(!showPass)}>
                  {showPass ? (
                    <LuEyeOff/>
                  ) : (
                    <FiEye />
                  )}
                </span>
              </div>
            </label>
          </div>
          <p className="text-red-600">{error}</p>
          <div className="form-control mt-4">
            <button className="block w-full p-3 text-center rounded-sm text-black bg-yellow-200  hover:bg-green-600">
              LogIn
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700 dark:bg-gray-300"></div>
          <p className="px-3 text-sm text-white">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button onClick={handleLogInGoogle} aria-label="Log in with Google" className="p-3 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
          <button onClick={handleLogInGithub} aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>
        </div>
        <p className="text-sm text-center sm:px-6 text-white">
          Don't have an account?
          <Link to="/Register" className="font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
