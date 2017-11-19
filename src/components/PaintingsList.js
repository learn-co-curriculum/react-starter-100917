import React from 'react';
import Painting from './Painting';

const PaintingsList = props => {
  const paintings = props.paintings.map(painting => (
    <Painting
      key={painting.id}
      image={painting.image}
      title={painting.title}
      artist={painting.artist}
      year={painting.date}
      dimensions={painting.dimensions}
      votes={painting.votes}
    />
  ));

  return (
    <div>
      <h1>Paintings</h1>
      <div className="ui unstackable items">{paintings}</div>
    </div>
  );
};

export default PaintingsList;
