import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Properties() {
  const state = useSelector((state) => state);
  // const dispatch = useDispatch();

  // const { properties } = state;
  // // console.log(properties);

  // // console.log(state);
  

  // useEffect(() => {
  //   if (data) {
  //     dispatch({
  //       type: UPDATE_PROPERTIES,
  //       properties: data.properties,
  //     });
  //   }
  // }, [dispatch, data]);
  // const hardProperties = [
  //   {
  //     id: 1,
  //     name: "Home1",
  //     description: "LOREM IPSUM",
  //   },
  //   {
  //     id: 2,
  //     name: "Home2",
  //     description: "IPSUM LOREM",
  //   },
  //   {
  //     id: 3,
  //     name: "Home3",
  //     description: "SOME TEXT",
  //   },
  // ];

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   dispatch([...properties]);
  //   // console.log(property);
  // };

  return (
    <Carousel className="card" showThumbs={false} autoPlay infiniteLoop="true">
      {state.properties.map((image,index) => (
        <Link to={`/detail/${image._id}`} key={image._id}>
          <div key={image._id} className="carousel">
            <img
              key={image._id}
              alt={image.propertyName}
              width="300"
              height="auto"
              src={(`https://living-real-bucket.s3.us-east-2.amazonaws.com/properties/` + image.zipCode + `.jpg`)}
              // src={require(`../../assets/images/properties/${image.zipCode}.jpg`)}
              // onClick={handleClick}
            ></img>
            <button
              className="btn"
              id="legend"
              // onClick={handleClick}
            >
              {image.propertyName}
            </button>
          </div>
        </Link>
      ))}
    </Carousel>
  );
}

export default Properties;
