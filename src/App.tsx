import React from 'react';
import 'antd/dist/antd.css';
import RoutesComponent from './routes';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RoutesComponent />
    </div>
  );
}

export default App;
