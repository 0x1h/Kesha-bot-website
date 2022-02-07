import { FC, useState, FormEvent, useRef, useEffect } from "react";
import "./style/preview.css";
import { previewType } from "./FunPhotos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Avatar1 from "../Landing/Assets/user1.png";
import Kesha from "../Landing/Assets/bot-avatar.png";
import commands from "./previewData.json";
import "./style/loading.css"
import axios from "axios";

interface PreviewProps {
  closeSandbox: () => void;
}

interface messagesProps {
  time: string;
  name: "You" | "Kesha-bot";
  message: string;
}

const formatAMPM = (date: Date) => {
  let hours: number = date.getHours();
  let minutes: number | string = date.getMinutes();
  let ampm: string = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes.toString().padStart(2, "0");
  let strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

const AIPreview: FC<PreviewProps> = ({closeSandbox}) => {
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const optionsRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<messagesProps[]>([]);

  const formHandler = (e: FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    setIsLoading(true)
    
    axios.get(`https://api.popcatdev.repl.co/chatbot?msg=${input}&owner=callmenikk&botname=Kesha`)
    .then((resp) => {
      if(resp){
        setMessages([
          ...messages,
		  {
			name: "You",
			message: `${input}`,
			time: formatAMPM(new Date()),
		  },
          {
            name: "Kesha-bot",
            message: resp.data.response,
            time: formatAMPM(new Date())
          },
        ]);
      }
      setIsLoading(false)
    }).catch(err => {
      console.log(err);
    })
    
    setInput("");
  };


  const handleClickOutside = (e: any) => {
    if (optionsRef.current && !optionsRef.current.contains(e.target)) {
      closeSandbox();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  });

  return (
    <div className="preview-sandbox">
      <div className="sandbox-container" ref={optionsRef}>
        <div className="preview-messages" >
          {messages.map((e, i) => {
            return (
              <div className="message" key={i}>
                <div className="avatar">
                  <div className="avatar-frame">
                    <img
                      src={e.name === "You" ? Avatar1 : Kesha}
                      alt="discord-avatar"
                    />
                  </div>
                </div>
                <div className="message-content">
                  <div className="upper-contenet">
                    <div className={e.name === "You" ? "username purple" : "username"}>{e.name}</div>
                    <div className="time">Today at {e.time}</div>
                  </div>
                  <div className="down-content">
                    {e.name === "You" ? (
                      `$msg ${e.message}`
                    ) : (
                      e.message
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          {
            isLoading && 
            <div className="message">
            <div className="avatar">
              <div className="avatar-frame">
                <img src={Kesha} alt="discord-avatar" />
              </div>
            </div>
            <div className="message-content">
              <div className="upper-contenet">
                <div className="username purple">Kesha-bot</div>
                <div className="time">Today at {formatAMPM(new Date())}</div>
              </div>
              <div className="down-content">
               <span className="loader"></span>
              </div>
            </div>
          </div>
          }
          <div className="message">
            <div className="avatar">
              <div className="avatar-frame">
                <img src={Avatar1} alt="discord-avatar" />
              </div>
            </div>
            <div className="message-content">
              <div className="upper-contenet">
                <div className="username purple">You</div>
                <div className="time">Today at {formatAMPM(new Date())}</div>
              </div>
              <div className="down-content">
                {"$msg"} {input}
              </div>
            </div>
          </div>
        </div>
        <div className="input-field">
          <div className="circle">
            <FontAwesomeIcon icon={faPlus} color={"#2c2f33"} />
          </div>
          <form onSubmit={formHandler}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message #kesha-ai"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIPreview;