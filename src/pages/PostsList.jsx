// importazione file

import { useEffect, useState } from "react"
import axios from "axios"
import CardPost from "../components/Main/cardPost"


export default function PostList() {
    const [posts, setPosts] = useState([])

    function postsList() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(postsList, [])

    return (
        <CardPost posts={posts} />
    )
}