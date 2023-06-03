import { gql } from "graphql-request";


export const QUERY_MOODS = gql`
query getMoods($page:Int!,$size:Int!){
    moodsPaging(page:$page,size:$size) {
       count
       moods{
        name
        id
        imagePath
        lastUpdated
        dateCreated
      }
    }
  }
`