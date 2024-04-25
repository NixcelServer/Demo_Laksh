
import CryptoJS from 'crypto-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getSubCategories} from '../../redux/Admin/Category/category.action';
import { getKeywords } from '../../redux/Admin/Keywords/keyword.action';
import { getUOM } from '../../redux/Admin/UOM/uom.action';

const AddProductPage = () => {
  const [photoPreview, setPhotoPreview] = useState(null);
  const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [unitOfMeasurement, setUnitOfMeasurement] = useState([]);
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
  const dispatch = useDispatch();
  //const [keywords, setKeywords] = useState([]); // State for keywords
 
  
  // Access categories from Redux state
  const categories = useSelector(state => state.categoryReducer.categories);
  console.log("in categoreis",categories);

  const fetchCategories = async () => {
   
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/categories");
      const categories = response.data;
      dispatch(getCategories(categories));
    } catch (error) {
      console.error("Error fetching keywords:", error);
      //setError("Failed to fetch keywords. Please try again later.");
    } finally {
      //setLoading(false); // Set loading state to false regardless of success or failure
    }
  };
  
  useEffect(() => {
    fetchCategories();
  }, []);

  //get the subcategories from the reducer
  const subCategories = useSelector(state => state.categoryReducer.subCategories);
  console.log("in sub cat",subCategories);
  const fetchSubCategories = async () => {

   
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/sub-categories");
      const subCategories = response.data;
      dispatch(getSubCategories(subCategories));
    } catch (error) {
      console.error("Error fetching keywords:", error);
      //setError("Failed to fetch keywords. Please try again later.");
    } 

  };
  useEffect(() => {
    fetchSubCategories();
  }, []);
  
  const keywords = useSelector(state => state.keywordReducer.keywords);
  console.log("in keyword keywords",keywords);
  const fetchKeywords = async () => {
    
    setLoading(true); // Set loading state to true
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/keywords");
      const keywords = response.data;
      dispatch(getKeywords(keywords));
    } catch (error) {
      console.error("Error fetching keywords:", error);
      setError("Failed to fetch keywords. Please try again later.");
    } finally {
      setLoading(false); // Set loading state to false regardless of success or failure

    }

  };

  
  useEffect(() => {
    fetchKeywords();
  }, []);

  const uoms = useSelector(state => state.uomReducer.uoms);
  console.log("in uom ",uoms);
  const fetchUOM = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/unit-of-measurements");
      const uom = response.data // Assuming the category data is under the "message" key
      //console.log("delete", keywords)

      dispatch(getUOM(uom));

    } catch (error) {
      console.error("Error fetching keywords:", error);
      return null; // Return null or handle the error as needed
    }

  };

  useEffect(() => {
    fetchUOM();
  }, []);

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

  const handleSaveAndContinue = async () => {
    const encryptedCategoryId = CryptoJS.AES.encrypt(productDetails.category, 'secret_key').toString();
    const encryptedSubCategory = CryptoJS.AES.encrypt(productDetails.subCategory, 'secret_key').toString();
     const encryptedKeywords = CryptoJS.AES.encrypt(productDetails.keywords, 'secret_key').toString();
     const encryptedUOM = CryptoJS.AES.encrypt(productDetails.unitOfMeasurement, 'secret_key').toString();

     // Prepare the product details with the encrypted category ID
  const productData = {
    ...productDetails,
    category: encryptedCategoryId,
    subCategory: encryptedSubCategory,
    keywords: encryptedKeywords,
    unitOfMeasurement: encryptedUOM
  };

    // Logic to save changes and continue
    axios.post("http://127.0.0.1:8000/api/product/store", productDetails).then(response => {
      console.log("Data saved successfully:", response.data);
      setProductDetails({
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
          setPhotoPreview(null);
        
    }).catch(err => {
        console.log(err)
      })

    // try {
    //   console.log(productDetails)
    //   // Make HTTP request to save data
    //   const response = await axios.post("http://127.0.0.1:8000/api/product/store", productDetails);
    //   console.log("Data saved successfully:", response.data);
    //   // Clear form fields after successful save
    //   // setProductDetails({
    //   //   productName: '',
    //   //   description: '',
    //   //   category: '',
    //   //   subCategory: '',
    //   //   keywords: '',
    //   //   price: '',
    //   //   quantity: '',
    //   //   unitOfMeasurement: '',
    //   //   photo: null,
    //   // });
    //   setPhotoPreview(null);
    // } catch (error) {
    //   console.error("Error saving data:", error);
    //   // Handle error
    // }
  };
  
    console.log(productDetails)
  return (

    <div className="container">
      <h2 className="text-center text-white bg-primary p-3 mb-5 rounded-pill" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.15)', transform: 'translateY(-2px)' }}>Add New Product</h2>
      <form className="add-product-form" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div className="basic-details" style={{ backgroundColor: 'beige', maxWidth: '1000px', padding: '20px', marginTop: '10px', marginLeft: '50px', display: 'flex', flexDirection: 'row', height:'400px' }}>
          <div style={{ marginRight: '20px' }}>
            <h3>Basic Details</h3>
            <div className="form-group" style={{ backgroundColor: 'bisque' }}>
          <label htmlFor="product-name">Product Name:</label>
          <input type="text" id="product-name" name="prod_name" value={productDetails.productName} onChange={(e) => setProductDetails({ ...productDetails, productName: e.target.value })} />
           </div>

            <div className="form-group" style={{ backgroundColor: 'bisque' }} >
              <label htmlFor="description">Product Description:</label>
              <input type="text" id="description" name="prod_description" value={productDetails.description} onChange={(e) => setProductDetails({ ...productDetails, description: e.target.value })}/>
              <textarea id="description" name="description" rows="1" />
            </div>

            <div className="form-group" style={{ backgroundColor: 'bisque' }}>
              <label htmlFor="category">Category:</label>
              <select id="category" name="category" value={productDetails.category} onChange={(e) => setProductDetails({ ...productDetails, category: e.target.value })}>
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category.id} value={category.cat_name}>{category.cat_name}</option>
                ))}
              </select>
            </div>

            <div className="form-group" style={{ backgroundColor: 'bisque' }}>
            <label htmlFor="subCategory">Subcategory:</label>
            <select
              id="subCategory"
              name="subCategory"
              value={productDetails.subCategory}
              onChange={(e) => setProductDetails({ ...productDetails, subCategory: e.target.value })}
            >
              <option value="">Select Subcategory</option>
              {subCategories.map(subCategory => (
                <option key={subCategory.id} value={subCategory.sub_cat_name}>{subCategory.sub_cat_name}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
              <label htmlFor="keywords">Keywords:</label>
              <select id="keywords" name="keywords" value={productDetails.keywords} onChange={(e) => setProductDetails({...productDetails, keywords: e.target.value})}>
                <option value="">Select Keywords</option>
                {keywords.map(keyword => (
                  <option key={keyword.id} value={keyword.keyword_name}>{keyword.keyword_name}</option>
                ))}
              </select>
            </div>
            {/* <div className="form-group" style={{ backgroundColor: 'bisque' }}>
          <label htmlFor="product-name">Product Name:</label>
          <input type="text" id="product-name" name="prod_name" value={productDetails.productName} onChange={(e) => setProductDetails({ ...productDetails, productName: e.target.value })} />
           </div> */}
            <div className="form-group" style={{ backgroundColor: 'bisque'}}>
              <label htmlFor="price">Price:</label>
              <input type="number" id="price" name="prod_price" value={productDetails.price} onChange={(e)=>setProductDetails({ ...productDetails, price: e.target.value })}/>
            </div>

            <div className="form-group"  style={{ backgroundColor: 'bisque' }}> 
              <label htmlFor="uoms">Unit of Measurement:</label>
              <select id = "uoms" name="uoms" value={productDetails.uoms} 
              onChange={(e)=>setProductDetails({...productDetails,uoms: e.target.value})}>
                <option value="">Select UOM</option>
                {uoms.map(unit=>(
                  <option key={unit.id} value={unit.unit_name}>{unit.unit_name}</option>
                ))}
              </select> 
              
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
              <button type="button" className="btn btn-primary" onClick={handleSaveAndContinue}>
                Save and Continue</button>
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
