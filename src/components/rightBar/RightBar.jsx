import { useContext } from "react";
import "./rightBar.scss";
import { AuthContext } from "../../context/authContext";
import Jibun from "../../assets/image/jibun.jpg";

const RightBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={Jibun} alt="" />
              <span>Nyatto</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Tony</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Nyatto</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Jibun} alt="" />
              <p>
                <span>Nyatto</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Jibun} alt="" />
              <p>
                <span>Nyatto</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Jibun} alt="" />
              <p>
                <span>Nyatto</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={Jibun} alt="" />
              <div className="online" />
              <span>Nyatto</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Jibun} alt="" />
              <div className="online" />
              <span>Nyatto</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Jibun} alt="" />
              <div className="online" />
              <span>Nyatto</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Jibun} alt="" />
              <div className="online" />
              <span>Nyatto</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Jibun} alt="" />
              <div className="online" />
              <span>Nyatto</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Jibun} alt="" />
              <div className="online" />
              <span>Nyatto</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Jibun} alt="" />
              <div className="online" />
              <span>Nyatto</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Jibun} alt="" />
              <div className="online" />
              <span>Nyatto</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Jibun} alt="" />
              <div className="online" />
              <span>Nyatto</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Jibun} alt="" />
              <div className="online" />
              <span>Nyatto</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Jibun} alt="" />
              <div className="online" />
              <span>Nyatto</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
