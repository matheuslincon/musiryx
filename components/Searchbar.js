function Searchbar({ search, setSearch }) {
  return (
    <div className="max-w-[1150px] bg-[#1a1a1a] rounded-full overflow-hidden border-2 border-[#333333] p-1.5 px-5 pr-8 flex items-center">
      <div className="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse"/>
      <input
        type="text"
        placeholder="Search...."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-[#1a1a1a] text-white border-none lg:w-full focus:ring-0 outline-none placeholder-[#fafafa]"
        />
        <div className="flex items-center">
          <div className="flex space-x-2 pr-5">
            <button className="tag">Rock</button>
            <button className="tag">Jazz</button>
            <button className="tag">Pop</button>
          </div>
        </div>
    </div>
  )
}

export default Searchbar
