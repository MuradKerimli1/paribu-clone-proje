import React from "react";
import "./PayingBasket.css";

function PayingBasket({ finalTotalPrice, ticketPrice,handlePayment}) {
  return (
    <div className="payingBusket">
      <div className="payingBasketHead">
        <p>Toplam: {finalTotalPrice} TL</p>
        {ticketPrice.map((ticket) => (
          <span>{`${ticket.number} adet ${ticket.nickname} - ${ticket.price}TL`}</span>
        ))}
      </div>
      <div className="payingBasketWaring">
        <div className="warningMainChild">
          <div className="mainWarImg">
            <img src="/Images/warning.svg" alt="warningPay" />
          </div>
          <span>
            Biletinizi seans saatinden 1 saat öncesine kadar web sitemiz veya
            mobil uygulamamız üzerinden iade edebilirsiniz. Detaylı bilgi için
            tıklayınız.
          </span>
        </div>
        <div className="warningChild">
          <input type="checkbox" />
          <span>
            Ön Bilgilendirme Koşulları’nı ve Mesafeli Satış Sözleşmesi’ni
            okudum, onaylıyorum.
          </span>
        </div>
        <div className="warningChild">
          <input type="checkbox" />
          <span>
            Paribu Cineverse E-Posta ve SMS gönderimleri aracılığıyla ön
            gösterimler, güncel etkinlikler ve kampanyalardan haberdar olmak
            istiyorum.
          </span>
        </div>
      </div>
      <div className="payingBasketBtn">
      <button onClick={handlePayment}>Ödeme Yap</button>
      </div>
      <div className="payingBasketFooter">
        <div className="PacconieImg">
          <img src="/Images/Pacconie.png" alt="Pacconie" className="Pacconie" />
        </div>
        <p>Burada üye olanlar kazanıyor!</p>
        <span>
          CGV Cinema Club üyeleri hem büfede hem de gişede %3 CGV Para kazanıyor
          ve hizmet bedeli ödemiyor!
        </span>
        <div className="footerPayingCards">
          <img src="/Images/GlobalSign_logo.png" alt="payCard" />
          <img src="/Images/Mastercard-logo.png" alt="payCard" />
          <img src="/Images/Visa_Inc._logo.png" alt="payCard" />
          <img src="/Images/troy.png" alt="payCard" />
        </div>
      </div>
    </div>
  );
}

export default PayingBasket;
