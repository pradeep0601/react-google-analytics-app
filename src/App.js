import React, {useEffect} from 'react';
import GA from 'react-ga';

import './App.css';
import Buy from './Buy';

function App (props) {
  useEffect(() => {
    GA.initialize('UA-184174345-2');
    // to report page views
    GA.pageview('Home page');
  });

  return (
    <div className="App">
      <header className="App-header">
        <h2>Google Analytics React Sample App</h2>
        <Buy></Buy>
      </header>
    </div>
  );
}

export default App;
