import React from 'react';

const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.links.mission_patch_small} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.mission_name}</h1>
          <ul>
            <li>
              <strong>Mission Id:</strong> {item.flight_number}
            </li>
            <li>
              <strong>Launch Year:</strong> {item.launch_year}
            </li>
            <li>
              <strong>Successful Launch:</strong> {item.launch_success}
            </li>
            <li>
              <strong>Successful Landing:</strong>
              {item.rocket.first_stage.cores[0].land_success}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
