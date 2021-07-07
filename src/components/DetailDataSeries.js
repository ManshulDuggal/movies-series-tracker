import React from "react";
//styled components
import styled from "styled-components";
//animation
import { motion } from "framer-motion";
//redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
const DetailData = () => {
  const history = useHistory();
  const exitdetailhandler = (e) => {
    const element = e.target;
    console.log(element);
    if (element.classList.contains("fix")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const { detailSeries, trailers, isLoading } = useSelector(
    (state) => state.detailtv
  );
  return (
    <>
      {!isLoading && (
        <CardFull className="fix" onClick={exitdetailhandler}>
          <CardContent>
            <div className="title">
              <h1>{detailSeries.original_name}</h1>
            </div>
            <h1>Audience : {detailSeries.audult ? "Mature" : "UA"}</h1>
            <div className="image-movie">
              <div className="rating">
                <h4>
                  {detailSeries.vote_average
                    ? detailSeries.vote_average
                    : "N/A"}
                </h4>
                <h4>
                  <span>votes</span>
                  {detailSeries.vote_count}
                </h4>
              </div>
              <img
                src={
                  "https://image.tmdb.org/t/p/w342" + detailSeries.poster_path
                }
                alt="poster"
              />
            </div>
            <div className="genres">
              {detailSeries.genres.map((data) => (
                <div key={data.id}>
                  <h3>{data.name}</h3>
                </div>
              ))}
            </div>

            <div className="description">
              <h1>Summary</h1>
              <p>
                {detailSeries.overview
                  ? detailSeries.overview
                  : "not available in api"}
              </p>
            </div>
            <div className="trailer">
              {trailers.map((data) => (
                <div>
                  <h1>{data.name} </h1>
                  <iframe
                    width="320"
                    height="215"
                    allow="fullscreen"
                    frameBorder="0"
                    controls="1"
                    src={"https://www.youtube.com/embed/" + data.key}
                    title={data.name}
                  ></iframe>
                </div>
              ))}
            </div>
          </CardContent>
        </CardFull>
      )}
    </>
  );
};

const CardFull = styled(motion.div)`
  background: #00000049;
  min-height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll;
  padding: 5rem 0rem;
  z-index: 1;
`;
const CardContent = styled(motion.div)`
  position: absolute;
  left: 10%;
  justify-content: center;
  flex-flow: column;
  text-align: center;

  color: white;
  padding: 2rem 2rem;
  background: radial-gradient(#4e0e0e, #000000);
  width: 80%;
  margin: auto;

  .rating {
    display: flex;

    width: 30%;
    margin: auto;
    justify-content: space-between;
    span {
      margin: 0rem 1rem;
    }
  }

  img {
    border-radius: 2%;
    padding: 2rem;
  }

  h1 {
    font-family: "Francois One", sans-serif;
    font-size: 1.2rem;
    padding: 1rem;
  }

  .description {
    p {
      font-family: "Raleway", sans-serif;
      font-weight: bolder;
      width: 50%;
      margin: auto;
      padding: 4rem;
      text-align: justify;
    }
  }

  .trailer {
    padding: 2rem;

    h1 {
      padding: 2rem;
    }
  }

  .genres {
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 2rem;
    flex-wrap: wrap;
    flex-direction: row;

    h3 {
      font-family: "Francois One", sans-serif;
      font-size: 0.7rem;
      padding: 1rem;
    }
  }
  @media only screen and (max-width: 600px) {
    h1,
    h2,
    h3,
    h4 {
      font-size: 0.5rem;
    }
    .genres {
      display: block;
      padding: 0.2rem;
      h3 {
        font-size: 0.5rem;
        padding: 0.4rem;
      }
    }
    .trailer {
      width: 100%;
      padding: 1rem;
      iframe {
        width: 100%;
        height: 100%;
      }

      h1 {
        padding: 0.6rem;
      }
    }
    .description {
      padding: 2rem;
      p {
        font-size: 0.4rem;
        padding: 0;
      }
    }
    img {
      width: 100%;
    }
  }
`;
export default DetailData;
