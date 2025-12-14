import { createContext, useReducer } from "react";

// const DEFAULT_CONTEXT = {
//   postList: [],
//   addPost: () => {},
//   deletePost: () => {},
// };
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends  , I am going to Mumbai for vacations . Hope  to enjoy a lot . Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation ", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Going to Pass",
    body: "After 4 years of masti and sona firbhi ho gye pass with degree on top.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating ", "Unbeleievable"],
  },
];
export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type=== "ADD_POST"){
    newPostList=[action.payload,...currPostList]
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    // console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id:Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
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

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
