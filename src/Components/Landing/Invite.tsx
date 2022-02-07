import "./style/invite.css";
import { useState, useEffect } from "react";
import InviteBlob from "./InviteBlob";
import Button from "./Button/Button";
import { motion } from "framer-motion";

const Invite = () => {
  const [appearMessage, setAppearMessage] = useState<boolean>(false);

  const textList = {
    visible: { opacity: appearMessage ? 1 : 0, y: appearMessage ? 0 : -100 },
    hidden: { opacity: 0, y: appearMessage ? 0 : -100 },
  };

  const scrollHandler = () => {
    const scrollY = window.pageYOffset;

    if (scrollY >= 2553) {
      setAppearMessage(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });

  return (
    <section className="invite-section">
      <motion.h1
        animate="visible"
        initial="hidden"
        transition={{ ease: "easeOut", duration: 1 }}
        variants={textList}
      >
        Are you ready to invite her on your{" "}
        <span className="discord"> Discord</span> server?
      </motion.h1>
      <Button />
      <InviteBlob />
    </section>
  );
};

export default Invite;
