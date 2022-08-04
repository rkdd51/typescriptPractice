import React from "react";

interface AppType {
  headerName: string;
  surname?: string;
}
const Props = ({ headerName, surname }: AppType) => {
  return (
    <>
      <h2>
        {headerName} {surname} is a Prop passed from App component.
      </h2>
    </>
  );
};

export default Props;
