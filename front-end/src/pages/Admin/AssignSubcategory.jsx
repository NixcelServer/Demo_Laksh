import React, { useState } from 'react';
import './FormComponent.css'; // Import CSS file for custom styling

const FormComponent = () => {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log('Category:', category);
    console.log('Subcategory:', subcategory);
    // Reset form fields
    setCategory('');
    setSubcategory('');
  };

  return (
    <div class="container">
  <div class="card">
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
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category name"
              required
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




    
    <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Data Table</h4>
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered zero-configuration">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Position</th>
                                                <th>Office</th>
                                                <th>Age</th>
                                                <th>Start date</th>
                                                <th>Salary</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            
                                           
                                            <tr>
                                                <td>Michael Bruce</td>
                                                <td>Javascript Developer</td>
                                                <td>Singapore</td>
                                                <td>29</td>
                                                <td>2011/06/27</td>
                                                <td>$183,000</td>
                                            </tr>
                                            <tr>
                                                <td>Donna Snider</td>
                                                <td>Customer Support</td>
                                                <td>New York</td>
                                                <td>27</td>
                                                <td>2011/01/25</td>
                                                <td>$112,000</td>
                                            </tr>
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
