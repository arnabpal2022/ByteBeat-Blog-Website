import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Post from "./post";
import axios from 'axios';





const blogs = [
  {
    id: 1,
    date: "13 July 2023",
    source:
      "https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
    title: "Dive to the Deep",
    summary:
      "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.",
  },
  {
    id: 2,
    date: "24 November 2023",
    source:
      "https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500",
    title: "Conquer the World",
    summary:
      "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.",
  },
  {
    id: 3,
    date: "36 June 8541",
    source:
      "https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
    title: "Explore the Beautiful",
    summary:
      "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.",
  },
];

export const Blog = () => {
  const [posts, setPosts] = useState([]);

const getData = async () => {
  const res = await fetch('http://localhost:4000/post',{
    method: "GET",
    headers: {
      "content-Type" : "Application/Json"
    }
  })
  const res2 = await res.json()
  if(res2) {
    console.log(res2)
    setPosts(res2.data)
  }
}


useEffect(() => {
  // fetch('http://localhost:4000/post',{
  //   method: "GET"
  // }).then(response => {
  //   response.json().then(post => {
  //     console.log(post)
  //     setPosts(post);
  //   });
  // });
  getData()
}, []);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {posts.length > 0 &&
          posts.map((blog) => {
            return (
              <Post title={blog.title} summary={blog.summary} cover={blog.cover} _id={blog._id} createdAt={blog.createdAt}/>
            );
          })}
      </div>
    </div>
  );
};
