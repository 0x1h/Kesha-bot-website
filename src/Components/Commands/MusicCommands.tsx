import musicData from "./musicData.json"
const MusicCommands = () => {
	const musicsCommands = musicData.data

  return <>
  	{musicsCommands.map(e => {
		  return <div className="command-list">
			<code>
				{e.command_name}
			</code>
			{e.text}
		</div>
	  })}
  </>;
};

export default MusicCommands;
