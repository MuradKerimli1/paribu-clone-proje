import React, { useState, useEffect } from "react";
import "./FormYorum.css";

function FormYorum({ filmId }) {
  const [yorumlar, setYorumlar] = useState([]);
  const [yorum, setYorum] = useState("");

  useEffect(() => {
    const storedYorumlar = JSON.parse(localStorage.getItem("yorumlar")) || [];
    const filteredYorumlar = storedYorumlar.filter(
      (film) => film.id === filmId
    );
    setYorumlar(filteredYorumlar);
  }, [filmId]);

  function handleYorum() {
    const yeniYorum = {
      id: filmId,
      text: yorum,
      date: new Date().toLocaleDateString(),
    };

    const allYorumlar = JSON.parse(localStorage.getItem("yorumlar")) || [];

    const guncelYorumlar = [...yorumlar, yeniYorum];

    const updatedYorumlar = [
      ...allYorumlar.filter((film) => film.id !== filmId),
      ...guncelYorumlar,
    ];

    setYorumlar(guncelYorumlar);
    localStorage.setItem("yorumlar", JSON.stringify(updatedYorumlar));
    setYorum("");
  }

  return (
    <div id="yorumContainer">
      <div className="textarea-container">
        <textarea
          className="yorum-textarea"
          placeholder="Film ile ilgili yorumunuzu yazın..."
          value={yorum}
          onChange={(e) => setYorum(e.target.value)}
        />
        <button className="yorum-button" onClick={handleYorum}>
          Gönder
        </button>
      </div>
      <div id="yorumSec">
        <p className="yorumSecTitle">Tüm Yorumlar</p>
        <ul className="yorumlar">
          {yorumlar.map((item, index) => (
            <li className="yorum" key={item.date + index}>
              <div className="yorum-title">
                <p>{item.text}</p>
              </div>
              <div className="yorum-footer">
                <div className="yorum-img">MK</div>
                <div className="yorum-name">
                  <p>Murad K....</p>
                  <span>{item.date}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FormYorum;
