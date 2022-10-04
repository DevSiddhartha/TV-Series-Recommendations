import { useState } from "react";
import "./styles.css";

export default function App() {
  const webseriesCollection = {
    Thriller: [
      { name: "Dark", rating: "8.8/10" },
      { name: "Black Mirror", rating: "8.8/10" },
      { name: "Mr. Robot", rating: "8.6/10" }
    ],
    Crime: [
      { name: "The Boys", rating: "8.7/10" },
      { name: "Sacred Games", rating: "8.6/10" },
      { name: "Mirzapur", rating: "8.4/10" }
    ],
    Comedy: [
      { name: "Friends", rating: "8.9/10" },
      { name: "The Office", rating: "8.9/10" },
      { name: "The Big Bang Theory", rating: "8.1/10" }
    ]
  };

  const webSeriesCategory = Object.keys(webseriesCollection);
  const [movieName, setMovieName] = useState(webseriesCollection.Thriller);

  function seriesCategoryClickHandler(seriesCategory) {
    var categoryItems = webseriesCollection[seriesCategory];
    setMovieName(categoryItems);
  }

  return (
    <div className="App">
      <h1>
        <span role="img">🎥</span> TV Series
      </h1>
      <p> Check out my favorite TV Series. Select a genre to get started</p>
      {webSeriesCategory.map((seriesCategory) => {
        return (
          <button
            key={seriesCategory}
            className="btn-movie"
            onClick={() => seriesCategoryClickHandler(seriesCategory)}
          >
            {seriesCategory}{" "}
          </button>
        );
      })}
      <hr style={{ width: "80%", textAlign: "center" }}></hr>
      <ul style={{ listStyle: "none" }}>
        {movieName.map((movie) => {
          return (
            <li key={movie.name} className="list-div">
              <div>{movie.name}</div>
              <div>{movie.rating}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
