import React, { useContext, useState } from "react";
import "./UyeLogin.css";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { GlobalContext } from "../../Context";
import Swal from "sweetalert2";

function UyeLogin() {
  const { globalPersons, setGlobalPersons } = useContext(GlobalContext);
  const [passwordInp, setPasswordInp] = useState(false);
  const [passwordAgainInp, setPassworAgaindInp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
    birthDate: {
      day: "",
      month: "",
      year: "",
    },
    gender: "",
    password: "",
    passwordAgain: "",
  });

  const currentYear = new Date().getFullYear();

  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  const years = Array.from(
    { length: currentYear - 1950 + 1 },
    (_, i) => 1950 + i
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["day", "month", "year"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        birthDate: { ...prev.birthDate, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePasswordSee = () => {
    setPasswordInp((prev) => !prev);
  };

  const handlePasswordAgainSee = () => {
    setPassworAgaindInp((prev) => !prev);
  };

  const addGlobalPerson = () => {
    if (formData.password !== formData.passwordAgain) {
      alert("Password Ayni Degil!");
      return;
    }

    const newPerson = {
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      number: formData.number,
      birthDate: `${formData.birthDate.day}-${formData.birthDate.month}-${formData.birthDate.year}`,
      gender: formData.gender,
      password: formData.password,
    };

    const updatedPersons = [...globalPersons, newPerson];
    setGlobalPersons(updatedPersons);

    localStorage.setItem("globalPersons", JSON.stringify(updatedPersons));

    setFormData({
      name: "",
      surname: "",
      email: "",
      number: "",
      birthDate: { day: "", month: "", year: "" },
      gender: "",
      password: "",
      passwordAgain: "",
    });

    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
  };

  return (
    <div className="uyeLoginContan">
      <div className="inputName">
        <input
          type="text"
          placeholder="Adın *"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Soyadın *"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
        />
      </div>
      <input
        type="email"
        placeholder="E-Posta *"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Cep Telefonu *"
        name="number"
        value={formData.number}
        onChange={handleChange}
      />
      {/* Date of Birth */}
      <div className="inputDate">
        <span>Doğum Tarihi</span> <br />
        <div className="inputSelectes">
          <select
            name="day"
            value={formData.birthDate.day}
            onChange={handleChange}
          >
            <option disabled>Gün</option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
          <select
            name="month"
            value={formData.birthDate.month}
            onChange={handleChange}
          >
            <option disabled>Ay</option>
            {months.map((month, index) => (
              <option key={index} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
          <select
            name="year"
            value={formData.birthDate.year}
            onChange={handleChange}
          >
            <option disabled>Yıl</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="inputGender">
        <span className="genderTitle">Cinsiyet</span>
        <div className="genderChildren">
          <div className="genderChild">
            <input
              type="radio"
              name="gender"
              value="Kadin"
              checked={formData.gender === "Kadin"}
              onChange={handleChange}
            />
            <span>Kadin</span>
          </div>
          <div className="genderChild">
            <input
              type="radio"
              name="gender"
              value="Erkek"
              checked={formData.gender === "Erkek"}
              onChange={handleChange}
            />{" "}
            <span>Erkek</span>
          </div>
        </div>
      </div>

      <div className="input-password">
        <div className="inpit-password-child">
          <input
            type={passwordInp ? "text" : "password"}
            name="password"
            placeholder="Şifre *"
            value={formData.password}
            onChange={handleChange}
          />
          {passwordInp ? (
            <FaRegEye className="inp-pase" onClick={handlePasswordSee} />
          ) : (
            <FaEyeSlash className="inp-pase" onClick={handlePasswordSee} />
          )}
        </div>
        <div className="inpit-password-child">
          <input
            type={passwordAgainInp ? "text" : "password"}
            name="passwordAgain"
            placeholder="Şifre Tekrar *"
            value={formData.passwordAgain}
            onChange={handleChange}
          />
          {passwordAgainInp ? (
            <FaRegEye className="inp-pase" onClick={handlePasswordAgainSee} />
          ) : (
            <FaEyeSlash className="inp-pase" onClick={handlePasswordAgainSee} />
          )}
        </div>
      </div>
      <button onClick={addGlobalPerson}>CGV Cinema Club'a Üye Ol</button>
    </div>
  );
}

export default UyeLogin;
