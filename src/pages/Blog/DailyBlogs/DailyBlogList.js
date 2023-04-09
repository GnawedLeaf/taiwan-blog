import React from "react";
import DailyBlogPost from "./DailyBlogPost";
import { Link } from "react-router-dom";
import { BLOG_QUERY } from "../../../backend/blogQuery";
import { GraphQLClient } from 'graphql-request'
import { useState, useEffect } from "react";

const DailyBlogList = (props) => {
    const graphcms = new GraphQLClient('https://api-ap-northeast-1.hygraph.com/v2/clg7r296t1gd401uigal98mrw/master');
    const [posts, setPosts] = useState([]);
    const [mainPosts, setMainPosts] = useState([]);

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
    return (

        <div>
            <h1>BLOG LIST</h1>
            {posts.map((post, index) => (
                <div>
                    <a key={index} href={`/blogs/daily-blogs/${index}`}>
                        Blog: {index}
                    </a>
                </div>

            ))}
        </div>

    )

}

export default DailyBlogList