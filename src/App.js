import React from 'react';
import Toolbar from './components/Toolbar';
import Banner from './components/banner';
import ServiceList from './components/serviceList';



const App = () => {
  return (
    <div>
      <Toolbar/>
      <Banner/>
      <ServiceList/>
    </div>
  );
};

export default App;
