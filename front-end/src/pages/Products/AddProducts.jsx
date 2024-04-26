import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getSubCategories } from '../../redux/Admin/Category/category.action';
import { getKeywords } from '../../redux/Admin/Keywords/keyword.action';
import { getUOM } from '../../redux/Admin/UOM/uom.action';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
    const [showForm, setShowForm] = useState(false);
    const [photoPreview, setPhotoPreview] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [updateMode, setUpdateMode] = useState(false);

    const [productDetails, setProductDetails] = useState({
        encCompanyId: '',
        prodName: '',
        prodDescription: '',
        prodCat: '',
        prodSubCat: '',
        keywords: '',
        prodPrice: '',
        minOrderQty: '',
        prodUOM: '',
        file: '',
    });

    // Access categories from Redux state
    const categories = useSelector(state => state.categoryReducer.categories);
    console.log("in categoreis", categories);

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
    console.log("in sub cat", subCategories);
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
    console.log("in keyword keywords", keywords);
    const fetchKeywords = async () => {


        try {
            const response = await axios.get("http://127.0.0.1:8000/api/keywords");
            const keywords = response.data;
            dispatch(getKeywords(keywords));
        } catch (error) {
            console.error("Error fetching keywords:", error);

        }

    };


    useEffect(() => {
        fetchKeywords();
    }, []);

    const uoms = useSelector(state => state.uomReducer.uoms);
    console.log("in uom ", uoms);
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
        setProductDetails({ ...productDetails, file: e.target.files[0] })
    };

    const userString = sessionStorage.getItem('user');
    const user = JSON.parse(userString);
    const encCompanyId = user.encCompanyId;

    useEffect(() => {
        setProductDetails(prevProductDetails => ({
            ...prevProductDetails,
            encCompanyId: encCompanyId
        }));
    }, [encCompanyId]); 

    const handleSaveAndContinue = (e) => {
        e.preventDefault();

        
    console.log(encCompanyId);

        // Update productDetails state with the obtained encCompanyId
setProductDetails(prevProductDetails => ({
    ...prevProductDetails,
    encCompanyId: encCompanyId
  }));
        // Logic to save changes and continue
        console.log(productDetails);
        //debugger;
        const res = axios.post("http://127.0.0.1:8000/api/product/store", productDetails, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }

        });
        //navigate('/');
        setShowForm(false); // Hide the form after saving
    };

    const toggleFormVisibility = () => {
        setShowForm(!showForm);
    };

    const handleDeleteProductDetails = () => {
        // Logic to delete product details
        setProductDetails(false);
    };

    const handleUpdateProductDetails = () => {
        setUpdateMode(true); // Enter update mode
    };

    const handleCancelUpdate = () => {
        setUpdateMode(false); // Exit update mode
    };

    const handleUpdate = () => {
        // Logic to update product details
        console.log('Product details updated!');
        setUpdateMode(false); // Exit update mode after updating
    };
    return (
        <div className="container" style={{ position: 'relative', transform: 'translateY(-2px)', width: '800px', margintop: '10px', marginRight: '100px', marginLeft: '190px' }}>
            <h2 className="text-center text-black bg-primary p-3 mb-5 rounded-pill" style={{ position: 'relative', margin: '10px 0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.15)', transform: 'translateY(-2px)', width: '1300px', marginRight: '-100px', marginLeft: '-16px', backgroundImage: 'linear-gradient(to top, #09203f 0%, #537895 100%)' }}><h2 style={{ marginleft: '-800px', color: 'white ' }}>Add New Product</h2></h2>

            <div style={{ marginRight: '-800px' }}>
                <button
                    type="button"
                    style={{
                        backgroundColor: '#4CAF50',
                        border: 'none',
                        color: 'white',
                        padding: '10px 20px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'inline-block',
                        fontSize: '16px',
                        margin: '4px 2px',
                        cursor: 'pointer',
                        borderRadius: '8px',
                        transition: 'background-color 0.3s ease',
                    }}
                    onClick={toggleFormVisibility}
                >
                    <span style={{ marginRight: '5px', marginRight: '5px', fontWeight: 'bold' }}>+</span> Add Product
                </button>
            </div>



            {showForm && (
                <form className="add-product-form" style={{ display: 'flex', justifyContent: 'space-evenly', }}>
                    <div className="basic-details" style={{ position: 'relative', maxWidth: '1000px', marginTop: '0px', marginLeft: '50px', display: 'flex', flexDirection: 'row', height: '400px' }}>
                        <div style={{ marginRight: '20px', position: 'relative' }}>
                            <h3>Basic Details</h3>
                            <div className="form-group" style={{ color: 'black', backgroundImage: 'white', border: '1px solid black', position: 'relative' }}>
                                <label htmlFor="product-name">Product Name:</label>
                                <input
                                    type="text"
                                    id="product-name"
                                    name="prodName"
                                    value={productDetails.prodName}
                                    onChange={(e) => setProductDetails({ ...productDetails, prodName: e.target.value })}
                                />
                            </div>

                            <div className="form-group" style={{ color: 'black', backgroundImage: 'white', border: '1px solid black' }} >
                                <label htmlFor="description">Product Description: </label>
                                <input
                                    type="text"
                                    id="description"
                                    name="prodDescription"
                                    value={productDetails.prodDescription}
                                    onChange={(e) => setProductDetails({ ...productDetails, prodDescription: e.target.value })}
                                />
                                <textarea id="description" name="description" rows="1" />
                            </div>

                            <div className="form-group" style={{ color: 'black', backgroundImage: 'white', border: '1px solid black' }}>
                                <label htmlFor="category">Category:</label>
                                <select id="category" name="category" value={productDetails.prodCat} onChange={(e) => setProductDetails({ ...productDetails, prodCat: e.target.value })}>
                                    <option value="">Select Category</option>
                                    {categories.map(category => (
                                        <option key={category.encCatId} value={category.encCatId}>{category.cat_name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group" style={{ color: 'black', backgroundImage: 'white', border: '1px solid black' }}>
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

                            <div className="form-group" style={{ color: 'black', backgroundImage: 'white', border: '1px solid black' }}>
                                <label htmlFor="keywords">Keywords:</label>
                                <select id="keywords" name="keywords" value={productDetails.keywords} onChange={(e) => setProductDetails({ ...productDetails, prodKeywords: e.target.value })}>
                                    <option value="">Select Keywords</option>
                                    {keywords.map(keyword => (
                                        <option key={keyword.encKeywordId} value={keyword.encKeywordId}>{keyword.keyword_name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group" style={{ color: 'black', backgroundImage: 'white', border: '1px solid black' }}>
                                <label htmlFor="price">Price:</label>
                                <input type="number" id="price" name="prodPrice" value={productDetails.prodPrice} onChange={(e) => setProductDetails({ ...productDetails, prodPrice: e.target.value })} />

                            </div>

                            <div className="form-group" style={{ color: 'black', backgroundImage: 'white', border: '1px solid black' }}>
                                <label htmlFor="unitOfMeasurement">Minimum Order Quantity:</label>
                                <input type="number" id="quantity" name="quantity" value={productDetails.minOrderQty} onChange={(e) => setProductDetails({ ...productDetails, minOrderQty: e.target.value })} />
                            </div>
                           


                            <div className="form-group" style={{ color: 'black', backgroundImage: 'white', border: '1px solid black' }}>
                                <label htmlFor="unitOfMeasurement">Unit of Measurement:</label>
                                <select id="uoms" name="prodUOM" value={productDetails.prodUOM}
                                    onChange={(e) => setProductDetails({ ...productDetails, prodUOM: e.target.value })}>
                                    <option value="">Select UOM</option>
                                    {uoms.map(unit => (
                                        <option key={unit.encUomId} value={unit.encUomId}>{unit.unit_name}</option>
                                    ))}
                                </select>
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
                                <button type="button" className="btn btn-primary" onClick={handleSaveAndContinue} style={{ backgroundImage: 'white', borderBlockColor: 'black' }}>Save and Continue</button>
                            </div>
                        </div>
                    </div>
                </form>
            )}




            Display product details card
           
        </div>
    );
}

export default AddProducts;