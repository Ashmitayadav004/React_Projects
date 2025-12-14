import { useContext, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
const PostList = () => {
  const { postList , addInitialPost} = useContext(PostListContext);
const [dataFetched , setDataFetched] = useState(false);

if(!dataFetched){
  fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      addInitialPost(data.posts);
    });
    setDataFetched(true);
  }
 
  console.log("PostList:", postList);
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage />
      )}
      {postList.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
};
export default PostList;
