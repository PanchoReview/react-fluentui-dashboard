import React from 'react'
import 'office-ui-fabric-react/dist/css/fabric.css'
import './App.css'
import Navigation from './Components/Navigation'

function App() {
  return (
    <div classNames="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm-1 ms-xl-1">
          <Navigation />
        </div>
        <div className="ms-Grid-col ms-sm11 ms xl-11">
          <div className="ms-Grid-row">

          </div>
          <div className="ms-Grid-row">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
