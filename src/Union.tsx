import React, { useState } from "react";
const Union = () => {
  type CheckOutStep = "Details" | "Shipping" | "Payment";
  const [checkOutStep, setCheckOutStep] = useState<CheckOutStep>("Details");
  return (
    <>
      {checkOutStep === "Details" && (
        <>
          <h1>Details</h1>
          <button onClick={() => setCheckOutStep("Shipping")}>Next</button>
        </>
      )}
      {checkOutStep === "Shipping" && (
        <>
          <h1>Shipping</h1>
          <button onClick={() => setCheckOutStep("Payment")}>Next</button>
        </>
      )}
      {checkOutStep === "Payment" && (
        <>
          <h1>Details</h1>
        </>
      )}
    </>
  );
};
export default Union;
