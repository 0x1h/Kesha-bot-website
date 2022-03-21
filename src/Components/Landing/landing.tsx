import { useEffect, useState } from "react";
import "./style/style.css";
import BotAvatar from "./BotAvatar";
import FunCommands from "./FunCommands"
import Youtube from "./Youtube";
import PlayMusic from "./PlayMusic";
import Invite from "./Invite"

export const Landing = () => {
  const [avatar, setAvatar] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

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
    document.title = "Kesha bot 🌈🛸👽"
  }, [])

  return (
    <>
      <BotAvatar avatar={avatar} isLoading={isLoading}/>
      <FunCommands avatar={avatar} isLoading={isLoading}/>
      <Youtube />
      <PlayMusic avatar={avatar} isLoading={isLoading}/>
      <Invite/>
    </>
  );
};

export default Landing;
