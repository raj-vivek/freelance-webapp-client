import React, { useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Orders from "./pages/orders/Orders";
import MyGigs from "./pages/myGigs/MyGigs";
import AddGig from "./pages/addGig/AddGig";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "./App.scss";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Pay from "./pages/pay/Pay";
import Success from "./pages/success/Success";
import ScrollToTop from "./utils/scrollToTop";
import NotFound from "./pages/notFound/NotFound";

// Mobile (Smartphone) max-width: 480px
// Low Resolution Tablets and ipads max-width: 767px
// Tablets Ipads portrait mode max-width:1024px
// Desktops max-width:1280px
// Huge size (Larger screen) max-width: 1281px and greater

const App = () => {
  const queryClient = new QueryClient();

  const checkScreenSize = (size) => {
    if (size < 480) {
      return "mobile";
    } else if (size >= 480 && size < 767) {
      return "tablet";
    } else if (size >= 767 && size < 1024) {
      return "tabletPortrait";
    } else if (size >= 1024 && size < 1280) {
      return "laptop";
    } else {
      return "desktop";
    }
  };

  const [device, setDevice] = useState(checkScreenSize(window.innerWidth));

  useEffect(() => {
    const handleWindowResize = () => {
      setDevice(checkScreenSize(window.innerWidth));
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [device]);

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <div className="app">
          <Navbar device={device} />
          <Outlet context={[device]} />
          <Footer device={device} />
        </div>
      </QueryClientProvider>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs></Gigs>,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/orders",
          element: <Orders></Orders>,
        },
        {
          path: "/mygigs",
          element: <MyGigs />,
        },
        {
          path: "/addgig",
          element: <AddGig />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/pay/:id",
          element: <Pay />,
        },
        {
          path: "/success",
          element: <Success />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
