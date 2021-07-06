import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <NavWrapper>
      <nav>
        <div className="logo">
          <Link to="/">
            <h1>MoviesSeries</h1>
          </Link>
        </div>
        <div className="nav-items">
          <ul>
            <Link to="/series">
              <li>Tv Series</li>
            </Link>
            <Link to="/movie">
              <li>Movies</li>
            </Link>
          </ul>
        </div>
      </nav>
    </NavWrapper>
  );
};

const NavWrapper = styled(motion.div)`
  display: flex;
  align-self: center;
  position: sticky;
  top: 0%;
  z-index: 2;

  a {
    text-decoration: none;
  }
  nav {
    background: #0000008b;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 1rem;
  }
  .nav-items {
    ul {
      display: flex;
      flex-direction: row;

      list-style: none;
      li {
        font-weight: bolder;
        margin: 0rem 2rem;
        cursor: pointer;
      }
      a {
        font-weight: bold;
        text-decoration: none;
        color: #fff1f1;
      }
    }
  }
  .logo {
    h1 {
      color: #ffffff;
      font-family: "Parisienne", cursive;
    }
  }
  @media only screen and (max-width: 600px) {
    nav {
      display: block;
      text-align: center;
      padding: 0.8rem;
    }

    .nav-items {
      ul {
        display: block;

        list-style: none;
        li {
          margin: 0rem 1rem;
        }
      }
    }
  }
`;

export default Nav;
