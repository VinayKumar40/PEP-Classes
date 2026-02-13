import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieRow from "./components/MovieRow";
import { categories } from "./data/movies";

function App() {
  const appStyle = {
    backgroundColor: "#111",
    minHeight: "100vh",
    fontFamily: "Helvetica, Arial, sans-serif",
    color: "white",
    margin: 0,
    padding: 0,
  };

  return (
    <div style={appStyle}>
      <Header />
      <Banner />
      {categories.map((category, index) => (
        <MovieRow
          key={index}
          title={category.title}
          movies={category.movies}
        />
      ))}
    </div>
  );
}

export default App;
