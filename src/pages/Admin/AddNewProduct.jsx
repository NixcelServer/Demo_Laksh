import React, { useState } from 'react';

const AddProductPage = () => {
  const [photoPreview, setPhotoPreview] = useState(null);
  const [productDetails, setProductDetails] = useState({
    productName: '',
    description: '',
    category: '',
    subCategory: '',
    keywords: '',
    price: '',
    quantity: '',
    unitOfMeasurement: '',
    photo: null,
  });

  const handleSaveChanges = () => {
    // Logic to save changes
    console.log('Changes saved!');
  };

  const handleFileChange = (event, setPreview) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSaveAndContinue = () => {
    // Logic to save changes and continue
    console.log('Changes saved and continue to next step!');
  };

  const ButtonToShowAddProductPage = () => {
    const [showAddProductPage, setShowAddProductPage] = useState(false);
  
    const handleButtonClick = () => {
      setShowAddProductPage(true);
    };

  return (


    <div>
      <button onClick={handleButtonClick}>Show Add Product Page</button>
      {showAddProductPage && <AddProductPage />}
   
    
    <div className="container" style={{ position:'relative',transform: 'translateY(-2px)',width:'800px', margintop:'10px',marginRight: '100px', marginLeft: '190px'}}>
      <h2 className="text-center text-black bg-primary p-3 mb-5 rounded-pill" style={{position:'relative', margin: '10px 0',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.15)', transform: 'translateY(-2px)',width:'1300px',marginRight: '-100px', marginLeft: '-16px',backgroundImage: 'linear-gradient(to top, #09203f 0%, #537895 100%)' }}><h2 style={{marginleft:'-800px'}}>Add New Product</h2></h2>
      <form className="add-product-form" style={{ display: 'flex', justifyContent: 'space-evenly', }}>
        <div className="basic-details" style={{position:'relative', maxWidth: '1000px', marginTop: '0px', marginLeft: '50px', display: 'flex', flexDirection: 'row', height:'400px' }}>
          <div style={{ marginRight: '20px',position:'relative'}}>
            <h3>Basic Details</h3>
            <div className="form-group" style={{color: 'black',backgroundImage: 'white',border: '1px solid black',position:'relative' }}>
              <label htmlFor="product-name">Product Name:</label>
              <input type="text" id="product-name" name="product-name" />
            </div>

            <div className="form-group" style={{ color: 'black',backgroundImage: 'white',border: '1px solid black' }} >
              <label htmlFor="description">Product Description: </label>
              <textarea id="description" name="description" rows="1" />
            </div>

            <div className="form-group" style={{ color: 'black',backgroundImage: 'white',border: '1px solid black' }}>
              <label htmlFor="category">Category:</label>
              <input type="text" id="category" name="category" />
            </div>

            <div className="form-group" style={{ color: 'black',backgroundImage: 'white',border: '1px solid black'  }}>
              <label htmlFor="subCategory">Subcategory:</label>
              <input type="text" id="subCategory" name="subCategory" />
            </div>

            <div className="form-group" style={{color: 'black', backgroundImage: 'white',border: '1px solid black' }}>
              <label htmlFor="keywords">Keywords:</label>
              <input type="text" id="keywords" name="keywords" />
            </div>

            <div className="form-group" style={{color: 'black', backgroundImage: 'white',border: '1px solid black'}}>
              <label htmlFor="price">Price:</label>
              <input type="number" id="price" name="price"/>
            </div>

            <div className="form-group" style={{color: 'black',backgroundImage: 'white',border: '1px solid black' }}>
              <label htmlFor="unitOfMeasurement">Unit of Measurement:</label>
              <input type="text" id="unitOfMeasurement" name="unitOfMeasurement" />
            </div>
          </div>

          <div>
            <h3>Additional Details</h3>

            <div className="form-group" style={{ 
  color: 'black', 
  backgroundImage: 'white',
  border: '1px solid black', 
  display: 'flex', 
  alignItems: 'center',
  justifyContent: 'center' // Center horizontally
}}>
  <img src="/images/addImageLogo.png" alt="Add Photo" style={{ marginRight: '10px', height: '30px' }} />
  <label htmlFor="photo">Add Photo:</label>
  <input type="file" id="photo" name="photo" accept="image/*" onChange={(e) => handleFileChange(e, setPhotoPreview)} />
</div>


            {photoPreview && (
              <div className="file-preview">
                <img src={photoPreview} alt="Photo Preview" style={{ height: '200px', marginTop: '10px', display: 'flex', alignItems: 'center' }} />
              </div>
            )}

            <div style={{ marginTop: '20px' }}>
              <button type="button" className="btn btn-primary" onClick={handleSaveAndContinue} style={{backgroundImage: 'white',borderBlockColor:'black'}}>Save and Continue</button>
            </div>
          </div>
        </div>
      </form>

      {/* Display product details card */}
      {Object.keys(productDetails).length > 0 && (
        <div className="card" style={{ 
          maxWidth: '800px', 
          // margin: '20px auto', 
          // padding: 'px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          // alignItems: 'center', // Center vertically
          // backgroundColor:'transparent',
          backgroundImage: 'black' ,
          flexDirection: 'row'
        }}>
 <div style={{ display: 'inline-block', marginLeft: '100px', marginTop:'50px' }}>
              {photoPreview && (
              <img src={photoPreview} alt="Product Preview" style={{ width: '200px', height: 'auto',paddingleft:'200px' }} />
            )}
          </div>
          
<div style={{ display: 'inline-block', textAlign: 'left', paddingLeft: '100px', marginTop: '40px',color: 'black', marginBottom:'20px'}}>
  <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'black', borderBottom: '2px solid #333', paddingBottom: '5px', marginBottom: '20px' }}>Product Details</h3>
  <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '10px' }}>Product Name: {productDetails.productName || 'Sample Product'}</p>
  <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '10px' }}>Description: {productDetails.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}</p>
  <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '10px' }}>Category: {productDetails.category || 'Laboratory Equipment'}</p>
  <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '10px' }}>Subcategory: {productDetails.subCategory || 'Glassware'}</p>
  <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '10px' }}>Keywords: {productDetails.keywords || 'Flask, Laboratory, Chemistry'}</p>
  <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '10px' }}>Price: {productDetails.price || '$50'}</p>
  <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '10px' }}>Unit of Measurement: {productDetails.unitOfMeasurement || 'Each'}</p>
</div>
        </div>
        
        
        
      )}
    </div>
    </div>
  );
}
}
export default AddProductPage;
