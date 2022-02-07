import { useState } from "react";
import AIPreview from "./AIPreview";

const KeshaAi = () => {
const [openPreview, setOpenPreview] = useState<boolean>(false)

  return <>
  {openPreview && <AIPreview closeSandbox={() => setOpenPreview(false)}/>}
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
  </>;
};

export default KeshaAi;
