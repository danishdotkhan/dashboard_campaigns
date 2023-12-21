const SearchInput = () => {
  return (
    <>
      <div className="relative w-[340px] h-12 ">
        {" "}
        {/* w-[340px] h-[48px] can be used if you have extended Tailwind's config */}
        <input
          type="text"
          className="w-full h-full pr-4 pl-12 py-2 border rounded-xl bg-gray-100 text-base focus:outline-none focus:border-blue-500 text-base" // Adjust the padding and other styles as needed
          placeholder="Search"
        />
        <img
          className="absolute top-1/2 left-3 transform -translate-y-1/2" // Adjust right and translate-y as needed
          src="../src/assets/search_icon.svg"
          alt="Search"
        />
      </div>
    </>
  );
};

export default SearchInput;
