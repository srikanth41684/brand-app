const SearchInput = async () => {
  return (
    <div className="flex w-full items-center border-2 border-blue-500 rounded">
      <div className="w-[67%]">
        <input
          className="py-1 w-full focus:outline-none pl-1 border-r-2 border-r-blue-300"
          placeholder="Search"
        />
      </div>
      <div className="w-[20%]">
        <select className="px-3 w-full py-1 outline-none">
          <option>All category</option>
          <option>All category1</option>
          <option>All category2</option>
          <option>All category3</option>
          <option>All category4</option>
          <option>All category5</option>
        </select>
      </div>
      <div className="w-[13%]">
        <button className="bg-blue-500 w-full px-6 py-1 text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
