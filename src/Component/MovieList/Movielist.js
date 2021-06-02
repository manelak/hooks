import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "../MovieList/MovieList.css";
import { Link } from "react-router-dom";

const Movielist = ({ movies }) => {
  return (
    <div className="ma">
      {movies.map((el, i) => (
        <Link to={`/${el.title}`}>
          {" "}
          <MovieCard key={i} movies={el} />
        </Link>
      ))}{" "}
    </div>
  );
};

export default Movielist;
