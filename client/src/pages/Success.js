import React, { useEffect } from "react";
import Jumbotron from "../components/Jumbotron";

function Success() {
  useEffect(() => {
    async function savePayment() {
      setTimeout(() => {
        window.location.assign("/");
      }, 3000);
    }

    savePayment();
  });

  return (
    <div>
      <Jumbotron>
        <h1>Success!</h1>
        <h2>Thank you for your payment!</h2>
        <h2>You will be redirected to the home page in a moment.</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;
