import React, { useState } from 'react';

const Q17 = () => {

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
                <div class="w-[560px] h-[42px] text-slate-800 text-2xl font-black font-['Gothic A1'] leading-10">Public Financial Reports and Earnings Calls</div>
                <div class="w-[560px]  h-[26px]  text-slate-500 text-base font-normal font-['Work Sans'] leading-relaxed">Would you like to include Public Financial Reports and Earnings Calls in the search?</div>
                <div class="w-[550px] mt-[60px] flex  flex-col justify-center items-start gap-[40px]">

<div class="flex justify-start items-center gap-[16px]">
<input type="radio" checked={isChecked} onChange={handleToggle} id="option7" name="radioGroup" class="hidden"/>
<label for="option7" class="flex justify-start items-center gap-[16px] cursor-pointer tracking-wider text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="11" fill="white" stroke="#089CB3" stroke-width="2"/>
<circle cx="12" cy="12" r="7" fill={isChecked ? '#089CB3' : 'white'} />
</svg>
<span class="ml-2">Include</span>
</label>
</div>
<div class="flex justify-start items-center gap-[16px]">
<input type="radio" checked={isChecked2} onChange={handleToggle2} id="option8" name="radioGroup2" class="hidden" />
<label for="option8" class="flex justify-start items-center gap-[16px] cursor-pointer tracking-wider text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">
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
export default Q17;