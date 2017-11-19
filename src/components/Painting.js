import React from 'react';

const Painting = props => {
  return (
    <div className="item">
      <div className="ui small image">
        <img src={props.image} />
      </div>
      <div className="middle aligned content">
        <div className="header">
          "{props.title}" by {props.artist.name}
        </div>
        <div className="meta">
          {props.dimensions.width} in. x {props.dimensions.height} in.
        </div>
        <div className="meta">{props.year}</div>
        <div className="description">
          <a>
            <i className="large caret up icon" />
            {props.votes} votes
          </a>
        </div>
      </div>
    </div>
  );
};

export default Painting;
