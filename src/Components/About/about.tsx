import { useEffect, useState } from "react";
import BlobCover from "../Landing/BlobCover";
import "./style/style.css";

const About = () => {
  const [clipBoard, setClipBoard] = useState("callmenikk#4874")
  const [avatar, setAvatar] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [c, setC] = useState(false)

  useEffect(() => {
    document.title = "Kesha bot - About 🌈🛸👽"
  }, [])

  useEffect(() => {
    setIsLoading(true)

    fetch("https://kesha-bot-users.herokuapp.com/user/938136480453365770")
    .then((resp) => resp.json())
    .then(data => {
      setAvatar(data.avatarURL)
      setIsLoading(false)
    })
  }, [])

  useEffect(() => {
    if(clipBoard === "Copied to clipboard"){
      setC(true)
      setTimeout(() => {
        setC(false)
        setClipBoard(clipBoard)
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
            {
            isLoading ?
              <span className="loader" />
            : <img src={avatar} alt="" />
            }
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
                navigator.clipboard.writeText("callmenikk#4874");
                setClipBoard("Copied to clipboard")
              }}
              onMouseEnter={() => {
                if(!c){
                  setClipBoard("Copy to clipboard")
                }
              }}
              onMouseLeave={() => {
                if(!c){
                  setClipBoard("callmenikk#4874")
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
