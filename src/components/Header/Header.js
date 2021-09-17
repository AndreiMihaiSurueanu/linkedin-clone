import React from "react";
// Components
import HeaderOption from "../HeaderOption/HeaderOption";
// Styles
import "./Header.css";
// Icons
import {
  Apps,
  BusinessCenter,
  Home,
  Notifications,
  People,
  Search,
  Sms,
} from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="http://tny.im/pTo" alt="LinkedIn Icon" />
        <div className="header__search">
          <Search />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={People} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Sms} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar="http://tny.im/pQo" title="Me" />
        <div className="header__border" />
        <HeaderOption Icon={Apps} title="Work" />
        <p>Try premium account for free</p>
      </div>
    </div>
  );
}

export default Header;
