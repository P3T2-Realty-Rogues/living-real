import React from "react";


////////////////////////////////////////////////////////////////////////////////////////
function Detail() {


    return (
        <>
        {/* General home pictures and info */}
         <header>
             <div>
               Image carousel of home views goes here...
             </div>

             <h1>Property Name: Home 1</h1>
             <h3>Address: street, city, state, zip</h3>
         </header>

         <div>
             {/* Property description */}
             <h2>Home Description: </h2>
             <p>lorem ipsum</p>
         </div>

         <div>
             {/* Property details and amenities */}
             Table of property details
         </div>

         {/* Ability to apply for this property */}
         <button>Apply Now</button>
        </>
    );
};

export default Detail;