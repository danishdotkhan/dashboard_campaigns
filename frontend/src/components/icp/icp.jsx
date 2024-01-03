import React, { useState } from 'react';
import Q1 from "../questions/ques1.jsx";
import Q2 from "../questions/ques2.jsx";

const Icpcomp = () => {
    const [activeTab, setActiveTab] = useState('campaign');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const [currentProgress, setCurrentProgress] = useState(1);

    const nextStep = () => {

        if (currentProgress < 23) {
            setCurrentProgress((prevProgress) => Math.min(prevProgress + 1, 23));
        }

    };
    return (
        <>
            <div className="grid grid-cols-11 gap-1">
                
                    <div className="col-span-5" >
                        <div className="mt-[32px] ml-[40px] rounded-custom2 flex flex-col   w-[full] h-[full] bg-white ">

                            <div className=" flex items-center justify-between">
                                <div className="flex items-center ">
                                    <div
                                        className={`cursor-pointer py-[10px] px-[20px] border-b-2 text-center  text-sm  font-['Work Sans'] leading-tight ${activeTab === 'campaign' ? 'font-medium text-sky-600 border-b-2 border-sky-600' : 'font-normal text-slate-500 border-b-2 border-gray-200'}`}
                                        onClick={() => handleTabClick('campaign')}
                                    >
                                        People
                                    </div>
                                    <div
                                        className={`cursor-pointer text-sm text-center font-['Work Sans'] leading-tight py-[10px] px-[20px] border-b-2 ${activeTab === 'account' ? 'font-medium text-sky-600 border-b-2 border-sky-600' : 'font-normal text-slate-500 border-b-2 border-gray-200'}`}
                                        onClick={() => handleTabClick('account')}
                                    >
                                        Enrishment
                                    </div>
                                </div>

                            </div>

                            <div class="w-[400px] h-[48px] mb-[10px] mt-[40px] bg-[#F3F5F7] rounded-md flex items-center">
                                <div class=" p-[12px]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75ZM1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 17.1609 17.1609 21.75 11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5ZM19.4697 19.4697C19.7626 19.1768 20.2374 19.1768 20.5303 19.4697L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L19.4697 20.5303C19.1768 20.2374 19.1768 19.7626 19.4697 19.4697Z" fill="#089CB3" />
                                    </svg>
                                </div>
                                <input type="text" placeholder="Search" class="bg-transparent flex-1 p-2 border-none focus:outline-none text-slate-500 text-base font-normal font-['Work Sans']" />
                            </div>


                            {activeTab === 'campaign' && (
                                <div id="campaignanalytics">
                                    <ul className='mx-[20px] my-[40px] flex flex-col gap-[20px]  justify-center items-start'>
                                        <li className="w-[378px] h-[20px] text-slate-500 text-base font-normal font-['Work Sans'] leading-snug">Job Titles</li>
                                        <li className="w-[378px] h-[20px] text-slate-500 text-base font-normal font-['Work Sans'] leading-snug">Geographical Location</li>
                                        <li className="w-[378px] h-[20px] text-slate-500 text-base font-normal font-['Work Sans'] leading-snug">Industry Sectors</li>
                                        <li className="w-[378px] h-[20px] text-slate-500 text-base font-normal font-['Work Sans'] leading-snug">Company Size by Number of Employees</li>
                                        <li className="w-[378px] h-[20px] text-slate-500 text-base font-normal font-['Work Sans'] leading-snug">Specific Keywords and Phrases</li>
                                        <li className="w-[378px] h-[20px] text-slate-500 text-base font-normal font-['Work Sans'] leading-snug">Corporate Domains</li>
                                        <li className="w-[378px] h-[20px] text-slate-500 text-base font-normal font-['Work Sans'] leading-snug">Technology Stack or Software Usage</li>
                                        <li className="w-[378px] h-[20px] text-slate-500 text-base font-normal font-['Work Sans'] leading-snug">Company News and Press Releases</li>
                                        <li className="w-[378px] h-[20px] text-slate-500 text-base font-normal font-['Work Sans'] leading-snug">Type and Stage of Company Funding</li>
                                        <li className="w-[378px] h-[20px] text-slate-500 text-base font-normal font-['Work Sans'] leading-snug">Departmental Structure</li>
                                        <li className="w-[378px] h-[20px] text-slate-500 text-base font-normal font-['Work Sans'] leading-snug">Management and Executive Titles</li>
                                        <li className="w-[378px] h-[20px] text-slate-500 text-base font-normal font-['Work Sans'] leading-snug">Decision Maker Interests and Endorsements</li>
                                        <li className="w-[378px] h-[20px] text-slate-500 text-base font-normal font-['Work Sans'] leading-snug">Recent Job Listings and Hiring Trends</li>
                                        <li className="w-[378px] h-[20px] text-slate-500 text-base font-normal font-['Work Sans'] leading-snug">Company Growth Indicators</li>
                                    </ul>
                                </div>
                            )}

                            {activeTab === 'account' && (
                                <div id="accountanalytics">
                                    <></>
                                </div>
                            )}
                        </div>
                    </div>
              


                    <div className='col-span-6 pr-[40px]  w-[100%]'>
                                    <div className=' mx-[40px] flex items-end justify-between w-[640px]'>
                    <div className='flex flex-col items-start justify-center mt-[30px]'>
                    <div className="text-slate-800 mb-[20px] text-base font-normal font-['Work Sans'] leading-snug" > {`${currentProgress} of 23`}</div>
                     
                        <div className="w-[321px] bg-zinc-200  rounded-lg overflow-hidden">
                            <div
                                id="progress"
                                className="h-2 bg-cyan-600 text-white  leading-12"
                                style={{ width: `${(currentProgress / 23) * 100}%` }}
                            >
                            </div>
                        </div>
                       
                       
                    </div>
                    <button className='w-48 h-12 bg-sky-600 rounded-lg cursor-pointer'><div class="text-center text-white text-base font-medium font-['Work Sans']">Complete ICP(70%)</div></button>

                    </div>
                    <div  className="my-[40px] flex flex-col justify-end items-between gap-[20px] ">
                        <Q1 />
                        <Q2 />
                    </div>
                    </div>
                   
                </div>

            
        </>
    )
}
export default Icpcomp;