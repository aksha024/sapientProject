import React, { useState } from 'react';
import './FilterPanel.css';

const FilterPanel = ({ getFilter }) => {
  const [isLaunch, setIsLaunch] = useState(false);
  const [isLand, setIsLand] = useState(false);
  const [year, setYear] = useState('');

  const yearArr = [];
  const launchArr = [true, false];
  const landArr = [true, false];
  const init_year = 2006;
  for (let i = init_year; i < 2021; i++) {
    yearArr.push(i);
  }

  const onClick = (isLaunch = true, isLand = true, yr = '') => {
    setYear(yr);
    setIsLaunch(isLaunch);
    setIsLand(isLand);

    // console.log(yr, isLaunch, isLand);
    // console.log('Launch year', isLaunch);
    // console.log('Land year', isLand);

    getFilter(isLaunch, isLand, yr);
  };

  return (
    <div>
      <section>
        {yearArr.map((year, index) => (
          <button
            className="btn-green"
            key={index}
            value={year}
            onClick={(e) => onClick('', '', e.target.value)}
          >
            {year}
          </button>
        ))}
      </section>
      <hr />
      <section>
        Successful Launch:
        {launchArr.map((item, index) => (
          <button
            className="btn-green"
            key={index}
            value={item}
            onClick={(e) => onClick(e.target.value)}
          >
            {item === false ? 'False' : 'True'}
          </button>
        ))}
      </section>
      <hr />
      <section>
        Successful Landed:
        {landArr.map((item, index) => (
          <button
            className="btn-green"
            key={index}
            value={item}
            onClick={(e) => onClick('', e.target.value)}
          >
            {item === false ? 'False' : 'True'}
          </button>
        ))}
      </section>
    </div>
  );
};

export default FilterPanel;
