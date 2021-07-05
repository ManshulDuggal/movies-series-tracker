import React from "react";
//styled components
import styled from "styled-components";
//animation
import { motion } from "framer-motion";
//redux
import { useSelector } from "react-redux";
import { GetTrailers } from "../api";

const DetailData = () => {
  const { detail, movies, trailers } = useSelector((state) => state.detail);
  return (
    <div>
      <CardFull>
        <CardContent>
          <div className="title">
            <h1>{detail.original_title}</h1>
          </div>
          <h1>Audience : {detail.audult ? "Mature" : "UA"}</h1>
          <div className="image-movie">
            <div className="rating">
              <h4>{detail.vote_average}</h4>
              <h4>
                <span>votes</span>
                {detail.vote_count}
              </h4>
            </div>
            <img
              src={"https://image.tmdb.org/t/p/w342" + detail.poster_path}
              alt="poster"
            />
          </div>
          <div className="genres">
            {detail.genres.map((data) => (
              <div key={data.id}>
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
                  src={"https://www.youtube.com/embed/" + data.key}
                  title={data.name}
                ></iframe>
              </div>
            ))}
          </div>
        </CardContent>
      </CardFull>
    </div>
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
    justify-content: space-evenly;

    span{
      margin:0rem 1rem;
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

  .description{
 


  p {
    font-family: "Raleway", sans-serif;
    font-weight: bolder;
    width: 50%;
    margin: auto;
    padding: 4rem;
    text-align: justify;
  }

  .trailer {
    padding: 2rem;

    h1 {
      padding: 2rem;
    }
  }

}

  .genres{
 

    display: flex;
    flex-flow: column;
    justify-content: center;
    padding:2rem;
    flex-wrap: wrap;
    flex-direction: row;

    h3{
      font-family: "Francois One", sans-serif;
    font-size: 0.7rem;
    padding: 1rem;
    }

 
  
`;
export default DetailData;
