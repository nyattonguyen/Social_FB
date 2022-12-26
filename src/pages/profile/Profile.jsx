import React from "react";
import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

function Profile() {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://i.pinimg.com/564x/c2/80/e3/c280e346ff236580be61fa3a9475c7c6.jpg"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon className="item-icon" fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon className="item-icon" fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon className="item-icon" fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon className="item-icon" fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon className="item-icon" fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Nyatto</span>
            <div className="info">
              <div className="item">
                <PlaceIcon className="item-icon" />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon className="item-icon" />
                <span>nyatto.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon className="item-icon" />
            <MoreVertIcon className="item-icon" />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
}

export default Profile;
