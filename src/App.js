import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import Movielist from "./Component/MovieList/Movielist";
import Search from "./Component/Search/Search";
import Add from "./Component/MovieList/Add";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactStars from "react-rating-stars-component";
import Details from "./Component/Details";
import { Router, Route, Switch } from "react-router";

function App() {
  const movies = [
    {
      title: "The Dark night",
      PosterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiotskdRwsqkA50EJ3tvLwgVyag1O27eYXRuEXOrFEcLyDXb9e",
      description:
        "Batman begins to fight the new enemy the Joker who seeks to spread terror and evil in Gotham, and prove that living without rules is better.",
      rating: 3,
      trailer: "https://www.youtube.com/embed/LDG9bisJEaI",
    },
    {
      title: "The Call of the wild",
      PosterUrl:
        "https://i.pinimg.com/originals/04/9c/8f/049c8f0536ada6fbf43ca587682cf435.jpg",
      description:
        "The work deals with the story of a dog who lives on the last spot that comes to life on Earth, and while suffering from abuse and severe loneliness, he meets a man to go on an adventure with him and a relationship is established as their lives.",
      rating: 4,
      trailer: "https://www.youtube.com/embed/5P8R2zAhEwg",
    },
    {
      title: "The platform",
      PosterUrl:
        "https://i.pinimg.com/originals/0b/6a/32/0b6a32bdef6b099c686341642e5536f2.png",
      description:
        "In a prison with several layers. Two prisoners live in each floor, and food is gradually lowered onto a table.",
      rating: 3,
      trailer: "https://www.youtube.com/embed/bnGAgAgorC4",
    },
    {
      title: "Wonder Women",
      PosterUrl: "https://movieposters2.com/images/1483556-b.jpg",
      description:
        "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny..",
      rating: 6,
      trailer: "https://www.youtube.com/embed/pJCgeOAKXyg",
    },
  ];

  const [search, setSearch] = useState("");
  const handleSearch = (x) => {
    setSearch(x);
  };
  const [newlist, setNewlist] = useState(movies);
  const handlemovie = (y) => {
    setNewlist(...movies, y);
  };
  const [newRating, setNewRating] = useState(0);
  const ratingChanged = (newRating) => {
    setNewRating(newRating);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route
            exact
            path="/:title"
            render={() => (
              <div>
                <Details movies={movies} />
              </div>
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <Search handleSearch={handleSearch} />
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
                <Movielist
                  movies={newlist.filter(
                    (movie) =>
                      movie.title
                        .toLocaleLowerCase()
                        .includes(search.toLocaleLowerCase()) &&
                      movie.rating >= newRating
                  )}
                />
                <Add handlemovie={handlemovie} />
              </div>
            )}
          />
        </Switch>
      </header>
    </div>
  );
}

export default App;
