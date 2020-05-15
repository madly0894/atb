import React from 'react';
import {Route} from "react-router-dom";
import Payment from "./Payment/Payment";

function App() {

  return (
    <Route exact path="/" component={Payment}/>
  );

}

export default App;
