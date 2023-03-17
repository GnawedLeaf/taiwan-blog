import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import FoodOverview from './pages/FoodPage/FoodOverview';
import BlogsOverview from './pages/Blog/BlogsOverview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='food' element={<FoodOverview />} />
        <Route path='blogs' element={<BlogsOverview />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
