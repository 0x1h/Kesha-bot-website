import { useState } from "react";
import "./style/commands.css";
import FunPhotos from "./FunPhotos"
import BlobCover from "../Landing/BlobCover";

type selectType = "Fun Photos" | "AI" | "Music";

const Commands = () => {
  const [selectedCommands, setSelectedCommands] =
    useState<selectType>("Fun Photos");

  return (
    <section className="commands-section">
      <div className="blob-banner">
        <BlobCover />
      </div>
      <main>
        <h1>Commands</h1>
        <div className="commands-check">
          <div className="commands-menu">
            <button
              className={
                selectedCommands === "Fun Photos"
                  ? "command-btn selected"
                  : "command-btn"
              }
              onClick={() => setSelectedCommands("Fun Photos")}
            >
              For Fun
            </button>
            <button
              className={
                selectedCommands === "AI"
                  ? "command-btn selected"
                  : "command-btn"
              }
              onClick={() => setSelectedCommands("AI")}
            >
              AI
            </button>
            <button
              className={
                selectedCommands === "Music"
                  ? "command-btn selected"
                  : "command-btn"
              }
              onClick={() => setSelectedCommands("Music")}
            >
              Music
            </button>
          </div>
          <div className="commands-preview">
            {selectedCommands === "Fun Photos" && <FunPhotos />}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Commands;
