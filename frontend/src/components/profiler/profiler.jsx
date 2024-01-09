const Profiler = () => {
    return (
        <>
            <div className="w-[full] h-[900px]  relative bg-white">
                <div className="pt-[40px] pl-[60px] ">
                    <svg width="166" height="24" viewBox="0 0 166 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 0L16.5 9L9 24H0L12 0H21Z" fill="#0075EF" />
                        <path d="M16.5 9H25.5L33 24H24L16.5 9Z" fill="#0075EF" />
                        <path d="M34.5 9L39 0L43.5 9H34.5Z" fill="#0075EF" />
                        <path d="M34.5 11.55H43.5V24H34.5V11.55Z" fill="#089CB3" />
                        <path d="M155.344 22.146H164.056L165.676 24H151.564V11.4H165.712L164.11 13.254H155.344V16.782H164.866V18.636H155.344V22.146Z" fill="#2A333F" />
                        <path d="M150.12 16.764V22.092L147.276 24H137.952L136.332 22.146H145.278L145.944 21.372V18.618H135.99V13.398L137.7 11.4H149.778L148.194 13.254H140.904L140.094 14.172V16.764H150.12Z" fill="#2A333F" />
                        <path d="M134.542 19.536H124.372V24H120.592V11.4H134.542V19.536ZM130.762 13.254H124.336V17.682H130.762V13.254Z" fill="#2A333F" />
                        <path d="M103.863 11.4H117.885V24H113.745V18.636H107.895V24H103.863V11.4ZM113.655 13.254H107.859V16.764H113.655V13.254Z" fill="#2A333F" />
                        <path d="M101.463 11.4V24L91.8694 17.142V24H88.1074V11.4L97.7554 18.204V11.4H101.463Z" fill="#2A333F" />
                        <path d="M76.9782 18.06L71.0742 11.4H75.4302L78.8682 15.288L82.3062 11.4H86.6622L80.7582 18.06V24H76.9782V18.06Z" fill="#2A333F" />
                        <path d="M69.63 16.764V22.092L66.786 24H57.462L55.842 22.146H64.788L65.454 21.372V18.618H55.5V13.398L57.21 11.4H69.288L67.704 13.254H60.414L59.604 14.172V16.764H69.63Z" fill="#2A333F" />
                    </svg>
                </div>

                <div className="mt-[80px] grid grid-cols-4 pl-[40px]">


                    <div className="col-span-1 ml-[20px]">

                    <div className="w-[240px]  h-[310px] bg-[#2A333F] bg-opacity-20 rounded-2xl blur-xl "></div>
                    <div className="px-[20px] w-[240px] h-[310px] bg-[#E6F5F7] absolute rounded-2xl top-[140px] flex flex-col items-center justify-start py-[20px] mb-[8px] gap-[10px] z-10">
                        <div className="w-[100%] flex items-center justify-between  gap-[10px]">
                        <div class="text-cyan-600 text-xl font-semibold font-['All Round Gothic'] leading-loose">Why Profiler?</div>
                        <div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.62766 4.50697C8.6832 2.61343 9.21097 1.66666 10 1.66666C10.7891 1.66666 11.3168 2.61343 12.3724 4.50697L12.6455 4.99685C12.9454 5.53494 13.0954 5.80398 13.3292 5.9815C13.5631 6.15901 13.8543 6.22491 14.4368 6.3567L14.9671 6.47668C17.0168 6.94045 18.0417 7.17234 18.2855 7.95643C18.5293 8.74053 17.8306 9.55755 16.4333 11.1916L16.0718 11.6143C15.6747 12.0787 15.4761 12.3109 15.3868 12.5981C15.2975 12.8853 15.3275 13.1951 15.3875 13.8146L15.4422 14.3787C15.6535 16.5588 15.7591 17.6489 15.1207 18.1335C14.4824 18.6181 13.5228 18.1763 11.6036 17.2926L11.1071 17.064C10.5617 16.8129 10.2891 16.6874 10 16.6874C9.71098 16.6874 9.43829 16.8129 8.89293 17.064L8.39642 17.2926C6.47725 18.1763 5.51767 18.6181 4.87931 18.1335C4.24095 17.6489 4.34659 16.5588 4.55785 14.3787L4.61251 13.8146C4.67254 13.1951 4.70256 12.8853 4.61324 12.5981C4.52392 12.3109 4.32538 12.0787 3.92829 11.6143L3.56677 11.1916C2.16939 9.55755 1.47071 8.74053 1.71454 7.95643C1.95837 7.17234 2.98323 6.94045 5.03297 6.47668L5.56326 6.3567C6.14573 6.22491 6.43696 6.15901 6.67081 5.9815C6.90465 5.80398 7.05462 5.53494 7.35458 4.99685L7.62766 4.50697Z" fill="#089CB3"/>
                        </svg>

                        </div>
                        </div>

                        <div className=" w-[100%] text-justify text-slate-800 text-sm font-normal font-['Work Sans'] leading-normal">Profiler is a unique collection of well researched questions that will help our powerful model to find you most fitting leads w.r.t your business. <br/><br/>This is a one time process which you can edit later as needs be.<br/>Let’s get started</div>
                    </div>
                    <div className="flex flex-col items-start justify-center ml-[0px] mt-[20px] gap-[10px]">
                        <div className="w-48 text-justify text-[#788596] text-sm font-normal font-['Work Sans'] leading-tight">Answered</div>
                        <div className="w-48 text-justify text-cyan-600 text-base font-bold font-['Work Sans'] leading-snug">2 of 40</div>
                    </div>
                   


                    

                    </div>



                    <div className="col-span-3 flex items-start  justify-between ">
                    <div className="w-[640px] h-[700px] hidescrollbar mb-[40px] overflow-y-scroll overflow-x-hidden">

                    
                        <div className=" w-[640px]  flex flex-col gap-[100px]">

                            <div className="flex flex-col gap-[20px] ">
                                <div class="w-[100%] text-slate-800 text-2xl font-semibold leading-9">Describe your company in simple terms, as if you were explaining it to a 6-year-old. What’s the core idea behind what you do?</div>
                                <div class="w-[640px] h-44 px-5 py-3.5 bg-gray-100 rounded-lg justify-start items-start gap-2.5 inline-flex">
                                    <input className="w-[640px] bg-transparent text-slate-500 text-base font-normal font-['Work Sans'] focus:outline-none focus:border-blue-500 text-base " placeholder="Type your answer" />
                                </div>                         
                            </div>

                            <div className="flex flex-col gap-[20px] ">
                                <div class="w-[100%] text-slate-800 text-2xl font-semibold leading-9">If a seasoned industry expert took charge of your company for a day, what immediate changes do you think they would implement?</div>
                                <div class="w-[640px] h-44 px-5 py-3.5 bg-gray-100 rounded-lg justify-start items-start gap-2.5 inline-flex">
                                    <input className="w-[640px] bg-transparent text-slate-500 text-base font-normal font-['Work Sans'] focus:outline-none focus:border-blue-500 text-base " placeholder="Type your answer" />
                                </div>                         
                            </div>

                            <div className="flex flex-col gap-[20px] ">
                                <div class="w-[100%] text-slate-800 text-2xl font-semibold leading-9">What's your company's unique selling proposition (USP) in the market? How does it differentiate from competitors?</div>
                                <div class="w-[640px] h-44 px-5 py-3.5 bg-gray-100 rounded-lg justify-start items-start gap-2.5 inline-flex">
                                    <input className="w-[640px] bg-transparent text-slate-500 text-base font-normal font-['Work Sans'] focus:outline-none focus:border-blue-500 text-base " placeholder="Type your answer" />
                                </div>                         
                            </div>

                            <div className="flex flex-col gap-[20px] ">
                                <div class="w-[100%] text-slate-800 text-2xl font-semibold leading-9">Do you have any compelling success stories or case studies that showcase the benefits of using your product/service?</div>
                                <div class="w-[640px] h-44 px-5 py-3.5 bg-gray-100 rounded-lg justify-start items-start gap-2.5 inline-flex">
                                    <input className="w-[640px] bg-transparent text-slate-500 text-base font-normal font-['Work Sans'] focus:outline-none focus:border-blue-500 text-base " placeholder="Type your answer" />
                                </div>                         
                            </div>
                            <div className="flex items-center justify-end w-[100%]">
                            <div className="w-[200px] h-[48px] rounded-lg group " >
                                    <div className="w-[200px] h-[48px]  bg-sky-600 rounded-lg transition duration-300 ease-in-out cursor-pointer group-hover:bg-sky-700 group-hover:border-sky-700  cursor-pointer ">
                                        <div className="flex justify-center items-center gap-1.5 pt-3">
                                            <div className="text-center text-white flex justify-center items-center text-base font-medium font-['Work Sans'] leading-snug">Next</div>
                                            <div className="w-6 h-6 relative">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H13.25V18C13.25 18.3034 13.4327 18.5768 13.713 18.6929C13.9932 18.809 14.3158 18.7449 14.5303 18.5304L20.5303 12.5304C20.671 12.3897 20.75 12.1989 20.75 12C20.75 11.8011 20.671 11.6103 20.5303 11.4697L14.5303 5.46969C14.3158 5.25519 13.9932 5.19103 13.713 5.30711C13.4327 5.4232 13.25 5.69668 13.25 6.00002V11.25H4Z" fill="white" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>

                            
                            
                        </div>
                    </div>



                        <div className=" w-[32px] p-0 m-0 h-auto items-center flex flex-col">
                            <div className=" cursor-pointer bg-[#788596] text-center items-center flex justify-center  w-full h-[32px] ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.75 20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20L11.25 10.75H6.00002C5.69668 10.75 5.4232 10.5673 5.30711 10.287C5.19103 10.0068 5.25519 9.68417 5.46969 9.46967L11.4697 3.46967C11.6103 3.32902 11.8011 3.25 12 3.25C12.1989 3.25 12.3897 3.32902 12.5304 3.46967L18.5304 9.46967C18.7449 9.68417 18.809 10.0068 18.6929 10.287C18.5768 10.5673 18.3034 10.75 18 10.75H12.75L12.75 20Z" fill="white"/>
                            </svg>
                            </div>
                            <div className="bg-[#089CB3] text-center items-center flex justify-center  w-full h-[32px] text-white text-xs font-bold font-['Work Sans'] leading-none">1</div>
                            <div className=" text-center items-center flex justify-center  w-full h-[32px] text-[#2A333F] text-xs font-bold font-['Work Sans'] leading-none">2</div>
                            <div className=" text-center items-center flex justify-center  w-full h-[32px] text-[#2A333F] text-xs font-bold font-['Work Sans'] leading-none">3</div>
                            <div className=" text-center items-center flex justify-center  w-full h-[32px] text-[#2A333F] text-xs font-bold font-['Work Sans'] leading-none">4</div>
                            <div className=" text-center items-center flex justify-center  w-full h-[32px] text-[#2A333F] text-xs font-bold font-['Work Sans'] leading-none">5</div>
                            <div className="bg-[#089CB3] text-center items-center flex justify-center  w-full h-[32px] text-white text-xs font-bold font-['Work Sans'] leading-none">6</div>
                            <div className=" text-center items-center flex justify-center  w-full h-[32px] text-[#2A333F] text-xs font-bold font-['Work Sans'] leading-none">7</div>
                            <div className=" text-center items-center flex justify-center  w-full h-[32px] text-[#2A333F] text-xs font-bold font-['Work Sans'] leading-none">8</div>
                            <div className="text-center items-center flex justify-center  w-full h-[32px] text-[#2A333F] text-xs font-bold font-['Work Sans'] leading-none">9</div>
                            <div className=" text-center items-center flex justify-center  w-full h-[32px] text-[#2A333F] text-xs font-bold font-['Work Sans'] leading-none">10</div>
                            <div className="text-center items-center flex justify-center  w-full h-[32px] text-[#2A333F] text-xs font-bold font-['Work Sans'] leading-none">11</div>
                            <div className="text-center items-center flex justify-center  w-full h-[32px] text-[#2A333F] text-xs font-bold font-['Work Sans'] leading-none">12</div>
                            <div className="bg-[#089CB3] text-center items-center flex justify-center  w-full h-[32px] text-white text-xs font-bold font-['Work Sans'] leading-none">13</div>
                            <div className=" text-center items-center flex justify-center  w-full h-[32px] text-[#2A333F] text-xs font-bold font-['Work Sans'] leading-none">14</div>
                            <div className=" text-center items-center flex justify-center  w-full h-[32px] text-[#2A333F] text-xs font-bold font-['Work Sans'] leading-none">15</div>
                            <div  className="text-center items-center flex justify-center  w-full h-[32px] text-[#2A333F] text-xs font-bold font-['Work Sans'] leading-none">16</div>
                            <div  className="text-center items-center flex justify-center  w-full h-[32px] text-[#2A333F] text-xs font-bold font-['Work Sans'] leading-none">17</div>
                            <div className="text-center items-center flex justify-center  w-full h-[32px] text-[#2A333F] text-xs font-bold font-['Work Sans'] leading-none">18</div>
                            <div className="text-center items-center flex justify-center  w-full h-[32px] text-[#2A333F] text-xs font-bold font-['Work Sans'] leading-none"  >19</div>
                            <div className=" text-center items-center flex justify-center  w-full h-[32px] text-[#2A333F] text-xs font-bold font-['Work Sans'] leading-none">20</div>
                            <div className="p-0 m-0 bg-[#0B84DF] text-center cursor-pointer items-center flex justify-center  w-full h-[32px] ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4L11.25 13.25H6.00002C5.69668 13.25 5.4232 13.4327 5.30711 13.713C5.19103 13.9932 5.25519 14.3158 5.46969 14.5303L11.4697 20.5303C11.6103 20.671 11.8011 20.75 12 20.75C12.1989 20.75 12.3897 20.671 12.5304 20.5303L18.5304 14.5303C18.7449 14.3158 18.809 13.9932 18.6929 13.713C18.5768 13.4327 18.3034 13.25 18 13.25H12.75L12.75 4Z" fill="white"/>
                            </svg>
                            </div>

                        </div>
                    </div>

                </div>



            </div>
        </>
    )
}
export default Profiler;