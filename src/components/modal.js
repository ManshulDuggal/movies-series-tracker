import React from "react";
import ReactPlayer from "react-player";
import Modali, { useModali } from "modali";
import { motion } from "framer-motion";
import { CardHover } from "../anim/Anim";

import { useSelector, useDispatch } from "react-redux";
import { getPreview } from "../redux/actions/previewAction";
import styled from "styled-components";
const Modal = ({ id }) => {
  //get the data back from the state
  const { previewMovies } = useSelector((state) => state.previews);
  const [exampleModal, toggleExampleModal] = useModali({
    animated: true,
    closeButton: false,
    large: true,
    centered: false,
  });

  const dispatch = useDispatch();
  const sendPreview = () => {
    dispatch(getPreview(id));

    console.log(id);
    console.log("it ran");
  };
  const combineFunctions = () => {
    toggleExampleModal();
    sendPreview();
  };
  return (
    <div>
      <Preview>
        <motion.button
          variants={CardHover}
          whileHover="whileHover"
          className="preview"
          onClick={combineFunctions}
        >
          Preview
        </motion.button>
      </Preview>

      <Modali.Modal {...exampleModal}>
        <Reactplayer>
          {previewMovies.slice(0, 1).map((data) => (
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                width="100%"
                height="100%"
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 },
                  },
                }}
                url={"https://www.youtube.com/watch?v=" + data.key}
              />
            </div>
          ))}
        </Reactplayer>
      </Modali.Modal>
    </div>
  );
};

export default Modal;

const Preview = styled.div`
  button {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    color: white;
    height: 30px;
    background-color: #00000060;
    width: 100%;
    overflow: hidden;
    border: none;
    &:hover {
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      display: block;
      transition: all 0.2s ease-in-out;
      background-color: #34c717a4;

      cursor: pointer;
    }
  }
`;
const Reactplayer = styled.div`
  .player-wrapper {
    position: relative;
    padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */

    .react-player {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      bottom: 0;
    }
  }
`;
