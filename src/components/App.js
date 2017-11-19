import React from 'react';
import NavBar from './NavBar';
import PaintingsList from './PaintingsList';
import artworks from '../../artworks';

const App = () => {
  return (
    <div>
      <NavBar
        color="green"
        title="Paintr"
        icon="paint brush"
        description="an app we made"
      />
      <PaintingsList paintings={artworks} />
    </div>
  );
};

export default App;
