import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// import notFound from "../images/notFound.png";
// import fav from "../images/fav.png";
// import favNot from "../images/fav-not.png";
//animations
import { CardHover } from "../anim/Anim";
//Rudux
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions/detailsAction";
import { newListActions } from "../actions/newlist";
// import { favoriteActions } from "../actions/favouriteAction";

//link
import { Link } from "react-router-dom";
const FavoritesCards = ({ name, rating, date, votes, img, id, isLoading }) => {
  let imageLink = " https://image.tmdb.org/t/p/w342";
  //load detail handler
  // const StringToInt = id.toString();

  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorites);
  const RemoveFav = (id) => {
    const newList = favorites.filter((favorites) => favorites.id !== id);
    console.log(JSON.stringify(newList) + "this is your new list");
    dispatch(newListActions(newList));
  };

  const detailHandler = () => {
    document.body.style.overflow = "auto";
    dispatch(getDetail(id));
  };

  return (
    <div>
      <Wrapper>
        `<button onClick={() => RemoveFav(id)}> remove</button>
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

            <h3>{date}</h3>  */}

            <div className="poster">
              <img
                src={
                  img ? (
                    imageLink + img
                  ) : (
                    <div className="default-image"> notFound </div>
                  )
                }
                alt={name}
              />
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

const Wrapper = styled(motion.div)`
  cursor: "pointer";
  button {
    width: 100%;
    height: 20px;
  }
`;

const Card = styled(motion.div)`
  background-color: white;
  border-radius: 2%;
  cursor: pointer;

  .default-image {
    height: 500px;
    img {
      height: 500px;
    }
  }

  img {
    display: block;
    width: 100%;
    object-fit: cover;
    min-height: 40vh;
    max-height: 40vh;
  }

  box-shadow: #130101ba 1px 1px 20px;
  @media only screen and (max-width: 600px) {
    img {
      min-height: 30vh;
      max-height: 30vh;
    }
  }
`;

// const Favourites = styled.div`
//   z-index: 2;
//   border: none;
//   padding: 2rem;
//   button {
//     height: 20px;
//     width: 100%;
//   }
//   /* img {
//     cursor: pointer;
//     pointer-events: all;
//     width: 30px;
//   } */
// `;

export default FavoritesCards;
