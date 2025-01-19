import { createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
  postlist: [],
  datafetching: false,
  addPost: () => {},
  deletePost: () => {},
});

const PostlistReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return state.filter((item) => item.id !== action.payload);
    case "ADD_POST":
      return [action.payload, ...state];
    case "ADD_Initial_POST":
      return [...action.payload];
    default:
      return state;
  }
};

const PostListProvider = ({ children }) => {
  const [postlist, dispatch] = useReducer(PostlistReducer, []);

  const [datafetching, setDataFetching] = useState(false);

  const addIntitalPost = (posts) => {
    dispatch({
      type: "ADD_Initial_POST",
      payload: posts,
    });
  };

  const deletePost = (postID) => {
    dispatch({ type: "DELETE_POST", payload: postID });
  };

  const addPost = (add) => {
    dispatch({
      type: "ADD_POST",
      payload: add,
    });
  };

  useEffect(() => {
    setDataFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addIntitalPost(data.posts);
        setDataFetching(false);
      });
  }, []);
  return (
    <PostList.Provider
      value={{
        postlist,
        datafetching,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
