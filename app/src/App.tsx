import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './Presentation/Authentication/Pages/login';
import StatCard from './Presentation/Dashboard/Components/StatCard';
import {StatsCardRow, StatCardData} from './Presentation/Dashboard/Components/StatsCardRow';


const title: string = "Login"
let options : StatCardData[] = [
        {
          title : "Subscribers",
          number : "2M",
          options : ["Total", "Total2"],
          increase : "1.5%",
          upIncrease : true,
          selectedItem : "Total"
        },
        {
          title : "Artists",
          number : "500K",
          options : ["Total", "Total2"],
          increase : "-1.6%",
          upIncrease : false,
          selectedItem : "Total"
      },
      {
        title : "Subscribers",
        number : "500K",
        options : ["Total", "Total2"],
        increase : "10.6%",
        upIncrease : true,
        selectedItem : "Total"
      },
      {
        title : "Tracks",
        number : "500K",
        options : ["Total", "Total2"],
        increase : "1.6%",
        upIncrease : true,
        selectedItem : "Total"
      }
]
function App() {
  
  return (
    <div className="items-center  flex flex-col mx-auto bg-black h-screen justify-center">
      <StatsCardRow options={options}></StatsCardRow>
    </div>
  );
}

export default App;
