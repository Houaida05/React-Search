import { useState } from "react";

const FruitTs = () => {
  const fruits = [
    "Banana",
    "Apple",
    "Pomegranate",
    "Orange",
    "Strawberry",
    "Lemon",
  ];
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <div>
      <p> FruitsTs</p>
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <p>
        {fruits
          .filter((fruit) => {
            if (fruit.toLowerCase().includes(searchTerm.toLowerCase()))
              return fruit;
          })
          .map((fruit, key) => {
            return <div>{fruit}</div>;
          })}
      </p>
    </div>
  );
};

export default FruitTs;
