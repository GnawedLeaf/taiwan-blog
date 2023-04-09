import React from "react";

const DailyBlogPost = (props) => {
    console.log("daily post level", props.postData)
    const post = props.postData
    return (
        <div>
            Blog post
            {post.title && post.title}
            {post.author && post.author.name}

        </div>
    )
}

export default DailyBlogPost;