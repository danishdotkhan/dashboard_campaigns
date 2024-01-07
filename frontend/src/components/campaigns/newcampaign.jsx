const NewCampaign = () =>{
    return(
        <>
        
        <div className="flex flex-col gap-[111px] items-center justify-center h-[100vh] w-[100%]">
            <div className="flex flex-col gap-[6px] items-start justify-center">
            <div class="text-slate-800 text-xs font-normal font-['Work Sans'] leading-none">Campaign Title</div>
                <div className="h-[48px] w-[600px] bg-[#F3F5F7] rounded-lg">
                   <input
          type="text"
          className="w-full h-full px-[20px] py-[15px] border rounded-xl bg-gray-100 text-base focus:outline-none focus:border-blue-500 text-base" // Adjust the padding and other styles as needed
          placeholder="CEOs Reach"
        />
                </div>
            </div>
            <button className="  group">
                <div className="w-[200px] h-[48px]">
                    <div className="pl-[36px] pr-[12px] flex justify-between items-center  rounded-lg w-[200px] h-[48px] transition duration-300 ease-in-out group-hover:bg-sky-700  bg-[#0b84df]">
                            <div className=" text-center text-white text-base font-medium font-['Work Sans']">
                                Create Campaign
                            </div>
                    </div>
                </div>
            </button>
        </div>
        
        </>
    );
}

export default NewCampaign;