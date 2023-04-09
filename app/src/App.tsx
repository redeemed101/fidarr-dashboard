
import './App.css';
import CreateArtistPage from './Presentation/Music/Pages/CreateArtistPage';
import PlaylistsPage from './Presentation/Music/Pages/PlaylistsPage';
import UploadAlbumPage from './Presentation/Music/Pages/UploadAlbumPage';
import UploadTrackPage from './Presentation/Music/Pages/UploadTrackPage';


const title: string = "Login"

function App() {
  
  return (
      <div className='bg-black'>
         <UploadAlbumPage/>
       </div>

     
  );
}

export default App;
