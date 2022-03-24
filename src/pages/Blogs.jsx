import React from 'react'
import Posts from '../components/Posts'
import SideBar from "../components/SideBar"
const Blogs = () => {
  return (
    <div style ={{display:"flex"}}>
      <Posts/>
      <SideBar/>
    </div>
  )
}

export default Blogs