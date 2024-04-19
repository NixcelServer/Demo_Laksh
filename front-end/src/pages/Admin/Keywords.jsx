import { useNavigate } from "react-router-dom";
import { getKeywords } from "../../redux/Admin/Keywords/keyword.action";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";




const Keywords = () => {
  const navigate = useNavigate;
  const keywords = useSelector(state => state.keywordReducer.keywords);
  console.log("delete", keywords);

  const dispatch = useDispatch();

  const [keywordName, setNewKeywordName] = useState("");

  const fetchKeywords = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/keywords");
      const keywords = response.data // Assuming the category data is under the "message" key
      //console.log("delete", keywords)

      dispatch(getKeywords(keywords));

    } catch (error) {
      console.error("Error fetching keywords:", error);
      return null; // Return null or handle the error as needed
    }

  };

  useEffect(() => {
    fetchKeywords();
  }, []);

  const handleSaveChanges = async () => {
    const userString = sessionStorage.getItem('user');
    // Parse the user object from the string format stored in sessionStorage
    const user = JSON.parse(userString);

    // Retrieve the encUserId from the user object
    const encUserId = user.encUserId;
    console.log(encUserId);

    const payload = {
      keywordName, encUserId
    }
    console.log(payload);
    debugger;

    try {

      const response = await axios.post("http://127.0.0.1:8000/api/keywords", payload);
      console.log("Keyword added successfully:", response.data);
      
      navigate("/keywords");
    } catch (error) {
      console.error("Error adding category:", error);
      // setError(error.message); // Set error state
    }
  }
    return (
      <div>
        <div class='content-body'>
          <div class='row page-titles mx-0'>
            <div class='col p-md-0'>
              <ol class='breadcrumb'>
                <li class='breadcrumb-item'>
                  <a href='#'>Dashboard</a>
                </li>
                <li class='breadcrumb-item active'>
                  <a href='#'>Home</a>
                </li>
              </ol>
            </div>
          </div>
          <div class='container-fluid'>
            <div class='row'>
              <div class='col-12'>
                <div class='card'>
                  <div class='card-body'>
                    <div class='d-flex justify-content-between align-items-center mb-3'>
                      <h4 class='card-title'>Keywords</h4>
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
                                <button>Delete</button>
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

          {/* <!-- Add Unit Modal --> */}
          <div
            class='modal fade'
            id='addUnitModal'
            tabindex='-1'
            role='dialog'
            aria-labelledby='addUnitModalLabel'
            aria-hidden='true'
          >
            <div class='modal-dialog' role='document'>
              <div class='modal-content'>
                <form>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='addUnitModalLabel'>
                      Add New Keyword
                    </h5>
                    <button
                      type='button'
                      class='close'
                      data-dismiss='modal'
                      aria-label='Close'
                    >
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <div class='form-group'>
                      <label for='unitName'>Keyword</label>
                      <input
                        type='text'
                        className='form-control'
                        id='unitName'
                        placeholder='Enter Keyword'
                        value={keywordName} // Bind value to state
                        onChange={(e) => setNewKeywordName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class='modal-footer'>
                    <button
                      type='button'
                      class='btn btn-secondary'
                      data-dismiss='modal'
                    >
                      Close
                    </button>
                    <button type='submit' class='btn btn-primary' onClick={handleSaveChanges} />
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
