import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";
import {
  selectAllPosts,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from "./postsSlice";

const PostsList = () => {
  const dispatch = useDispatch();
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);
  const posts = useSelector(selectAllPosts);
  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);
  // const orderedPosts=posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
  // const renderedPosts=orderedPosts.map(post=>(

  // ))
  let content;
  if (postsStatus === "Loading") {
    content = <p>"Loading..."</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
  ));
  } else if (postsStatus === "failed") {
    content = <p>{postsError}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
