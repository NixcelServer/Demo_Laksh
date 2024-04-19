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
                                                <th>Category</th>
                                                <th>Subcategory</th>
                                                <th>Action</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            
                                           
                                            <tr>
                                                <td>-</td>
                                                <td>- </td>
                                                <td>-</td>
                                                
                                            </tr>
                                            <tr>
                                                
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
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
