
import { BrowserRouter, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import CreateGenrePage from './Presentation/Music/Pages/genres/CreateGenrePage';
import CreatePaylistPage from './Presentation/Music/Pages/playlists/CreatePlaylistPage';
import PlaylistsPage from './Presentation/Music/Pages/playlists/PlaylistsPage';
import UploadTrackPage from './Presentation/Music/Pages/songs/UploadTrackPage';
import DashboardMainPage from './Presentation/Dashboard/Pages/DashboardMainPage';
import LoginPage from './Presentation/Authentication/Pages/login';
import MenuStateProvider from './StateManagement/MenuStateProvider';
import ArtistsPage from './Presentation/Music/Pages/artists/ArtistsPage';
import AlbumsPage from './Presentation/Music/Pages/albums/AlbumsPage';
import GenresPage from './Presentation/Music/Pages/genres/GenresPage';
import LocationsPage from './Presentation/CMS/Pages/LocationsPage';
import ChannelsPage from './Presentation/CMS/Pages/ChannelsPage';
import ContentPage from './Presentation/CMS/Pages/ContentPage';
import withErrorBoundary, { ErrorBoundary } from './HoCs/Errors/WithErrorBoundary';
import LocationMusicHomePage from './Presentation/CMS/Pages/LocationMusicHomePage';
import LocationGenresPage from './Presentation/CMS/Pages/LocationGenresPage';
import ChannelPlaylistPage from './Presentation/CMS/Pages/playlists/ChannelPlaylistPage';
import LocationHomePage from './Presentation/CMS/Pages/LocationHomePage';
import LocationPlaylistPage from './Presentation/CMS/Pages/playlists/LocationPlaylistPage';
import LocationChartPage from './Presentation/CMS/Pages/LocationChartPage';
import LocationMoodsPage from './Presentation/CMS/Pages/LocationMoodsPage';
import LocationSlidersPage from './Presentation/CMS/Pages/LocationSlidersPage';
import ChannelGenrePage from './Presentation/CMS/Pages/ChannelGenrePage';
import ContentTracksPage from './Presentation/CMS/Pages/ContentTracksPage';
import ContentArtistsPage from './Presentation/CMS/Pages/ContentArtistsPage';
import ContentAlbumsPage from './Presentation/CMS/Pages/ContentAlbumsPage';
import Status404Page from './Presentation/Errors/Pages/Status404Page';
import PeopleAccountsPage from './Presentation/People/Pages/PeopleAccountsPage';
import PeopleSubscribersPage from './Presentation/People/Pages/PeopleSubscribersPage';
import FilesPage from './Presentation/Files/Pages/FilesPage';
import ProfilePage from './Presentation/Settings/Pages/ProfilePage';
import TeamPage from './Presentation/Settings/Pages/TeamPage';
import CreateTeamMemberPage from './Presentation/Settings/Pages/CreateTeamMemberPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './StateManagement/redux/store';
import { useEffect } from 'react';
import RecoverEmailPage from './Presentation/Authentication/Pages/RecoverEmailPage';
import EditPlaylistPage from './Presentation/Music/Pages/playlists/EditPlaylistPage';
import CreateArtistPage from './Presentation/Music/Pages/artists/CreateArtistPage';
import { ArtistPage } from './Presentation/Music/Pages/artists/ArtistPage';
import EditArtistPage from './Presentation/Music/Pages/artists/EditArtistPage';
import UploadAlbumPage from './Presentation/Music/Pages/albums/UploadAlbumPage';
import { AlbumPage } from './Presentation/Music/Pages/albums/AlbumPage';
import TracksPage from './Presentation/Music/Pages/songs/TracksPage';
import EditAlbumPage from './Presentation/Music/Pages/albums/EditAlbumPage';
import EditTrackPage from './Presentation/Music/Pages/songs/EditTrackPage';
import { TrackPage } from './Presentation/Music/Pages/songs/TrackPage';
import { setUser } from './StateManagement/redux/userReducer';
import EditGenrePage from './Presentation/Music/Pages/genres/EditGenrePage';
import { MoodsPage } from './Presentation/Music/Pages/moods/MoodsPage';
import { CreateMoodPage } from './Presentation/Music/Pages/moods/CreateMoodPage';
import { EditMoodPage } from './Presentation/Music/Pages/moods/EditMoodPage';



const title: string = "Login"

type AuthRoutes = {
  page : React.ReactNode,
  route : string
}

const dashboardRoutes : AuthRoutes[] = [
    {
      page : <DashboardMainPage />,
      route: "/dashboard"
    },
    {
      page : <ArtistsPage />,
      route: "/music"
    },
    {
      page : <ArtistsPage />,
      route: "/music/artists"
    },
    {
      page : <TracksPage />,
      route: "/music/tracks"
    },
    {
      page : <AlbumsPage />,
      route: "/music/albums"
    },
    {
      page : <GenresPage />,
      route: "/music/genres"
    },
    {
      page : <PlaylistsPage />,
      route: "/music/playlists"
    },
    {
      page : <CreateArtistPage />,
      route: "/music/artists/create"
    },
    {
      page : <EditArtistPage />,
      route: "/music/artists/edit/:id"
    },
    {
      page : <ArtistPage />,
      route: "/music/artists/:id"
    },
    
    {
      page : <UploadTrackPage />,
      route: "/music/tracks/create"
    },
    {
      page : <EditTrackPage />,
      route: "/music/tracks/edit/:id"
    },
    {
      page : <TrackPage />,
      route: "/music/tracks/:id"
    },
    {
      page : <UploadAlbumPage />,
      route: "/music/albums/create"
    },
    {
      page : <AlbumPage />,
      route: "/music/albums/:id"
    },
    {
      page : <EditAlbumPage />,
      route: "/music/albums/edit/:id"
    },
    {
      page : <CreateGenrePage />,
      route: "/music/genres/create"
    },
    {
      page : <EditGenrePage />,
      route: "/music/genres/edit/:id"
    },
    {
      page : <CreatePaylistPage />,
      route: "/music/playlists/create"
    },
    {
      page : <EditPlaylistPage />,
      route: "/music/playlists/edit/:id"
    },

    {
      page : <LocationsPage />,
      route: "/cms"
    },
    {
      page : <LocationsPage />,
      route: "/cms/locations"
    },
    {
      page : <ErrorBoundary><ChannelsPage /></ErrorBoundary>,
      route: "/cms/channels"
    },
    {
      page : <ChannelGenrePage />,
      route: "/cms/channels/genres/:id"
    },
    {
      page : <ChannelPlaylistPage />,
      route: "/cms/channels/playlists/:id"
    },
    {
      page : <ContentPage />,
      route: "/cms/content"
    } ,
    {
      page : <PlaylistsPage />,
      route: "/cms/content/playlists"
    } ,
    {
      page : <ContentTracksPage />,
      route: "/cms/content/tracks/:id"
    } ,
    {
      page : <ContentArtistsPage />,
      route: "/cms/content/artists/:id"
    } ,
    {
      page : <ContentAlbumsPage />,
      route: "/cms/content/albums/:id"
    } ,
    {
      page : <LocationMusicHomePage />,
      route: "/cms/locations/musicHome"
    },
    {
      page : <LocationHomePage />,
      route: "/cms/locations/home"
    },
    {
      page : <LocationGenresPage />,
      route: "/cms/locations/genres"
    },
    {
      page : <LocationPlaylistPage />,
      route: "/cms/locations/playlists"
    },
    {
      page : <LocationChartPage />,
      route: "/cms/locations/charts"
    },
    {
      page : <LocationMoodsPage />,
      route: "/cms/locations/moods"
    },
    {
      page : <LocationSlidersPage />,
      route: "/cms/locations/sliders"
    },
    {
      page : <PeopleAccountsPage />,
      route: "/people"
    },
    {
      page : <PeopleAccountsPage />,
      route: "/people/accounts"
    },
    {
      page : <PeopleSubscribersPage />,
      route: "/people/subscribers"
    },
    {
      page : <FilesPage />,
      route: "/files"
    },
    {
      page : <ProfilePage />,
      route: "/settings"
    },
    {
      page : <ProfilePage />,
      route: "/settings/profile"
    },
    {
      page : <TeamPage />,
      route: "/settings/team"
    },
    {
      page : <CreateTeamMemberPage />,
      route: "/settings/team/create"
    },
    {
      page : <MoodsPage />,
      route: "/music/moods"
    },
    {
      page : <CreateMoodPage />,
      route: "/music/moods/create"
    },
    {
      page : <EditMoodPage />,
      route: "/music/moods/edit/:id"
    }


]

const MenuContextLayout = () => {
  
  return (
    <MenuStateProvider>
      <Outlet />
    </MenuStateProvider>
  );
};



function App() {
  const user = useSelector((state: RootState) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  /*useEffect(() => {
    dispatch(setUser({
      email: "lmsasajnr@gmail.com",
      username: "lmsasajnr",
      name: "Lewis Msasa Jr",
      profilePicPath: "https://picsum.photos/200",
      id: "12345"
  }))
  },[])*/
  useEffect(() => {
    console.log(user)
    if (user == null) {
       navigate("/music/tracks/create")
    } else {
      navigate("/dashboard")
    }
  }, [user]);
  
  return (
    
       <Routes>
          
          <Route element={<MenuContextLayout />}>
            {
              dashboardRoutes.map(r => (<Route  path={r.route} element= {r.page}/>))
            }
          </Route>
          <Route path="/" element={<LoginPage /> } />
          <Route path="/login" element={<LoginPage /> } />
          <Route path="/recover" element={<RecoverEmailPage /> } />
          <Route path="*" element={<Status404Page />} />

      </Routes>
   
   
     
  );
}

export default withErrorBoundary(App);
