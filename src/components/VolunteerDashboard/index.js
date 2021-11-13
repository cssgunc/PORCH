import React from 'react';

import '../VolunteerDashboard/index.css'

const App = () => {
    return (
        <div className="volunteer-dashboard-container">
            <div>NAV BAR</div>
            <div className="volunteer-dashboard-main-content">
                <span className="volunteer-dashbaord-title">Dashboard</span>
                <div className="volunteer-dashboard-main-tile">
                    <p className="volunteer-dashboard-name">John Doe</p>
                    <p>Volunteer</p>
                    <p>Community: Chapel Hill-Carborro</p>
                    <p>Neighborhood</p>
                </div>
            </div>
        </div>
    );
}

export default App;