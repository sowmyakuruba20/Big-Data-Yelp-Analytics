import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';


Amplify.configure(config);

const Header = ({ signOut }) => {
  const handleSignOut = () => {
    signOut();  
  };

  // Return the JSX for the Header component
  return (
    <header className="main-head">
      <nav>
        <h1 id="logo"><b>Yelp</b></h1>
        <button onClick={handleSignOut} className="headerbutton">
          Sign Out
        </button>
      </nav>
    </header>
  );
};


function MyComponent() {
  return (
    <div>
      <iframe
        title="Quicksight Dashboard"
        width="1060"
        height="1450"
        src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/108439130681/dashboards/95c04be2-a48b-40d9-859d-52bb61b18ce1?directory_alias=madhurabhatsoori"
      ></iframe>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function App({ signOut, user }) {
  const [showDashboard, setShowDashboard] = useState(false);

 

  const handleDashboardClick = () => {
    setShowDashboard(true);
  };

  return (
    <Router>
      <>
        <Header signOut={signOut} />
        <div className="content-container">
        <h1><b>Yelp business analysis</b></h1>

        {showDashboard && <Dashboard />}
        <div className="content-container">
        <button className="button" onClick={handleDashboardClick}>General Dashboard</button>
        <button className="button" onClick={handleDashboardClick}>Business specific Dashboard</button>
        </div>
        </div>
      </>
    </Router>
  );
}

export default withAuthenticator(App);
