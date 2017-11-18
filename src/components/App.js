import React from 'react';
import NavBar from './NavBar';
import PaintingsList from './PaintingsList';

const App = () => {
  return (
    <div>
      <NavBar
        color="green"
        title="Paintr"
        icon="paint brush"
        description="an app we made"
      />
      <PaintingsList />
    </div>
  );
};

export default App;
