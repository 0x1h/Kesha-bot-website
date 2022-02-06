import "./style/youtube.css";
import YtPreview from "./Assets/ty-preview.png"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Youtube = () => {
	const [appearMessage, setAppearMessage] = useState<boolean>(false)
  
	const scrollHandler = () => {
	  const scrollY = window.pageYOffset
	  
	  if(scrollY >= 1247){
		  setAppearMessage(true)
	  }
	}

	  const list = {
    visible: { opacity: appearMessage ? 1 : 0, y: appearMessage ? 0 : -200 },
    hidden: { opacity: 0, y: appearMessage ? 0 : -200 },
  }

  const textList = {
    visible: { opacity: appearMessage ? 1 : 0, y: appearMessage ? 0 : -100 },
    hidden: { opacity: 0, y: appearMessage ? 0 : -100 },
  }

	useEffect(() => {
		window.addEventListener("scroll", scrollHandler)
		return () => window.removeEventListener("scroll", scrollHandler)
	  })

  return (
    <section className="watch-youtube">
      <motion.h1 
	  className="text"
	  variants={textList}
      animate="visible"
      initial="hidden"
      transition={{ ease: "easeOut", duration: .4}}
	  >
        Watch <span id="yt">{" "}Youtube</span> <br /> With Friends
      </motion.h1>
	  <motion.div 
	  			className="yt-preview"
	          animate="visible"
			  initial="hidden"
			  variants={list}
			  transition={{ ease: "easeOut", duration: .6, delay: .5 }}>
		  <img src={YtPreview} alt="yt-preview" />
	  </motion.div>
    </section>
  );
};

export default Youtube;
