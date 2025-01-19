import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import CreatePost from "../Components/CreatePost";
import Post from "../Components/Post";
import PostList from "../Components/PostList";
import PostListProvider from "../store/post-list-store";
const App = () => {
  const [selectedtab, setSelectedtab] = useState("Home");

  const onHomeClick = () => {
    setSelectedtab("Home");
  };
  const onCreatePostClick = () => {
    setSelectedtab("Create Post");
  };
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedtab={selectedtab}
          onHomeClick={onHomeClick}
          onCreatePostClick={onCreatePostClick}
        ></Sidebar>
        <div className="contain">
          <Navbar></Navbar>

          {/* {selectedtab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )} */}

          <Outlet />

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
};

export default App;
