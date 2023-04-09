import React from "react";
import { gql } from '@apollo/client';

export const BLOG_QUERY = gql`
{
    posts {
      slug
      title
      date
      coverImage {
        url
        createdAt
      }
      postImage {
        height
        width
        url(transformation: {image: {resize: {height: 225, width: 400}}})
      }
      content {
        html
      }
      author {
        name
        publishedAt
      }

    }
  }
  
  
`