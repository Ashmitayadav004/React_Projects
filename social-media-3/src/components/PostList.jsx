import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
const PostList = () => {
  const { postList , addInitialPost} = useContext(PostListContext);
  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(data =>{
        addInitialPost(data.posts);
      });
  };
  console.log("PostList:", postList);
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostClick={handleGetPostsClick} />
      )}
      {postList.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
};
export default PostList;
