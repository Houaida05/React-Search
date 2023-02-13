interface SearchProps {
  list: string[];
  searchList: string[];
  setSearchList: React.Dispatch<React.SetStateAction<string[]>>;
}

const Search = (props: SearchProps) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const result = props.list.filter((item) => {
        return item.toLowerCase().includes(keyword.toLowerCase());
      });
      props.setSearchList(result);
    } else {
      props.setSearchList(props.list);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Search" onChange={handleSearchChange} />
      {props.searchList.map((fruit, key) => {
        return <p key={key}>{fruit}</p>;
      })}
    </div>
  );
};

export default Search;
