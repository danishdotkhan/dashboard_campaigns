const CampaignTableHome = () => {
  return (
   <>
   
   <div className="w-[100%] flex flex-col">
              <div className="w-[100%] overflow-x-auto ">
                <div id="campaignanalytics" className="py-2 mt-8 align-middle inline-block min-w-full ">
                  <div className="w-[100%] overflow-hidden sm:rounded-lg">
                    <table className="min-w-full ">
                      <thead className="bg-white">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left  font-medium uppercase tracking-wider text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left  font-medium uppercase tracking-wider text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left  font-medium uppercase tracking-wider text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                          >
                            Progress
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left  font-medium uppercase tracking-wider text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                          >
                            Sent
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left  font-medium uppercase tracking-wider text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                          >
                            Click
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left  font-medium uppercase tracking-wider text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                          >
                            Replies
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left  font-medium uppercase tracking-wider text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                          >
                            Opportunities
                          </th>

                        </tr>
                      </thead>
                      <tbody className="bg-white divide-transparent">
                        {/* Repeat this row for each entry */}
                        <tr>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-sky-600 text-base font-normal font-['Work Sans'] leading-snug">Saad Bin Shafiq</div></td>
                          <td className="px-6 py-8 whitespace-nowrap fle">
                            <div class="w-16 h-8 px-3 py-1.5 bg-cyan-600 rounded-lg justify-start items-start gap-2.5 inline-flex">
                              <div class="text-white text-sm font-normal font-['Work Sans'] leading-tight">Active</div>
                            </div>
                          </td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">29%</div></td>
                          <td className="px-6 py-8 whitespace-nowrap flex gap-3">
                            <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">64</div>
                          </td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800  text-sm font-normal font-['Work Sans'] leading-none">1</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>
                          
                          <td className="pr-6 py-8 whitespace-nowrap">

                           
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#2A333F" />
                              <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#2A333F" />
                              <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#2A333F" />
                            </svg>


                          </td>
                        </tr>
                        <tr >
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-sky-600 text-base font-normal font-['Work Sans'] leading-snug">Belhole</div></td>
                          <td className="px-6 py-8 whitespace-nowrap fle">
                            <div class="w-16 h-8 px-3 py-1.5 bg-cyan-600 rounded-lg justify-start items-start gap-2.5 inline-flex">
                              <div class="text-white text-sm font-normal font-['Work Sans'] leading-tight">Active</div>
                            </div>
                          </td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">49%</div></td>
                          <td className="px-6 py-8 whitespace-nowrap flex gap-3">
                            <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">64</div>
                          </td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800  text-sm font-normal font-['Work Sans'] leading-none">1</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>
                          
                          <td className="pr-6 py-8 whitespace-nowrap">

                           
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#2A333F" />
                              <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#2A333F" />
                              <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#2A333F" />
                            </svg>


                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-8 whitespace-nowrap"> <div class="text-sky-600 text-base font-normal font-['Work Sans'] leading-snug">Sonia Jam</div></td>
                          <td className="px-6 py-8 whitespace-nowrap fle">
                            <div class="w-16 h-8 px-3 py-1.5 bg-cyan-600 rounded-lg justify-start items-start gap-2.5 inline-flex">
                              <div class="text-white text-sm font-normal font-['Work Sans'] leading-tight">Active</div>
                            </div>
                          </td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">21%</div></td>
                          <td className="px-6 py-8 whitespace-nowrap flex gap-3">
                            <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">64</div>
                          </td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800  text-sm font-normal font-['Work Sans'] leading-none">1</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>
                          
                          <td className="pr-6 py-8 whitespace-nowrap">

                           
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#2A333F" />
                              <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#2A333F" />
                              <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#2A333F" />
                            </svg>


                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-sky-600 text-base font-normal font-['Work Sans'] leading-snug">John Kim</div></td>
                          <td className="px-6 py-8 whitespace-nowrap">
                            <div class="w-16 h-8 px-3 py-1.5 bg-cyan-600 rounded-lg justify-start items-start gap-2.5 inline-flex">
                              <div class="text-white text-sm font-normal font-['Work Sans'] leading-tight">Active</div>
                            </div>
                          </td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">68%</div></td>
                          <td className="px-6 py-8 whitespace-nowrap flex gap-3">
                            <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">64</div>
                          </td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800  text-sm font-normal font-['Work Sans'] leading-none">1</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>
                          
                          <td className="pr-6 py-8 whitespace-nowrap">

                           
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#2A333F" />
                              <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#2A333F" />
                              <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#2A333F" />
                            </svg>


                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-8 whitespace-nowrap">
                          <div class="text-sky-600 text-base font-normal font-['Work Sans'] leading-snug">Danish khan</div>
                          </td>
                          <td className="px-6 py-8 whitespace-nowrap">
                            <div class="w-16 h-8 px-3 py-1.5 bg-cyan-600 rounded-lg justify-start items-start gap-2.5 inline-flex">
                              <div class="text-white text-sm font-normal font-['Work Sans'] leading-tight">Active</div>
                            </div>
                          </td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">53%</div></td>
                          <td className="px-6 py-8 whitespace-nowrap flex gap-3">
                            <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">64</div>
                          </td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800  text-sm font-normal font-['Work Sans'] leading-none">1</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>
                          
                          <td className="pr-6 py-8 whitespace-nowrap">

                           
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#2A333F" />
                              <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#2A333F" />
                              <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#2A333F" />
                            </svg>


                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-sky-600 text-base font-normal font-['Work Sans'] leading-snug">Aizaz </div></td>
                          <td className="px-6 py-8 whitespace-nowrap">
                            <div class="w-16 h-8 px-3 py-1.5 bg-cyan-600 rounded-lg justify-start items-start gap-2.5 inline-flex">
                              <div class="text-white text-sm font-normal font-['Work Sans'] leading-tight">Active</div>
                            </div>
                          </td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">35%</div></td>
                          <td className="px-6 py-8 whitespace-nowrap flex gap-3">
                            <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">64</div>
                          </td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800  text-sm font-normal font-['Work Sans'] leading-none">1</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>
                          <td className="px-6 py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>
                          
                          <td className="pr-6 py-8 whitespace-nowrap">

                           
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
   
   </>
  );
};

export default CampaignTableHome;
