import React, { useEffect, useState, useRef } from 'react';
import Q1 from "./ques1";
import Q2 from "./ques2";
import Q3 from "./ques3";
import Q4 from "./ques4";
import Q5 from "./ques5";
import Q6 from "./ques6";
import Q7 from "./ques7";
import Q8 from "./ques8";
import Q9 from "./ques9";
import Q10 from "./ques10";
import Q11 from "./ques11";
import Q12 from "./ques12";
import Q13 from "./ques13";
import Q14 from "./ques14";
import Q15 from "./ques15";
import Q16 from "./ques16";
import Q17 from "./ques17";
import Q18 from "./ques18";
import Q19 from "./ques19";
import Q20 from "./ques20";
import Q21 from "./ques21";
import Q22 from "./ques22";
import Q23 from "./ques23";

const Layout = () => {
   

    const [currentProgress, setCurrentProgress] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(1);
    const compscrollRef = useRef(null);
    useEffect(() => {
        if (compscrollRef.current) {
            
            compscrollRef.current.scrollLeft = (currentIndex - 1) * 745;
        }
    }, [currentIndex]);
    const [activeTab, setActiveTab] = useState('campaign');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const nextStep = () => {

        if (currentProgress < 23 && currentIndex < 23) {
            setCurrentProgress((prevProgress) => Math.min(prevProgress + 1, 23));
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }

    };
    const prevStep = () => {
        if (currentIndex > 1) {
            setCurrentProgress((prevProgress) => Math.max(prevProgress - 1, 1));
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };
   
    
    return (
        <>
            <div class="w-[100%] h-[900px] relative bg-white">
                <div class="ml-[60px] mt-[24px] text-slate-800 text-2xl font-bold font-['Roboto']">Synapse.ai</div>
                    <div className="flex flex-col justify-start items-center  ">
                        <div className='flex items-end justify-center w-[640px]'>
                            <div className='flex flex-col items-start justify-center mt-[30px]'>
                                <div className="flex  w-[640px] items-center justify-between">
                                    <div className="text-slate-800 mb-[20px]  text-xl font-normal font-['Work Sans'] leading-7" > {`${currentIndex} of 23`}</div>
                                    <div class="text-right text-sky-600 text-xl font-normal font-['Work Sans'] underline leading-7">Complete Later</div>
                                </div>
                                <div className="w-[640px] bg-zinc-200  rounded-lg overflow-hidden">
                                    <div
                                        id="progress"
                                        className="h-2 bg-cyan-600 text-white  leading-12"
                                        style={{ width: `${(currentProgress / 23) * 100}%` }}
                                    >
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  id='compscroll' ref={compscrollRef} className={`w-[100%] h-[506px] hidescrollbar overflow-x-scroll m-7 flex gap-6 justify-start items-start `} >
                        <Q1 currentIndex={currentIndex}/>
                        <Q2 currentIndex={currentIndex}/>
                        <Q3 currentIndex={currentIndex}/>
                        <Q4 currentIndex={currentIndex}/>
                        <Q5 currentIndex={currentIndex}/>
                        <Q6 currentIndex={currentIndex}/>
                        <Q7 currentIndex={currentIndex}/>
                        <Q8 currentIndex={currentIndex}/>
                        <Q9 currentIndex={currentIndex}/>
                        <Q10 currentIndex={currentIndex}/>
                        <Q11 currentIndex={currentIndex}/>
                        <Q12 currentIndex={currentIndex}/>
                        <Q13 currentIndex={currentIndex}/>
                        <Q14 currentIndex={currentIndex}/>
                        <Q15 currentIndex={currentIndex}/>
                        <Q16 currentIndex={currentIndex}/>
                        <Q17 currentIndex={currentIndex}/>
                        <Q18 currentIndex={currentIndex}/>
                        <Q19 currentIndex={currentIndex}/>
                        <Q20 currentIndex={currentIndex}/>
                        <Q21 currentIndex={currentIndex}/>
                        <Q22 currentIndex={currentIndex}/>
                        <Q23 currentIndex={currentIndex}/>
                        </div>
                    
                        <div className='flex  justify-center items-center w-[100%] top-[760px] absolute'>
                            <div className="flex items-center justify-between w-[640px]">

                                <div class="w-48 h-12  rounded-lg group" onClick={prevStep}>
                                    <div class="w-48 h-12  bg-zinc-200 rounded-lg transition duration-300 ease-in-out cursor-pointer group-hover:bg-zinc-300 group-hover:bg-zinc-300">
                                    <div class=" flex justify-center items-center gap-1.5 pt-3 ">
                                        <div class="w-6 h-6 relative  ">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 11.25C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H10.75V18C10.75 18.3034 10.5673 18.5768 10.287 18.6929C10.0068 18.809 9.68417 18.7449 9.46967 18.5304L3.46967 12.5304C3.32902 12.3897 3.25 12.1989 3.25 12C3.25 11.8011 3.32902 11.6103 3.46967 11.4697L9.46967 5.46969C9.68417 5.25519 10.0068 5.19103 10.287 5.30711C10.5673 5.4232 10.75 5.69668 10.75 6.00002V11.25H20Z" fill="#0B84DF" />
                                            </svg>
                                        </div>
                                        <div class="text-center text-sky-600 text-base font-medium font-['Work Sans'] leading-snug">Back</div>
                                    </div>
                                    </div>
                                </div>

                                <div class="w-48 h-12  rounded-lg group"  onClick={nextStep} >
                                    <div class="w-48 h-12  bg-sky-600 rounded-lg transition duration-300 ease-in-out cursor-pointer group-hover:bg-sky-700 group-hover:border-sky-700  cursor-pointer ">
                                        <div class="flex justify-center items-center gap-1.5 pt-3">
                                            <div class="text-center text-white flex justify-center items-center text-base font-medium font-['Work Sans'] leading-snug">Next</div>
                                            <div class="w-6 h-6 relative">
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
                </div>






        </>
    )
}
export default Layout;
