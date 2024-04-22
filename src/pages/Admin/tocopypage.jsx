import React, { useState } from 'react';

const AddProductPage = () => {
  const [photoPreview, setPhotoPreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [pdfPreview, setPdfPreview] = useState(null);

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
  return (
    <div className="container">
  <h2>Add New Product/Service</h2>
  <form className="add-product-form" style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div className="basic-details" style={{ backgroundColor: 'beige', maxWidth: '400px', padding: '20px', marginTop: '100px',marginLeft:'400px' }}>
      <h3>Basic Details</h3>
      <div className="form-group" style={{ backgroundColor: 'bisque' }}>
        <label htmlFor="product-name">Product/Service Name:</label>
        <input type="text" id="product-name" name="product-name" />
      </div>

      <div className="form-group" style={{ backgroundColor: 'bisque' }}>
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" />
      </div>

      <div className="form-group" style={{ backgroundColor: 'bisque' }}>
        <label htmlFor="product-score">Product Score:</label>
        <input type="number" id="product-score" name="product-score" />
      </div>

      <div className="form-group" style={{ backgroundColor: 'bisque' }}>
        <label htmlFor="specifications"> Specifications:</label>
        <input type="text" id="specifications" name="specifications" />
      </div>

      <div className="form-group" style={{ backgroundColor: 'bisque' }} >
        <label htmlFor="description">Product/Service Description:</label>
        <textarea id="description" name="description" rows="3" />
      </div>
    </div>

    <div className="additional-details" style={{ backgroundColor: 'beige', maxWidth: '400px', padding: '20px', marginTop: '100px' }}>
          <h3>Additional Details</h3>
          <div className="form-group" style={{ backgroundColor: 'azure' }}>
            <label htmlFor="additional-details">Uses, Details, Benefits, etc.:</label>
            <textarea id="additional-details" name="additional-details" rows="3" />
          </div>

          <div className="form-group" style={{ backgroundColor: 'azure' }}>
            <label htmlFor="tips">Tips:</label>
            <textarea id="tips" name="tips" rows="3" />
          </div>

          <div className="form-group" style={{ backgroundColor: 'azure', display: 'flex', alignItems: 'center' }}>
          <img src="/images/addImageLogo.png" alt="Add Photo" style={{ marginRight: '10px', height: '30px' }} />

            <label htmlFor="photo">Add Photo:</label>
            <input type="file" id="photo" name="photo" accept="image/*" onChange={(e) => handleFileChange(e, setPhotoPreview)} />
          </div>

          {photoPreview && (
            <div className="file-preview">
              <img src={photoPreview} alt="Photo Preview" style={{ height: '100px', marginTop: '10px' }} />
            </div>
          )}

          <div className="form-group" style={{ backgroundColor: 'azure', display: 'flex', alignItems: 'center' }}>
          <img src="/images/addVideoLogo.png" alt="Add Video" style={{ marginRight: '10px', height: '30px' }} />

            <label htmlFor="video">Add Video:</label>
            <input type="file" id="video" name="video" accept="video/*" onChange={(e) => handleFileChange(e, setVideoPreview)} />
          </div>

          {videoPreview && (
            <div className="file-preview">
              {/* Render video preview */}
              <video controls style={{ width: '100%', marginTop: '10px' }}>
                <source src={videoPreview} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          <div className="form-group" style={{ backgroundColor: 'azure', display: 'flex', alignItems: 'center' }}>
          <img src="/images/addPdfLogo.png" alt="Add Pdf" style={{ marginRight: '10px', height: '30px' }} />

            <label htmlFor="pdf">Add PDF:</label>
            <input type="file" id="pdf" name="pdf" accept=".pdf" onChange={(e) => handleFileChange(e, setPdfPreview)} />
          </div>

          {pdfPreview && (
            <div className="file-preview">
              {/* Render PDF preview */}
              <iframe src={pdfPreview} style={{ width: '100%', height: '300px', marginTop: '10px' }}></iframe>
            </div>
          )}
        </div>
      </form>
    </div>
  

  );
}

export default AddProductPage;


<img src="/images/addImageLogo.png" alt="Add Photo" style={{ marginRight: '10px', height: '30px' }} />

