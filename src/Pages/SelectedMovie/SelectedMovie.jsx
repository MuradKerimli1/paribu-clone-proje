import React, { useContext, useEffect, useState } from "react";
import "./SelectedMovie.css";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../Context";
import Loading from "../../Companent/Loading/Loading";
import VizyonSlider from "../../Companent/VizyonSlider/VizyonSlider";
import MovieBrand from "../../Companent/MovieBrand/MovieBrand";
import HomeCompany from "../../Companent/HomeCompany/HomeCompany";
import FormYorum from "../../Companent/FormYorum/FormYorum";
import LoginError from "../LoginError/LoginError";

function SelectedMovie() {
  const { movieData, fetchVideos, videos, accauntPerson } =
    useContext(GlobalContext);
  const { name } = useParams();
  const navigateTickette = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeMovie, setActiveMovie] = useState(false);
  const [showErrore, setShowErrore] = useState(false);

  const selectedMovie = movieData?.find(
    (movie) => movie.title.trim().toLowerCase() === name.trim().toLowerCase()
  );
  useEffect(() => {
    if (selectedMovie) {
      fetchVideos(selectedMovie.id);
    }
  }, [selectedMovie]);

  useEffect(() => {
    if (videos.length > 0) {
      const trailer = videos.find((video) => video.type === "Trailer");
      setSelectedVideo(trailer?.key || videos[0]?.key || null);
    }
  }, [videos]);

  if (!selectedMovie && !selectedMovie) {
    return <Loading />;
  }

  const otherMovies = movieData.filter((item) => item.id !== selectedMovie.id);

  const scrollToComments = () => {
    const commentsSection = document.getElementById("yorumContainer");
    if (commentsSection) {
      commentsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  function movieShowErrore(ElementId) {
    if (!accauntPerson) {
      setShowErrore(true);
    } else {
      navigateTickette(`/buyTicket/${ElementId}`);
    }
  }

  return (
    <div className="selectedMovie">
      {showErrore && <LoginError onClose={() => setShowErrore(false)} />}
      <div
        className="selectedMovieHeader"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${selectedMovie.poster_path})`,
        }}
      >
        <div className="selectedMovieNavbarBg">
          <div className="selectedMovieNavbar containerer">
            <div className="movieNavbarLeft">
              <MovieBrand Brand={name} />
            </div>
            <div className="movieNavbarRight">
              <div className="movieRightFirstParent">
                <div className="movieRightFirstChild">
                  <img src="/Images/movie-comment.svg" alt="comment" />
                  <span>Yorumları Oku</span>
                </div>
                <div className="movieRightFirstChild">
                  <img src="/Images/movie-heart.svg" alt="favorite" />
                  <span>İzlemek İstiyorum</span>
                </div>
              </div>
              <div className="movieRightSecondParent">
                <span>Paylaş</span>
                <img src="/Images/facebook (1).svg" alt="face" />
                <div className="secondParentImage">
                  <img src="/Images/twitter (1).svg" alt="twit" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="selectedMovieAbout containerer">
          <div className="selectedMovieImage">
            <img
              src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
              alt="selectedMovieImage"
            />
          </div>
          <div className="selectedMovieContent">
            <div className="selectedMovieTitle">
              <p>{selectedMovie.title}</p>
            </div>
            <div className="selectedMovieSalonlar">
              <div className="selectedMovieSalon">
                <img src="/Images/imax.svg" alt="imax" />
              </div>
              <div className="selectedMovieSalon">
                <img src="/Images/4dx.svg" alt="4d" />
              </div>
              <div className="selectedMovieSalon">
                <img src="/Images/goldclass.svg" alt="goldclass" />
              </div>
              <div className="selectedMovieSalon">
                <img src="/Images/screenx.svg" alt="screenx" />
              </div>
            </div>
            <div className="selectedMovieIcons">
              <img src="/Images/6plus.png" alt="6plus" />
              <img src="/Images/olumsuz.png" alt="olumsuz" />
              <img src="/Images/movie-time.svg" alt="movie-time" />
            </div>
            <div className="selectedMovieTexti">
              <div className="movieTextChild">
                <p>
                  Vizyon Tarihi :<span>{selectedMovie.release_date}</span>
                </p>
              </div>
              <div className="movieTextChild">
                <p>
                  Film Ortalamasi :<span>{selectedMovie.vote_average}</span>
                </p>
              </div>
              <div className="filmOzeti">
                <p>Film Özeti : {selectedMovie.overview}</p>
              </div>
            </div>
            <div className="selectedMovieButtons">
              <button
                className="bilet"
                onClick={() => movieShowErrore(selectedMovie.id)}
              >
                Hemen Bilet Al
              </button>
              <button
                className="fragman"
                onClick={() => setActiveMovie((prev) => !prev)}
              >
                <a href="#selectedMovieVideo">
                  Fragman İzle{" "}
                  <img src="/Images/play-icon.svg" alt="playIcon" />
                </a>
              </button>
              <button className="yorumla" onClick={scrollToComments}>
                <p>Yorumla</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="selectedMoviePlusIm containerer">
        <img src="/Images/nonLogin-banner.png" alt="banner" />
      </div>
      {activeMovie && (
        <div id="selectedMovieVideo" className="selectedVidd containerer">
          {selectedVideo ? (
            <iframe
              className="iframe"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="Movie Trailer"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ) : (
            <p>No trailer available</p>
          )}
        </div>
      )}

      <div className="selecteMovieYorum container" id="yorumContainer">
        <FormYorum filmId={selectedMovie.id} />
      </div>
      <div className="selectedMovieSwiper containerer">
        <VizyonSlider
          movies={otherMovies}
          vizyonYazi={"Vizyondaki Diğer Filmler"}
        />
      </div>
      <div className="selectedMovieCompany containerer">
        <HomeCompany />
      </div>
    </div>
  );
}

export default SelectedMovie;
