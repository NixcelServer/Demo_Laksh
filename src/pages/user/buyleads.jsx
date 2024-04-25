import { useNavigate } from "react-router-dom";
import { getKeywords } from "../../redux/Admin/Keywords/keyword.action";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";



import react from 'react';




const BuyLeads = (buyLead) => {
    const [showPopup, setShowPopup] = useState(false);
  
    const togglePopup = () => {
        setShowPopup(!showPopup);
      };
      
    return (
      
      <div>
        <input
    type="text"
    placeholder="Search Buy Leads......"
    style={{
      width: '500px',
      padding: '10px',
      marginBottom: '20px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
    }}
  />
       <div className="card" style={{ position: 'relative', transform: 'translateY(-2px)', width: '1300px', marginTop: '20px', marginRight: '100px', marginLeft: '190px', backgroundColor: '#f0f0f0', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
    {/* Left side: Product details */}
    <div className="container" style={{ display: 'flex' }}>
      <div className="left-side" style={{ flex: 1, textAlign: 'left', height: '300px', width: '515px', marginRight: '10px', marginLeft: '10px' }}>
        <h5 className="card-title" style={{ color: '#333', fontSize: '24px', marginBottom: '20px', marginTop: '20px',fontFamily:'sedan' }}>{buyLead.productName} Boat Headphones</h5>
        <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Quantity: {buyLead.quantity} 2 piece</p>
        <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Category: {buyLead.category} Electronics</p>
        <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Subcategory: {buyLead.subcategory} Accessaries</p>
        <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Unit of Measurement: {buyLead.unit}--</p>
        <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Price: {buyLead.price}$68 </p>
        <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Description: {buyLead.description} Boat Rockers 400</p>
      </div>
      <div className="right-side" style={{ flex: 1, textAlign: 'left', height: '300px', width: '515px', marginLeft: '-200px' }}>
        <h5 className="card-title" style={{ color: '#333', fontSize: '24px', marginBottom: '20px', marginTop: '20px' ,fontFamily:'sedan' }}>Buyer Details</h5>
        <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Products of Interest: {buyLead.productsOfInterest} headphones, mobile, watch, airpods, tabs</p>
        <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Requirements: {buyLead.requirements}20</p>
        <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Calls: {buyLead.calls}8</p>
        <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Member: {buyLead.member ? 'Yes' : 'No'} member since 2 years</p>
        <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Available: {buyLead.available ? 'Yes' : 'No'} Email/Mobile</p>

        
        <button className="btn btn-primary" onClick={togglePopup}>View Buyer Details</button>
      

      </div>
      
    </div>
  </div>

        <div className="card" style={{ position:'relative',transform: 'translateY(-2px)',width:'1300px', margintop:'10px',marginRight: '100px', marginLeft: '190px',backgroundColor: '#f0f0f0', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
     
    
    
        {/* Left side: Product details */}
        <div className="container" style={{ display: 'flex', }}>
  <div className="left-side" style={{ flex: 1, textAlign: 'left', height: '300px', width: '515px',margintop:'50px', marginRight: '10px',marginleft:'10px' }}>
      <h5 className="card-title" style={{ margintop:'200px', color: '#333', fontSize: '24px', marginBottom: '20px', marginTop: '20px' , fontFamily:'sedan' }}>{buyLead.productName} HP Laptop</h5>
 <div style={{textAlign:'left'}}>
 <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Quantity: {buyLead.quantity} 2 piece</p>
  <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Category: {buyLead.category} Electronics</p>
  <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Subcategory: {buyLead.subcategory} Accessaries</p>
  <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Unit of Measurement: {buyLead.unit}--</p>
  <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Price: {buyLead.price}$68 </p>
  <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Description: {buyLead.description} Boat Rockers 400</p>
   
 </div>
  </div>
  <div className="right-side" style={{ flex: 1, textAlign: 'left', height: '300px', width: '515px', marginLeft: '-200px' }}>
    <h5 className="card-title" style={{ color: '#333', fontSize: '24px', marginBottom: '20px', marginTop: '20px',fontFamily:'sedan'  }}>Buyer Details</h5>
    <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Products of Interest: {buyLead.productsOfInterest} headphones, mobile, watch, airpods, tabs</p>
    <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Requirements: {buyLead.requirements}20</p>
    <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Calls: {buyLead.calls}8</p>
    <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Member: {buyLead.member ? 'Yes' : 'No'} member since 2 years</p>
    <p style={{ color: '#666', fontSize: '16px', marginBottom: '10px' }}>Available: {buyLead.available ? 'Yes' : 'No'} Email/Mobile</p>
    <button className="btn btn-primary" onClick={togglePopup}>View Buyer Details</button>
  </div>
</div>

        
        </div>            
        
      </div>
     



    
      
    );
  };

  export default BuyLeads; 
