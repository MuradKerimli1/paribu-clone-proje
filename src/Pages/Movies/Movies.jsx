import React, { useContext, useState } from "react";
import "./Movies.css";
import FilmHeader from "../../Companent/FilmHeader/FilmHeader";
import MovieBrand from "../../Companent/MovieBrand/MovieBrand";
import MovieFilter from "../../Companent/MovieFilter/MovieFilter";
import Films from "../../Companent/Films/Films";
import { GlobalContext } from "../../Context";
import MobileReklam from "../../Companent/MobileReklam/MobileReklam";
import Loading from "../../Companent/Loading/Loading";

function Movies() {
  const [selectedCategory, setSelectedCategory] = useState("Vizyonda");
  const [sortType, setSortType] = useState("akilName");
  const { vizyonMovies, yakindaMovies } = useContext(GlobalContext);

  if (vizyonMovies.length === 0 || yakindaMovies.length === 0) {
    return <Loading />;
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (sortType) => {
    setSortType(sortType);
  };

  const data =
    selectedCategory === "Vizyonda" ? vizyonMovies : yakindaMovies;

  const sortedData = [...data].sort((a, b) => {
    if (sortType === "akilName") {
      return a.title.localeCompare(b.title); 
    } else if (sortType === "popular") {
      return b.popularity - a.popularity; 
    } else if (sortType === "puan") {
      return b.vote_count - a.vote_count; 
    }
    return 0;
  });

  return (
    <div className="moviesContainer">
      <div className="filmHeaderContainer">
        <FilmHeader filmContext={selectedCategory} />
      </div>
      <div className="movieSectionBg">
        <div className="movieSection container">
          <MovieBrand Brand={selectedCategory} />
          <MovieFilter
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            onSortChange={handleSortChange}
          />
          <Films Data={sortedData} />
          <div className="FIlmReklam">
            <MobileReklam />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
