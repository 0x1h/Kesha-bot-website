import BlobCover from "./BlobCover";
import mouseScroll from "./Assets/mouse-scroll.png"
import "./style/loader.css"
import { FC } from "react";

const BotAvatar: FC<{avatar: string, isLoading: boolean}> = ({avatar, isLoading}) => {
  return <section className="kesha-cover">
  <BlobCover />
  <div className="bot-avatar">
	<div className="avatar-frame">
    {
      isLoading ? 
      <span className="loader" />
      : <>
          <div className="blank" />
	        <img src={avatar} alt="kesha-bot" />
        </>
    }
	</div>
	<h1>Kesha Bot</h1>
  </div>
  <div className="half-cut-blue"></div>
  <img src={mouseScroll} alt="mouse-scroll" className="mouse-scroll"/>
</section>
};

export default BotAvatar;
