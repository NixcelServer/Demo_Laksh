
import CryptoJS from 'crypto-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getSubCategories} from '../../redux/Admin/Category/category.action';
import { getKeywords } from '../../redux/Admin/Keywords/keyword.action';
import { getUOM } from '../../redux/Admin/UOM/uom.action';
import { useNavigate } from 'react-router-dom';


const AddProductPage = () => {
  const [photoPreview, setPhotoPreview] = useState(null);
  const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [unitOfMeasurement, setUnitOfMeasurement] = useState([]);
  const [productDetails, setProductDetails] = useState({
    encCompanyId: 'ZHlvWk1seVhFazQ9',
    prodName: '',
    prodDescription: '',
    prodCat: '',
    prodSubCat: '',
    keywords: '',
    prodPrice: '',
    minOrderQty: '',
    prodUOM: '',
    file:'',
  });
  const dispatch = useDispatch();
  //const [keywords, setKeywords] = useState([]); // State for keywords
 
  const navigate = useNavigate();
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

  

  const handleFileChange = (e) => {
    setProductDetails({...productDetails, file: e.target.files[0]})
  };

  const handleSaveAndContinue = async (e) => {
    e.preventDefault();

    // Logic to save changes and continue
    console.log(productDetails);
    //debugger;
    const res = axios.post("http://127.0.0.1:8000/api/product/store", productDetails,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
      
    });
    navigate('/');
  }
    
  
    
  return (

    <div className="container">
      <h2 className="text-center text-white bg-primary p-3 mb-5 rounded-pill" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.15)', transform: 'translateY(-2px)' }}>Add New Product</h2>
      <form className="add-product-form" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div className="basic-details" style={{ backgroundColor: 'beige', maxWidth: '1000px', padding: '20px', marginTop: '10px', marginLeft: '50px', display: 'flex', flexDirection: 'row', height:'400px' }}>
          <div style={{ marginRight: '20px' }}>
            <h3>Basic Details</h3>
            <div className="form-group" style={{ backgroundColor: 'bisque' }}>
              <label htmlFor="product-name">Product Name:</label>
              <input 
                type="text" 
                id="product-name" 
                name="prodName" 
                value={productDetails.prodName} 
                onChange={(e) => setProductDetails({ ...productDetails, prodName: e.target.value })} 
              />
            </div>

            <div className="form-group" style={{ backgroundColor: 'bisque' }}>
            <label htmlFor="description">Product Description:</label>
            <input 
              type="text" 
              id="description" 
              name="prodDescription" 
              value={productDetails.prodDescription} 
              onChange={(e) => setProductDetails({ ...productDetails, prodDescription: e.target.value })}
            />
            <textarea id="description" name="description" rows="1" />
          </div>

            <div className="form-group" style={{ backgroundColor: 'bisque' }}>
              <label htmlFor="category">Category:</label>
              <select id="category" name="category" value={productDetails.prodCat} onChange={(e) => setProductDetails({ ...productDetails, prodCat: e.target.value })}>
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category.encCatId} value={category.encCatId}>{category.cat_name}</option>
                ))}
              </select>
            </div>

            <div className="form-group" style={{ backgroundColor: 'bisque' }}>
            <label htmlFor="subCategory">Subcategory:</label>
            <select
              id="subCategory"
              name="subCategory"
              value={productDetails.prodSubCat}
              onChange={(e) => setProductDetails({ ...productDetails, prodSubCat: e.target.value })}
            >
              <option value="">Select Subcategory</option>
              {subCategories.map(subCategory => (
                <option key={subCategory.encSubCatId} value={subCategory.encSubCatId}>{subCategory.sub_cat_name}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
              <label htmlFor="keywords">Keywords:</label>
              <select id="keywords" name="keywords" value={productDetails.keywords} onChange={(e) => setProductDetails({...productDetails, prodKeywords: e.target.value})}>
                <option value="">Select Keywords</option>
                {keywords.map(keyword => (
                  <option key={keyword.encKeywordId} value={keyword.encKeywordId}>{keyword.keyword_name}</option>
                ))}
              </select>
            </div>
            {/* <div className="form-group" style={{ backgroundColor: 'bisque' }}>
          <label htmlFor="product-name">Product Name:</label>
          <input type="text" id="product-name" name="prod_name" value={productDetails.productName} onChange={(e) => setProductDetails({ ...productDetails, productName: e.target.value })} />
           </div> */}

            <div className="form-group" style={{ backgroundColor: 'bisque'}}>
              <label htmlFor="price">Price:</label>
              <input type="number" id="price" name="prodPrice" value={productDetails.prodPrice} onChange={(e)=>setProductDetails({ ...productDetails, prodPrice: e.target.value })}/>
            </div>
            <div className="form-group" style={{ backgroundColor: 'bisque'}}>
              <label htmlFor="quantity">min Order Qty:</label>
              <input type="number" id="quantity" name="quantity" value={productDetails.minOrderQty} onChange={(e)=>setProductDetails({ ...productDetails, minOrderQty: e.target.value })}/>
            </div>

            <div className="form-group"  style={{ backgroundColor: 'bisque' }}> 
              <label htmlFor="uoms">Unit of Measurement:</label>
              <select id = "uoms" name="prodUOM" value={productDetails.prodUOM} 
              onChange={(e)=>setProductDetails({...productDetails,prodUOM: e.target.value})}>
                <option value="">Select UOM</option>
                {uoms.map(unit=>(
                  <option key={unit.encUomId} value={unit.encUomId}>{unit.unit_name}</option>
                ))}
              </select> 
              
            </div>
          </div>

          <div>
            <h3>Additional Details</h3>

            <div className="form-group" style={{ backgroundColor: 'azure', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <label htmlFor="photo">Add Photo:</label>
              <input 
                type="file" 
                id="photo" 
                name="file" 
                accept="image/*" 
                onChange={(e) => handleFileChange(e)} 
                style={{ marginLeft: '10px' }} 
              />
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
          {/* <div style={{ display: 'inline-block', marginLeft: '100px', marginTop:'50px' }}>
                        {photoPreview && (
                        <img src={photoPreview} alt="Product Preview" style={{ width: '200px', height: 'auto',paddingleft:'200px' }} />
                      )}
                    </div> */}
                    {/* <div style={{ display: 'inline-block', textAlign: 'left', paddingLeft: '100px',margintop:'80px' }}>             <h3>Product Details</h3>
                      
                    </div> */}
                  </div>
                  
                  
                  
                )}
              </div>
            );

}
export default AddProductPage;
