import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIDelement = useRef();
  const titleIDelement = useRef();
  const bodyIDelement = useRef();
  const reactionIDelement = useRef();
  const tagsIDelement = useRef();

  const handleonSubmit = (e) => {
    e.preventDefault();
    const userID = userIDelement.current.value;
    const title = titleIDelement.current.value;
    const body = bodyIDelement.current.value;
    const reaction = reactionIDelement.current.value;
    const tags = tagsIDelement.current.value.split(" ");

    userIDelement.current.value = "";
    titleIDelement.current.value = "";
    bodyIDelement.current.value = "";
    reactionIDelement.current.value = "";
    tagsIDelement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        body: body,
        // reactions: reactions,
        userId: userID,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((add) => {
        addPost(add);
      });
  };
  return (
    <div>
      <form className="create-post" onSubmit={handleonSubmit}>
        <div className="mb-3 ">
          <label htmlfor="userid" className="form-label">
            Enter Your userID
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            ref={userIDelement}
          />
        </div>
        <div className="mb-3 ">
          <label htmlfor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={titleIDelement}
          />
        </div>

        <div className="mb-3 ">
          <label htmlfor="content" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            rows="4"
            className="form-control"
            id="content"
            ref={bodyIDelement}
          />
        </div>

        <div className="mb-3 ">
          <label htmlfor="reaction" className="form-label">
            Number of reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reaction"
            ref={reactionIDelement}
          />
        </div>
        <div className="mb-3 ">
          <label htmlfor="tags" className="form-label">
            Enter your Hastags here
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            ref={tagsIDelement}
          />
        </div>
        <button type="submit" className="btn btn-primary ">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
