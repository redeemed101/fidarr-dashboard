import { Album } from "../../../../Domain/Model/Music";

export class AlbumResponse {
    
    public  toAlbumModels() : Album[] {
        return [
            {
                id: "123",
                imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
                name : "Victory",
                artist: "Eben",
                genre : ["Gospel"],
                streams : "12M",
                tracks: 10,
                releaseDate : "March 24, 2023",
                lastUpdated : "March 24, 2023"

            },
            {
                id: "122",
                imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
                name : "Victory",
                artist: "Eben",
                genre : ["Gospel"],
                streams : "12M",
                tracks: 10,
                releaseDate : "March 24, 2023",
                lastUpdated : "March 24, 2023"

            },
            {
                id: "112",
                imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
                name : "Victory",
                artist: "Eben",
                genre : ["Gospel"],
                streams : "12M",
                tracks: 10,
                releaseDate : "March 24, 2023",
                lastUpdated : "March 24, 2023"

            },
            {
                id: "1245",
                imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
                name : "Victory",
                artist: "Eben",
                genre : ["Gospel"],
                streams : "12M",
                tracks: 10,
                releaseDate : "March 24, 2023",
                lastUpdated : "March 24, 2023"

            }

        ];
    };
}