// importazione file
import { Link } from "react-router-dom"
import { useContext } from "react"
import PostContext from "../../context/PostContext"

export default function CardPost(){
    const {posts}= useContext(PostContext)
    return(
        posts.map(post=>(
            <div className="post-container" key={post.id}>
                <h2 className="post-title">{post.title}</h2>
                <span className="link"><Link to={`/posts/${post.id}`}>Dettagli post</Link></span>
            </div>
        ))  
    )
}