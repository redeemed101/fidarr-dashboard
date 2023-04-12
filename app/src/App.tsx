
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateArtistPage from './Presentation/Music/Pages/CreateArtistPage';
import CreateGenrePage from './Presentation/Music/Pages/CreateGenrePage';
import CreatePaylistPage from './Presentation/Music/Pages/CreatePlaylistPage';
import PlaylistsPage from './Presentation/Music/Pages/PlaylistsPage';
import UploadAlbumPage from './Presentation/Music/Pages/UploadAlbumPage';
import UploadTrackPage from './Presentation/Music/Pages/UploadTrackPage';
import DashboardMainPage from './Presentation/Dashboard/Pages/DashboardMainPage';
import LoginPage from './Presentation/Authentication/Pages/login';
import MenuStateProvider from './StateManagement/MenuStateProvider';
import ArtistsPage from './Presentation/Music/Pages/ArtistsPage';
import AlbumsPage from './Presentation/Music/Pages/AlbumsPage';
import GenresPage from './Presentation/Music/Pages/GenresPage';
import TracksPage from './Presentation/Music/Pages/TracksPage';
import LocationsPage from './Presentation/CMS/Pages/LocationsPage';
import ChannelsPage from './Presentation/CMS/Pages/ChannelsPage';
import ContentPage from './Presentation/CMS/Pages/ContentPage';
import withErrorBoundary, { ErrorBoundary } from './HoCs/Errors/WithErrorBoundary';
import LocationPage from './Presentation/CMS/Pages/LocationPage';
import LocationGenresPage from './Presentation/CMS/Pages/LocationGenresPage';
import ChannelPlaylistsPage from './Presentation/CMS/Pages/ChannelPlaylistsPage';



const title: string = "Login"

type AuthRoutes = {
  page : React.ReactNode,
  route : string
}

const dashboardRoutes : AuthRoutes[] = [
    {
      page : <DashboardMainPage />,
      route: "/"
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
      page : <UploadTrackPage />,
      route: "/music/tracks/create"
    },
    {
      page : <UploadAlbumPage />,
      route: "/music/albums/create"
    },
    {
      page : <CreateGenrePage />,
      route: "/music/genres/create"
    },
    {
      page : <CreatePaylistPage />,
      route: "/music/playlists/create"
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
      page : <ContentPage />,
      route: "/cms/content"
    } ,
    {
      page : <ChannelPlaylistsPage />,
      route: "/cms/locations/:id"
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
  
  return (
    
       <Routes>
          <Route path="/login" element={<LoginPage /> } />
          <Route element={<MenuContextLayout />}>
            {
              dashboardRoutes.map(r => (<Route  path={r.route} element= {r.page}/>))
            }
          </Route>
      </Routes>
   
   
     
  );
}

export default withErrorBoundary(App);
