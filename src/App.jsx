// importazione file
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import PostList from "./pages/PostsList"
import DefaultLayout from "./layouts/DefaultLayout"
import DetailsPost from "./pages/DetailsPost"
import axios from "axios"
import { useEffect, useState } from "react"
import PostContext from "./context/PostContext"




function App() {

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
    <PostContext.Provider value={{posts}}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:id" element={<DetailsPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostContext.Provider>
  )
}

export default App
