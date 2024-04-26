import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const SellerLeftMenu = () => {
    return (
        <div className="left-menu" style={{ position:'fixed  ',width: '190px', backgroundImage: 'linear-gradient(to top, #09203f 0%, #537895 100%)', margintop:'100px',padding: '20px',height:'100%    ',}}>
          <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
            <li style={{ padding: '10px 0', borderBottom: '1px solid #34495e', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <a href="/sell" style={{ textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center' }}>
                {/* <img src="/images/userLogo.png" alt="Dashboard Logo" style={{ width: '30px', marginRight: '10px', borderRadius: '0%' }} /> */}
                Dashboard
              </a>
            </li>
    
            <li style={{ padding: '10px 0', borderBottom: '1px solid #34495e', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center' }}>
              {/* <img src="/images/leadmanagerlogo.png" alt="Dashboard Logo" style={{ width: '30px', marginRight: '08px' }} /> */}
    
                Lead Manager
              </a>
            </li>

            <li style={{ padding: '10px 0', borderBottom: '1px solid #34495e', marginBottom: '20px' }}>
          <Link to="/company-setup" style={{ textDecoration: 'none', color: '#fff', display: 'block' }}>Company Setup</Link>
        </li>
          
            <li style={{ padding: '10px 0', borderBottom: '1px solid #34495e', marginBottom: '20px' }}>
          <Link to="/buyleads" style={{ textDecoration: 'none', color: '#fff', display: 'block' }}>Buy Leads</Link>
        </li>
            <li style={{ padding: '10px 0', borderBottom: '1px solid #34495e', marginBottom: '20px' }}>
              <a href="/add-products" style={{ textDecoration: 'none', color: '#fff', display: 'block' }}>Products</a>
            </li>
            <li style={{ padding: '10px 0', borderBottom: '1px solid #34495e', marginBottom: '20px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#fff', display: 'block' }}>Photos and Docs</a>
            </li>
            <li style={{ padding: '10px 0', marginBottom: '20px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#fff', display: 'block' }}>Settings</a>
            </li>
          </ul>
        </div>
      );
  
}

export default SellerLeftMenu;