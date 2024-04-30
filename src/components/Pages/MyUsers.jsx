import PropTypes from "prop-types";

const MyUsers = ({ user }) => {
  return (
    <div>
      
      <div className="card bg-base-100 w-52 m-auto">
        <figure>
          <img
            src={
                user?.photoURL
                  ? user.photoURL
                  : "https://i.postimg.cc/vTN8PMKb/blank-profile-picture-973460-1280.png"
              }
            alt={user ? user?.name : user?.Name}
            className="w-1/2"
          />
        </figure>
        <div className="card-body   ">
        <h1>{user ? user?.name : user?.Name}</h1>
          <p className="font-mono font-semibold">This site is a wonderful and friendly.if you want create to a tour plan so trust this site"</p>
          <p>{user? user?.email: user?.Email}</p>
        </div>
      </div>
    </div>
  );
};

MyUsers.propTypes = {
    user:PropTypes.object
};

export default MyUsers;
