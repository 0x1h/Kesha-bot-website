import "./style/style.css";
import BotAvatar from "./BotAvatar";
import FunCommands from "./FunCommands"
import Youtube from "./Youtube";
import PlayMusic from "./PlayMusic";
import Invite from "./Invite"

export const Landing = () => {
  return (
    <>
      <BotAvatar/>
      <FunCommands/>
      <Youtube />
      <PlayMusic/>
      <Invite/>
    </>
  );
};

export default Landing;
