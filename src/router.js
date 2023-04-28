import {Outlet} from "react-router-dom";
import Header from "./Components/Header";
import Content from "./Components/Content/Content";
import React from "react";
import MovieOfTheDay from "./Components/Header/MovieOfTheDay";
import Details from "./Components/Content/Details";
import Footer from "./Components/Footer";
import SearchedMoviesList from "./Components/Content/SearchedMoviesList";

export const routes = [
  {
    path: "/",
    element: <><Outlet/></>,
    children: [
      {
        path: "/",
        element: <><Header/><MovieOfTheDay/><Content/><Footer/></>,
      },
      {
        path: "/movie/:id",
        element: <>
          <Header/>
            <Details/>
          <Footer/>
          </>,
      },
      {
        path: "/search",
        element: <><Header/><SearchedMoviesList/><Footer/></>,
      },
    ]
  },
];
