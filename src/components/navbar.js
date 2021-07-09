import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

import { NavHover } from "../anim/Anim";

const Nav = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);
  return (
    <NavWrapper>
      <nav className={colorChange ? "navbar colorChange" : "navbar"}>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="nav-items">
          <ul>
            <Link to="/series">
              <ListItem
                variants={NavHover}
                whileFocus="whileFocus"
                whileHover="whileHover"
              >
                Series
              </ListItem>
            </Link>
            <Link to="/movie">
              <ListItem
                variants={NavHover}
                whileFocus="whileFocus"
                whileHover="whileHover"
              >
                Movies
              </ListItem>
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

  .navbar {
    background-color: transparent;
  }

  .navbar.colorChange {
    background-color: #000000c7;
  }
  a {
    text-decoration: none;
  }
  nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
  }
  .nav-items {
    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      list-style: none;
      ListItem {
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
    img {
      width: 8%;
    }
    /* 
    h1 {
      color: #ffffff;
      font-family: "Parisienne", cursive;
    } */
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
        ListItem {
          margin: 0rem 1rem;
        }
      }
    }
  }
`;

const ListItem = styled(motion.div)`
  font-weight: bolder;
  margin: 0rem 2rem;
  cursor: pointer;
  &:hover {
    color: #0bd692c0;
  }
`;

export default Nav;
