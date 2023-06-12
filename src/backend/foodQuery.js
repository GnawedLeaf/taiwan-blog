import React from "react";
import { gql } from 'graphql-request';

export const FOOD_QUERY = gql`
{
  foods {
    chineseFoodTitles {
      text
    }
    coverImage {
      url
      createdAt
    }
    englishFoodTitles {
      text
    }
    foodDescriptions {
      text
    }
    foodId
    foodImages {
      url
    }
    foodLocationLinks
    foodLocations {
      text
    }
    foodPrices
    cardTitle
    foodDate
    menu {
      url
    }
  }
}

  
`