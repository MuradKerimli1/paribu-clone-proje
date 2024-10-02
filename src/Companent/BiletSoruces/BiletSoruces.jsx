import React, { useContext } from "react";
import "./BiletSoruces.css";
import SorucesHead from "../SorucesHead/SorucesHead";
import { GlobalContext } from "../../Context";

function BiletSoruces({
  ticketPrice,
  ticketBufePrice,
  kreslo,
  handleCloseSoruces,
  showSources,
  handleGeri,
  handleShowSoruces,
}) {
  const { selectedTicketFilm, selectedTicketSinema, selectedTicketData } =
    useContext(GlobalContext);

  return (
    <div className={`biletSources ${showSources ? "activeSoruce" : ""}`}>
      <div className="biletSourcesClose">
        <img
          src="/Images/close-modal (1).svg"
          alt="close"
          onClick={handleCloseSoruces}
        />
      </div>
      <div className="biletSourcesChild">
        <div className="biletChildhead">
          <SorucesHead
            sourcesText={"Seans Seçimi"}
            handleGeri={handleGeri}
            num={1}
            handleShowSoruces={handleShowSoruces}
          />
          <div className="biletFilmSourc">
            <div className="biletFilmSorucsHead">
              <div className="biletFilmSorucsHeadLeft">
                <img
                  src="/Images/playicon.jpg"
                  alt="play"
                  className="playIcon"
                />
                <div className="biletFilmSorucsHeadLeftText">
                  <p>{selectedTicketFilm?.original_title}</p>
                  <span>{selectedTicketFilm?.title}</span>
                </div>
              </div>
              <div className="biletFilmSorucsHeadRight">
                <img
                  src={`https://image.tmdb.org/t/p/w500${selectedTicketFilm?.poster_path}`}
                  alt="poster"
                />
              </div>
            </div>
            <div className="biletFilmSorucsContext">
              <div className="biletFilmSorucsContextTop">
                <img
                  src="/Images/playicon.jpg"
                  alt="play"
                  className="playIcon"
                />
                <p>{selectedTicketSinema?.name}</p>
              </div>
            </div>
            <div className="biletFilmSorucsFoot">
              <div className="biletFilmSorucsFootTop">
                <p>{selectedTicketData?.name}</p>
              </div>
              <div className="biletFilmSorucsFootBottom">
                <img src="/Images/calender.svg" alt="calender" />
                <p>{selectedTicketData?.secilmisData}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="biletSourcesChild">
        <div className="biletChildhead">
          <SorucesHead
            sourcesText={"Bilet ve Büfe Ürünleri"}
            handleGeri={handleGeri}
            num={2}
            handleShowSoruces={handleShowSoruces}
          />
          <div className="biletChildContext">
            {ticketPrice && ticketPrice.length > 0 ? (
              ticketPrice.map((ticket) => (
                <div className="ticketSourcesItems">
                  <p>{ticket.nickname}:</p>
                  <span>{`${ticket.number} Adet`}</span>
                  <span>{ticket.price} TL</span>
                </div>
              ))
            ) : (
              <span className="ticketBos">
                Henüz bilet veya büfe ürünü seçmediniz
              </span>
            )}
            {ticketBufePrice &&
              ticketBufePrice.length > 0 &&
              ticketBufePrice.map((bufe) => (
                <div className="bufeSourcesItems">
                  <p>{bufe.name}:</p>
                  <span>{`${bufe.number} Adet`}</span>
                  <span>{bufe.price} TL</span>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="biletSourcesChild">
        <div className="biletChildhead">
          <SorucesHead
            sourcesText={"Koltuk Seçimi"}
            handleGeri={handleGeri}
            num={3}
            handleShowSoruces={handleShowSoruces}
          />
          <div className="biletChildContext">
            {kreslo && kreslo.length > 0 ? (
              kreslo.map((kresl) => (
                <div className="kresloSourcesItems">
                  <p>
                    {kresl.row} - {kresl.seatNumber}
                  </p>
                </div>
              ))
            ) : (
              <span className="ticketBos">Henüz koltuk seçimi yapmadınız</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiletSoruces;
