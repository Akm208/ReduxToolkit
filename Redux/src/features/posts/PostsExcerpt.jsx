// import TimeAgo from "./TimeAgo.jsx"
// import ReactionButton from "./ReactionButton.jsx"
// import PostAuthor from "./PostAuthor.jsx"
// const PostsExcerpt = ({post}) => {
//     return (
//         <article>
//         <h3>{post.title}</h3>
//         <p>{post.content.substring(0, 100)}</p>
//         <p className="postCredit">
//             <PostAuthor userId={post.userId} />
//             <TimeAgo timestamp={post.date} />
//         </p>
//         <ReactionButton post={post} />
//         </article>
//     )
 
// }

// export default PostsExcerpt


import TimeAgo from "./TimeAgo.jsx";
import ReactionButton from "./ReactionButton.jsx";
import PostAuthor from "./PostAuthor.jsx";

const PostsExcerpt = ({ post }) => {
  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <article>
      <h3>{post.title }</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </article>
  );
};

export default PostsExcerpt;
