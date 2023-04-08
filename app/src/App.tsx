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
import DashboardMainPage from './Presentation/Dashboard/Pages/DashboardMainPage';


const title: string = "Login"

function App() {
  
  return (
     <>
       <DashboardMainPage />
     </>
  );
}

export default App;
