import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <header></header>
            <main>
            <Outlet></Outlet>
            </main>
            <footer></footer>
        </div>
    );
};

export default Root;