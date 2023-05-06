import { injectable } from "inversify";
import { CreateSongRequest, CreateSongResponse, SongDataSource, SongsPaginated, SongsPaging } from "./SongDataSource";
import { graphQLSongClient } from "../../GraphQL/Client/client";
import { GetSongPaginatedDocument, GetSongPaginatedQueryResult, GetSongPagingDocument, GetSongPagingQueryResult } from "../../GraphQL/Generated/Songs/graphql";
import { postAPI } from "../../API/axios_instance";

@injectable()
export class SongDataSourceImpl implements SongDataSource{
    async getSongsPaginated(page: number, size: number): Promise<SongsPaginated> {
        const result = await graphQLSongClient.query<GetSongPaginatedQueryResult>({
            query : GetSongPaginatedDocument,
            variables: {
                page: page,
                size: size
            }
        })
        const data = result.data 
        console.log(data) 
        const songsPaginated = data as unknown as SongsPaginated 
        return  songsPaginated;
    }
    async getSongsPaging(page: number, size: number): Promise<SongsPaging> {
        const result = await graphQLSongClient.query<GetSongPagingQueryResult>({
            query : GetSongPagingDocument,
            variables: {
                page: page,
                size: size
            }
        })
        const data = result.data 
        const songsPaginated = data as unknown as SongsPaging 
      
        return  songsPaginated;
    }
    async createSong(request: CreateSongRequest,onUploadProgress: any): Promise<CreateSongResponse> {
        let formData = new FormData();  
        request.artworkFile && formData.append("artworkFile",request.artworkFile);
        formData.append("songFile",request.songFile);
        request.previewFile &&  formData.append("previewFile",request.previewFile);
        formData.append("name",request.name);
        formData.append("description",request.description);
        formData.append("artistId",request.artistId);
        formData.append("releaseDate",JSON.stringify(request.releaseDate))
        request.featuringArtists  && formData.append("featuringArtists",JSON.stringify(request.featuringArtists));
        formData.append("genres",JSON.stringify(request.genres));
        request.albumId  && formData.append("albumId",request.albumId);
        return await postAPI<CreateSongResponse>("AdminSong/create", formData, { "Content-Type": "multipart/form-data"}, onUploadProgress) 
    }
}