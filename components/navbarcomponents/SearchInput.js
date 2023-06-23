const SearchInput = () => {
  return (
    <div className="flex items-center border-2 border-blue-500 rounded">
      <div>
        <input
          className="py-1 focus:outline-none pl-1 border-r-2 border-r-blue-300"
          placeholder="Search"
        />
      </div>
      <div className="">
        <select className="px-3 py-1 outline-none">
          <option>All category</option>
          <option>All category1</option>
          <option>All category2</option>
          <option>All category3</option>
          <option>All category4</option>
          <option>All category5</option>
        </select>
      </div>
      <button className="bg-blue-500 px-6 py-1 text-white">Search</button>
    </div>
  );
};

export default SearchInput;
