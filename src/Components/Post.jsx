import React, { useContext } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { PostList } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  const handleonClickDelete = (e) => {
    e.preventDefault();
    deletePost(post.id);
  };
  return (
    <div>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={handleonClickDelete}
            >
              <MdDeleteSweep />
            </span>
          </h5>
          <p className="card-text">
            {post.body}
            <h6>
              {post.tags.map((tag) => (
                <span key={tag} className="badge text-bg-primary tags">
                  {tag}
                </span>
              ))}
            </h6>
          </p>
          {/* <div className="alert alert-success reactions" role="alert">
            This Post has been reacted by {post.reactions} people.
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Post;
