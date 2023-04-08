
import './App.css';

import RecoverPasswordPage from './Presentation/Authentication/Pages/RecoverPasswordPage';
import DashboardMainPage from './Presentation/Dashboard/Pages/DashboardMainPage';
import Status403Page from './Presentation/Errors/Pages/Status403Page';
import ArtistsPage from './Presentation/Music/Pages/ArtistsPage';
import TracksPage from './Presentation/Music/Pages/TracksPage';
import AlbumsTable from './Presentation/Music/Sections/AlbumsTable';
import ArtistsTable from './Presentation/Music/Sections/ArtistsTable';
import MusicHeader from './Presentation/Music/Sections/MusicHeader';


const title: string = "Login"

function App() {
  
  return (
      <div className='bg-black'>
         <AlbumsTable/>
       </div>

     
  );
}

export default App;
