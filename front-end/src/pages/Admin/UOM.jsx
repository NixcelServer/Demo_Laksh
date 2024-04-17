



const UOM = () => {
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
                  <h4 class='card-title'>Unit of Measurements</h4>
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
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>00</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>63</td>
                        <td>2011/07/25</td>
                        <td>00</td>
                      </tr>
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
                  Add New Unit of Measurement
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
                  <label for='unitName'>Unit of Measurement</label>
                  <input
                    type='text'
                    className='form-control'
                    id='unitName'
                    placeholder='Enter UOM Name'
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
                <button type='submit' class='btn btn-primary'>
                  Save changes
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
  
  export default UOM;