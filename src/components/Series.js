import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

//animations
import { CardHover, CardLoadAll } from "../anim/Anim";
//Rudux
import { useDispatch } from "react-redux";
import { getDetailSeries } from "../actions/detailstvaction";
//link
import { Link } from "react-router-dom";
const SeriesCards = ({ name, rating, date, votes, img, id }) => {
  const StringToInt = id.toString();
  const dispatch = useDispatch();
  const detailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(getDetailSeries(id));
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
            {/* <h2>{name}</h2>

            <h3>{date}</h3> */}

            <div className="poster">
              <img src={"https://image.tmdb.org/t/p/w342" + img} alt="" />
            </div>
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
    display: block;
    overflow: hidden;
    width: 100%;
    object-fit: cover;
  }

  box-shadow: #130101ba 1px 1px 20px;
`;

export default SeriesCards;
