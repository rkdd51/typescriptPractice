import { useState } from "react";
import { User } from "./Interface";
const State = () => {
  const [value, setValue] = useState<User | null>(null);

  const fetchData = () => {
    setValue({
      name: "Rahul",
      place: "Ahmedabad",
      age: 23,
      address: {
        area: "Makarba",
        pincode: 400104,
        building: "B"
      }
    });
  };

  return (
    <>
      <button onClick={fetchData}>Click</button>
      <br />
      {value?.name}
      <br />
      {value?.place}
      <br />
      {value?.age}
      <br />
      {value?.address.area}
      {value?.address.pincode}
      {value?.address.building}
    </>
  );
};

export default State;
