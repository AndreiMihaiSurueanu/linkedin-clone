import React from "react";
// Icons
import {
  Create,
} from "@material-ui/icons";
// Styles
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              type="text"
            />
            <button type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feed;
