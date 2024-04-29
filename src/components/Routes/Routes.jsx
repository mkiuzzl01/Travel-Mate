import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import PrivateRoute from "./PrivateRoute";
import Not_Found from "../Pages/Not_Found";
import React, { Suspense } from "react";
import Loading from "../Layout/Loading";


const Home = React.lazy(() => import("../Pages/Home"));
const All_Tourists_Spot = React.lazy(() =>
  import("../Pages/All_Tourists_Spot")
);
const View_Details = React.lazy(() => import("../Pages/View_Details"));
const My_List_Update_Page = React.lazy(() =>
  import("../Pages/My_List_Update_Page")
);
const Add_Tourist_Sport = React.lazy(() =>
  import("../Pages/Add_Tourist_Sport")
);
const My_List = React.lazy(() => import("../Pages/My_List"));
const LogIn = React.lazy(() => import("../Pages/LogIn"));
const Register = React.lazy(() => import("../Pages/Register"));
const Bangladesh = React.lazy(() => import("../Countries/Bangladesh"));
const Thailand = React.lazy(() => import("../Countries/Thailand"));
const Indonesia = React.lazy(() => import("../Countries/Indonesia"));
const Malaysia = React.lazy(() => import("../Countries/Malaysia"));
const Vietnam = React.lazy(() => import("../Countries/Vietnam"));
const Cambodia = React.lazy(() => import("../Countries/Cambodia"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Not_Found></Not_Found>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/Tourist_Sports"),
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Home></Home>
          </Suspense>
        ),
      },
      {
        path: "/All_Tourists_Spot",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <All_Tourists_Spot></All_Tourists_Spot>,
          </Suspense>
        ),
      },
      {
        path: "/View_Details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Tourist_Sports/${params.id}`),
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <View_Details></View_Details>
          </Suspense>
        ),
      },
      {
        path: "/Update_Tourist_Sport/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Tourist_Sports/${params.id}`),
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading></Loading>}>
              <My_List_Update_Page></My_List_Update_Page>
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/Add_Tourist_Sport",
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading></Loading>}>
              <Add_Tourist_Sport></Add_Tourist_Sport>
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/My_List",
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading></Loading>}>
              <My_List></My_List>
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/LogIn",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <LogIn></LogIn>
          </Suspense>
        ),
      },
      {
        path: "/Register",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Register></Register>,
          </Suspense>
        ),
      },
      {
        path: "/Bangladesh",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Bangladesh></Bangladesh>
          </Suspense>
        ),
      },
      {
        path: "/Thailand",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Thailand></Thailand>
          </Suspense>
        ),
      },
      {
        path: "/Indonesia",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Indonesia></Indonesia>
          </Suspense>
        ),
      },
      {
        path: "/Malaysia",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Malaysia></Malaysia>
          </Suspense>
        ),
      },
      {
        path: "/Vietnam",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Vietnam></Vietnam>
          </Suspense>
        ),
      },
      {
        path: "/Cambodia",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Cambodia></Cambodia>
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
