import React from "react";
// Icons
import { FiberManualRecord, Info } from "@material-ui/icons";
// Styles
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("Papa react is back", "Top news - 9099 readers")}
      {newsArticle("Tesla hits new hights", "Cars & auto - 300 readers")}
      {newsArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
      {newsArticle("Is redux too good?", "Code - 123 readers")}
      {newsArticle("Papa react launches course?!", "Top news - 6503 readers")}
    </div>
  );
}

export default Widgets;
