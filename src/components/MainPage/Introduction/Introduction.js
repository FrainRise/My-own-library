import React from 'react'
import {NavLink} from 'react-router-dom'
import './Introduction.scss'

const Introduction = () => {
    return ( 
        <div className="intro-bg">
            <h2 className="intro-title">My own library is best way for storing your unread interesting books</h2>
            <NavLink to="/add-book">
                <button className="btn__get-started">Get Started</button>
            </NavLink>
        </div>
     );
}
 
export default Introduction;