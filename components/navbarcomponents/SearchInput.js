const SearchInput = () => {
  return (
    <div className="flex items-center border-2 border-blue-500 rounded">
      <div>
        <input className="py-1 focus:outline-none pl-1 border-r-2 border-r-blue-300" placeholder="Search" />
      </div>
      <div className="">
        <select>
          <option>All category</option>
        </select>
      </div>
      <button className="bg-blue-500">Search</button>
    </div>
  );
};

export default SearchInput;
