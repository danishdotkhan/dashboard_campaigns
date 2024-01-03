import React, { useState } from 'react';

const Q21 = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const handleToggle = () => {
        setIsChecked(true);
        setIsChecked2(false);
      };
    
      const handleToggle2 = () => {
        setIsChecked(false);
        setIsChecked2(true);
      };
    return (
        <>
            <div class="w-[640px] h-[506px] p-[40px] mx-[40px] flex flex-col justify-start items-start bg-white rounded-2xl border border-zinc-200">
                <div class="w-[560px] h-[42px] text-slate-800 text-2xl font-black font-['Gothic A1'] leading-10">Patent Filings and Intellectual Property Information</div>
                <div class="w-[560px]  h-[26px]  text-slate-500 text-base font-normal font-['Work Sans'] leading-relaxed flex flex-wrap ">Would you like to include patent filings and intellectual property information in the search</div>
                <div class="w-[550px] mt-[30px] flex  flex-col justify-center items-start gap-[40px]">

<div class="flex justify-start items-center gap-[16px]">
<input type="radio" checked={isChecked} onChange={handleToggle} id="option13" name="radioGroup" class="hidden"/>
<label for="option13" class="flex justify-start items-center gap-[16px] cursor-pointer tracking-wider text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="11" fill="white" stroke="#089CB3" stroke-width="2"/>
<circle cx="12" cy="12" r="7" fill={isChecked ? '#089CB3' : 'white'} />
</svg>
<span class="ml-2">Include</span>
</label>
</div>
<div class="flex justify-start items-center gap-[16px]">
<input type="radio" checked={isChecked2} onChange={handleToggle2} id="option20" name="radioGroup2" class="hidden" />
<label for="option20" class="flex justify-start items-center gap-[16px] cursor-pointer tracking-wider text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="11" fill="white" stroke="#089CB3" stroke-width="2"/>
<circle cx="12" cy="12" r="7" fill={isChecked2 ? '#089CB3' : 'white'} />
</svg>
<span class="ml-2">Don't Include</span>
</label>
</div>

</div>
            
            
            </div>
        </>
    )
}
export default Q21;