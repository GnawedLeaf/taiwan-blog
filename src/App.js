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
import React, { Component } from 'react';

import DumpPage from './pages/DumpPage/DumpPage';
import { Suspense } from 'react';
import DailyBlogPost from './pages/Blog/DailyBlogs/DailyBlogPost';
import DailyBlogList from './pages/Blog/DailyBlogs/DailyBlogList';
import { BLOG_QUERY } from './backend/blogQuery';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import LoadingScreen from './components/LoadingComponent/LoadingIndex';

function App() {
  const handlePostData = (posts) => {
    setMonthsContainer(posts)
  }

  const [janArray, setJanArray] = useState(Array(31).fill());
  const [febArray, setFebArray] = useState(Array(28).fill());
  const [marArray, setMarArray] = useState(Array(31).fill());
  const [aprArray, setAprArray] = useState(Array(30).fill());
  const [mayArray, setMayArray] = useState(Array(31).fill());
  const [junArray, setJunArray] = useState(Array(30).fill());
  const [julArray, setjulArray] = useState(Array(31).fill());
  const [monthsContainer, setMonthsContainer] = useState([janArray, febArray, marArray, aprArray, mayArray, junArray, julArray]);
  const [posts, setPosts] = useState([]);
  const [mainPosts, setMainPosts] = useState([]);
  const [dataToBlog, setDataToBlog] = useState({});
  const [otherStyleMode, setOtherStyleMode] = useState(false)
  const graphcms = new GraphQLClient('https://api-ap-northeast-1.hygraph.com/v2/clg7r296t1gd401uigal98mrw/master');



  useEffect(() => {
    const fetchData = async () => {
      const { posts } = await graphcms.request(BLOG_QUERY);

      //filter out all the slugs with "blog" , "daily" will be used for the calender 
      const mainBlogArray = posts.filter((post) => !post.slug.includes("daily"));
      const dailyArray = posts.filter((post) => post.slug.includes("daily"));

      setPosts(dailyArray);
      setMainPosts(mainBlogArray);
    };
    fetchData();

  }, []);



  useEffect(() => {
    sortBlogsIntoCalender(posts);
  }, [posts])

  //update the month container everytime one of the months updates
  useEffect(() => {
    setMonthsContainer([janArray, febArray, marArray, aprArray, mayArray, junArray, julArray])

  }, [janArray, febArray, marArray, aprArray, mayArray, junArray, julArray, posts])

  useEffect(() => {
    setDataToBlog({ monthsContainer, mainPosts })

  }, [monthsContainer])

  const sortBlogsIntoCalender = (posts) => {
    if (posts) {
      const monthArrays = {
        "01": [...janArray],
        "02": [...febArray],
        "03": [...marArray],
        "04": [...aprArray],
        "05": [...mayArray],
        "06": [...junArray],
        "07": [...julArray],
      };

      for (let i = 0; i < posts.length; i++) {
        const rawDate = posts[i].date;
        const year = rawDate.substring(0, 4);
        const month = rawDate.substring(5, 7);
        const day = rawDate.substring(8, 10);
        const dateObject = { year, month, day };

        monthArrays[dateObject.month][dateObject.day - 1] = posts[i];
      }

      setJanArray(monthArrays["01"]);
      setFebArray(monthArrays["02"]);
      setMarArray(monthArrays["03"]);
      setAprArray(monthArrays["04"]);
      setMayArray(monthArrays["05"]);
      setJunArray(monthArrays["06"]);
      setjulArray(monthArrays["07"]);
    }
  };

  const handleChangeStyleMode = (newMode) => {
    setOtherStyleMode(newMode);
    console.log("app level otherStyleMode", otherStyleMode)
  }
  return (
    <>

      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path='/' element={<HomePage onChangeMode={handleChangeStyleMode} styleMode={otherStyleMode} />} />
            <Route path='/*' element={<ErrorPage />} />
            <Route index element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/food' element={<FoodOverview />} />
            <Route path='/blogs' element={<BlogsOverview dataToBlog={dataToBlog} />} />
            <Route path='/dump' element={<DumpPage />} />
            <Route path='/blogs/daily/:date' element={<DailyBlogPost />} />
            {/* {monthsContainer.map((month, monthIndex) => (
            month.map((day, dayIndex) => (
              // format for link will be daily/DD-MM-2023

              < Route path={`/blogs/daily/${dayIndex + 1}-${monthIndex + 1}-2023`} element={<DailyBlogPost postData={day} />} />
            ))
          ))} */}
            {/* {posts.map((post, index) => (
            <Route path={`/blogs/daily/${index}`} element={<DailyBlogPost postData={post} />} />
          ))} */}
            {mainPosts.map((post, index) => (
              <Route path={`/blogs/main/${index}`} element={<DailyBlogPost postData={post} />} />
            ))}
            <Route path='/blogs/daily' element={<DailyBlogList />} />

          </Routes>
        </Suspense>
      </BrowserRouter >
    </>

  )
}


export default App;
