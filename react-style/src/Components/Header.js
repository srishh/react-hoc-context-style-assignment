import HeaderStyled from "./HeaderStyle";
import NavLink from "./NavLink";
import BrandLogo from "./BrandLogo";
import SearchBar from "./SearchBar";
import PictureLink from "./PictureLink";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

function Header() {
  return (
    <div className="header_wraper">
      <HeaderStyled>
        <div className="left-items">
          <FontAwesomeIcon className="bar_icon" icon="bars" />
          <BrandLogo className="brand_logo" />

          <NavLink className="nav_link">MEN</NavLink>
          <NavLink className="nav_link">WOMEN</NavLink>
          <NavLink className="nav_link">KIDS</NavLink>
          <NavLink className="nav_link">LIFESTYLE</NavLink>
          <NavLink className="nav_link">DISCOVER</NavLink>
        </div>
        <div className="right-items">
          <SearchBar className="search-bar" />
          <div className="profile-links">
            <PictureLink icon="user" link="Profile" />
            <PictureLink icon="bookmark" link="Wishlist" />
            <PictureLink icon="shopping-bag" link="Bag" />
          </div>
        </div>
      </HeaderStyled>
    </div>
  );
}

export default Header;
