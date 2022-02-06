import { FC } from 'react';
import { previewType } from "./FunPhotos"

interface CommandProps {	
	command_name: previewType,
	setPreviewCommand: (cmd: previewType) => void,
	preview: boolean,
	text: string
}

const EachCommand: FC<CommandProps> = ({command_name, setPreviewCommand, preview, text}) => {
  return <div className="command-list" onClick={() => {
		setPreviewCommand(command_name)
	}}>
		<code>
			{command_name}
		</code>
		{text}
		{preview && <div className="preiew-badge">preview</div>}
	</div>;
};

export default EachCommand;
