import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "Kikkun",
      img: "https://i.pinimg.com/564x/d3/8e/92/d38e9288b41b468079281e46f6df9355.jpg",
    },
    {
      id: 3,
      name: "Stunade",
      img: "https://i.pinimg.com/564x/4c/a8/23/4ca823e8bbe2c9c84fc5f940850d445a.jpg",
    },
    {
      id: 4,
      name: "Pacha",
      img: "https://i.pinimg.com/564x/22/1a/f8/221af8d58cdcc91ba0f3d4985b735027.jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
