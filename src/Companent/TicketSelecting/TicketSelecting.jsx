import React, { useContext, useEffect, useState } from "react";
import "./TicketSelecting.css";
import TicketItem from "../TicketItem/TicketItem";
import { GlobalContext } from "../../Context";
import TicketCard from "../TicketCard/TicketCard";
import SecondSinemaItem from "../SecondSinemaItem/SecondSinemaItem";
import DateCart from "../DateCart/DateCart";
import Loading from "../Loading/Loading";

function TicketSelecting() {
  const {
    movieData,
    data,
    dateTicket,
    filmFavorite,
    setFilmFavorite,
    sinemaSecondFavorite,
    setSinemaSecondFavorite,
    handleTicketFav,
    setSelectedTicketFilm,
    setSelectedTicketSinema,
    setSelectedTicketData,
  } = useContext(GlobalContext);

  const [filmBiletChange, setFilmBiletChange] = useState("Tümü");
  const [sinemaBiletChange, setSinemaBiletChange] = useState("Tümü");
  const [secondTicketSinema, setSecondTicketSinema] = useState(data);

  function handleChangeFilmTicket(Yazi) {
    setFilmBiletChange(Yazi);
  }

  function handleChangeSinemaTicket(Yazi) {
    setSinemaBiletChange(Yazi);
  }

  function handleTicketFilm(itemId) {
    const selectedTicketFilmConst = movieData.find(
      (film) => film.id === itemId
    );
    setSelectedTicketFilm(selectedTicketFilmConst);
  }
  function handleAddBiletSinema(itemSecondId) {
    const selectedTicketSinemaConst = data.find(
      (sinema) => sinema.id === itemSecondId
    );
    setSelectedTicketSinema(selectedTicketSinemaConst);
  }
  function handleTicketData(item, btn) {
    const newDate = { ...item, secilmisData: btn };
    setSelectedTicketData(newDate);
  }

  if (movieData.length === 0) {
    return <Loading />;
  }

  return (
    <div className="ticketSelect">
      <TicketItem
        data={filmBiletChange === "Tümü" ? movieData : filmFavorite}
        TicketTitle={"Film Seçimi"}
        TicketCardComponent={TicketCard}
        sort={true}
        filteres={false}
        handleTicketFav={(deyer) =>
          handleTicketFav(deyer, movieData, filmFavorite, setFilmFavorite)
        }
        handleChangeTicket={handleChangeFilmTicket}
        dataBiletChange={filmBiletChange}
        noneMehsul="Film"
        handleTicketFilm={handleTicketFilm}
      />

      <TicketItem
        data={
          sinemaBiletChange === "Tümü"
            ? secondTicketSinema
            : sinemaSecondFavorite
        }
        TicketTitle={"Sinema Seçimi"}
        TicketCardComponent={SecondSinemaItem}
        sort={true}
        filteres={true}
        handleTicketFav={(deyerSecond) =>
          handleTicketFav(
            deyerSecond,
            data,
            sinemaSecondFavorite,
            setSinemaSecondFavorite
          )
        }
        handleChangeTicket={handleChangeSinemaTicket}
        dataBiletChange={sinemaBiletChange}
        noneMehsul="Film"
        handleAddBiletSinema={handleAddBiletSinema}
      />

      <TicketItem
        data={dateTicket}
        TicketTitle={"Tarih ve Seans Seçimi"}
        sort={false}
        TicketCardComponent={DateCart}
        filteres={false}
        handleTicketData={handleTicketData}
      />
    </div>
  );
}

export default TicketSelecting;
