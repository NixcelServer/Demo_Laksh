import axios from "axios";
import { useEffect,useRef,useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/Admin/Category/category.action";
import { useNavigate } from "react-router-dom";

import "./Categories.css";

const Categories = () => {

  const navigate = useNavigate();
  const closeButtonRef = useRef(null);
  const categories = useSelector(state => state.categoryReducer.categories);
  console.log(categories);

  const dispatch = useDispatch();

  const [categoryName, setNewCategoryName] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  // Updated mock data with only "Category 1"
 
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


  const handleDelete = async (encCatId) => {
    setCategoryToDelete(encCatId);
    setShowDeleteConfirmation(true);
    console.log(encCatId);
    try {
      const userString =  sessionStorage.getItem('user');
      const user = JSON.parse(userString);
      const encUserId = user.encUserId;
  
      // Include both encUserId and encKeywordId in the payload
      const payload = {
        encUserId
      };
  
      // Perform delete operation using encKeywordId and encUserId
      const response = await axios.delete(`http://127.0.0.1:8000/api/categories/${encCatId}`, { data: payload });      
      //console.log("Keyword deleted successfully:", response.data);
      
      // Refetch keywords after deletion
      
      fetchCategories();
    } catch (error) {
      console.error("Error deleting keyword:", error);
    }
  };

  const handleSaveChanges = async (event) => {
    event.preventDefault();

    const userString = sessionStorage.getItem('user');
    // Parse the user object from the string format stored in sessionStorage
    const user = JSON.parse(userString);

    // Retrieve the encUserId from the user object
    const encUserId = user.encUserId;
    console.log(encUserId);
    
    const payload ={
      categoryName,encUserId   
    }
    console.log(payload);
    
    try {
      
      console.log("in try block");
      
      const response = await axios.post("http://127.0.0.1:8000/api/categories", payload);
      
      console.log("Category added successfully:", response.data);

      fetchCategories();
      closeButtonRef.current.click();
     
      
      
    } catch (error) {
      console.error("Error adding category:", error);
     // setError(error.message); // Set error state
    }
  }

  // const handleDelete = (category) => {
  //   setCategoryToDelete(category);
  //   setShowDeleteConfirmation(true);
  // };
  const handleAssign = () => {  
    // Handle the button click event
    navigate("/AssignSubcategory");
  };

  const handleConfirmDelete = () => {
    const updatedCategories = categories.filter(
      (category) => category.id !== categoryToDelete.id
    );
    dispatch(getCategories(updatedCategories));
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };



  return (
    <div>
      <div style={{ marginTop: '2rem' }} className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="card-title">Category</h4>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#addUnitModal"
                    >
                      Add New
                    </button>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered zero-configuration">
                      <thead>
                        <tr>
                          <th>Sr no.</th>
                          <th>Category Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories.map((category, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>

                            <td>{category.cat_name}</td> {/* Accessing the 'cat_name' property */}
                            <button onClick={() => handleDelete(category.encCatId)}>Delete</button> {/* Accessing the 'add_date' property */}
                            {/* Accessing the 'add_time' property */}

                            <td>
                              <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                style={{ marginRight: "8px" }}
                                onClick={() => handleDelete(category)}
                              >
                                Delete
                              </button>
                              
                              <button
                                type="button"
                                className="btn btn-success btn-sm"
                                style={{ margintop: "100px"}}
                                onClick={() => handleAssign(category)}
                                
                                >
                                Assign
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                {categoryToDelete && categoryToDelete.cat_name}?
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

        {/* Add Unit Modal */}
        <div
          className="modal fade"
          id="addUnitModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addUnitModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h5 className="modal-title" id="addUnitModalLabel">
                    Add New Category
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="categoryName">Category Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="categoryName"
                      placeholder="Enter Category Name"
                      value={categoryName}
                      onChange={(e) => setNewCategoryName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button

                  ref={closeButtonRef}
                    type='button'
                    class='btn btn-secondary'
                    data-dismiss='modal'

                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSaveChanges}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categories;
