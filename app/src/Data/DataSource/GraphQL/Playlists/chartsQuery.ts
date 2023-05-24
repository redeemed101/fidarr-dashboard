import { gql } from "@apollo/client";

export const QUERY_WEEKLY_CHARTS = gql`
query getWeeklyChartPaging($page:Int!,$size:Int!){
    weeklyChartPaging(page:$page, size:$size) {
        count
        charts{
         name
         id
         imagePath
         positions{
          position
          song{
           id
           path
           previewPath
           artworkPath
           lastUpdated
           releaseDate
           artist{
             id
             name
           }
           genres{
             name
             id
           }
           description
           }
         }
      
       }
     }
   }
`
export const QUERY_DAILY_CHARTS = gql`
query getDailyChartPaging($page:Int!,$size:Int!){
    dailyChartPaging(page:$page, size:$size) {
        count
        charts{
         name
         id
         imagePath
         positions{
          position
          song{
           id
           path
           previewPath
           artworkPath
           lastUpdated
           releaseDate
           artist{
             id
             name
           }
           genres{
             name
             id
           }
           description
           }
         }
      
       }
     }
   }
`