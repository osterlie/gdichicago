import React from 'react'
import {Link} from 'react-router-dom'

function Navigation() {
    return (
        <div id="sidebar">
            <ul>
                <li><Link to="/">The Basics</Link></li>
                <li><Link to="/types">Types of Climbing</Link></li>
                <li><Link to="/safety">Safety</Link></li>
                <li><Link to="/equipment">Equipment</Link></li>
                <li><Link to="/where">Where to Climb</Link></li>
            </ul>
	    </div>
    )
}

export default Navigation
