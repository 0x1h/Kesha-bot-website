import { useState, useEffect, useRef } from "react";
import Kesha from "./Landing/Assets/bot-avatar.png";
import { useNavigate, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [appearNavbar, setappearNavbar] = useState<boolean>(false);
  const [openNavbar, setOpenNavbar] = useState<boolean>(false)
  const [avatar, setAvatar] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate();
  const {pathname} = useLocation();

  useEffect(() => {
	  if(pathname !== "/"){
		  setappearNavbar(true)
	  }
  }, [])


  const handleClickOutside = (e: any) => {
    if (navbarRef.current && !navbarRef.current.contains(e.target)) {
      setOpenNavbar(false)
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  });

  useEffect(() => {
    setIsLoading(true)


    fetch("https://kesha-bot-users.herokuapp.com/user/938136480453365770")
    .then((resp) => resp.json())
    .then(data => {
      setAvatar(data.avatarURL)
      setIsLoading(false)
    })
  }, [])

  const scrollHandler = () => {
    const scrollY = window.pageYOffset;

    if (scrollY >= 500 && pathname === "/") {
      setappearNavbar(true);
    } else if(pathname !== "/"){
		  setappearNavbar(true);
	}else {
      setappearNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });

  return (
    <nav className={appearNavbar ? (openNavbar ? "nav opened": "nav") : "nav hidden"} ref={navbarRef}>
      <div className="avatar-frame" onClick={() => {
        navigate("/")
        setOpenNavbar(false)
        }}>
        {
          isLoading ? <span className="loaderr"/>
          : <img src={avatar} alt="" />
        }
      </div>
      <div className="hamburger-menu" onClick={() => setOpenNavbar(!openNavbar)}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <div className="second">
        <p onClick={() => {
          navigate("/about")
          setOpenNavbar(false)
          }}>About</p>
        <p onClick={() => {
          setOpenNavbar(false)
          navigate("/commands")
      }}>Commands</p>
        <a
          href="https://discord.com/api/oauth2/authorize?client_id=938136480453365770&permissions=277028882752&scope=bot"
          target={"_blank"}
          style={{
            textDecoration: "none",
          }}
        >
          <button className="nav-invite">Invite</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
