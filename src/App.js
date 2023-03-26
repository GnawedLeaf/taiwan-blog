import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout';
import HomePage from './pages/HomePage/HomePage2';
import AboutPage from './pages/AboutPage/AboutPage';
import FoodOverview from './pages/FoodPage/FoodOverview';
import BlogsOverview from './pages/Blog/BlogsOverview';
import Week1Blog from './pages/Blog/BlogPosts/Week1/Week1Blog';
import DumpPage from './pages/DumpPage/DumpPage';
import { Suspense } from 'react';

function App() {
  return (
    <>
      <Suspense></Suspense>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<HomePage />} />
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/food' element={<FoodOverview />} />
          <Route path='/blogs' element={<BlogsOverview />} />
          <Route path='/dump' element={<DumpPage />} />
          <Route path='/blogs/week1' element={<Week1Blog />} />
          <Route path='/blogs/week1' element={<Week1Blog />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}


export default App;
