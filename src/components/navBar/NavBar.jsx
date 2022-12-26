import React, { useContext } from "react";
import "./navBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Jibun from "../../assets/image/jibun.jpg";

import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

function NavBar() {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Kyouyuu</span>
        </Link>
        <HomeOutlinedIcon className="iconNav" />
        {darkMode ? (
          <WbSunnyOutlinedIcon className="iconNav" onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon className="iconNav" onClick={toggle} />
        )}
        <GridViewOutlinedIcon className="iconNav" />
        <div className="search">
          <SearchOutlinedIcon className="iconNav" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon className="iconNav" />
        <EmailOutlinedIcon className="iconNav" />
        <NotificationsOutlinedIcon className="iconNav" />
        <div className="user">
          <img src={Jibun} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
