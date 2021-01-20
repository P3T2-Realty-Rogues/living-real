import React from 'react';

function CreateUser() {
  return(
      <div>
          <h3>Add a User</h3>
          <form>
            <div>
            <label for="firstName"><b>First Name</b></label>
            <input type="text" placeholder="John" name="firstName"></input>

            <label for="lastName"><b>Last Name</b></label>
            <input type="text" placeholder="Smith" name="lastName"></input>

            <label for="email"><b>Email Address</b></label>
            <input type="text" placeholder="example@domain.com" name="email"></input>

            <label for="leaseDate"><b>Lease Date</b></label>
            <input type="text" placeholder="01/01/0101" name="date"></input>

            </div>
            <div>
                <button>Create User</button>
            </div>
          </form>
          
      </div>
  );
}

export default CreateUser