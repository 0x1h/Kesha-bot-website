import { useState, useEffect, FC } from "react";
import "./style/playmusic.css";
import Avatar1 from "./Assets/user1.png";
import { motion } from "framer-motion";
import Timber from "./Assets/timber-thumbnail.jpg";
import Typewriter from "typewriter-effect";

const PlayMusic: FC<{avatar: string, isLoading: boolean}> = ({avatar, isLoading}) => {
  const [appearMessage, setAppearMessage] = useState<boolean>(false);

  const scrollHandler = () => {
    const scrollY = window.pageYOffset;

    if (scrollY >= 2000) {
      setAppearMessage(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });

  const list = {
    visible: { opacity: appearMessage ? 1 : 0, x: appearMessage ? 0 : -200 },
    hidden: { opacity: 0, x: appearMessage ? 0 : -200 }
  };

  const textList = {
    visible: { opacity: appearMessage ? 1 : 0, x: appearMessage ? 0 : 100 },
    hidden: { opacity: 0, x: appearMessage ? 0 : 100 }
  };

  return (
    <section className="playmusic">
      <div className="message-container">
        {
          appearMessage &&
          <motion.div
          className="message"
          animate="visible"
          initial="hidden"
          variants={list}
          transition={{ ease: "easeOut", duration: 0.1, delay: 0.5 }}
        >
          <div className="avatar">
            <div className="avatar-frame">
              <img src={Avatar1} alt="discord-avatar" />
            </div>
          </div>
          <div className="message-content">
            <div className="upper-contenet">
              <div className="username purple">George</div>
              <div className="time">Today at 9:19 PM</div>
            </div>
            <div className="down-content">
              <Typewriter
                onInit={(write) => {
                  write
                      .pauseFor(500)
                      .changeDelay(50)
                      .typeString("$play kesha- timber")
                      .callFunction((state) => {
                        state.elements.cursor.style.display = "none";
                      })
                      .start();
                }}
              />
            </div>
          </div>
        </motion.div>
        }
        <motion.div
          className="message"
          animate="visible"
          initial="hidden"
          variants={list}
          transition={{ ease: "easeOut", duration: 0.1, delay: 2.5 }}
        >
          <div className="avatar">
            <div className="avatar-frame">
              {
                isLoading 
                ? <span className="loader"/>
                : <img src={avatar} alt="" />
              }
              
            </div>
          </div>
          <div className="message-content">
            <div className="upper-contenet">
              <div className="username">Kesha-bot</div>
              <div className="time">Today at 9:19 PM</div>
            </div>
            <div className="down-content">
              <div className="music-embed"
              style={{
                borderLeft: `5px solid #${Math.floor(Math.random()*16777215).toString(16)}`
              }}>
                <div className="music-info">
                  <p className="now-playing">Now is playing</p>
                  <a
                    className="music-name"
                    href="https://www.youtube.com/watch?v=hHUbLv4ThOo"
                    target="_blank"
                  >
                    Pitbull - Timber (Official Video) ft. Ke$ha
                  </a>
                  <div className="stats">
                    <div className="requestor">@George</div>
                    <div className="duration">3:35</div>
                  </div>
                </div>
                <div className="music-thumbnail">
                  <div className="thumbnail-wrapper">
                    <img src={Timber} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="music-request">
        <h1>Listen Music With Friends</h1>
        <p>
          Support for <span id="spotify"> Spotify</span>,{" "}
          <span id="youtube"> Youtube</span> and{" "}
          <span id="soundcloud"> Soundcloud</span> URLs
        </p>
      </div>
    </section>
  );
};

export default PlayMusic;
