

import './App.css';
import Navi from './layouts/Navi';
import {Container} from "semantic-ui-react";
import Dashboard from './layouts/Dashboard';

function App() {
  return (
    <div className="App">
      
      <Navi></Navi>
      <Container className="main">
      <Dashboard></Dashboard>
      </Container>
    
    </div>
  );
}

export default App;
