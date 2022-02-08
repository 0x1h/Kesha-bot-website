import { useEffect, useState } from "react";
import BlobCover from "../Landing/BlobCover";
import Kesha from "../Landing/Assets/bot-avatar.png";
import "./style/style.css";

const About = () => {
  const [clipBoard, setClipBoard] = useState("callmenikk#0001")
  const [c, setC] = useState(false)

  useEffect(() => {
    document.title = "Kesha bot - About 🌈🛸👽"
  }, [])

  useEffect(() => {
    if(clipBoard === "Copied to clipboard"){
      setC(true)
      setTimeout(() => {
        setC(false)
        setClipBoard('callmenikk#0001')
      }, 2000)
    }
  }, [clipBoard])

  return (
    <div className="about-section">
      <div className="blob-banner">
        <BlobCover />
      </div>
      <main>
        <h1>About</h1>
        <div className="about-wrapper">
          <div className="kesha-avatar">
            <img src={Kesha} alt="" />
          </div>
          <div className="about-text">
            This is Kesha bot, which is made for fun, it has cool cool commands,{" "}
            <code>$</code> sign is bot's prefix, don't ask why, also it cannot
            be changed because it is iconic character for Kesha <br />
            when you will need help on server type <code>$help</code> and bot
            will send website embed and music commands, developer who made is me
            lol, on discord you can find me with{" "}
            <code
              className="blue"
              style={{
                background: clipBoard === "Copied to clipboard" ? "#2dd148" : "#5865F2"
              }}
              onClick={() => {
                navigator.clipboard.writeText("callmenikk#0001");
                setClipBoard("Copied to clipboard")
              }}
              onMouseEnter={() => {
                if(!c){
                  setClipBoard("Copy to clipboard")
                }
              }}
              onMouseLeave={() => {
                if(!c){
                  setClipBoard("callmenikk#0001")
                }
              }}
            >
              {clipBoard}
            </code>{' '}
            why do u need me idk but I will keep my discord tag here lol, well enjoy with bot ANIMAL! and pls give feedback on <a href="https://top.gg/bot/938136480453365770" target={'_blank'}>Top.gg</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
