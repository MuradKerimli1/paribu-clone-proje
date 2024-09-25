import React from "react";
import "./CgvKullanim.css";

function CgvKullanim() {
  return (
    <div className="cgvKullanim">
      <div className="cgvKullanimTitle">
        <p>CGV MoviePass’i Nasıl Kullanırım?</p>
      </div>
      <div className="cgvKullanimContextBg">
        <div className="cgvKullanimContext">
          <div className="cgvKullanimCart">
            <div className="cgvCardImage">
              <img src="/Images/howto_1.jpg" alt="howto_1" />
            </div>

            <div className="cgvCardtext">
              <p className="cgvCardParagrapht">
                Kendine uygun CGV MoviePass paketini seç!
              </p>
              <span>
                200 TL’lik CGV MoviePass paketi içerisinde 200 CGV Para ve orta
                boy mısır vardır.
              </span>
              <span>
                250 TL’lik CGV MoviePass paketi içerisinde 250 CGV Para, orta
                boy mısır ve sürpriz hediye vardır.
              </span>
              <span>
                300 TL’lik CGV MoviePass paketi içerisinde 300 CGV Para ve büyük
                boy mısır vardır.
              </span>
              <span>
                350 TL’lik CGV MoviePass paketi içerisinde 350 CGV Para, büyük
                boy mısır ve sürpriz hediye vardır.
              </span>
              <span>
                400 TL’lik CGV MoviePass paketi içerisinde 400 CGV Para ve
                ekstra büyük boy mısır vardır.
              </span>
              <span>
                500 TL’lik CGV MoviePass paketi içerisinde 550 CGV Para, kova
                boy mısır ve sürpriz hediye vardır.
              </span>
            </div>
          </div>
          <div className="cgvKullanimCart">
            <div className="cgvCardImage">
              <img src="/Images/howto_2.jpg" alt="howto_2" />
            </div>
            <div className="cgvCardtext">
              <p className="cgvCardParagrapht">
                CGV Para barkodlarınızı Paribu Cineverse web sitemiz/mobil
                uygulamamız üzerinden CGV MoviePass Barkod Yükleme sekmesinden
                yükleyebilirsiniz.
              </p>
              <span>
                "Mısır Hediyesi" ve "Sürpriz Hediye" barkodlarını sadece
                büfelerimizde kullanabilirsiniz.
              </span>
            </div>
          </div>
          <div className="cgvKullanimCart">
            <div className="cgvCardImage">
              <img src="/Images/howto_3.jpg" alt="howto_3" />
            </div>
            <div className="cgvCardtext">
              <p className="cgvCardParagrapht">
                Sana özel fırsatlarla, CGV Para’larını dilediğin gibi ister
                büfede ister gişede harcamaya başla!
              </p>
            </div>
          </div>
          <div className="cgvKullanimCart">
            <div className="cgvCardImage">
              <img src="/Images/howto_4.jpg" alt="howto_4" />
            </div>

            <div className="cgvCardtext">
              <p className="cgvCardParagrapht">
                CGV MoviePass paketlerini kullanmak için CGV Cinema Club üyesi
                olma koşulu aranmaktadır.
              </p>
              <span>
                CGV MoviePass paketindeki CGV Para barkodu CGV Cinema Club
                üyeliğine yüklendikten itibaren 6 ay içerisinde kullanılması
                gerekmektedir.
              </span>
              <span>
                Satın aldıktan sonra 30 gün içerisinde barkodlar kazınmamış,
                kullanılmamış ve hesaba yüklenmemişse iade edilebilir.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CgvKullanim;
