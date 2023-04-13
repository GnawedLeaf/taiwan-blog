import React from "react";
import { gql } from '@apollo/client';

export const BLOG_QUERY = gql`
{
  posts {
    slug
    coverImage {
      url
      createdAt
    }
    postImage {
      height
      width
      url(transformation: {image: {resize: {height: 225, width: 400}}})
    }
    author {
      name
      publishedAt
    }
    title
    date
    chineseLocation {
      text
    }
    postContent {
      text
    }
  }
}

  
  
`