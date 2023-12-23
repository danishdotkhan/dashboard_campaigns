

const Topbar = () => {
    return(
        <>

        <div className="w-[full] flex justify-between items-center">
        <div className="w-[87px] h-[20px]">
      <div className=" font-medium pl-[60px] pt-[15px]  [font-family:'Work_Sans-Medium',Helvetica] font-medium text-[#2a333f] text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
        Last 30 days
      </div>
    </div>
        <div className="flex justify-between items-center gap-[40px]">

            <button className="pt-[26px]">
                <div className="w-[200px] h-[48px]">
                    <div className="rounded-lg w-[200px] h-[48px]  bg-[#e3e5e7]" >
                        <div className=" h-[48px] flex items-center justify-center font-family:'Work_Sans-Medium',Helvetica]  font-medium text-[#0b84df] text-[16px] text-center tracking-[0]  whitespace-nowrap">
                            Modify Widgets
                        </div>
                    </div>
                </div>
            </button>

            <button className=" pt-[26px] pr-[40px]">
                <div className="w-[200px] h-[48px]">
                    <div className="pl-[36px] pr-[12px] flex justify-between items-center  rounded-lg w-[200px] h-[48px]  bg-[#0b84df]">
                            <div className=" h-[48px] flex items-center justify-center font-family:'Work_Sans-Medium',Helvetica] font-medium text-white text-[16px] text-center tracking-[0]  whitespace-nowrap">
                                Create New
                            </div>
                            <div>
                            <svg width="2" height="26" viewBox="0 0 2 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L0.999999 25" stroke="white" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round"/>
                            </svg>

                            </div>
                            <div>
                                <img src="../src/assets/arrowdown.svg" />
                            </div>
                    </div>
                </div>
            </button>

        </div>
        </div>

        <div className="pt-[40px] pl-[40px] pr-[40px] w-[full] flex justify-between items-center gap-[20px] overflow-x-scroll chrome-scrollbar-hidden ">
           <div className="w-[236px] h-[100px]">
            <div className="w-[226px] h-[100px] top-0 left-0">
                <div className="rounded-custom2 relative w-[226px] h-[100px] top-0 left-0 bg-white rounded-20px border border-solid border-#e3e5e7">
                    <div className="font-semibold absolute top-[24px] left-[89px] [font-family:'Work_Sans_Medium' , 'Helvetica'] font-medium text-[#2a333f] text-[12px] tracking-[0] leading-[16.8px] whitespace-nowrap">
                        Total Sent
                    </div>
                    <div className="text-slate-800 absolute top-[50px] left-[89px] text-xl font-semibold font-['All Round Gothic'] leading-normal whitespace-nowrap">
                        356
                    </div>
                    
                    <div className=" rounded-custom1 relative h-[60px] w-[60px] bg-[#f3f5f7] top-[18px] left-[15px]">
                        <img className="absolute h-[24px] w-[24px] top-[18px] left-[18px]" src="../src/assets/listarrowdown.svg" alt="vector" />
                    </div>
                </div>
            </div>
           </div>
           <div className="w-[236px] h-[100px]">
            <div className="w-[226px] h-[100px] top-0 left-0">
                <div className="rounded-custom2 relative w-[226px] h-[100px] top-0 left-0 bg-white rounded-20px border border-solid border-#e3e5e7">
                    <div className="font-semibold absolute top-[24px] left-[89px] [font-family:'Work_Sans_Medium' , 'Helvetica'] font-medium text-[#2a333f] text-[12px] tracking-[0] leading-[16.8px] whitespace-nowrap">
                        Open Rate
                    </div>
                    <div className="text-slate-800 absolute top-[50px] left-[89px] text-xl font-semibold font-['All Round Gothic'] leading-normal whitespace-nowrap">
                        576
                    </div>
                    
                    <div className="rounded-custom1 relative h-[60px] w-[60px] bg-[#f3f5f7] top-[18px] left-[15px]">
                        <img className="absolute h-[24px] w-[24px] top-[18px] left-[18px]" src="../src/assets/message.svg" alt="vector" />
                    </div>
                </div>
            </div>
           </div>
           <div className="w-[236px] h-[100px]">
            <div className="w-[226px] h-[100px] top-0 left-0">
                <div className="rounded-custom2 relative w-[226px] h-[100px] top-0 left-0 bg-white rounded-20px border border-solid border-#e3e5e7">
                    <div className="font-semibold absolute top-[24px] left-[89px] [font-family:'Work_Sans_Medium' , 'Helvetica'] font-medium text-[#2a333f] text-[12px] tracking-[0] leading-[16.8px] whitespace-nowrap">
                        Click Rate
                    </div>
                    <div className="text-slate-800 absolute top-[50px] left-[89px] text-xl font-semibold font-['All Round Gothic'] leading-normal whitespace-nowrap">
                        356
                    </div>
                    
                    <div className="rounded-custom1 relative h-[60px] w-[60px] bg-[#f3f5f7] top-[18px] left-[15px]">
                        <img className="absolute h-[24px] w-[24px] top-[18px] left-[18px]" src="../src/assets/cursor.svg" alt="vector" />
                    </div>
                </div>
            </div>
           </div>
           <div className="w-[236px] h-[100px]">
            <div className="w-[226px] h-[100px] top-0 left-0">
                <div className="rounded-custom2 relative w-[226px] h-[100px] top-0 left-0 bg-white rounded-20px border border-solid border-#e3e5e7">
                    <div className="font-semibold absolute top-[24px] left-[89px] [font-family:'Work_Sans_Medium' , 'Helvetica'] font-medium text-[#2a333f] text-[12px] tracking-[0] leading-[16.8px] whitespace-nowrap">
                        Reply Rate
                    </div>
                    <div className="text-slate-800 absolute top-[50px] left-[89px] text-xl font-semibold font-['All Round Gothic'] leading-normal whitespace-nowrap">
                        2356
                    </div>
                    
                    <div className=" rounded-custom1 relative h-[60px] w-[60px] bg-[#f3f5f7] top-[18px] left-[15px]">
                        <img className="absolute h-[24px] w-[24px] top-[18px] left-[18px]" src="../src/assets/conversation.svg" alt="vector" />
                    </div>
                </div>
            </div>
           </div>
           <div className="w-[236px] h-[100px]">
            <div className="w-[226px] h-[100px] top-0 left-0">
                <div className="rounded-custom2 relative w-[226px] h-[100px] top-0 left-0 bg-white rounded-20px border border-solid border-#e3e5e7">
                    <div className="font-semibold absolute top-[24px] left-[89px] [font-family:'Work_Sans_Medium' , 'Helvetica'] font-medium text-[#2a333f] text-[12px] tracking-[0] leading-[16.8px] whitespace-nowrap">
                        Opportunities
                    </div>
                    <div className="text-slate-800 absolute top-[50px] left-[89px] text-xl font-semibold font-['All Round Gothic'] leading-normal whitespace-nowrap">
                        896
                    </div>
                    
                    <div className="rounded-custom1 relative h-[60px] w-[60px] bg-[#f3f5f7] top-[18px] left-[15px]">
                        <img className="absolute h-[24px] w-[24px] top-[18px] left-[18px]" src="../src/assets/suitcase.svg" alt="vector" />
                    </div>
                </div>
            </div>
           </div>
        </div>
       
        </>
    )
}
export default Topbar;