import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Noimage from "../assets/images/imageDefault.png";
//animations
import { CardHover } from "../anim/Anim";
//Rudux
import { useDispatch } from "react-redux";
import { getDetailSeries } from "../redux/actions/detailstvaction";
import { favoriteAddAction } from "../redux/actions/favouriteAction";
//link
import { Link } from "react-router-dom";
const SeriesCards = ({ name, rating, votes, img, id, date }) => {
  let imageLink = " https://image.tmdb.org/t/p/w342";

  // const StringToInt = id.toString();
  const dispatch = useDispatch();
  const detailHandler = () => {
    document.body.style.overflow = "auto";
    dispatch(getDetailSeries(id));
  };

  return (
    <div>
      <Wrapper>
        <motion.button
          variants={CardHover}
          whileHover="whileHover"
          onClick={() =>
            dispatch(favoriteAddAction({ name, rating, date, votes, img, id }))
          }
        >
          add to favorites
        </motion.button>
        <Link
          to={`/series/${id}`}
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
              <img src={img ? imageLink + img : Noimage} alt={img} />
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
  button {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    color: white;
    height: 30px;
    background-color: #00000060;
    width: 100%;
    overflow: hidden;
    border: none;
    &:hover {
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      display: block;
      transition: all 0.2s ease-in-out;
      background-color: #34c717a4;

      cursor: pointer;
    }
  }
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
    min-height: 50vh;
    max-height: 50vh;
  }

  box-shadow: #130101ba 1px 1px 20px;

  @media only screen and (max-width: 600px) {
    img {
      min-height: 30vh;
      max-height: 30vh;
    }
  }
`;

export default SeriesCards;
