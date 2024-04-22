import { useNavigate } from "react-router-dom";
import { getKeywords } from "../../redux/Admin/Keywords/keyword.action";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";




const Keywords = () => {
  const closeButtonRef = useRef(null);
  const navigate = useNavigate;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const keywords = useSelector(state => state.keywordReducer.keywords);
  

  const dispatch = useDispatch();

  const [keywordName, setNewkeywordName] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [keywordToDelete, setkeywordToDelete] = useState(null);



  const fetchkeywords = async () => {
   
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/keywords");
      const keywords = response.data;
      dispatch(getKeywords(keywords));
    } catch (error) {
      console.error("Error fetching keywords:", error);
      //setError("Failed to fetch keywords. Please try again later.");
    } finally {
      //setLoading(false); // Set loading state to false regardless of success or failure
    }

  };
  useEffect(() => {
    fetchkeywords();
  }, []);


  const handleDelete = async (keyword) => {
    setkeywordToDelete(keyword);
    setShowDeleteConfirmation(true);

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
      keywordName,encUserId   
    }
    console.log(payload);
    
    try {
      
      console.log("in try block");
      
      const response = await axios.post("http://127.0.0.1:8000/api/keywords", payload);
      
      console.log("keyword added successfully:", response.data);

      fetchkeywords();
      closeButtonRef.current.click();
     
      
      
    } catch (error) {
      console.error("Error adding keyword:", error);
     // setError(error.message); // Set error state
    }
  }

 
  // const handleAssign = (keyword) => {  
  //   // Handle the button click event
  //   const encryptedkeywordId = keyword.encCatId;
  //   console.log(encryptedkeywordId);

  //   navigate(`/AssignSubkeyword/${encryptedkeywordId}`);
  // }

  const handleConfirmDelete = async() => {
    const keyword = keywordToDelete;
    try {
      const userString =  sessionStorage.getItem('user');
      const user = JSON.parse(userString);
      const encUserId = user.encUserId;
  
      // Include both encUserId and encKeywordId in the payload
      const payload = {
        encUserId
      };
  
      // Perform delete operation using encKeywordId and encUserId
      const response = await axios.delete(`http://127.0.0.1:8000/api/keywords/${keyword.encCatId}`, { data: payload });      
      //console.log("Keyword deleted successfully:", response.data);
      
      // Refetch keywords after deletion
      fetchkeywords();
    } catch (error) {
      console.error("Error deleting keyword:", error);
    }
    //dispatch(getkeywords(updatedkeywords));
    setShowDeleteConfirmation(false);
    
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  // const handleAssign = (keyword) => {  
  //   // Handle the button click event
  //   const enckeywordId = .encCatId;
  //   console.log(enckeywordId);

  //   navigate(`/AssignSubkeyword/${enkeywordId}`);
  // }
    return (
      
      <div>
       
        <div style={{ marginTop: '2rem' }} className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="card-title">keywords</h4>
                      <button
                        type='button'
                        class='btn btn-primary'
                        data-toggle='modal'
                        data-target='#addUnitModal'
                      >
                        Add New
                      </button>
                    </div>
                    <div class='table-responsive'>
                      <table class='table table-striped table-bordered zero-configuration'>
                        <thead>
                          <tr>
                            <th>Sr no.</th>
                            <th>Keyword</th>

                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {keywords.map((keyword, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{keyword.keyword_name}</td> {/* Displaying the keyword name */}
                              <td>
                              <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                style={{ marginRight: "8px" }}
                                onClick={() => handleDelete(keyword)}
                              >
                                Delete
                              </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot></tfoot>
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
                {keywordToDelete && keywordToDelete.cat_name}?
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
                    Add New keyword
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
                    <label htmlFor="keywordName">keyword Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="keywordName"
                      placeholder="Enter keyword Name"
                      value={keywordName}
                      onChange={(e) => setNewkeywordName(e.target.value)}
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
                    style={{ marginTop: '0px' }}
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

  export default Keywords; 
