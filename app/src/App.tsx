import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './Presentation/Authentication/Pages/login';
import StatCard from './Presentation/Dashboard/Components/StatCard';
import {StatsCardRow, StatCardData} from './Presentation/Dashboard/Sections/StatsCardRow';
import MenuItem from './Presentation/Dashboard/Components/MenuItem';
import MenuColumn from './Presentation/Dashboard/Components/MenuColumn';
import {CreatorRevenueStatBoard, GeoBoard, TrendsBoard} from './Presentation/Dashboard/Components/StatBoards';
import { SearchTextField } from './Presentation/Common/textfields';
import UserCircularAvatar from './Presentation/Authentication/Components/UserCircularAvatar';
import UserProfileRow from './Presentation/Authentication/Components/UserProfileRow';
import NotificationItem from './Presentation/Common/NotificationItem';
import HeaderSection from './Presentation/Dashboard/Sections/HeaderSection';
import StatBoardSection from './Presentation/Dashboard/Sections/StatBoardSection';


const title: string = "Login"

function App() {
  
  return (
    <div className="h-auto bg-black">
      <div style={{height:"inherit"}}  className="pb-4 flex flex-row gap-8">
        <MenuColumn />
        <div className="flex  gap-4 flex-col">
            <HeaderSection />  
            <StatsCardRow /> 
            <StatBoardSection />
            
        </div>   
     </div>
    </div>
  );
}

export default App;
