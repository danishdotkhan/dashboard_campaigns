const Faq = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 mt-[40px] mx-[40px] mb-[5px]  w-[full] h-[full] bg-white">

                <div className="w-[100%] flex flex-col gap-[40px]">
                    <div class="w-96 text-slate-500 text-base font-normal font-['Work Sans'] leading-snug">Some frequently asked questions are as follows.</div>
                    <div className="flex flex-col gap-[10px]">
                        <div className="w-96 text-slate-800 text-base font-bold font-['Work Sans'] leading-snug">How can I create a new campaign</div>
                        <div>
                        <div className="w-[100%]"><span className="text-slate-800 text-base font-normal font-['Work Sans'] leading-7">Here are 3 simple steps to create a campaign<br/></span>
                        <span className="text-slate-800 text-base font-normal font-['Work Sans'] leading-7">
                            <ul className="list-disc ml-6">
                           <li>Go to the campaigns page (3rd tab on the left nav bar)</li>
                           <li>Click on the “Create New Campaign” Button</li>
                           <li>Enter the title for your brand new campaign and click “Create Campaign” Button</li>
                            </ul>
                        </span>
                        <span className="text-slate-800 text-base font-normal font-['Work Sans'] leading-7">To watch a tutorial click </span>
                        <span className="cursor-pointer text-blue-500 text-base font-normal font-['Work Sans'] underline leading-7">here</span></div>
                        </div>
                        
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <div className="w-96 text-slate-800 text-base font-bold font-['Work Sans'] leading-snug">How can I create a new campaign</div>
                        <div>
                        <div className="w-[100%]"><span className="text-slate-800 text-base font-normal font-['Work Sans'] leading-7">Here are 3 simple steps to create a campaign<br/></span>
                        <span className="text-slate-800 text-base font-normal font-['Work Sans'] leading-7">
                            <ul className="list-disc ml-6">
                           <li>Go to the campaigns page (3rd tab on the left nav bar)</li>
                           <li>Click on the “Create New Campaign” Button</li>
                           <li>Enter the title for your brand new campaign and click “Create Campaign” Button</li>
                            </ul>
                        </span>
                        <span className="text-slate-800 text-base font-normal font-['Work Sans'] leading-7">To watch a tutorial click </span>
                        <span className="cursor-pointer text-blue-500 text-base font-normal font-['Work Sans'] underline leading-7">here</span></div>
                        </div>
                        
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <div className="w-96 text-slate-800 text-base font-bold font-['Work Sans'] leading-snug">How can I create a new campaign</div>
                        <div>
                        <div className="w-[100%]"><span className="text-slate-800 text-base font-normal font-['Work Sans'] leading-7">Here are 3 simple steps to create a campaign<br/></span>
                        <span className="text-slate-800 text-base font-normal font-['Work Sans'] leading-7">
                            <ul className="list-disc ml-6">
                           <li>Go to the campaigns page (3rd tab on the left nav bar)</li>
                           <li>Click on the “Create New Campaign” Button</li>
                           <li>Enter the title for your brand new campaign and click “Create Campaign” Button</li>
                            </ul>
                        </span>
                        <span className="text-slate-800 text-base font-normal font-['Work Sans'] leading-7">To watch a tutorial click </span>
                        <span className="cursor-pointer text-blue-500 text-base font-normal font-['Work Sans'] underline leading-7">here</span></div>
                        </div>
                        
                    </div>

                </div>
                
                <div className="w-[100%] flex flex-col gap-[10px]">
                <div class="w-[100%] text-cyan-600 text-base font-bold font-['Work Sans'] leading-snug">Need more help?</div>
                <div class="w-[100%] text-slate-500 text-base font-normal font-['Work Sans'] leading-snug">Type your question/query in the details text field and hit submit...</div>

                <form className="mt-[40px]">
      
      <div class="mb-[20px]">
        <label for="name" class="mb-[6px] block text-slate-800 text-xs font-normal font-['Work Sans'] leading-none">Name</label>
        <input type="text" id="name" name="name" placeholder="John Doe" class="focus:outline-none focus:ring border placeholder-slate-500  focus:placeholder-opacity-0 focus:border-sky-300 bg-[#F3F5F7] border-none w-[100%] rounded-lg px-[20px] py-[15px] placeholder-slate-500 placeholder-base placeholder-normal " />
      </div>

     
      <div class="mb-[20px]">
        <label for="subject" class="mb-[6px] block text-slate-800 text-xs font-normal font-['Work Sans'] leading-none">Subject</label>
        <input type="text" id="subject" name="subject"  placeholder="How to generate leads?" class=" bg-[#F3F5F7] focus:outline-none focus:ring  focus:placeholder-opacity-0 placeholder-slate-500 border-none  rounded-lg px-[20px] py-[15px] w-full border border-[1px] focus:border-sky-300" />
      </div>

    
      <div class="mb-[128px] relative">
        <label for="description" class="mb-[6px] block text-slate-800 text-xs font-normal font-['Work Sans'] leading-none">Description</label>
        <textarea id="description" name="description" rows="4" class=" focus:outline-none focus:ring bg-[#F3F5F7] border-none min-h-[284px]  w-full border rounded-md">
        </textarea>
       <div  className="absolute bottom-[7px] right-[0px]" >
       <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.000488281 27.9997H17.9997C23.5226 27.9997 27.9997 23.5226 27.9997 17.9997V0.000488281L0.000488281 27.9997Z" fill="#2684FC"/>
</svg>

       </div>
      </div>

      
      <div class="flex justify-end gap-[40px]">

      <button className="w-[200px] h-[48px] bg-[#E3E5E7] group cursor-pointer rounded-lg transition duration-300 ease-in-out cursor-pointer hover:bg-sky-600">
      <div class="text-center text-sky-600 hover:text-white text-base transition duration-300 ease-in-out font-medium font-['Work Sans'] leading-snug">Discard</div>
            </button>

            <button className="w-[200px] h-[48px]  group cursor-pointer rounded-lg transition duration-300 ease-in-out cursor-pointer hover:bg-[#E3E5E7]  bg-[#0b84df]">
               
                    <div class="text-center text-white  hover:text-sky-600 text-base font-medium font-['Work Sans']">Submit</div>
               
            </button>
       </div>
    </form>

                </div>
            </div>
        </>
    )
}
export default Faq;