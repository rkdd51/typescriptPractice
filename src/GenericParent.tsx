import Generic from "./Generic";

// export interface User {
//   name: string;
//   id: number;
//   age: number;
// }
const GenericParent = () => {
  const users = [
    { id: 1, name: "Rahul", age: 55 },
    { id: 2, name: "Ravi", age: 65 },
    { id: 3, name: "Shivam", age: 75 }
  ];

  const orders = [
    { id: 1, name: "Rahul", age: 55 },
    { id: 2, name: "Ravi", age: 65 },
    { id: 3, name: "Shivam", age: 75 }
  ];
  return (
    <>
      <Generic items={users} />
      <br />
      <Generic items={orders} />
    </>
  );
};
export default GenericParent;
