import { createContext, useReducer ,useState, useEffect} from "react";
// import { PostListContext } from "./PostListProvider";

export const PostListContext = createContext({
  postList: [],
  fetching : false,
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList =action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
export const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);
  
  const addPost = (post) => {
    // console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`);
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    console.log(`delete post called for : ${postId}`);
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
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

  return (
    <PostListContext.Provider
      value={{ postList, addPost,  deletePost,fetching}}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
