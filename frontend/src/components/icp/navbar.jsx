const Navbar = () => {
    return (
      <>
        <div className="w-full h-[80px] flex justify-between items-center text-black bg-white border border-x-0">
          <div className="ml-10"><div class="text-slate-800 text-2xl font-semibold font-gothic tracking-wider leading-10">ICP</div></div>
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
  