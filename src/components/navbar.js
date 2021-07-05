import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <NavWrapper>
      <nav>
        <div className="logo">
          <h1>MoviesSeries</h1>
        </div>
        <div className="nav-items">
          <ul>
            <a href="/series">
              <li>Tv Series</li>
            </a>
            <a href="movies">
              <li>Movies</li>
            </a>
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
`;

export default Nav;
