import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Noimage from "../images/imageDefault.png";
//animations
import { CardHover, CardLoadAll } from "../anim/Anim";
//Rudux
import { useDispatch } from "react-redux";
import { getDetailSeries } from "../actions/detailstvaction";
//link
import { Link } from "react-router-dom";
const SeriesCards = ({ name, rating, votes, img, id }) => {
  let imageLink = " https://image.tmdb.org/t/p/w342";

  const StringToInt = id.toString();
  const dispatch = useDispatch();
  const detailHandler = () => {
    document.body.style.overflow = "auto";
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
              <img src={img ? imageLink + img : Noimage} />
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
  .deafult-image {
    height: 500px;
    img {
      height: 700px;
    }
  }
  img {
    display: block;
    overflow: hidden;
    width: 100%;
    object-fit: cover;
    min-height: 40vh;
    max-height: 40vh;
  }

  box-shadow: #130101ba 1px 1px 20px;

  @media only screen and (max-width: 600px) {
    img {
      min-height: 35vh;
      max-height: 35vh;
    }
  }
`;

export default SeriesCards;
