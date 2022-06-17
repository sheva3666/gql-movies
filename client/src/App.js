import { useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import FavouriteMovies from "./components/FavouriteMovies";

const components = {
  movies: "movies",
  favouriteMovies: "favouriteMovies",
};

function App() {
  const [activeComponent, setActiveComponent] = useState(components.movies);
  const [refreshCounter, setRefreshCounter] = useState(0);
  console.log(activeComponent);

  return (
    <div className="row">
      <div className="column left">
        <div className="btns">
          <button
            className="btn"
            onClick={() => {
              setActiveComponent(components.movies);
            }}
          >
            Movies
          </button>
          <button
            className="btn"
            onClick={() => {
              setActiveComponent(components.favouriteMovies);
            }}
          >
            Favorites
          </button>
        </div>
      </div>
      <div className="column right">
        {activeComponent === components.movies ? <Movies /> : null}

        {activeComponent === components.favouriteMovies ? (
          <FavouriteMovies
            refreshCounter={refreshCounter}
            setRefreshCounter={setRefreshCounter}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
