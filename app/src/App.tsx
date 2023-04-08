
import './App.css';

import RecoverPasswordPage from './Presentation/Authentication/Pages/RecoverPasswordPage';
import DashboardMainPage from './Presentation/Dashboard/Pages/DashboardMainPage';
import Status403Page from './Presentation/Errors/Pages/Status403Page';
import AlbumsPage from './Presentation/Music/Pages/AlbumsPage';
import ArtistsPage from './Presentation/Music/Pages/ArtistsPage';
import GenresPage from './Presentation/Music/Pages/GenresPage';
import PlaylistsPage from './Presentation/Music/Pages/PlaylistsPage';
import TracksPage from './Presentation/Music/Pages/TracksPage';
import AlbumsTable from './Presentation/Music/Sections/AlbumsTable';
import ArtistsTable from './Presentation/Music/Sections/ArtistsTable';
import MusicHeader from './Presentation/Music/Sections/MusicHeader';


const title: string = "Login"

function App() {
  
  return (
      <div className='bg-black'>
         <PlaylistsPage/>
       </div>

     
  );
}

export default App;
