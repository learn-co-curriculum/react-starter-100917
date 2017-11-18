import React from 'react';
import Painting from './Painting';
import artworks from '../../artworks';

const PaintingsList = () => {
  const paintings = artworks.map(painting => (
    <Painting
      key={painting.id}
      image={painting.image}
      title={painting.title}
      artist={painting.artist}
      year={painting.date}
      dimensions={painting.dimensions}
    />
  ));

  return (
    <div>
      <h1>Paintings</h1>
      <ul>{paintings}</ul>
    </div>
  );
};

export default PaintingsList;
