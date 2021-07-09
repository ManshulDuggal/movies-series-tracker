import React from "react";
//styled components
import styled from "styled-components";
//images
import starEmpty from "../images/starEmpty.png";
import starFull from "../images/starFull.png";
import Default from "../images/default.png";
//animation
import { CardLoad } from "../anim/Anim";
import { motion, AnimatePresence } from "framer-motion";
//redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const DetailData = ({ pathVar2 }) => {
  const history = useHistory();
  const exitdetailhandler = (e) => {
    const element = e.target;

    if (element.classList.contains("fix")) {
      document.body.style.overflow = "auto";
      history.push("/series");
    }
  };
  //rating
  const getRating = () => {
    const stars = [];
    const rating = Math.floor(detailSeries.vote_average);

    for (let i = 1; i <= 10; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      }
    }
    return stars;
  };

  const { detailSeries, trailers, isLoading, reviews } = useSelector(
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
            {/* <div className="image-movie"> */}
            <div className="rating">
              {/* {detailSeries.vote_average
                    ? detailSeries.vote_average
                    : "N/A"} */}

              <div className="star">{getRating()}</div>

              {/* <h4>
                  <span>votes</span>
                  {detailSeries.vote_count}
                </h4> */}
            </div>
            <motion.img
              src={"https://image.tmdb.org/t/p/w342" + detailSeries.poster_path}
              alt="poster"
            />
            {/* </div> */}
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

            <div className="reviews">
             
              {reviews.map((data) => (
                 
                <>
                <h1>Reviews</h1>
                  <h2>{data.author}</h2>

                  <div className="avatar">
                    <img src={Default} alt="avatar" />
                  </div>
                  <p>{data.content}</p>
                </>
              ))}
            </div>
            <Trailer>
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
            </Trailer>
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

  .reviews {
    padding: 4rem;

    overflow: hidden;

    text-overflow: ellipsis;
    h1 {
      padding: 3rem;
    }

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
      text-align: center justify;
      height: 100px;
      overflow-y: auto;
    }
    .avatar {
      img {
        width: 19%;
      }
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

const Trailer = styled(motion.div)`
  .trailer {
    padding: 2rem;

    h1 {
      padding: 2rem;
    }
  }
`;
export default DetailData;
