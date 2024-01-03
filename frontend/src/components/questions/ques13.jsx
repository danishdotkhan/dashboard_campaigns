const Q13 = () => {
    return (
        <>

            <div class="shadow-xl shadow-cyan w-[640px] h-[506px] p-[40px] mx-[40px] flex flex-col justify-start items-start bg-white rounded-2xl border border-zinc-200">

                <div class="w-[640px] h-[42px] text-slate-800 text-2xl font-black font-['Gothic A1'] leading-10">Decision Maker Interests & Endorsements</div>
                <div class="w-[640px]  h-[26px]  text-slate-500 text-base font-normal font-['Work Sans'] tracking-wider  leading-relaxed">Enter the decision maker interests and endorsements from linked in</div>
                <div class="w-[550px] h-[48px] mt-[30px] flex   justify-between items-center gap-2 inline-flex  bg-[#F3F5F7] outline-none rounded-lg ">
                    <input type="text" placeholder="Type here (Press enter to add)" className="placeholder:text-slate-500 bg-transparent px-[20px] py-[15px] w-[100%] outline-none text-base font-normal font-['Work Sans']" />
                </div>
                <div className="mt-[30px] w-[550px] ">
                    <ul className="w-[100%] flex flex-wrap items-center justify-start gap-[10px]">
                        <li className="cursor-pointer bg-[#2A333F] py-[10px] px-[16px] rounded-3xl text-center text-white text-sm font-normal font-['Work Sans']">AI</li>
                        <li className="bg-[#2A333F] tracking-wider cursor-pointer py-[10px] px-[16px] rounded-3xl text-center text-white text-sm font-normal font-['Work Sans']">Artificial Intelligence</li>
                        <li className="bg-[#2A333F] tracking-wider cursor-pointer py-[10px] px-[16px] rounded-3xl text-center text-white text-sm font-normal font-['Work Sans']">ML</li>
                        <li className="bg-[#2A333F] tracking-wider cursor-pointer py-[10px] px-[16px] rounded-3xl text-center text-white text-sm font-normal font-['Work Sans']">chatGPT</li>
                    </ul>
                </div>
              <ul className="list-disc">  <li class="w-[560px] ml-[20px] mt-[180px] tracking-wider text-slate-500 text-base font-normal font-['Work Sans'] leading-relaxed">Click the bubble to remove</li></ul>
            
            </div>

        </>
    )
}
export default Q13;