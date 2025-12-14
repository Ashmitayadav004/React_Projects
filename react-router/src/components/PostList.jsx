import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postList,fetching } = useContext(PostListContext);
  
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
