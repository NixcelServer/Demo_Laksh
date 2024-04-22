import React, { useState } from 'react';

const SellerLeftMenu = () => {
  return (
    <nav id="sidebar" className="bg-dark">
      <div className="p-4">
        <ul className="list-unstyled components">
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#lead-manager">Lead Manager</a>
          </li>
          <li>
            <a href="#buy-leads">Buy Leads</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#photos-docs">Photos and Docs</a>
          </li>
          <li>
            <a href="#buyer-tool">Buyer Tool</a>
          </li>
          <li>
            <a href="#settings">Settings</a>
          </li>
          <li>
            <a href="#tally-on-web">Tally on Web</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

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
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <SellerLeftMenu />
        </div>
        <div className="col-md-10">
          <h2 className="text-center text-white bg-primary p-3 mb-5 rounded-pill" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.15)', transform: 'translateY(-2px)' }}>Add New Product/Service</h2>
          <form className="add-product-form" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            {/* Your form content */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProductPage;
