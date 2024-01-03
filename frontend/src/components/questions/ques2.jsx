const Q2 = () => {
    return (
        <>

            <div class="shadow-xl shadow-cyan w-[640px] h-[506px] p-[40px] mx-[40px] flex flex-col justify-start items-start bg-white rounded-2xl border border-zinc-200">

                <div class="w-[640px] h-[42px] text-slate-800 text-2xl font-black font-['Gothic A1'] leading-10">Geographic Location</div>
                <div class="w-[640px]  h-[26px]  text-slate-500 text-base font-normal font-['Work Sans']  tracking-wider leading-relaxed">Enter the city and state</div>
                <div class="w-[550px] h-[48px] mt-[30px] flex justify-between items-center gap-2 inline-flex  bg-white outline-none rounded-lg border border-zinc-200">

                    <select id="exampleSelect" name="exampleSelect" class=" cursor-pointer text-slate-500 text-base  bg-white outline-none rounded-lg border border-zinc-200 font-['Work Sans'] p-[13px] w-[550px] h-[48px] ">
                        <option className="w-[560px] h-[50px] text-slate-500 text-base tracking-wider  font-normal font-['Work Sans']" value="" disabled selected>Select</option>
                        <option className="w-[560px] h-[48px] text-slate-500 text-base tracking-wider  font-normal font-['Work Sans']" value="option1">Option 1</option>
                        <option className="w-[560px] h-[48px] text-slate-500 text-base tracking-wider  font-normal font-['Work Sans']" value="option2">Option 2</option>
                        <option className="w-[560px] h-[48px] text-slate-500 text-base tracking-wider  font-normal font-['Work Sans']" value="option3">Option 3</option>
                    </select>

                    

                </div>
            </div>

        </>
    )
}
export default Q2;