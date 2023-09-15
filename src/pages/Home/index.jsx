//Pagina comentarios

import { useEffect, useState } from "react";
import Coment from "../../components/organism/Coment";
import Post from "../../components/organism/Post";
import { StyledContainer } from "./style";
import { useParams } from "react-router-dom";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import axios from "axios";

export default function Home() {
  const [comments, setComments] = useState([]);
  const token = localStorage.getItem(TOKEN_NAME);
  const [post, setPost] = useState({});
  const params = useParams();
  const [loading, setLoading] = useState(true);

  const getComments = async () => {
    try {
      const headers = { headers: { Authorization: token } };
      const response = await axios.get(
        `${BASE_URL}comments/${params.id}`,
        headers
      );

      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const likeOrDislikePost = async (postId, value) => {
    try {
      const headers = { headers: { Authorization: token } };
      const body = { like: value };
      await axios.put(`${BASE_URL}posts/${postId}/like`, body, headers);
      getPost();
    } catch (error) {
      console.log(error);
    }
  };
  const likeOrDislikeComment = async (commentId, value) => {
    try {
      const headers = { headers: { Authorization: token } };
      const body = { like: value };
      await axios.put(
        `${BASE_URL}comments/${params.id}/${commentId}/like`,
        body,
        headers
      );
      getComments();
    } catch (error) {
      console.log(error);
    }
  };

  const getPost = async () => {
    try {
      const headers = { headers: { Authorization: token } };
      const response = await axios.get(`${BASE_URL}posts`, headers);
      const postFiltered = response.data.filter((post) => post.id == params.id);
      setPost(postFiltered[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const createComment = async (content, e) => {
    e.preventDefault();
    try {
      const headers = { headers: { Authorization: token } };
      const body = { content: content };
      await axios.post(`${BASE_URL}comments/${params.id}`, body, headers);
      getComments();
      getPost();
    } catch (error) {}
  };

  useEffect(() => {
    getPost();
    getComments();
  }, []);

  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <StyledContainer>
      <div className="wrapper">
        <Post
          text={post.content}
          creator={post.creator.name}
          likes={post.likes}
          dislikes={post.dislikes}
          comments={post.comment}
          postId={post.id}
          likeOrDislike={likeOrDislikePost}
        />
        <Coment onSubmit={createComment} />
        <div className="PostContainer">
          {comments.map(
            (comment) => (
              console.log({ comment }),
              (
                <Post
                  text={comment.content}
                  creator={comment.creator.name}
                  likes={comment.likes}
                  dislikes={comment.dislikes}
                  postId={comment.id}
                  likeOrDislike={likeOrDislikeComment}
                />
              )
            )
          )}
        </div>
      </div>
    </StyledContainer>
  );
}
