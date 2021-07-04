import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

//animations
import { CardHover } from "../anim/Anim";
//Rudux
import { useDispatch } from "react-redux";
import { getDetail } from "../actions/detailsAction";
//link
import { Link } from "react-router-dom";
const MovieCards = ({ name, rating, date, votes, img, id }) => {
  const dispatch = useDispatch();
  const detailHandler = () => {
    dispatch(getDetail(id));
  };

  return (
    <div>
      <Wrapper>
        <Link
          to={`/movie/${id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card
            variants={CardHover}
            whileHover="whileHover"
            onClick={detailHandler}
          >
            <h2>{name}</h2>

            <h3>{date}</h3>

            <div className="poster"></div>

            <img src={"https://image.tmdb.org/t/p/w342" + img} alt="" />

            <h4>
              votes:
              <span>{votes}</span>
              {rating}
            </h4>
          </Card>
        </Link>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  cursor: "pointer";
`;

const Card = styled(motion.div)`
  background-color: white;
  border-radius: 2%;
  cursor: pointer;

  img {
    width: 100%;
    object-fit: cover;
  }

  box-shadow: #130101ba 1px 1px 20px;
`;

export default MovieCards;
