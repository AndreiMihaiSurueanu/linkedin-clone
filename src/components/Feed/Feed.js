import React, { useEffect, useState } from "react";
// Firebase
import * as fb from "../../firebase";
// Components
import InputOption from "../InputOption/InputOption";
import Post from "../Post/Post";
// Icons
import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@material-ui/icons";
// Styles
import "./Feed.css";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fb.onSnapshot(
      fb.collection(fb.db, "posts"),
      (snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    fb.addDoc(fb.collection(fb.db, "posts"), {
      name: "Name",
      description: "Description",
      message: input,
      photoUrl: "",
      timestamp: fb.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNote} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>
    {posts.map((post) => (
      <Post />
    ))}
        <Post
            name="Name"
            description="Description"
            message="Message"
            photoUrl=""
          />
    </div>
  );
}

export default Feed;
