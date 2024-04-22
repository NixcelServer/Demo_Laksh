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
<h2 className="text-center text-white bg-primary p-3 mb-5 rounded-pill" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.15)', transform: 'translateY(-2px)' }}>Add New Product/Service</h2>
  <form className="add-product-form" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
    <div className="basic-details" style={{ backgroundColor: 'beige', maxWidth: '1000px', padding: '20px', marginTop: '10px', marginLeft: '50px', display: 'flex', flexDirection: 'row' }}>
      <div style={{ marginRight: '20px' }}>
        <h3>Basic Details</h3>
        <div className="form-group" style={{ backgroundColor: 'bisque' }}>
          <label htmlFor="product-name">Product/Service Name:</label>
          <input type="text" id="product-name" name="product-name" />
        </div>

        <div className="form-group" style={{ backgroundColor: 'bisque' }}>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" />
        </div>

        <div className="form-group" style={{ backgroundColor: 'bisque' }}>
          <label htmlFor="product-score">Category:</label>
          <input type="text" id="Category" name="Category" />
        </div>

        <div className="form-group" style={{ backgroundColor: 'bisque' }}>
          <label htmlFor="product-score">SubCategory:</label>
          <input type="text" id="SunCategory" name="SubCategory" />
        </div>

        <div className="form-group" style={{ backgroundColor: 'bisque' }}>
          <label htmlFor="product-score">Keywords:</label>
          <input type="number" id="product-score" name="product-score" />
        </div>

        <div className="form-group" style={{ backgroundColor: 'bisque' }}>
          <label htmlFor="Unit of Measurement"> Unit of Measurement:</label>
          <input type="text" id="specifications" name="specifications" />
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
        <div className="form-group" style={{ backgroundColor: 'bisque' }}>
          <label htmlFor="specifications"> Specifications:</label>
          <input type="text" id="specifications" name="specifications" />
        </div>

        <div className="form-group" style={{ backgroundColor: 'bisque' }} >
          <label htmlFor="description">Product/Service Description:</label>
          <textarea id="description" name="description" rows="1" />
        </div>
      </div>
    </div>
  </form>
</div>


  );
}

export default AddProductPage;
