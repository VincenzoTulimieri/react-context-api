// importazione file
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

export default function DetailsPost() {
    const { id } = useParams()
    const [post, setPost] = useState()
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate()

    function postsList() {
        setLoader(true)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                setPost(response.data)
                setLoader(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(postsList, [])

    if (loader) {
        return (
            <div>attendi un attimo...</div>
        )
    }

   

    return (
        <div className="post-container">
            <h2 className="post-title">{post.title}</h2>
            <p className="text-post">{post.body}</p>
            <button className="btn" onClick={()=> navigate(-1)}>Torna alla pagina Precedente</button>
        </div>
    )
}