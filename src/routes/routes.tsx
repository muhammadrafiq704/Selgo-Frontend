import { Home, Target, Property, Notification } from "./lazyComponents";
import AppLayout from "../Layout/AppLayout/AppLayout";
import appPaths from "../utils/routesPath";
import CardPage from "../pages/Target/components/card/CardPage";
// import SingleCard from "../pages/Target/components/singlecard/SingleCard"; 
import Rent from "../pages/Property/Rent/Rent";
import Sell from "../pages/Property/Sell/Sell";
import Nutrition from "../pages/Property/Nutrition/Nutrition";
import Plots from "../pages/Property/Category/Plots";
import ResidenceAbroad from "../pages/Property/Category/ResidenceAbroad";
import HousingForSale from "../pages/Property/Category/HousingForSale";
import NewHomes from "../pages/Property/Category/NewHomes";
import VacationHomes from "../pages/Property/Category/VacationHomes";
import LeisurePlots from "../pages/Property/Category/LeisurePlots";
import NotFound from "../components/NotFound/NotFound";
// import PublicRoute from "./PublicRoutes";
import PrivateRoute from "./PrivateRoute";
import SignIn from "../pages/SingIn/SignIn";
import SignOut from "../pages/SignUp/SignUp";
import Advertise from "../pages/Advertise/Advertise";
import AuthLayout from '../Layout/AuthLayout'
import SingleCard from "../pages/Target/components/singlecard/SingleCard";

const routes = [
  {
    path: "/",
    element: <PrivateRoute element={<AppLayout />} />,
    //all app pages render inside the children
    children: [
      {
        // index: true,
        path: appPaths.HOME,
        element: <Home />,
      },
      {
        path: appPaths.TARGET,
        element: <Target />,
        // sub_child: [
        //   {
        //     path: appPaths.TARGETPATH,
        //     element: <CardPage />
        //   },
        // ]
      },
      {
        path: appPaths.TARGETPATH,
        element: <CardPage />,
      },
      {
        path: appPaths.SINGLECARD,
        element: <SingleCard />,
      },
      {
        path: appPaths.PROPERTY,
        element: <Property />,
        sub_child: [
          {
            index: true,
            // path: appPaths.PURCHASE,
            element: "",
          },
          {
            path: appPaths.RENT,
            element: <Rent />,
          },
          {
            path: appPaths.SELL,
            element: <Sell />,
          },
          {
            path: appPaths.NUTRITION,
            element: <Nutrition />,
          },
        ],
      },
      // Property Category Routes
      {
        path: appPaths.PLOTS,
        element: <Plots />,
      },
      {
        path: appPaths.ResidenceAbroad,
        element: <ResidenceAbroad />,
      },
      {
        path: appPaths.HousingForSale,
        element: <HousingForSale />,
      },
      {
        path: appPaths.NewHomes,
        element: <NewHomes />,
      },
      {
        path: appPaths.VacationHomes,
        element: <VacationHomes />,
      },
      {
        path: appPaths.LeisurePlots,
        element: <LeisurePlots />,
      },

      // Notification Routes
      {
        path: appPaths.ADVERTISE,
        element: <Advertise />,
      },
      {
        path: appPaths.NOTIFICATION,
        element: <Notification />,
        sub_child: [
          {
            // path: appPaths.SAVEDSEARCH,
            element: <div>this is saved search</div>,
            index: true,
            // path: appPaths.SAVEDSEARCH,
          },
          {
            path: appPaths.CHECKOUT,
            element: <div>this is check out</div>,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
        // ],
      },
    ],
  },
  {
    // path: "login",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignOut />,
      },
    ],
    // <PublicRoute element={
    // } restricted={true} />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
