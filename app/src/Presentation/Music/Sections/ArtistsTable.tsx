import EditIcon from "../../../Assets/svgs/EditIcon.svg"
type ArtistCardProps = {
    imgSrc : string,
    name : string,
    genre : string,
}
const ArtistCard = ({imgSrc,name, genre} : ArtistCardProps) => {
    return (
        <div className="w-16 h-auto">
        <div className="flex flex-row items-center gap-2">

            <img className="rounded-md" src={imgSrc}/>
            <div className="flex flex-col">
                <p className="text-white font-bold">{name}</p>
                <p className="text-fidarrgray-500 font-xs">{genre}</p>
            </div>
        </div>
        </div>
    )
}

type ArtistRow = {
    imgSrc : string,
    name : string,
    genre : string,
    streams : string,
    tracks : string,
    albums: string,
    lastUpdated: string
}
const artists : ArtistRow [] = [
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        genre : "Gospel",
        streams : "12M",
        tracks : "120",
        albums : "6",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        genre : "Gospel",
        streams : "12M",
        tracks : "120",
        albums : "6",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        genre : "Gospel",
        streams : "12M",
        tracks : "120",
        albums : "6",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        genre : "Gospel",
        streams : "12M",
        tracks : "120",
        albums : "6",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        genre : "Gospel",
        streams : "12M",
        tracks : "120",
        albums : "6",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        genre : "Gospel",
        streams : "12M",
        tracks : "120",
        albums : "6",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        genre : "Gospel",
        streams : "12M",
        tracks : "120",
        albums : "6",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        genre : "Gospel",
        streams : "12M",
        tracks : "120",
        albums : "6",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        genre : "Gospel",
        streams : "12M",
        tracks : "120",
        albums : "6",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        genre : "Gospel",
        streams : "12M",
        tracks : "120",
        albums : "6",
        lastUpdated : "March 24, 2023"

    }
]
type ArtistTableProps = {
    rows? : ArtistRow[],

}

const ArtistsTable = ({rows = artists}: ArtistTableProps) => {
    return (
        <div className="w-5/6 ml-52">
            <table className="table-auto text-white w-full">
            <thead className="text-left">
                <tr>
                    <th>Names</th>
                    <th>Streams</th>
                    <th>Tracks</th>
                    <th>Albums</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody >
                {
                rows.map( artist => 
                <tr className="text-left">
                <td className="border-t-0 border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
                    <div >
                       <ArtistCard name={artist.name} imgSrc={artist.imgSrc} genre={artist.genre} />
                    </div>
                </td>
                <td ><p>2M</p></td>
                <td ><p>12</p></td>
                <td ><p>1</p></td>
                <td><p>March 24, 2023</p></td>
                <td>
                    <div className="cursor-pointer">
                      <img src={EditIcon} />
                    </div>
                </td>
                </tr>)
               }
               
            </tbody>
            </table>
        </div>
    )
}

export default ArtistsTable