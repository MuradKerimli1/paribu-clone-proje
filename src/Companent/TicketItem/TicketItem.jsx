import React, { useContext } from "react";
import "./TicketItem.css";
import SinemaChooose from "../SinemaChooose/SinemaChooose";
import { GlobalContext } from "../../Context";

function TicketItem({
  data,
  TicketTitle,
  TicketCardComponent,
  filteres,
  sort,
  handleTicketFav,
  handleChangeTicket,
  dataBiletChange,
  noneMehsul,
  handleAddTicketFilm,
  handleAddTicketSinema,
  handleAddTicketData,
  selectedTicketFilm,
  selectedTicketSinema,
  selectedTicketData,
}) {
  const { sehirData, unvanData } = useContext(GlobalContext);
  function handleSelection(deyer) {
    console.log(deyer);
  }

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
      {filteres && (
        <div className="ticketFilters">
          <SinemaChooose
            filterHeaderText={"Şehir seç"}
            data={sehirData}
            handleSelection={handleSelection}
            zIndexx={12}
          />
          <SinemaChooose
            filterHeaderText={"Ayrıcalıklı salon seç"}
            data={unvanData}
            handleSelection={handleSelection}
            zIndexx={11}
          />
        </div>
      )}

      <div className="ticketItems">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item) => (
            <TicketCardComponent
              key={item.id}
              item={item}
              handleTicketFav={handleTicketFav}
              onclick={handleAddTicketFilm}
              handleAddTicketSinema={handleAddTicketSinema}
              handleAddTicketData={handleAddTicketData}
              selectedTicketFilm={selectedTicketFilm}
              selectedTicketSinema={selectedTicketSinema}
              selectedTicketData={selectedTicketData}
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
