import React, { useState } from "react";


function Properties() {

  const [properties] = useState([
    {
      id: 1,
      name: 'Home1',
      description: '',
    },
    {
      id: 2,
      name: 'Home1',
      description: '',
    },
    {
      id: 3,
      name: 'Home1',
      description: '',
    },
  ])

  return (
    <div>
      {properties.map((image) => (
        <img key={image.id} 
          alt={image.name}
          src={require(`../../assets/images/${image.id}.jpg`)}>
        </img>
      ))}
    </div>
  );
}

export default Properties;
