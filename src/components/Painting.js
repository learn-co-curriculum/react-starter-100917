import React from 'react';

const Painting = props => {
  return (
    <li>
      <img src={props.image} />
      <h4>
        "{props.title}" by {props.artist.name}
      </h4>
      <p>{props.year}</p>
      <p>
        {props.dimensions.width} in. x {props.dimensions.height} in.
      </p>
    </li>
  );
};

export default Painting;
