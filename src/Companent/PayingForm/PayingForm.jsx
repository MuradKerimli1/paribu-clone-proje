import React, { useState } from "react";
import "./PayingForm.css";

function PayingForm({ setFormData }) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    expiryDate: "",
    securityCode: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    setFormData((prevValues) => ({ ...prevValues, [name]: value })); 
  };

  return (
    <div className="payingForm">
      <p>Ödeme</p>
      <input
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        placeholder="Adın, Soyadın*"
      />
      <input
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        placeholder="E-Posta Adresin"
      />
      <input
        type="number"
        name="phone"
        value={formValues.phone}
        onChange={handleChange}
        placeholder="Cep Telefonu Numaran"
      />
      <div className="payingFooterInp">
        <input
          type="text"
          name="expiryDate"
          value={formValues.expiryDate}
          onChange={handleChange}
          placeholder="Son Kul. Tar. (Ay/Yıl)"
        />
        <input
          type="number"
          name="securityCode"
          value={formValues.securityCode}
          onChange={handleChange}
          placeholder="Güvenlik Numarası"
        />
      </div>
    </div>
  );
}

export default PayingForm;
