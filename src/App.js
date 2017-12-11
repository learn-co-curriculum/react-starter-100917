import React from 'react';
import Navbar from './Navbar';

const App = props => {
  return (
    <div>
      <Navbar
        color="purple"
        icon="paint brush"
        title={props.title}
        description="not sure what this does ... yet"
      />
      <h1>Some Content</h1>
    </div>
  );
};

export default App;
