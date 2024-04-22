import React, { useEffect, useState } from 'react';
import './FormComponent.css'; // Import CSS file for custom styling
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSubCategories } from '../../redux/Admin/Category/category.action';
import axios from 'axios';

const FormComponent = () => {

  const dispatch = useDispatch();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [subCategoryToDelete, setSubCategoryToDelete] = useState(null);
  
  //get the subcategories from the reducer
  const subCategories = useSelector(state => state.categoryReducer.subCategories);

  console.log("ji",subCategories);
  
  const { encryptedCategoryId } = useParams();

  const encCatId = encryptedCategoryId;

  // Retrieve categories from the Redux store
  const categories = useSelector(state => state.categoryReducer.categories);

  // Find the category with the matching encryptedCategoryId
  const matchingCategory = categories.find(category => category.encCatId === encCatId);

  // Log the matching category (optional)
  console.log(matchingCategory);

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

  const handleDelete = async (subCategory) => {
    setSubCategoryToDelete(subCategory);
    setShowDeleteConfirmation(true);
   // console.log(encCatId);
    
  };

  const handleConfirmDelete = async() => {
    const subCategory = subCategoryToDelete;
    try {
      const userString =  sessionStorage.getItem('user');
      const user = JSON.parse(userString);
      const encUserId = user.encUserId;
  
      // Include both encUserId and encKeywordId in the payload
      const payload = {
        encUserId
      };
  
      // Perform delete operation using encKeywordId and encUserId
      const response = await axios.delete(`http://127.0.0.1:8000/api/sub-categories/${subCategory.encSubCatId}`, { data: payload });      
      //console.log("Keyword deleted successfully:", response.data);
      
      // Refetch keywords after deletion
      fetchSubCategories();
    } catch (error) {
      console.error("Error deleting keyword:", error);
    }
    //dispatch(getCategories(updatedCategories));
    setShowDeleteConfirmation(false);
    
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };
 
  const [subcategory, setSubcategory] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log('Category:', encCatId);
    console.log('Subcategory:', subcategory);

    const userString = sessionStorage.getItem('user');
    // Parse the user object from the string format stored in sessionStorage
    const user = JSON.parse(userString);

    // Retrieve the encUserId from the user object
    const encUserId = user.encUserId;
    const subCategoryName = subcategory;
    
    console.log(encUserId);
    
    const payload ={
      subCategoryName,encUserId,encCatId   
    }
    console.log("payload",payload);

    try {
      
      console.log("in try block");
      
      const response = await axios.post("http://127.0.0.1:8000/api/sub-categories", payload);
      
      console.log("Category added successfully:", response.data);

      fetchSubCategories();
      //closeButtonRef.current.click();
     
      
      
    } catch (error) {
      console.error("Error adding category:", error);
     // setError(error.message); // Set error state
    }

    // Reset form fields
    
    setSubcategory('');
  };

  const filteredSubCats = subCategories.filter(subCategory => subCategory.encCatId === encCatId);

  console.log("filtered",filteredSubCats);

  return (
    <div class="container" >
  <div class="card" style={{ marginLeft: '154px',background: 'linear-gradient(89.9deg, rgb(208, 246, 255) 0.1%, rgb(255, 237, 237) 47.9%, rgb(255, 255, 231) 100.2%)'}}>
    <div class="card-body">
      <h5 class="card-title">Category Form</h5>
      <form onSubmit={handleSubmit}>
        <div class="form-column">
          <div class="form-group col-md-6">
            <label htmlFor="categoryInput">Category</label>
            <input
              type="text"
              class="form-control"
              id="categoryInput"
                value={matchingCategory.cat_name}
              disabled
              
              
            />
          </div>
          
          <div class="form-group col-md-6">
            <label htmlFor="subcategoryInput">Assign Subcategory</label>
            <input
              type="text"
              class="form-control"
              id="subcategoryInput"
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              placeholder="Enter subcategory name"
              required
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary" style={{ marginLeft: '-500px' }} >Create</button>
      </form>
    </div>

    {/* Delete confirmation modal */}
    <div
          className={`modal fade ${showDeleteConfirmation ? "show" : ""}`}
          id="deleteConfirmationModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="deleteConfirmationModalLabel"
          aria-hidden={!showDeleteConfirmation}
          style={{ display: showDeleteConfirmation ? "block" : "none" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteConfirmationModalLabel">
                  Confirm Deletion
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCancelDelete}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete{" "}
                {subCategoryToDelete && subCategoryToDelete.sub_cat_name}?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCancelDelete}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleConfirmDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>

    {/* <div class="container-fluid" style={{ backgroundColor: 'lightblue', justifyContent: 'flex-end' }}></div> */}
    
    <div class="container-fluid" style={{backgroundColor: 'lightgray',borderWidth: '-10px', width: '90%', marginLeft: '4px', marginBottom:'4px',paddingRight: '20px'}}>
                <div class="row" style={{ backgroundColor: 'lighgray' }}>
                    <div class="col-12" >
                        <div class="card" style={{ backgroundColor: 'lighgray', margin:'1 auto'}}>
                            <div class="card-body" >
                                <h4 class="card-title" >Data Table</h4>
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered zero-configuration" style={{ width: '80%', margin: '0 auto', paddingRight: '20px' }}>
                                    <thead>
                                      <tr>
                                        <th>Sr. No</th>
                                        <th>Subcategory Name</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {filteredSubCats.map((subCategory, index) => (
                                        <tr >
                                          <td>{index + 1}</td>
                                          <td>{subCategory.sub_cat_name}</td>
                                          <td>
                                          <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                style={{ marginRight: "8px" }}
                                onClick={() => handleDelete(subCategory)}
                              >
                                Delete
                              </button>
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                        <tfoot>
                                            
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </div>
</div>



  );
};

export default FormComponent;
