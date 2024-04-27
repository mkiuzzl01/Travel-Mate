import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);

  const userLogOut = ()=>{
    logOut()
    .then(result=>{
      console.log(result);
    })
    .catch(error=>{
      console.error(error);
    })
  }
  const navbar = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "border-t-2 rounded-lg text-[#23BE0A] border-red-500 p-2"
            : "p-2 hover:border-gray-600 hover:border-b-2 rounded-lg"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "border-t-2 rounded-lg text-[#23BE0A] border-red-500 p-2"
            : "p-2 hover:border-gray-600 hover:border-b-2 rounded-lg"
        }
        to="/All_Tourists_Spot"
      >
        All Tourists Spot
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "border-t-2 rounded-lg text-[#23BE0A] border-red-500 p-2"
            : "p-2 hover:border-gray-600 hover:border-b-2 rounded-lg"
        }
        to="/Add_Tourist_Sport"
      >
        Add Tourists Spot
      </NavLink>
     {
      user && 
      <NavLink
      className={({ isActive }) =>
        isActive
          ? "border-t-2 rounded-lg text-[#23BE0A] border-red-500 p-2"
          : "p-2 hover:border-gray-600 hover:border-b-2 rounded-lg"
      }
      to="/My_List"
    >
      My List
    </NavLink>
     }
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 border-b-2 rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbar}
            </ul>
          </div>
          <Link className="font-bold lg:text-3xl">Travel-Mate</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbar}</ul>
        </div>
        <div className="navbar-end space-x-2">
          {user ? (
            <>
              <div className="tooltip tooltip-accent tooltip-bottom lg:tooltip-left" data-tip={user?.displayName? user.displayName : 'Username Not Found'}>
                {" "}
                <img
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://i.ibb.co/x19M7TG/blank-profile-picture-973460-1280.png"
                  }
                  alt={user?.email}
                  className="w-10 rounded-full "
                />
              </div>
              <div>
                <button onClick={userLogOut} className="btn">LogOut</button>
              </div>
            </>
          ) : (
            <div className="space-x-2">
              <Link to="/LogIn" className="btn">
                LogIn
              </Link>
              <Link to="/Register" className="btn">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
