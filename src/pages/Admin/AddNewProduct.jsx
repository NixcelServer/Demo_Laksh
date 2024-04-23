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

  return (
    <div className="container">
      <h2 className="text-center text-white bg-primary p-3 mb-5 rounded-pill" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.15)', transform: 'translateY(-2px)' }}>Add New Product</h2>
      <form className="add-product-form" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div className="basic-details" style={{ backgroundColor: 'beige', maxWidth: '1000px', padding: '20px', marginTop: '10px', marginLeft: '50px', display: 'flex', flexDirection: 'row', height:'400px' }}>
          <div style={{ marginRight: '20px' }}>
            <h3>Basic Details</h3>
            <div className="form-group" style={{ backgroundColor: 'bisque' }}>
              <label htmlFor="product-name">Product Name:</label>
              <input type="text" id="product-name" name="product-name" />
            </div>

            <div className="form-group" style={{ backgroundColor: 'bisque' }} >
              <label htmlFor="description">Product Description:</label>
              <textarea id="description" name="description" rows="1" />
            </div>

            <div className="form-group" style={{ backgroundColor: 'bisque' }}>
              <label htmlFor="category">Category:</label>
              <input type="text" id="category" name="category" />
            </div>

            <div className="form-group" style={{ backgroundColor: 'bisque' }}>
              <label htmlFor="subCategory">Subcategory:</label>
              <input type="text" id="subCategory" name="subCategory" />
            </div>

            <div className="form-group" style={{ backgroundColor: 'bisque' }}>
              <label htmlFor="keywords">Keywords:</label>
              <input type="text" id="keywords" name="keywords" />
            </div>

            <div className="form-group" style={{ backgroundColor: 'bisque'}}>
              <label htmlFor="price">Price:</label>
              <input type="number" id="price" name="price"/>
            </div>

            <div className="form-group" style={{ backgroundColor: 'bisque' }}>
              <label htmlFor="unitOfMeasurement">Unit of Measurement:</label>
              <input type="text" id="unitOfMeasurement" name="unitOfMeasurement" />
            </div>
          </div>

          <div>
            <h3>Additional Details</h3>

            <div className="form-group" style={{ backgroundColor: 'azure', display: 'flex', alignItems: 'center' }}>
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
              <button type="button" className="btn btn-primary" onClick={handleSaveAndContinue}>Save and Continue</button>
            </div>
          </div>
        </div>
      </form>

      {/* Display product details card */}
      {Object.keys(productDetails).length > 0 && (
        <div className="card" style={{ 
          maxWidth: '1400px', 
          // margin: '20px auto', 
          // padding: 'px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          // alignItems: 'center', // Center vertically
          backgroundColor:'transparent',
          flexDirection: 'row'
        }}>
 <div style={{ display: 'inline-block', marginLeft: '100px', marginTop:'50px' }}>
              {photoPreview && (
              <img src={photoPreview} alt="Product Preview" style={{ width: '200px', height: 'auto',paddingleft:'200px' }} />
            )}
          </div>
          <div style={{ display: 'inline-block', textAlign: 'left', paddingLeft: '100px',margintop:'80px' }}>             <h3>Product Details</h3>
            <p>Product Name: {productDetails.productName || 'Sample Product'}</p>
            <p>Description: {productDetails.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}</p>
            <p>Category: {productDetails.category || 'Laboratory Equipment'}</p>
            <p>Subcategory: {productDetails.subCategory || 'Glassware'}</p>
            <p>Keywords: {productDetails.keywords || 'Flask, Laboratory, Chemistry'}</p>
            <p>Price: {productDetails.price || '$50'}</p>
            <p>Unit of Measurement: {productDetails.unitOfMeasurement || 'Each'}</p>
          </div>
        </div>
        
        
        
      )}
    </div>
  );
}

export default AddProductPage;
