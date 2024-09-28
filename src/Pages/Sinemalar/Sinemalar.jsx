import React, { useContext, useState, useEffect } from "react";
import "./Sinemalar.css";
import FilmHeader from "../../Companent/FilmHeader/FilmHeader";
import MovieBrand from "../../Companent/MovieBrand/MovieBrand";
import { GlobalContext } from "../../Context";
import SinemaItems from "../../Companent/SinemaItems/SinemaItems";
import SinemaFilteres from "../../Companent/SinemaFilteres/SinemaFilteres";

function Sinemalar() {
  const { salonlarWievData } = useContext(GlobalContext);
  const [globalSinema, setGlobalSinema] = useState(salonlarWievData);
  const [selectedName, setSelectedName] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [favOrSin, seFavOrSin] = useState("sinema");

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    filterAndSortSinema();
  }, [selectedName, selectedTitle, searchTerm, sortOrder, favorites, favOrSin]);

  function filterAndSortSinema() {
    const applyFilters = (items) => {
      return items.filter((item) => {
        const matchesName = selectedName ? item.name === selectedName : true;
        const matchesTitle = selectedTitle
          ? item.unvan === selectedTitle
          : true;
        const matchesSearch = searchTerm
          ? item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.unvan.toLowerCase().includes(searchTerm.toLowerCase())
          : true;

        return matchesName && matchesTitle && matchesSearch;
      });
    };
    const sortItems = (items) => {
      return [...items].sort((a, b) => {
        if (sortOrder === "name") {
          return a.name.localeCompare(b.name);
        }
        return 0;
      });
    };

    const filteredSinema = applyFilters(salonlarWievData);
    const filteredFavorites = applyFilters(favorites);

    const sortedSinema = sortItems(filteredSinema);
    const sortedFavorites = sortItems(filteredFavorites);

    setGlobalSinema(favOrSin === "sinema" ? sortedSinema : sortedFavorites);
  }

  const toggleFavorite = (item) => {
    if (favorites.some((fav) => fav.id === item.id)) {
      setFavorites((prev) => prev.filter((fav) => fav.id !== item.id));
    } else {
      setFavorites((prev) => [...prev, item]);
    }
  };

  return (
    <div className="sinemalar">
      <FilmHeader filmContext={"Sinema Salonları"} />
      <div className="sinemaContext containerer">
        <MovieBrand Brand={"Sinema Salonları"} />
        <div className="SinemaCards">
          <SinemaFilteres
            setSelectedName={setSelectedName}
            setSelectedTitle={setSelectedTitle}
            setSearchTerm={setSearchTerm}
            setSortOrder={setSortOrder}
            seFavOrSin={seFavOrSin}
          />
          <SinemaItems
            globalSalonn={globalSinema}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        </div>
      </div>
    </div>
  );
}

export default Sinemalar;
