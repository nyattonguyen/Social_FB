import React, { useContext } from "react";
import "./leftBar.scss";
import Friends from "../../assets/image/1.png";
import Groups from "../../assets/image/2.png";
import Market from "../../assets/image/3.png";
import Watch from "../../assets/image/4.png";
import Memories from "../../assets/image/5.png";
import Events from "../../assets/image/6.png";
import Gaming from "../../assets/image/7.png";
import Gallery from "../../assets/image/8.png";
import Videos from "../../assets/image/9.png";
import Messages from "../../assets/image/10.png";
import Tutorials from "../../assets/image/11.png";
import Courses from "../../assets/image/12.png";
import Fund from "../../assets/image/13.png";
import Jibun from "../../assets/image/jibun.jpg";
import { AuthContext } from "../../context/authContext";

function LeftBar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.coverPic} alt="" width={30} height={30} />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
