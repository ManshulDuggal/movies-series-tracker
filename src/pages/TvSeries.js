import React, { useEffect } from "react";
//Redux
//importing images
import notFound from "../images/notFound.png";
import { useDispatch, useSelector } from "react-redux";
//we can dispatch things to the state using useDispatch and we can get back or extract the inbformation using useSelector

import { seriesAction } from "../actions/seriesAction";

import SeriesCard from "../components/Series";
import DetailData from "../components/DetailDataSeries";
import styled from "styled-components";
import { CardLoad, CardLoadAll } from "../anim/Anim";
import { motion } from "framer-motion";

import { useLocation } from "react-router";
const TvSeries = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(seriesAction());
  }, [dispatch]);

  //get the data back from the state
  const { popularSeries, trendingSeries, isLoading } = useSelector(
    (state) => state.series
  );
  //uselocation for pooping the card
  const location = useLocation();

  const pathVar2 = location.pathname.split("/")[2];
  console.log(pathVar2);
  return (
    <>
      {pathVar2 && <DetailData />}

      {!isLoading && (
        <Section>
          <h1>Popular Series</h1>
          <Serieswrapper>
            {popularSeries.map((series) => (
              <SeriesCard
                name={series.name}
                key={series.id}
                rating={series.vote_average}
                date={
                  series.first_air_date
                    ? series.first_air_date
                    : "To Be Announced"
                }
                votes={series.vote_count}
                img={series.poster_path ? series.poster_path : { notFound }}
                id={series.id}
              />
            ))}
          </Serieswrapper>

          <h1>Trending Series</h1>
          <Serieswrapper>
            {trendingSeries.map((data) => (
              <SeriesCard
                name={data.title ? data.title : data.original_name}
                key={data.id}
                rating={data.vote_average}
                date={
                  data.first_air_date ? data.first_air_date : "To Be Announced"
                }
                votes={data.vote_count}
                img={data.poster_path ? data.poster_path : { notFound }}
                id={data.id}
              />
            ))}
          </Serieswrapper>
        </Section>
      )}
    </>
  );
};
const Section = styled(motion.div)`
  text-align: center;
  h1 {
    background: radial-gradient(#d8b5b53d, #2e141485);
    width: 40%;
    border-radius: 2rem;
    color: black;

    padding: 1rem 0rem;
    margin: 2rem auto;
    font-size: 1.5rem;
    font-family: "Anonymous Pro", monospace;
    font-weight: 700;
  }
`;

const Serieswrapper = styled(motion.div)`
  padding: 2rem;
  min-height: 90vh;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

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
    h3 {
      font-size: 0.4rem;
    }
    h4 {
      font-size: 0.5rem;
      span {
        padding: 0.5rem;
        margin-right: 0%;
      }
    }
  }
`;

export default TvSeries;
