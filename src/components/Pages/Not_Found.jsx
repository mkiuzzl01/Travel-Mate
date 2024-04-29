import { Link } from "react-router-dom";

const Not_Found = () => {
    return (
        <div className="text-center my-40 space-y-4">
            <h1 className="text-4xl font-semibold">Page Not Found</h1>
            <div>
            <Link to='/'><button className="btn">Home Page</button></Link>
            </div>
        </div>
    );
};

export default Not_Found;