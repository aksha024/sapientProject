import React from 'react';
import CharacterItem from './CharacterItem';
import './CharacterGrid.css';

const CharaacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.flight_number} item={item} />
      ))}
    </section>
  );
};

export default CharaacterGrid;
