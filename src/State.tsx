import { useState } from "react";
import { User } from "./Interface";
const State = () => {
  const [value, setValue] = useState<User | null>(null);

  const fetchData = () => {
    setValue({
      name: "Rahul",
      place: "Ahmedabad",
      age: 23
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
    </>
  );
};

export default State;
