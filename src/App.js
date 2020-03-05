import React from 'react';
import './App.css';

import HelloWorld from './components/MyNewComponent';
// added this


function App() {
  return (
    <div className="App">
      <HelloWorld /> 
      {/* deleted and added MyNewComponent */}
    </div>
  );
}

export default App;
