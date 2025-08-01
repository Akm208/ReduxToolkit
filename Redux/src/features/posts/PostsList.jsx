import { useSelector } from "react-redux"
import PostAuthor from "./PostAuthor.jsx"
import { selectAllPosts } from "./postsSlice"
import TimeAgo from "./TimeAgo.jsx"
import ReactionButton from "./ReactionButton.jsx"
const PostsList = () => {
    const posts=useSelector(selectAllPosts )
    const orderedPosts=posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
    const renderedPosts=orderedPosts.map(post=>(
        <article key={post.id}>
<h3>{post.title}</h3>
<p>{post.content.substring(0,100)}</p>
<p className="postCredit">
  <PostAuthor userId={post.userId}/>
  <TimeAgo timestamp={post.date}/>
</p>
<ReactionButton post={post}/>
        </article>
    ))
    
   
  return (
    <section>
    <h2>Posts</h2>  
    {renderedPosts}
    </section>
  )
}

export default PostsList
