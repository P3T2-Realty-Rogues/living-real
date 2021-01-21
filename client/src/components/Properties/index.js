import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { ADD_PROPERTY } from "../../utils/actions";
import { useQuery } from "@apollo/react-hooks";

// import { QUERY_PROPERTY } from "../../utils/queries";
// import { UPDATE_PROPERTY } from "../../utils/actions";

function Properties() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // const [properties] = state;

  // const { loading, data } = useQuery(QUERY_PROPERTY);

  //   useEffect(() => {
  //     if (data) {
  //       dispatch({
  //         type: UPDATE_PROPERTY,
  //         properties: data.properties
  //     })
  //   }
  // })
  const [properties] = useState([
    {
      id: 1,
      name: "Home1",
      description: "LOREM IPSUM",
    },
    {
      id: 2,
      name: "Home2",
      description: "IPSUM LOREM",
    },
    {
      id: 3,
      name: "Home3",
      description: "SOME TEXT",
    },
  ]);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   dispatch([...properties]);
  //   // console.log(property);
  // };

  // console.log([properties]);

  // <div>
  //    {properties.map((image) => (
  //       <img key={image.id}
  //         alt={image.name}
  //         // width="300" height="auto"
  //         src={require(`../../assets/images/properties/${image.id}.jpg`)}
  //         // onClick={handleClick}
  //         >
  //       </img>
  //     ))}
  //   </div>

  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop="true">
      {properties.map((image) => (
        <Link to={`/detail/${image.id}`} key={image.id}>
          <div key={image.id} className="image-container">
            <img
              key={image.id}
              alt={image.name}
              width="300"
              height="auto"
              src={require(`../../assets/images/properties/${image.id}.jpg`)}
              // onClick={handleClick}
            ></img>
            <button
              className="legend"
              id="legend"
              // onClick={handleClick}
            >
              {image.name}
            </button>
          </div>
        </Link>
      ))}
      {/* <img src={require("../../assets/images/properties/1.jpg")} />
        <button className="legend" id="legend">
          Home 1
        </button>
      </div>
      <div>
        <img src={require("../../assets/images/properties/2.jpg")} />
        <button className="legend" id="legend">
          Home 2
        </button>
      </div>
      <div>
        <img src={require("../../assets/images/properties/3.jpg")} />
        <button className="legend" id="legend">
          Home 3
        </button> */}
    </Carousel>
  );
}

export default Properties;
