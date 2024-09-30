import React, { useContext } from "react";
import "./TicketItem.css";
import SinemaChooose from "../SinemaChooose/SinemaChooose";
import { GlobalContext } from "../../Context";

function TicketItem({
  data,
  TicketTitle,
  TicketCardComponent,

  sort,
  handleTicketFav,
  handleChangeTicket,
  dataBiletChange,
  noneMehsul,
  handleTicketFilm,
  handleAddBiletSinema,
  handleTicketData,
}) {
  return (
    <div className="ticketItem">
      <div className="ticketItemTitle">
        <p>{TicketTitle}</p>
      </div>
      {sort && (
        <div className="ticketItemNav">
          <span
            className={`${dataBiletChange === "Tümü" ? "active" : ""}`}
            onClick={() => handleChangeTicket("Tümü")}
          >
            Tümü
          </span>
          <span
            className={`${dataBiletChange === "Favoriler" ? "active" : ""}`}
            onClick={() => handleChangeTicket("Favoriler")}
          >
            Favoriler
          </span>
        </div>
      )}

      <div className="ticketItems">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item) => (
            <TicketCardComponent
              key={item.id}
              item={item}
              handleTicketFav={handleTicketFav}
              handleTicketFilm={handleTicketFilm}
              handleAddBiletSinema={handleAddBiletSinema}
              handleTicketData={handleTicketData}
            />
          ))
        ) : (
          <p className="errorTitle">
            {noneMehsul === "Film"
              ? "Film Mevcut değil"
              : "Sinema Mevcut değil"}
          </p>
        )}
      </div>
    </div>
  );
}

export default TicketItem;
