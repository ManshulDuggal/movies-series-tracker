import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux"; // this function gets the redux state
import { useLocation } from "react-router-dom";
import DetailDataFav from "../components/DetailDataFav";
import FavoritesCards from "../components/FavoritesCards";

const Favourites = () => {
  //get the data back from the state
  const { favorites } = useSelector((state) => state.favorites);
  //uselocation for pooping the card
  const location = useLocation();
  const pathVar = location.pathname.split("/")[2];
  console.log(favorites);

  return (
    <div>
      <Section />
      {pathVar && <DetailDataFav />}
      <Section>
        <h1>Favorites</h1>
        <Cardwrapper>
          {favorites.map((data) => (
            <FavoritesCards
              name={data.name}
              key={data.id}
              rating={data.rating}
              date={data.date ? data.date : "To Be Announced"}
              votes={data.votes}
              img={data.img}
              id={data.id}
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
    width: 20%;
    border: solid 2px;
    color: #fdfdfdf8;
    background: #00000088;
    font-weight: bolder;
    padding: 1rem 0rem;
    margin: 2rem auto;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    font-family: "Archivo Black", sans-serif;
  }

  @media only screen and (max-width: 450px) {
    h1 {
      font-size: 0.8rem;
      width: 40%;
    }
  }
`;

const Cardwrapper = styled(motion.div)`
  padding: 2rem;
  min-height: 90vh;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(5, minmax(100px, 3fr));

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
    grid-template-columns: repeat(2, minmax(100px, 3fr));

    h2,
    h1,
    h3 {
      font-size: 0.4rem;
    }
    h4 {
      font-size: 0.5rem;
      span {
        padding: 0.5rem;
        margin-right: 30%;
      }
    }
  }
`;

export default Favourites;
