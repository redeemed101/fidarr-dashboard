import { injectable } from "inversify";
import { MoodRepository } from "../../../Domain/Repository/Music/MoodRepository";
import { MoodPage } from "../../../Domain/Model/Music/Mood";
import { CreateMoodRequest, EditMoodRequest } from "../../DataSource/Music/Playlists/MoodDataSource";
import moment from "moment";
import { Genre } from "../../../Domain/Model/Music/Genre";
import { Playlist } from "../../../Domain/Model/Music/Playlist";

@injectable()
export class MoodRepositoryMock implements MoodRepository{
    getMoods(page: number, size: number): Promise<MoodPage> {
        const moods = [...Array(10)].map((m,i) => {
             return {
                id: `${i}`,
                imgPath : "https://picsum.photos/200",
                name : `mood ${i}`,
                playlists: [...Array(10)].map((p,i) => {
                    return {
                        id: `${i}`,
                        imgPath : "https://picsum.photos/200",
                        isFidarr : i % 2 == 0 ? true : false,
                        likes: 10,
                        name : `playlist ${i}`,
                        streams : 1000,
                        tracks : 5,
                        songs:[...Array(6)].map((a,i) =>{
                            return  {
                              id: `track-${i}`,                    
                              imgSrc : "https://picsum.photos/200",
                              name : `song ${i}`,
                              artist:{
                                id: `artist ${i}`,     
                                website: "www.google.com",
                                bio: "Nice Artist",               
                                imgSrc : "https://picsum.photos/200",
                                name : `artist ${i}`,
                                genres : [...Array(5)].map(g => {
                                    return  {
                                        imgSrc : "",
                                        name : "Pop",
                                        albums : 0,
                                        tracks : 0,
                                        artists: 0,
                                        lastUpdated: "2019-09-09",
                                        id: "1"
                                    }
                                }) as Genre[],
                                streams : 100000,
                                tracks : 20,
                                albums: 2,
                                lastUpdated: moment(Date.parse("2023-10-31")).format('MMMM DD, YYYY'),
                             },
                              genres : [...Array(5)].map(g => {
                                return  {
                                    imgSrc : "",
                                    name : "Pop",
                                    albums : 0,
                                    tracks : 0,
                                    artists: 0,
                                    lastUpdated: "2019-09-09",
                                    id: "1"
                                }
                            }) as Genre[],
                              streams : "10M",
                              duration : "",
                              lastUpdated: "2023-10-31", 
                              releaseDate: "2023-10-31",
                             
                          }
                      })
                    } as Playlist
                }),
                dateCreated: "2023-10-31",
                lastUpdated: "2023-10-31"
             }
        })
        const res =  {
            count: 20,
            data: moods
        }
        return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
    }
    createMood(request: CreateMoodRequest): Promise<boolean> {
        return new Promise(resolve => setTimeout(() => resolve(true), 5000)) ;
    }
    editMood(id: string, request: EditMoodRequest): Promise<boolean> {
        return new Promise(resolve => setTimeout(() => resolve(true), 5000)) ;
    }
    deleteMood(id: string): Promise<boolean> {
        return new Promise(resolve => setTimeout(() => resolve(true), 5000)) ;
    }
}