import React, { useContext, useEffect, useState } from "react";
import "./SearchContainer.css";
import { GlobalContext } from "../../Context";
import PopularFilms from "../PopularFilms/PopularFilms";
import SearchFilms from "../SearchFilms/SearchFilms";
import OtherPopularFilms from "../OtherPopularFilms/OtherPopularFilms";
import Loading from "../Loading/Loading";

function SearchContainer({ handleToggleSearch }) {
  const { movieData } = useContext(GlobalContext);
  const [searchInpValue, setSearchInpValue] = useState("");
  const [searchFilm, setSearchFilm] = useState([]);

  useEffect(() => {
    if (searchInpValue.length > 2) {
      const filteredFilms = movieData.filter((movie) =>
        movie.title.toLowerCase().includes(searchInpValue.toLowerCase())
      );
      setSearchFilm(filteredFilms);
    } else {
      setSearchFilm([]);
    }
  }, [searchInpValue, movieData]);
  if (movieData.length === 0) {
    return <Loading />;
  }

  return (
    <div className="searchContainer">
      <div className="searchContainer_header">
        <input
          type="text"
          placeholder="Arama Yap"
          value={searchInpValue}
          onChange={(e) => setSearchInpValue(e.target.value)}
        />
        <span className="searchcotainer-close" onClick={handleToggleSearch}>
          <img
            src="/Images/close-modal-2.svg"
            alt="search-close"
            loading="lazy"
          />
        </span>
      </div>
      <div className="searhContainer">
        <div className="searchContainerTitle">
          {searchInpValue.length > 2 ? (
            <p className="AramaSonuc">Arama Sonuçları ({searchFilm.length})</p>
          ) : (
            <p className="popularOneri">Önerilenler</p>
          )}
        </div>
        <div className="searchMainContainer">
          {searchFilm.length === 0 && searchInpValue.length < 3 ? (
            <PopularFilms handleToggleSearch={handleToggleSearch} />
          ) : null}
          <SearchFilms
            searchFilm={searchFilm}
            handleToggleSearch={handleToggleSearch}
          />

          <OtherPopularFilms handleToggleSearch={handleToggleSearch} />
        </div>
      </div>
    </div>
  );
}

export default SearchContainer;
