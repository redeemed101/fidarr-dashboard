import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './Presentation/Authentication/Pages/login';
import StatCard from './Presentation/Dashboard/Components/StatCard';
import {StatsCardRow, StatCardData} from './Presentation/Dashboard/Components/StatsCardRow';
import MenuItem from './Presentation/Dashboard/Components/MenuItem';
import MenuColumn from './Presentation/Dashboard/Components/MenuColumn';
import {CreatorRevenueStatBoard, GeoBoard, TrendsBoard} from './Presentation/Dashboard/Components/StatBoards';
import { SearchTextField } from './Presentation/Common/textfields';


const title: string = "Login"

function App() {
  
  return (
    <div className="h-screen  bg-black">
        <SearchTextField/>      
    </div>
  );
}

export default App;
