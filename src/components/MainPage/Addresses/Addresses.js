import React from 'react';
import './Addresses.scss'
import map from '../../../assets/images/main-page/map.png'

const Addresses = () => {
    return (
        <div className="addresses-section">
            <div className="addresses_map">
                <img src={map} className="map" alt="map" />
            </div>
            <div className="addresses-wrapper">
                <div className="custom-column">
                    <h2 className="address-title">Address</h2>
                    <p className="address-text">UA, Slavutych</p>
                    <p className="address-text">Erevanskiy 2-XX</p>
                </div>
                <div className="custom-column">
                    <h2 className="address-title">Contacts</h2>
                    <p className="address-text">Email: frainrise@gmail.com</p>
                    <p className="address-text">Phone: +38 066 840 85 96</p>
                </div>
            </div>
        </div>
    );
}
 
export default Addresses;