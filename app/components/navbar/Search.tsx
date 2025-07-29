
const Search = () => {
  return (
    <div className="hidden md:flex flex-1"> 
        <input className="py-2 px-3 border-none outline-none flex flex-1" type="text" placeholder="Search Item" />
        <button className="p-2 bg-brand-textlogo text-sm border-transparent rounded-md">Search</button>
    </div>
  );
};

export default Search;