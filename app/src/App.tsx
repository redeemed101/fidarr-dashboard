
import './App.css';

import RecoverPasswordPage from './Presentation/Authentication/Pages/RecoverPasswordPage';
import DashboardMainPage from './Presentation/Dashboard/Pages/DashboardMainPage';
import Status403Page from './Presentation/Errors/Pages/Status403Page';
import ArtistsPage from './Presentation/Music/Pages/ArtistsPage';
import ArtistsTable from './Presentation/Music/Sections/ArtistsTable';
import MusicHeader from './Presentation/Music/Sections/MusicHeader';


const title: string = "Login"

function App() {
  
  return (
      <div className='bg-black'>
         <ArtistsPage/>
       </div>

     
  );
}

export default App;
