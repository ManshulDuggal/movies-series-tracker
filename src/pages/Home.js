import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
//we can dispatch things to the state using useDispatch and we can get back or extract the inbformation using useSelector
import { moviesAction } from "../actions/moviesAction";

import MovieCards from "../components/Movies";
import DetailData from "../components/DetailData";
import styled from "styled-components";

import { motion } from "framer-motion";

import { useLocation } from "react-router";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(moviesAction());
  }, [dispatch]);

  //get the data back from the state
  const { popularMovies, trendingMovies } = useSelector(
    (state) => state.movies
  );
  //uselocation for pooping the card
  const location = useLocation();

  const pathVar = location.pathname.split("/")[2];
  console.log(pathVar);
  return (
    <div>
      {pathVar && <DetailData />}

      <Section>
        <h1>Popular Movies</h1>
        <Cardwrapper>
          {popularMovies.map((movie) => (
            <MovieCards
              name={movie.title}
              key={movie.id}
              rating={movie.vote_average}
              date={movie.release_date ? movie.release_date : "To Be Announced"}
              votes={movie.vote_count}
              img={movie.poster_path}
              id={movie.id}
            />
          ))}
        </Cardwrapper>

        <h1>Trending</h1>
        <Cardwrapper>
          {trendingMovies.map((movie) => (
            <MovieCards
              name={movie.title ? movie.title : movie.original_name}
              key={movie.id}
              rating={movie.vote_average}
              date={movie.release_date ? movie.release_date : "To Be Announced"}
              votes={movie.vote_count}
              img={movie.poster_path}
              id={movie.id}
            />
          ))}
        </Cardwrapper>
      </Section>
    </div>
  );
};
const Section = styled(motion.div)`
  text-align: center;
  h1 {
    background: radial-gradient(#3805053e, #05082988);
    width: 40%;
    border-radius: 2%;
    color: white;
    font-weight: bolder;
    padding: 1rem 0rem;
    margin: 2rem auto;
    font-size: 1.5rem;
  }
`;

const Cardwrapper = styled(motion.div)`
  padding: 2rem;
  min-height: 90vh;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(210px, 3fr));

  h2 {
    font-weight: bolder;
    padding: 1rem;
    font-size: 0.7rem;
  }
  h3 {
    padding: 1rem;
    font-size: 0.8rem;
  }
  h4 {
    padding: 1rem;
    font-size: 0.7rem;

    span {
      padding: 1rem;
      margin-right: 30%;
    }
  }

  @media only screen and (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 3fr));

    h2,
    h1,
    h3,
    h4 {
      font-size: 0.6rem;
    }
  }
`;

export default Home;
