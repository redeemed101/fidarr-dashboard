
import './App.css';
import CreateArtistPage from './Presentation/Music/Pages/CreateArtistPage';
import CreateGenrePage from './Presentation/Music/Pages/CreateGenrePage';
import CreatePaylistPage from './Presentation/Music/Pages/CreatePlaylistPage';
import PlaylistsPage from './Presentation/Music/Pages/PlaylistsPage';
import UploadAlbumPage from './Presentation/Music/Pages/UploadAlbumPage';
import UploadTrackPage from './Presentation/Music/Pages/UploadTrackPage';


const title: string = "Login"

function App() {
  
  return (
      <div className='bg-black'>
         <CreatePaylistPage/>
       </div>

     
  );
}

export default App;
