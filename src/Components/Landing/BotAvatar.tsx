import BlobCover from "./BlobCover";
import BotPhoto from "./Assets/bot-avatar.png";
import mouseScroll from "./Assets/mouse-scroll.png"

const BotAvatar = () => {
  return <section className="kesha-cover">
  <BlobCover />
  <div className="bot-avatar">
	<div className="avatar-frame">
	  <div className="blank" />
	  <img src={BotPhoto} alt="kesha-bot" />
	</div>
	<h1>Kesha Bot</h1>
  </div>
  <div className="half-cut-blue"></div>
  <img src={mouseScroll} alt="mouse-scroll" className="mouse-scroll"/>
</section>
};

export default BotAvatar;
