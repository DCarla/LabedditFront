import { useEffect, useState } from "react";
import Coment from "../../components/organism/Coment";
import ComentPrincipal from "../../components/organism/ComentPrincipal";
import Post from "../../components/organism/Post";
import { StyledContainer } from "./style";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import axios from "axios";

export default function HomePrincipal() {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem(TOKEN_NAME);

  const getPosts = async () => {
    try {
      const headers = { headers: { Authorization: token } };
      const allPosts = await axios.get(`${BASE_URL}posts`, headers);
      setPosts(allPosts.data);
    } catch (error) {
      console.log(error);
    }
  };

  const likeOrDislike = async (postId, value) => {
    try {
      const headers = { headers: { Authorization: token } };
      const body = { like: value };
      await axios.put(`${BASE_URL}posts/${postId}/like`, body, headers);
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const createPost = async (content, e) => {
    e.preventDefault();
    try {
      const headers = { headers: { Authorization: token } };
      const body = { content: content };
      await axios.post(`${BASE_URL}posts`, body, headers);
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledContainer>
      <div className="wrappe">
        <ComentPrincipal createPost={createPost} />
        {posts.map((post) => (
          <Post
            text={post.content}
            creator={post.creator.name}
            likes={post.likes}
            dislikes={post.dislikes}
            comments={post.comment}
            likeOrDislike={likeOrDislike}
            postId={post.id}
          />
        ))}
      </div>
    </StyledContainer>
  );
}
