const Navbar = () => {
  return (
    <>
      <div className="w-full h-[80px] flex justify-between items-center text-black bg-white border ">
        <div className="text-[25px] ml-10">Campaigns</div>
        <div className="flex gap-6 items-center">
          <div>
            <img src="../src/assets/Settings.svg" alt="" />
          </div>
          <div>
            <img src="../src/assets/navbar_bell.svg" alt="" />
          </div>
          <div className="flex gap-3 items-center">
            <span>John</span>
            <img src="../src/assets/avatar.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
