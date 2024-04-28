import { useLoaderData } from "react-router-dom";
import Tourist_Sport_Card from "./Tourist_Sport_Card";

const Home = () => {
    const sports = useLoaderData();

    return (
        <div className="text-center">
            <h1 className="text-3xl font-semibold">This is Home Page</h1>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                {
                    sports.map(sport=> <Tourist_Sport_Card key={sport._id} sport={sport}></Tourist_Sport_Card>)
                }
            </div>
        </div>
    );
};

export default Home;