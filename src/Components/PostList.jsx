import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import WelcomeMsg from "./WelcomeMsg";
import { PostList as PostListData } from "../store/post-list-store";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postlist, datafetching } = useContext(PostListData);

  return (
    <>
      {datafetching && <LoadingSpinner />}
      {!datafetching && postlist.length === 0 && <WelcomeMsg />}
      {!datafetching &&
        postlist.map((post, index) => <Post key={index} post={post}></Post>)}
    </>
  );
};

export default PostList;
