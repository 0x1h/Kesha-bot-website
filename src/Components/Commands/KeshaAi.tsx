import { useState, FC } from "react";
import AIPreview from "./AIPreview";

const KeshaAi:FC<{Loading: boolean, avatar: string}> = ({Loading, avatar}) =>{
const [openPreview, setOpenPreview] = useState<boolean>(false)

  return <>
  {openPreview && <AIPreview closeSandbox={() => setOpenPreview(false)} Loading={Loading} avatar={avatar}/>}
	<div className="command-list" onClick={() => setOpenPreview(true)}>
		<code>
			$msg
		</code>
		{"[ text for AI ]"}
		<div className="preiew-badge">preview</div>
	</div>
	<div className="command-list">
		<code>
			$invite
		</code>
		{" - To invite me to your server"}
	</div>
	<div className="command-list">
		<code>
			$stats
		</code>
		{" - Get information about the bot"}
	</div>
	<div className="command-list">
		<code>
			$config
		</code>
		{" - Edit the bot settings"}
	</div>
	<div className="command-list">
		<code>
			$albums
		</code>
		{" - Information wbout kesha's albums"}
	</div>
  </>;
};

export default KeshaAi;
