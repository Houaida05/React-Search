import { useState } from "react";
import SearchBar from "./SearchBar";

const SearchTs = () => {
  const fruits = [
    "Banana",
    "Apple",
    "Pomegranate",
    "Orange",
    "Strawberry",
    "Lemon",
  ];
  const [searchList, setSearchList] = useState<string[]>(fruits);
  return (
    <SearchBar
      list={fruits}
      searchList={searchList}
      setSearchList={setSearchList}
    />
  );
};
export default SearchTs;
