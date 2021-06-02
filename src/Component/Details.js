import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Details = ({ movies }) => {
  const { title } = useParams();
  const [Title, setTitle] = useState("");
  useEffect(() => {
    const newMovie = movies.find((movie) => movie.title === title);
    setTitle(newMovie.title);
  }, []);

  const [description, setDescription] = useState("");
  useEffect(() => {
    const newMovie = movies.find((movie) => movie.title === title);
    setDescription(newMovie.description);
  }, []);
  const [trailer, settrailer] = useState("");
  useEffect(() => {
    const newMovie = movies.find((movie) => movie.title === title);
    settrailer(newMovie.trailer);
  }, []);
  return (
    <div>
      <br />
      <Link to="/" className="back-btn">
        <img
          src="https://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Arrow-next-2-icon.png"
          id="back-icon"
          alt="back-logo" width="250"
        />
       
      
      <br />
      <br />
      <br />
      <div className="card">
        <h1 style={{ color: "black" }}>{Title}</h1>
        <br />
       <h5 style={{ color: "black" }}>{description}</h5>
        <br />
        <iframe 
          width="560"
          height="315"
          src={trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
         ></iframe> 
      </div>
      </Link>
    </div> 
   
  );
};

export default Details;
