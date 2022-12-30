import "./posts.scss";

import Post from "../post/Post";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
const Posts = ({ userId }) => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts?userId=" + userId).then((res) => {
      return res.data;
    })
  );

  // console.log("aa", data);
  // const posts = [
  //   {
  //     id: 1,
  //     name: "Kikkun",
  //     userId: 1,
  //     profilePic:
  //       "https://i.pinimg.com/564x/c2/80/e3/c280e346ff236580be61fa3a9475c7c6.jpg",
  //     desc: "watashi ha kikkun to moushimasu",
  //     img: "https://i.pinimg.com/564x/c2/80/e3/c280e346ff236580be61fa3a9475c7c6.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "pacha",
  //     userId: 2,
  //     profilePic:
  //       "https://i.pinimg.com/564x/f2/c3/b9/f2c3b944a082a1ed4b9f5b3e74438084.jpg",
  //     desc: "watashi ha pacha to moushimasu",
  //     img: "https://i.pinimg.com/564x/f2/c3/b9/f2c3b944a082a1ed4b9f5b3e74438084.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "saka",
  //     userId: 3,
  //     profilePic:
  //       "https://i.pinimg.com/564x/32/11/70/3211709a3a43249aee42498af7d3da9f.jpg",
  //     desc: "watashi ha kikkun to moushimasu",
  //     img: "https://i.pinimg.com/564x/32/11/70/3211709a3a43249aee42498af7d3da9f.jpg",
  //   },
  // ];
  return (
    <div className="posts">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;
