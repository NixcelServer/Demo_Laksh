import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/Admin/Category/category.action";
import { useNavigate } from "react-router-dom";

import "./Categories.css";

const Categories = () => {
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();

  const [categoryName, setNewCategoryName] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  // Updated mock data with only "Category 1"
  const mockCategories = [
    { id: 1, cat_name: "Category 1", add_date: "2024-04-18" }
  ];

  const fetchCategories = () => {
    // Simulate fetching data from API (useEffect used for simulation)
    dispatch(getCategories(mockCategories));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSaveChanges = () => {
    // Simulate adding category (replace with actual API call if needed)
    const newCategory = {
      id: categories.length + 1,
      cat_name: categoryName,
      add_date: new Date().toISOString().split("T")[0],
    };
    dispatch(getCategories([...categories, newCategory]));
    setNewCategoryName("");
    navigate("/categories");
  };

  const handleDelete = (category) => {
    setCategoryToDelete(category);
    setShowDeleteConfirmation(true);
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
      <div style={{ marginTop: '4rem' }} className="content-body">
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
                            <td>{category.cat_name}</td>
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
                                className="btn btn-primary btn-sm"
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
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
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
