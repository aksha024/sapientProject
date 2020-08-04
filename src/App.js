import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharaacterGrid';
import FilterPanel from './components/characters/FilterPanel';
import axios from 'axios';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLaunchSuccess, setIsLaunchSuccess] = useState('');
  const [isLandSuccess, setIsLandSuccess] = useState('');
  const [launchYear, setLaunchYear] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${isLaunchSuccess}&land_success=${isLandSuccess}&launch_year=${launchYear}`
      );

      setItems(result.data);
      setIsLoading(false);
      // console.log(result.data);
      // console.log(isLaunchSuccess, isLandSuccess, launchYear);
    };

    fetchItems();
  }, [isLaunchSuccess, isLandSuccess, launchYear]);

  return (
    <div className="container">
      <Header />
      <div>
        <FilterPanel
          getFilter={(isLaunch, isLand, yr) => {
            setIsLaunchSuccess(isLaunch);
            setIsLandSuccess(isLand);
            setLaunchYear(yr);
          }}
        />
        <CharacterGrid items={items} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default App;
