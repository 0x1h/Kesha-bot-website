import "./style/style.css";
import BotAvatar from "./BotAvatar";
import FunCommands from "./FunCommands"
import Youtube from "./Youtube";

export const Landing = () => {
  return (
    <>
      <BotAvatar/>
      <FunCommands/>
      <Youtube />
    </>
  );
};

export default Landing;
