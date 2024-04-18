import axios from "axios";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/Admin/Category/category.action";
import { useNavigate } from "react-router-dom";

import './Categories.css';


const Categories = () => {
  const navigate = useNavigate();
  const categories = useSelector(state => state.categoryReducer.categories);
  console.log(categories);
  const dispatch = useDispatch();

  const [categoryName, setNewCategoryName] = useState("");

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/categories");
      const categories = response.data // Assuming the category data is under the "message" key
     // console.log("delete", categories)
      dispatch(getCategories(response.data));

    } catch (error) {
      console.error("Error fetching categories:", error);
      return null; // Return null or handle the error as needed
    }

  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSaveChanges = async () => {
    
    const payload ={
      categoryName,   
    }
    console.log(payload);
    try {
      
      debugger;
      const response = await axios.post("http://127.0.0.1:8000/api/categories", payload);
      console.log("Category added successfully:", response.data);
      debugger;
      navigate("/categories");
    } catch (error) {
      console.error("Error adding category:", error);
     // setError(error.message); // Set error state
    }

    
  
  // useEffect(()=>{
  //   if(error){
  //     toast({
  //       title: error,
  //       status: 'error',
  //       duration: 1000,
  //       isClosable: true,
  //     })
  //   }
  //   if(isLogin){
  //     toast({
  //       title: 'Login Sucessfull.',
  //       status: 'success',
  //       duration: 1000,
  //       isClosable: true,
  //     })
  //     navigate('/adminDashboard'),
  //     setNewCategoryName("");
  //   }

  // },[error,isLogin])
    
  };

  //console.log("hii from categories", categories);
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
                    <h4 class='card-title'>Category</h4>
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
                          <th>Category Name</th>

                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories.map((category, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{category.cat_name}</td> {/* Accessing the 'cat_name' property */}
                            <td>{category.add_date}</td> {/* Accessing the 'add_date' property */}
                            {/* Accessing the 'add_time' property */}
                            <td>
                              {/* Action buttons */}
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
                    Add New Category
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
                    <label for='categoryName'>Category Name</label>
                    <input
                      type='text'
                      className='form-control'
                      id='categoryName'
                      placeholder='Enter Category Name'
                      value={categoryName} // Bind value to state
                      onChange={(e) => setNewCategoryName(e.target.value)}
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
                  <button type='submit' class='btn btn-primary' onClick={handleSaveChanges}>
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