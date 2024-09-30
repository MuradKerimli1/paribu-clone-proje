import React, { useContext, useState } from "react";
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
  } = useContext(GlobalContext);
  const [returnItems, setReturnItems] = useState(false);

  const [filmBiletChange, setFilmBiletChange] = useState("Tümü");
  const [sinemaBiletChange, setSinemaBiletChange] = useState("Tümü");
  const [secondTicketSinema, setSecondTicketSinema] = useState(data);

  function handleChangeFilmTicket(Yazi) {
    setFilmBiletChange(Yazi);
  }

  function handleChangeSinemaTicket(Yazi) {
    setSinemaBiletChange(Yazi);
  }
  if (movieData.length === 0) {
    return <Loading />;
  }

  return (
    <div className="ticketSelect">
      <div className={`leftTicketSelect ${returnItems ? "return" : ""}`}>
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
        />
        <div
          className="reverseItems"
          onClick={() => setReturnItems((prev) => !prev)}
        >
          <img src="/Images/card-change.svg" alt="return" />
        </div>
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
        />
      </div>
      <TicketItem
        data={dateTicket}
        TicketTitle={"Tarih ve Seans Seçimi"}
        sort={false}
        TicketCardComponent={DateCart}
        filteres={false}
      />
    </div>
  );
}

export default TicketSelecting;
