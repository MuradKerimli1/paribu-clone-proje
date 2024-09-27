import React from "react";
import { GlobalProvider } from "./Context";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import Company from "./Pages/Company/Company";
import MoviePass from "./Pages/MoviePass/MoviePass";
import CompanyDetal from "./Pages/CompanyDetal/CompanyDetal";
import SelectedMovie from "./Pages/SelectedMovie/SelectedMovie";
import GoldenEgg from "./Pages/GoldenEgg/GoldenEgg";
import CocukAile from "./Pages/CocukAile/CocukAile";
import Sinemalar from "./Pages/Sinemalar/Sinemalar";
import LoginGiris from "./Pages/LoginGiris/LoginGiris";
import LoginUye from "./Pages/LoginUye/LoginUye";

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          c
          <Route index element={<Home />} />
          <Route path="/filmler" element={<Movies />} />
          <Route path="/company" element={<Company />} />
          <Route path="/moviePass" element={<MoviePass />} />
          <Route path="/companyDetail/:id" element={<CompanyDetal />} />
          <Route path="/selectedMovie/:name" element={<SelectedMovie />} />
          <Route path="/goldenEgg" element={<GoldenEgg />} />
          <Route path="/cocukAile" element={<CocukAile />} />
          <Route path="/sinemalar" element={<Sinemalar />} />
          <Route path="/loginGiris" element={<LoginGiris />} />
          <Route path="/loginUye" element={<LoginUye />} />
        </Route>
      </Routes>
    </GlobalProvider>
  );
}

export default App;
