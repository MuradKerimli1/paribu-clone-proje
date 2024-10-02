import React, { useState } from "react";
import "./PayingTicket.css";
import Swal from "sweetalert2";
import PayingBasket from "../PayingBasket/PayingBasket";
import PayingForm from "../PayingForm/PayingForm";
import { useNavigate } from "react-router-dom";

function PayingTicket({ finalTotalPrice, ticketPrice }) {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handlePayment = () => {
    const { name, email, phone, expiryDate, securityCode } = formData;

    if (name && email && phone && expiryDate && securityCode) {
      Swal.fire({
        icon: "success",
        title: "Ödeme Başarılı!",
        text: "Ödemeniz başarıyla gerçekleştirildi!",
        confirmButtonText: "Ana Seyfeye git",
      }).then(() => {
        navigate("/");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Hata",
        text: "Bos Xanalari Doldurun!",
      });
    }
  };

  return (
    <div className="payingTicket">
      <div className="payingFormContainer">
        <PayingForm setFormData={setFormData} />
      </div>
      <div className="payingBasketContainer">
        <PayingBasket
          finalTotalPrice={finalTotalPrice}
          ticketPrice={ticketPrice}
          formData={formData}
          handlePayment={handlePayment}
        />
      </div>
    </div>
  );
}

export default PayingTicket;
