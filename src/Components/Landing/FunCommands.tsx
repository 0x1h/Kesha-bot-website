import { useState, useEffect } from "react";
import "./style/fun-commands.css"
import Avatar1 from "./Assets/user1.png"
import Avatar2 from "./Assets/user2.png"
import BotPhoto from "./Assets/bot-avatar.png";
import SadCat from "./Assets/sadcat.png"
import {motion} from "framer-motion"


const FunCommands = () => {
  const [appearMessage, setAppearMessage] = useState<boolean>(false)
  
  const scrollHandler = () => {
    const scrollY = window.pageYOffset
    
    if(scrollY >= 514){
      setAppearMessage(true)
    }    
  }
  
  const list = {
    visible: { opacity: appearMessage ? 1 : 0, x: appearMessage ? 0 : -200 },
    hidden: { opacity: 0, x: appearMessage ? 0 : -200 },
  }

  const textList = {
    visible: { opacity: appearMessage ? 1 : 0, x: appearMessage ? 0 : -100 },
    hidden: { opacity: 0, x: appearMessage ? 0 : -100 },
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler)
    return () => window.removeEventListener("scroll", scrollHandler)
  })

  return (
  <section className='fun-commands'>
    <motion.div 
      className="text"
      variants={textList}
      animate="visible"
      initial="hidden"
      transition={{ ease: "easeOut", duration: .4}}
    >
    
    Fun Commands <br/>
    With Friends
    </motion.div>
    <div className="message-container">
      <motion.div 
        className="message"
        animate="visible"
        initial="hidden"
        variants={list}
        transition={{ ease: "easeOut", duration: .1, delay: .5 }}
        >
        <div className="avatar">
          <div className="avatar-frame">
            <img src={Avatar1} alt="discord-avatar" />
          </div>
        </div>
        <div className="message-content">
          <div className="upper-contenet">
            <div className="username purple">
              George
            </div>
            <div className="time">Today at 9:19 PM</div>
          </div>
          <div className="down-content">
            $msg Hello, How are you?
          </div>
        </div>
      </motion.div>
      <motion.div 
        className="message"
        animate="visible"
        initial="hidden"
        transition={{ ease: "easeOut", duration: .1, delay: 1.5 }}
        variants={list}
        >
        
        <div className="avatar">
          <div className="avatar-frame">
            <img src={BotPhoto} alt="discord-avatar" />
          </div>
        </div>
        <div className="message-content">
          <div className="upper-contenet">
            <div className="username">
              Kesha-bot
            </div>
            <div className="time">Today at 9:19 PM</div>
          </div>
          <div className="down-content">
          I’m pretty good, what about you?
          </div>
        </div>
      </motion.div>
      <motion.div 
        className="message" 
        transition={{ ease: "easeOut", duration: .1, delay: 2.5 }}
        animate="visible"
        initial="hidden"
        variants={list}
      >
        <div className="avatar">
          <div className="avatar-frame">
            <img src={Avatar2} alt="discord-avatar" />
          </div>
        </div>
        <div className="message-content">
          <div className="upper-contenet">
            <div className="username cyan">
            Daniel
            </div>
            <div className="time">Today at 9:20 PM</div>
          </div>
          <div className="down-content">
          $sadcat me on my birthday
          </div>
        </div>
      </motion.div>
      <motion.div 
        className="message"
        transition={{ ease: "easeOut", duration: .1, delay: 3.5 }}
        animate="visible"
        initial="hidden"
        variants={list}

      >
        <div className="avatar">
          <div className="avatar-frame">
            <img src={BotPhoto} alt="discord-avatar" />
          </div>
        </div>
        <div className="message-content">
          <div className="upper-contenet">
            <div className="username">
            Kesha-bot
            </div>
            <div className="time">Today at 9:20 PM</div>
          </div>
          <div className="down-content">
            <div className="meme-wrapper">
              <img src={SadCat} alt="" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default FunCommands;
