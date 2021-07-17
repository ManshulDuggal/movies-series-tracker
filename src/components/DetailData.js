import React from "react";
//styled components
import styled from "styled-components";
//imnporting images
import starEmpty from "../images/starEmpty.png";
import starFull from "../images/starFull.png";
import Default from "../images/default.png";

//animation
import { motion } from "framer-motion";
import { CardLoad } from "../anim/Anim";
//redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
const DetailData = ({ pathVar }) => {
  let image = "https://image.tmdb.org/t/p/w342";
  const history = useHistory();
  const exitdetailhandler = (e) => {
    const element = e.target;

    if (element.classList.contains("fix")) {
      document.body.style.overflow = "auto";
      history.push("/movie");
    }
  };

  //avatar

  //rating
  const getRating = () => {
    const stars = [];
    const rating = Math.floor(detail.vote_average);

    for (let i = 1; i <= 10; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      }
    }
    return stars;
  };

  const { detail, trailers, isLoading, reviews } = useSelector(
    (state) => state.detail
  );
  return (
    <>
      {!isLoading && (
        <CardFull
          className="fix"
          onClick={exitdetailhandler}
          variants={CardLoad}
          initial="hidden"
          animate="visible"
        >
          <CardContent>
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

              <img
                src={detail.poster_path ? image + detail.poster_path : Default}
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
              <p>{detail.overview ? detail.overview : ""}</p>
            </div>

            <div className="reviews ">
              {reviews.slice(0, 2).map((data) => (
                <div className="wrapperR">
                  <div className="reviews">
                    <h2>{data.author}</h2>

                    <div className="avatar">
                      <img src={Default} alt="avatar" />
                    </div>

                    <p> {data.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="trailer">
              {trailers.slice(0, 2).map((data) => (
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
  z-index: 4;
`;
const CardContent = styled(motion.div)`
  position: absolute;
  left: 10%;
  justify-content: center;
  flex-flow: column;
  text-align: center;
  color: white;
  padding: 2rem 2rem;
  background: radial-gradient(#14031a, #5c155cfa);
  width: 80%;
  margin: auto;

  .wrapperR {
    display: flex;
    flex-direction: row;
  }
  .reviews {
    padding: 2rem;

    overflow: hidden;

    text-overflow: ellipsis;

    h3 {
      font-size: 0.8rem;
    }
    h2 {
      font-size: 0.9rem;
    }
    p {
      width: 20rem;
      margin: auto;
      font-size: 0.81rem;
      text-align: justify;
      height: 100px;
      overflow-y: auto;

      ::-webkit-scrollbar {
        display: none;
      }
    }
    .avatar {
      img {
        width: 19%;
      }
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
    .notFound {
      width: 90%;
      margin: auto;
      text-align: center;
    }

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
    .reviews {
      width: 100%;
      padding: 0rem;
      margin: 2rem auto;
      h3 {
        font-size: 0.6rem;
      }
      h2 {
        font-size: 0.6rem;
      }

      p {
        padding: 0rem;
        text-align: center;
        width: 100%;
        font-size: 0.6rem;
      }
      .avatar {
        img {
          width: 40%;
        }
      }
    }

    .rating {
      display: flex;

      width: 90%;
      margin: auto;
      justify-content: center;

      img {
        width: 15px;
      }
    }

    h1,
    h2,
    h3,
    h4 {
      font-size: 0.7rem;
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
        font-size: 0.6rem;
        padding: 0;
        text-align: justify;
        width: 100%;
      }
    }
    img {
      width: 100%;
    }
  }
`;
export default DetailData;
