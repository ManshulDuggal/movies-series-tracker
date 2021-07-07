import React from "react";
//styled components
import styled from "styled-components";
//imnporting images
import starEmpty from "../images/starEmpty.png";
import starFull from "../images/starFull.png";
//animation
import { motion } from "framer-motion";
//redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
const DetailData = ({ pathVar }) => {
  const history = useHistory();
  const exitdetailhandler = (e) => {
    const element = e.target;
    console.log(element);
    if (element.classList.contains("fix")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  //rating
  const getRating = () => {
    const stars = [];
    const rating = Math.floor(detail.vote_average);

    for (let i = 1; i <= 10; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  const { detail, trailers, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardFull className="fix" onClick={exitdetailhandler}>
          <CardContent layoutId={`title ${pathVar}`}>
            <div className="title">
              <h1>{detail.original_title}</h1>
            </div>
            <h1>Audience : {detail.adult ? "Mature" : "UA"}</h1>
            <div className="image-movie">
              <div className="rating">
                <div className="star">{getRating()}</div>

                {/* <h4>
                  <span>votes</span>
                  {detail.vote_count}
                </h4> */}
              </div>

              <motion.img
                layoutId={`image ${pathVar}`}
                src={"https://image.tmdb.org/t/p/w342" + detail.poster_path}
                alt="poster"
              />
            </div>
            <div className="genres">
              {detail.genres.map((data) => (
                <div>
                  <h3>{data.name}</h3>
                </div>
              ))}
            </div>

            <div className="description">
              <h1>Summary</h1>
              <p>{detail.overview}</p>
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
  background: radial-gradient(#030303, #2e0202);
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
  .rating {
    display: flex;
    justify-content: center;
    width: 40%;
    background: #ffffff3d;
    border-radius: 2rem;
    margin: 4rem auto;
  }
  .star {
    z-index: 11;
    display: flex;
    padding: 2rem;

    img {
      width: 30px;
      padding: 0rem;
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
