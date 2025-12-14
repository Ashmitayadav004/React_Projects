import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListContext);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    console.log("Fetch staretd");

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFetching(false);
        console.log("fetch ended");
      });
      return ()=>{
        console.log("Cleaning up");
        controller.abort();
      }
 }, []);

  console.log("PostList:", postList);
  return (
    <>
    {fetching && <LoadingSpinner/>}
      {!fetching &&postList.length === 0 && <WelcomeMessage />}
      {!fetching &&postList.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
};
export default PostList;
