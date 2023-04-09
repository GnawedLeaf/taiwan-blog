import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { GraphQLClient } from 'graphql-request'
import { gql } from '@apollo/client';
import Layout from './layout';
import HomePage from './pages/HomePage/HomePage2';
import AboutPage from './pages/AboutPage/AboutPage';
import FoodOverview from './pages/FoodPage/FoodOverview';
import BlogsOverview from './pages/Blog/BlogsOverview';

import DumpPage from './pages/DumpPage/DumpPage';
import { Suspense } from 'react';
import DailyBlogPost from './pages/Blog/DailyBlogs/DailyBlogPost';
import DailyBlogList from './pages/Blog/DailyBlogs/DailyBlogList';
import { BLOG_QUERY } from './backend/blogQuery';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {

  const [posts, setPosts] = useState([]);
  const [mainPosts, setMainPosts] = useState([]);

  const [monthsContainer, setMonthsContainer] = useState([])
  const handlePostData = (posts) => {
    setMonthsContainer(posts)
  }
  return (
    <>
      <Suspense></Suspense>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/*' element={<ErrorPage />} />
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/food' element={<FoodOverview />} />
          <Route path='/blogs' element={<BlogsOverview onData={handlePostData} />} />
          <Route path='/dump' element={<DumpPage />} />
          {monthsContainer.map((month, monthIndex) => (
            month.map((day, dayIndex) => (
              // format for link will be daily/DD-MM-2023

              < Route path={`/blogs/daily/${dayIndex + 1}-${monthIndex + 1}-2023`} element={<DailyBlogPost postData={day} />} />
            ))
          ))}
          {/* {posts.map((post, index) => (
            <Route path={`/blogs/daily/${index}`} element={<DailyBlogPost postData={post} />} />
          ))} */}
          {mainPosts.map((post, index) => (
            <Route path={`/blogs/main/${index}`} element={<DailyBlogPost postData={post} />} />
          ))}
          <Route path='/blogs/daily' element={<DailyBlogList />} />

        </Routes>
      </BrowserRouter>
    </>

  )
}


export default App;
