import React, { useState } from 'react';

const AnalyticsComponent = () => {
  const [activeTab, setActiveTab] = useState('campaign');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="mt-[32px] mx-[40px] rounded-custom2 flex flex-col   w-[full] h-[full] bg-white ">
        
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
          <div className="flex justify-between items-center gap-[52px]">

            <button className="pt-[26px] group">
                <div className="w-[48px] h-[48px]">
                    <div className="rounded-lg w-[48px] h-[48px] transition duration-300 ease-in-out cursor-pointer group-hover:bg-gray-200 group-hover:bg-zinc-300  bg-[#F3F5F7]" >
                        <div className=" h-[48px] flex items-center justify-center font-family:'Work_Sans-Medium',Helvetica]  font-medium text-[#0b84df] text-[16px] text-center tracking-[0]  whitespace-nowrap">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17Z" fill="#0B84DF"/>
<path d="M12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z" fill="#0B84DF"/>
<path opacity="0.5" d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z" fill="#0B84DF"/>
</svg>

                        </div>
                    </div>
                </div>
            </button>

            <button className=" pt-[26px] pr-[40px] group">
                <div className="w-[200px] h-[48px]">
                    <div className="pl-[36px] pr-[12px] flex justify-between items-center  rounded-lg w-[200px] h-[48px] transition duration-300 ease-in-out group-hover:bg-sky-700  bg-[#0b84df]">
                            <div className=" text-center text-white text-base font-medium font-['Work Sans']">
                                Add To Campaign
                            </div>
                    </div>
                </div>
            </button>

        </div>
        </div>


        {activeTab === 'campaign' && (
          <div id="campaignanalytics">
            <div className=" flex flex-col">
              <div className="mt-[-20px] overflow-x-auto">
                <div id="campaignanalytics" className="py-2 mt-8 align-middle inline-block min-w-full mx-[-24px]">
                  <div className=" overflow-hidden sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 ">
                      <thead className="bg-white">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left flex items-center gap-6  px-6 py-3 text-left  text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                          >
                            <img src='../src/assets/broken.svg' />
                            Name
                          </th>
                         
                          <th
                            scope="col"
                            className="px-6 py-3 text-left  text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                          >
                            Job Title
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left  text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                          >
                            Company
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left  text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                          >
                            Email
                          </th>
                          
                          <th
                            scope="col"
                            className="px-6 py-3 text-left  text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                          >
                            Action
                          </th>

                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {/* Repeat this row for each entry */}

                        
                        <tr>
                        <td className="px-6 py-8 whitespace-nowrap flex items-center gap-6">
                            <img src='../src/assets/broken.svg'/>
                            <div class="text-sky-600 text-base font-normal font-['Work Sans'] leading-snug">Saad Bin Shafiq</div></td>
                         
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">Chief Executive Officer</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">AI Synapse</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">saad@ai-synapse.io</div></td>
                          
                         <td className="px-6 py-8 whitespace-nowrap">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#2A333F" />
                              <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#2A333F" />
                              <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#2A333F" />
                            </svg>
                          </td>

                        </tr>
                        <tr>
                        <td className="px-6 py-8 whitespace-nowrap flex items-center gap-6">
                            <img src='../src/assets/broken.svg'/>
                            <div class="text-sky-600 text-base font-normal font-['Work Sans'] leading-snug">Belhole</div></td>
                         
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">Backend Engineer</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">Johnnys</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">belhole@johnnys.com</div></td>
                          
                         <td className="px-6 py-8 whitespace-nowrap">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#2A333F" />
                              <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#2A333F" />
                              <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#2A333F" />
                            </svg>
                          </td>

                        </tr>
                        <tr>
                        <td className="px-6 py-8 whitespace-nowrap flex items-center gap-6">
                            <img src='../src/assets/broken.svg'/>
                            <div class="text-sky-600 text-base font-normal font-['Work Sans'] leading-snug">Sonia Jam</div></td>
                         
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">CFO</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">Carta</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">sonia@carta.io</div></td>
                          
                         <td className="px-6 py-8 whitespace-nowrap">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#2A333F" />
                              <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#2A333F" />
                              <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#2A333F" />
                            </svg>
                          </td>

                        </tr>
                        <tr>
                        <td className="px-6 py-8 whitespace-nowrap flex items-center gap-6">
                            <img src='../src/assets/broken.svg'/>
                            <div class="text-sky-600 text-base font-normal font-['Work Sans'] leading-snug">John Kim</div></td>
                         
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">Chief Technology Officer</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">Uber</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">john@uber.com</div></td>
                          
                         <td className="px-6 py-8 whitespace-nowrap">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#2A333F" />
                              <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#2A333F" />
                              <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#2A333F" />
                            </svg>
                          </td>

                        </tr>
                        <tr>
                        <td className="px-6 py-8 whitespace-nowrap flex items-center gap-6">
                            <img src='../src/assets/broken.svg'/>
                            <div class="text-sky-600 text-base font-normal font-['Work Sans'] leading-snug">Danish khan</div></td>
                         
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">FrontEnd Engineer</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">Snapchat</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">danish@snapchat.io</div></td>
                          
                         <td className="px-6 py-8 whitespace-nowrap">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#2A333F" />
                              <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#2A333F" />
                              <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#2A333F" />
                            </svg>
                          </td>

                        </tr>
                        <tr>
                        <td className="px-6 py-8 whitespace-nowrap flex items-center gap-6">
                            <img src='../src/assets/broken.svg'/>
                            <div class="text-sky-600 text-base font-normal font-['Work Sans'] leading-snug">Aizaz </div></td>
                         
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">Backend Engineer</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">Backendly</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">aizaz@backendly.ai</div></td>
                          
                         <td className="px-6 py-8 whitespace-nowrap">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#2A333F" />
                              <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#2A333F" />
                              <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#2A333F" />
                            </svg>
                          </td>

                        </tr>
                        <tr>
                        <td className="px-6 py-8 whitespace-nowrap flex items-center gap-6">
                            <img src='../src/assets/broken.svg'/>
                            <div class="text-sky-600 text-base font-normal font-['Work Sans'] leading-snug">Saad Bin Shafiq</div></td>
                         
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">Chief Executive Officer</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">AI Synapse</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">saad@ai-synapse.io</div></td>
                          
                         <td className="px-6 py-8 whitespace-nowrap">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#2A333F" />
                              <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#2A333F" />
                              <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#2A333F" />
                            </svg>
                          </td>

                        </tr>
                        <tr>
                        <td className="px-6 py-8 whitespace-nowrap flex items-center gap-6">
                            <img src='../src/assets/broken.svg'/>
                            <div class="text-sky-600 text-base font-normal font-['Work Sans'] leading-snug">Rauf Khan</div></td>
                         
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">ML Engineer</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">AI Magic</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">rauf@aimagic.com</div></td>
                          
                         <td className="px-6 py-8 whitespace-nowrap">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#2A333F" />
                              <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#2A333F" />
                              <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#2A333F" />
                            </svg>
                          </td>

                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {activeTab === 'account' && (
          <div id="accountanalytics">
            <div className="mr-[40px] flex flex-col">
              <div className=" overflow-x-auto sm:mx-6 lg:mx-8">
                <div id="accountanalytics" className="py-2 mt-8 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className=" overflow-hidden  sm:rounded-lg">
                    <table className="min-w-full">
                      <thead className="bg-white">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left  font-medium uppercase tracking-wider text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                          >
                            Sending Account
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left  font-medium uppercase tracking-wider text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                          >
                            Contacted
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left  font-medium uppercase tracking-wider text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                          >
                            Opened
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left  font-medium uppercase tracking-wider text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                          >
                            Replied
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left  font-medium uppercase tracking-wider text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                          >
                            Combined Score
                          </th>

                        </tr>
                      </thead>
                      <tbody className="bg-white ">
                        {/* Repeat this row for each entry */}
                        <tr>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">email@example.com</div></td>

                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-center text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-center text-sm font-normal font-['Work Sans'] leading-none">40</div></td>

                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm text-center font-normal font-['Work Sans'] leading-none">1</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-center text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>

                        </tr>
                        <tr >
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">email@example.com</div></td>

                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800  text-center text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-center text-sm font-normal font-['Work Sans'] leading-none">40</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-center text-sm font-normal font-['Work Sans'] leading-none">1</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-center text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>

                        </tr>
                        <tr>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">email@example.com</div></td>

                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-center text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-center text-sm font-normal font-['Work Sans'] leading-none">40</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-center text-sm font-normal font-['Work Sans'] leading-none">1</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-center text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>

                        </tr>
                        <tr>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">email@example.com</div></td>

                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-center text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-center text-sm font-normal font-['Work Sans'] leading-none">40</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-center text-sm font-normal font-['Work Sans'] leading-none">1</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-center text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>

                        </tr>
                        <tr>
                          <td className="px-6 py-8 whitespace-nowrap">
                            <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">email@example.com</div>
                          </td>

                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-center text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-center text-sm font-normal font-['Work Sans'] leading-none">40</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-center text-sm font-normal font-['Work Sans'] leading-none">1</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-center text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>

                        </tr>
                        <tr>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">email@example.com</div></td>

                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-center text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-center text-sm font-normal font-['Work Sans'] leading-none">40</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-center text-sm font-normal font-['Work Sans'] leading-none">1</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-center text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>

                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsComponent;