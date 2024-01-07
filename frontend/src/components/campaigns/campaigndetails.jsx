import React, { useState } from 'react';
import Charts from "../dashboard/charts.jsx"
import Topbar from "../dashboard/topbar.jsx"

const CampaignDetails = () => {
    const [activeTab, setActiveTab] = useState('stats');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const [activeTab2, setActiveTab2] = useState('stepanalytics');

    const handleTabClick2 = (tab) => {
        setActiveTab2(tab);
    };

    const [days1, setDays1] = useState(1);
    const increaseDays1 = () => {
        setDays1((prevDays1) => prevDays1 + 1);
    };

    const decreaseDays1 = () => {
        if (days1 > 1) {
            setDays1((prevDays1) => prevDays1 - 1);
        }
    };

    const [days2, setDays2] = useState(1);
    const increaseDays2 = () => {
        setDays2((prevDays2) => prevDays2 + 1);
    };

    const decreaseDays2 = () => {
        if (days2 > 1) {
            setDays2((prevDays2) => prevDays2 - 1);
        }
    };

    const [isToggled1, setToggled1] = useState(false);

    const handleToggle1 = () => {
        setToggled1(!isToggled1);
    };
    const [isToggled2, setToggled2] = useState(false);

    const handleToggle2 = () => {
        setToggled2(!isToggled2);
    };
    const [isToggled3, setToggled3] = useState(false);

    const handleToggle3 = () => {
        setToggled3(!isToggled3);
    };
    const [isToggled4, setToggled4] = useState(false);

    const handleToggle4 = () => {
        setToggled4(!isToggled4);
    };
    const [isToggled5, setToggled5] = useState(false);

    const handleToggle5 = () => {
        setToggled5(!isToggled5);
    };
    const [isToggled6, setToggled6] = useState(false);

    const handleToggle6 = () => {
        setToggled6(!isToggled6);
    };

    return (
        <>
            <div className='p-[40px] '>
                <div className="flex items-center ">
                    <div
                        className={`cursor-pointer text-sm font-normal font-['Work Sans'] leading-tight py-[10px] px-[20px] border-b-2 ${activeTab === 'stats' ? 'text-sky-600 border-b-2 border-sky-600' : 'text-slate-800 border-b-2 border-gray-200'}`}
                        onClick={() => handleTabClick('stats')}
                    >
                        Stats
                    </div>
                    <div
                        className={`cursor-pointer  text-sm font-normal font-['Work Sans'] leading-tight py-[10px] px-[20px] border-b-2 ${activeTab === 'leads' ? 'text-sky-600 border-b-2 border-sky-600' : 'text-slate-800 border-b-2 border-gray-200'}`}
                        onClick={() => handleTabClick('leads')}
                    >
                        Leads
                    </div>
                    <div
                        className={`cursor-pointer  text-sm font-normal font-['Work Sans'] leading-tight py-[10px] px-[20px] border-b-2 ${activeTab === 'sequence' ? 'text-sky-600 border-b-2 border-sky-600' : 'text-slate-800 border-b-2 border-gray-200'}`}
                        onClick={() => handleTabClick('sequence')}
                    >
                        Sequence
                    </div>
                    <div
                        className={`cursor-pointer  text-sm font-normal font-['Work Sans'] leading-tight py-[10px] px-[20px] border-b-2 ${activeTab === 'schedule' ? 'text-sky-600 border-b-2 border-sky-600' : 'text-slate-800 border-b-2 border-gray-200'}`}
                        onClick={() => handleTabClick('schedule')}
                    >
                        Schedule
                    </div>
                    <div
                        className={`cursor-pointer  text-sm font-normal font-['Work Sans'] leading-tight py-[10px] px-[20px] border-b-2 ${activeTab === 'more' ? 'text-sky-600 border-b-2 border-sky-600' : 'text-slate-800 border-b-2 border-gray-200'}`}
                        onClick={() => handleTabClick('more')}
                    >
                        More
                    </div>
                </div>

                {activeTab === 'stats' && (
                    <div className=' flex flex-col '>

                        <div className='pt-[40px]   flex items-center gap-[10px]'>
                            <div className="text-slate-800 text-base font-normal font-['Roboto']">Status</div>
                            <div className='h-[48px]  w-[100px] flex items-center justify-center rounded-lg bg-[#089CB3]'>
                                <div class="text-center text-white text-base font-normal font-['Roboto']">Active</div>
                            </div>
                        </div>

                        <div className="">
                            <div className="pt-[40px]  w-[full] flex justify-between items-center gap-[20px] overflow-x-scroll chrome-scrollbar-hidden ">
                                <div class="min-w-57 max-w-110 w-[100%] h-24 relative">
                                    <div class="min-w-57 max-w-110 w-[100%] h-24 left-0 top-0 absolute bg-white rounded-2xl border border-zinc-200"></div>
                                    <div class="left-[90px] top-[25px] absolute text-slate-800 text-xs font-medium font-['Work Sans'] leading-none">Sequence Started</div>
                                    <div class="left-[90px] top-[54px] absolute text-slate-800 text-xl font-semibold font-['All Round Gothic'] leading-normal">356</div>
                                    <div class="w-14 h-14 left-[20px] top-[20px] absolute bg-gray-100 rounded-lg"></div>
                                    <div class="w-6 h-6 left-[38px] top-[38px] absolute">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H21C21.4142 9.25 21.75 9.58579 21.75 10C21.75 10.4142 21.4142 10.75 21 10.75H3C2.58579 10.75 2.25 10.4142 2.25 10ZM2.25 14C2.25 13.5858 2.58579 13.25 3 13.25H11C11.4142 13.25 11.75 13.5858 11.75 14C11.75 14.4142 11.4142 14.75 11 14.75H3C2.58579 14.75 2.25 14.4142 2.25 14ZM17.5 13.25C17.9142 13.25 18.25 13.5858 18.25 14V18.1893L19.4697 16.9697C19.7626 16.6768 20.2374 16.6768 20.5303 16.9697C20.8232 17.2626 20.8232 17.7374 20.5303 18.0303L18.0303 20.5303C17.7374 20.8232 17.2626 20.8232 16.9697 20.5303L14.4697 18.0303C14.1768 17.7374 14.1768 17.2626 14.4697 16.9697C14.7626 16.6768 15.2374 16.6768 15.5303 16.9697L16.75 18.1893V14C16.75 13.5858 17.0858 13.25 17.5 13.25ZM2.25 18C2.25 17.5858 2.58579 17.25 3 17.25H11C11.4142 17.25 11.75 17.5858 11.75 18C11.75 18.4142 11.4142 18.75 11 18.75H3C2.58579 18.75 2.25 18.4142 2.25 18Z" fill="#089CB3" />
                                        </svg>
                                    </div>


                                </div>
                                <div class="min-w-57 max-w-110 w-[100%] h-24 relative">
                                    <div class="min-w-57 max-w-110 w-[100%] h-24 left-0 top-0 absolute bg-white rounded-2xl border border-zinc-200"></div>
                                    <div class="left-[90px] top-[25px] absolute text-slate-800 text-xs font-medium font-['Work Sans'] leading-none">Open Rate</div>
                                    <div class="left-[90px] top-[54px] absolute text-slate-800 text-xl font-semibold font-['All Round Gothic'] leading-normal">1273</div>
                                    <div class="w-14 h-14 left-[20px] top-[20px] absolute bg-gray-100 rounded-lg"></div>
                                    <div class="w-6 h-6 left-[38px] top-[38px] absolute">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 14.0002C22 17.7714 22 19.657 20.8284 20.8286C19.6569 22.0002 17.7712 22.0002 14 22.0002H10C6.22876 22.0002 4.34315 22.0002 3.17157 20.8286C2 19.657 2 17.7714 2 14.0002C2 10.229 2 8.34334 3.17157 7.17176C3.82475 6.51858 4.69989 6.22957 6 6.10168M18 6.10168C19.3001 6.22957 20.1752 6.51858 20.8284 7.17176C21.4816 7.82494 21.7706 8.70005 21.8985 10.0001" stroke="#089CB3" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M10 6H14" stroke="#089CB3" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M11 9H13" stroke="#089CB3" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M14 2.00261C15.7066 2.01708 16.6474 2.11182 17.2678 2.73223C18 3.46447 18 4.64298 18 7V9.06325C18 9.52389 18 9.75421 17.9056 9.95578C17.8112 10.1574 17.6342 10.3048 17.2804 10.5997L16.5607 11.1994M10 2.00261C8.29344 2.01708 7.35264 2.11182 6.73223 2.73223C6 3.46447 6 4.64298 6 7V9.06325C6 9.52389 6 9.75421 6.09441 9.95578C6.18882 10.1574 6.36576 10.3048 6.71963 10.5997L8.1589 11.7991C9.99553 13.3296 10.9139 14.0949 12 14.0949C12.6493 14.0949 13.2386 13.8214 14 13.2744" stroke="#089CB3" stroke-width="1.5" stroke-linecap="round" />
                                        </svg>

                                    </div>
                                </div>
                                <div class="min-w-57 max-w-110 w-[100%] h-24 relative">
                                    <div class="min-w-57 max-w-110 w-[100%] h-24 left-0 top-0 absolute bg-white rounded-2xl border border-zinc-200"></div>
                                    <div class="left-[90px] top-[25px] absolute text-slate-800 text-xs font-medium font-['Work Sans'] leading-none">Click Rate</div>
                                    <div class="left-[90px] top-[54px] absolute text-slate-800 text-xl font-semibold font-['All Round Gothic'] leading-normal">2715</div>
                                    <div class="w-14 h-14 left-[20px] top-[20px] absolute bg-gray-100 rounded-lg"></div>
                                    <div class="w-6 h-6 left-[38px] top-[38px] absolute">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 4.94198C6.47561 4.02693 5.129 3.65381 4.39141 4.39141C3.55146 5.23136 4.15187 6.86106 5.3527 10.1205L7.3603 15.5696C7.96225 17.2035 8.26322 18.0204 8.92489 18.1658C9.58656 18.3111 10.2022 17.6955 11.4334 16.4643L12.6361 15.2616L16.5744 19.1999C16.9821 19.6077 17.186 19.8116 17.4135 19.9058C17.7168 20.0314 18.0575 20.0314 18.3608 19.9058C18.5882 19.8116 18.7921 19.6077 19.1999 19.1999C19.6077 18.7921 19.8116 18.5882 19.9058 18.3608C20.0314 18.0575 20.0314 17.7168 19.9058 17.4135C19.8116 17.186 19.6077 16.9821 19.1999 16.5744L15.2616 12.6361L16.4643 11.4334C17.6955 10.2022 18.3111 9.58656 18.1658 8.92489C18.0204 8.26322 17.2035 7.96225 15.5696 7.3603L13 6.41359" stroke="#089CB3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                </div>
                                <div class="min-w-57 max-w-110 w-[100%] h-24 relative">
                                    <div class="min-w-57 max-w-110 w-[100%] h-24 left-0 top-0 absolute bg-white rounded-2xl border border-zinc-200"></div>
                                    <div class="left-[90px] top-[25px] absolute text-slate-800 text-xs font-medium font-['Work Sans'] leading-none">Reply Rate</div>
                                    <div class="left-[90px] top-[54px] absolute text-slate-800 text-xl font-semibold font-['All Round Gothic'] leading-normal">356</div>
                                    <div class="w-14 h-14 left-[20px] top-[20px] absolute bg-gray-100 rounded-lg"></div>
                                    <div class="w-6 h-6 left-[38px] top-[38px] absolute">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.0867 21.3877L13.7321 21.7697L13.0867 21.3877ZM13.6288 20.4718L12.9833 20.0898L13.6288 20.4718ZM10.3712 20.4718L9.72579 20.8539H9.72579L10.3712 20.4718ZM10.9133 21.3877L11.5587 21.0057L10.9133 21.3877ZM1.25 10.5C1.25 10.9142 1.58579 11.25 2 11.25C2.41421 11.25 2.75 10.9142 2.75 10.5H1.25ZM3.07351 15.6264C2.915 15.2437 2.47627 15.062 2.09359 15.2205C1.71091 15.379 1.52918 15.8177 1.68769 16.2004L3.07351 15.6264ZM7.78958 18.9915L7.77666 19.7413L7.78958 18.9915ZM5.08658 18.6194L4.79957 19.3123H4.79957L5.08658 18.6194ZM21.6194 15.9134L22.3123 16.2004V16.2004L21.6194 15.9134ZM16.2104 18.9915L16.1975 18.2416L16.2104 18.9915ZM18.9134 18.6194L19.2004 19.3123H19.2004L18.9134 18.6194ZM19.6125 2.7368L19.2206 3.37628L19.6125 2.7368ZM21.2632 4.38751L21.9027 3.99563V3.99563L21.2632 4.38751ZM4.38751 2.7368L3.99563 2.09732V2.09732L4.38751 2.7368ZM2.7368 4.38751L2.09732 3.99563H2.09732L2.7368 4.38751ZM9.40279 19.2098L9.77986 18.5615L9.77986 18.5615L9.40279 19.2098ZM13.7321 21.7697L14.2742 20.8539L12.9833 20.0898L12.4412 21.0057L13.7321 21.7697ZM9.72579 20.8539L10.2679 21.7697L11.5587 21.0057L11.0166 20.0898L9.72579 20.8539ZM12.4412 21.0057C12.2485 21.3313 11.7515 21.3313 11.5587 21.0057L10.2679 21.7697C11.0415 23.0767 12.9585 23.0767 13.7321 21.7697L12.4412 21.0057ZM10.5 2.75H13.5V1.25H10.5V2.75ZM21.25 10.5V11.5H22.75V10.5H21.25ZM7.8025 18.2416C6.54706 18.2199 5.88923 18.1401 5.37359 17.9265L4.79957 19.3123C5.60454 19.6457 6.52138 19.7197 7.77666 19.7413L7.8025 18.2416ZM1.68769 16.2004C2.27128 17.6093 3.39066 18.7287 4.79957 19.3123L5.3736 17.9265C4.33223 17.4951 3.50486 16.6678 3.07351 15.6264L1.68769 16.2004ZM21.25 11.5C21.25 12.6751 21.2496 13.5189 21.2042 14.1847C21.1592 14.8438 21.0726 15.2736 20.9265 15.6264L22.3123 16.2004C22.5468 15.6344 22.6505 15.0223 22.7007 14.2868C22.7504 13.5581 22.75 12.6546 22.75 11.5H21.25ZM16.2233 19.7413C17.4786 19.7197 18.3955 19.6457 19.2004 19.3123L18.6264 17.9265C18.1108 18.1401 17.4529 18.2199 16.1975 18.2416L16.2233 19.7413ZM20.9265 15.6264C20.4951 16.6678 19.6678 17.4951 18.6264 17.9265L19.2004 19.3123C20.6093 18.7287 21.7287 17.6093 22.3123 16.2004L20.9265 15.6264ZM13.5 2.75C15.1512 2.75 16.337 2.75079 17.2619 2.83873C18.1757 2.92561 18.7571 3.09223 19.2206 3.37628L20.0044 2.09732C19.2655 1.64457 18.4274 1.44279 17.4039 1.34547C16.3915 1.24921 15.1222 1.25 13.5 1.25V2.75ZM22.75 10.5C22.75 8.87781 22.7508 7.6085 22.6545 6.59611C22.5572 5.57256 22.3554 4.73445 21.9027 3.99563L20.6237 4.77938C20.9078 5.24291 21.0744 5.82434 21.1613 6.73809C21.2492 7.663 21.25 8.84876 21.25 10.5H22.75ZM19.2206 3.37628C19.7925 3.72672 20.2733 4.20752 20.6237 4.77938L21.9027 3.99563C21.4286 3.22194 20.7781 2.57144 20.0044 2.09732L19.2206 3.37628ZM10.5 1.25C8.87781 1.25 7.6085 1.24921 6.59611 1.34547C5.57256 1.44279 4.73445 1.64457 3.99563 2.09732L4.77938 3.37628C5.24291 3.09223 5.82434 2.92561 6.73809 2.83873C7.663 2.75079 8.84876 2.75 10.5 2.75V1.25ZM2.75 10.5C2.75 8.84876 2.75079 7.663 2.83873 6.73809C2.92561 5.82434 3.09223 5.24291 3.37628 4.77938L2.09732 3.99563C1.64457 4.73445 1.44279 5.57256 1.34547 6.59611C1.24921 7.6085 1.25 8.87781 1.25 10.5H2.75ZM3.99563 2.09732C3.22194 2.57144 2.57144 3.22194 2.09732 3.99563L3.37628 4.77938C3.72672 4.20752 4.20752 3.72672 4.77938 3.37628L3.99563 2.09732ZM11.0166 20.0898C10.8136 19.7468 10.6354 19.4441 10.4621 19.2063C10.2795 18.9559 10.0702 18.7304 9.77986 18.5615L9.02572 19.8582C9.07313 19.8857 9.13772 19.936 9.24985 20.0898C9.37122 20.2564 9.50835 20.4865 9.72579 20.8539L11.0166 20.0898ZM7.77666 19.7413C8.21575 19.7489 8.49387 19.7545 8.70588 19.7779C8.90399 19.7999 8.98078 19.832 9.02572 19.8582L9.77986 18.5615C9.4871 18.3912 9.18246 18.3215 8.87097 18.287C8.57339 18.2541 8.21375 18.2487 7.8025 18.2416L7.77666 19.7413ZM14.2742 20.8539C14.4916 20.4865 14.6287 20.2564 14.7501 20.0898C14.8622 19.936 14.9268 19.8857 14.9742 19.8582L14.2201 18.5615C13.9298 18.7304 13.7204 18.9559 13.5379 19.2063C13.3646 19.4441 13.1864 19.7468 12.9833 20.0898L14.2742 20.8539ZM16.1975 18.2416C15.7862 18.2487 15.4266 18.2541 15.129 18.287C14.8175 18.3215 14.5129 18.3912 14.2201 18.5615L14.9742 19.8582C15.0192 19.832 15.096 19.7999 15.2941 19.7779C15.5061 19.7545 15.7842 19.7489 16.2233 19.7413L16.1975 18.2416Z" fill="#089CB3" />
                                            <path d="M8 11H8.009M11.991 11H12M15.991 11H16" stroke="#089CB3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                </div>
                                <div class="min-w-57 max-w-110 w-[100%] h-24 relative">
                                    <div class="min-w-57 max-w-110 w-[100%] h-24 left-0 top-0 absolute bg-white rounded-2xl border border-zinc-200"></div>
                                    <div class="left-[90px] top-[25px] absolute text-slate-800 text-xs font-medium font-['Work Sans'] leading-none">Opportunities</div>
                                    <div class="left-[90px] top-[54px] absolute text-slate-800 text-xl font-semibold font-['All Round Gothic'] leading-normal">193</div>
                                    <div class="w-14 h-14 left-[20px] top-[20px] absolute bg-gray-100 rounded-lg"></div>
                                    <div class="w-6 h-6 left-[38px] top-[38px] absolute">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C21.4816 7.82475 21.7706 8.69989 21.8985 10M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22878 22 4.34314 22 3.17157 20.8284C2.51839 20.1752 2.22937 19.3001 2.10149 18" stroke="#089CB3" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M16 6C16 4.11438 16 3.17157 15.4142 2.58579C14.8284 2 13.8856 2 12 2C10.1144 2 9.17157 2 8.58579 2.58579C8 3.17157 8 4.11438 8 6" stroke="#089CB3" stroke-width="1.5" />
                                            <path d="M17 9C17 9.55228 16.5523 10 16 10C15.4477 10 15 9.55228 15 9C15 8.44772 15.4477 8 16 8C16.5523 8 17 8.44772 17 9Z" fill="#089CB3" />
                                            <path d="M9 9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9C7 8.44772 7.44772 8 8 8C8.55228 8 9 8.44772 9 9Z" fill="#089CB3" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                            <div className='mx-[-40px]'>
                                <Charts />
                            </div>

                        </div>

                        <div>
                            <div>
                                <div className="rounded-custom2 flex flex-col py-[40px] px-[20px] w-[full] h-[full] bg-white border border-solid border-[#e3e5e7]">

                                    <div className="flex items-center ">
                                        <div
                                            className={`cursor-pointer text-sm font-normal font-['Work Sans'] leading-tight py-[10px] px-[20px] border-b-2 ${activeTab2 === 'stepanalytics' ? 'text-sky-600 border-b-2 border-sky-600' : 'text-slate-800 border-b-2 border-gray-200'}`}
                                            onClick={() => handleTabClick2('stepanalytics')}
                                        >
                                            Step Analytics
                                        </div>
                                        <div
                                            className={`cursor-pointer  text-sm font-normal font-['Work Sans'] leading-tight py-[10px] px-[20px] border-b-2 ${activeTab2 === 'activity' ? 'text-sky-600 border-b-2 border-sky-600' : 'text-slate-800 border-b-2 border-gray-200'}`}
                                            onClick={() => handleTabClick2('activity')}
                                        >
                                            Activity
                                        </div>
                                    </div>


                                    {activeTab2 === 'stepanalytics' && (
                                        <div id="stepanalytics">
                                            <div className="mr-[40px] flex flex-col">
                                                <div className=" overflow-x-auto ">
                                                    <div id="campaignanalytics" className="py-2 mt-8 align-middle inline-block min-w-full ">
                                                        <div className=" overflow-hidden sm:rounded-lg">
                                                            <table className="table  w-full ">
                                                                <thead className="bg-white ">
                                                                    <tr className=''>
                                                                        <th

                                                                            className=" py-3 text-left   font-medium uppercase tracking-wider text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                                                                        >
                                                                            Step
                                                                        </th>
                                                                        <th

                                                                            className=" py-3 text-center  font-medium uppercase tracking-wider text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                                                                        >
                                                                            Sent
                                                                        </th>
                                                                        <th

                                                                            className="py-3 text-center  font-medium uppercase tracking-wider text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                                                                        >
                                                                            Opened
                                                                        </th>

                                                                        <th

                                                                            className=" py-3 text-center  font-medium uppercase tracking-wider text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                                                                        >
                                                                            Replied
                                                                        </th>
                                                                        <th

                                                                            className=" py-3 text-center  font-medium uppercase tracking-wider text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                                                                        >
                                                                            Clicked
                                                                        </th>
                                                                        <th

                                                                            className=" py-3 text-center  font-medium uppercase tracking-wider text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                                                                        >
                                                                            Opportunites
                                                                        </th>

                                                                    </tr>
                                                                </thead>
                                                                <tbody className="bg-white divide-transparent ">
                                                                    {/* Repeat this row for each entry */}
                                                                    <tr>

                                                                        <td className=" py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">Step 1</div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className=" text-center py-8 whitespace-nowrap flex  justify-center gap-3">
                                                                            <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">40</div>
                                                                            <svg width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1 1L0.999999 18" stroke="#E3E5E7" stroke-width="2" stroke-linecap="round" />
                                                                            </svg>

                                                                            <div class="text-slate-500 text-sm font-normal font-['Work Sans'] leading-none">4.0%</div>

                                                                        </td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class="text-slate-800 text-sm  font-normal font-['Work Sans'] leading-none">1</div></td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td className="pb-8 pt-1 whitespace-nowrap"><div className="flex items-center">

                                                                            <label
                                                                                className={`flex items-center relative inline-block w-[40px] h-4 ${isToggled1 ? 'bg-gray-300' : 'bg-gray-300'
                                                                                    } rounded-full cursor-pointer transition-colors duration-300`}
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    className="sr-only"
                                                                                    checked={isToggled1}
                                                                                    onChange={handleToggle1}
                                                                                />
                                                                                <span
                                                                                    className={`absolute left-0 w-6 h-6 ${isToggled1 ? 'bg-blue-500 translate-x-full' : 'bg-white translate-x-0'
                                                                                        }  rounded-full shadow-md border border-gray-300  transition-colors duration-300 transition-transform duration-300`}
                                                                                ></span>
                                                                            </label>
                                                                        </div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className=" text-center py-8 whitespace-nowrap flex  justify-center gap-3">
                                                                            <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">40</div>
                                                                            <svg width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1 1L0.999999 18" stroke="#E3E5E7" stroke-width="2" stroke-linecap="round" />
                                                                            </svg>

                                                                            <div class="text-slate-500 text-sm font-normal font-['Work Sans'] leading-none">4.0%</div>

                                                                        </td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class="text-slate-800 text-sm  font-normal font-['Work Sans'] leading-none">1</div></td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td className=" py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">Step 2</div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">54</div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">2453</div></td>
                                                                        <td className=" text-center py-8 whitespace-nowrap flex  justify-center gap-3">
                                                                            <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">40</div>
                                                                            <svg width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1 1L0.999999 18" stroke="#E3E5E7" stroke-width="2" stroke-linecap="round" />
                                                                            </svg>

                                                                            <div class="text-slate-500 text-sm font-normal font-['Work Sans'] leading-none">4.0%</div>

                                                                        </td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class="text-slate-800 text-sm  font-normal font-['Work Sans'] leading-none">1</div></td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td className="pb-8 pt-1 whitespace-nowrap"><div className="flex items-center">

                                                                            <label
                                                                                className={`flex items-center relative inline-block w-[40px] h-4 ${isToggled2 ? 'bg-gray-300' : 'bg-gray-300'
                                                                                    } rounded-full cursor-pointer transition-colors duration-300`}
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    className="sr-only"
                                                                                    checked={isToggled2}
                                                                                    onChange={handleToggle2}
                                                                                />
                                                                                <span
                                                                                    className={`absolute left-0 w-6 h-6 ${isToggled2 ? 'bg-blue-500 translate-x-full' : 'bg-white translate-x-0'
                                                                                        }  rounded-full shadow-md border border-gray-300  transition-colors duration-300 transition-transform duration-300`}
                                                                                ></span>
                                                                            </label>
                                                                        </div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className=" text-center py-8 whitespace-nowrap flex  justify-center gap-3">
                                                                            <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">40</div>
                                                                            <svg width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1 1L0.999999 18" stroke="#E3E5E7" stroke-width="2" stroke-linecap="round" />
                                                                            </svg>

                                                                            <div class="text-slate-500 text-sm font-normal font-['Work Sans'] leading-none">4.0%</div>

                                                                        </td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class="text-slate-800 text-sm  font-normal font-['Work Sans'] leading-none">1</div></td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td className=" py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">Step 3</div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className=" text-center py-8 whitespace-nowrap flex  justify-center gap-3">
                                                                            <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">40</div>
                                                                            <svg width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1 1L0.999999 18" stroke="#E3E5E7" stroke-width="2" stroke-linecap="round" />
                                                                            </svg>

                                                                            <div class="text-slate-500 text-sm font-normal font-['Work Sans'] leading-none">4.0%</div>

                                                                        </td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class="text-slate-800 text-sm  font-normal font-['Work Sans'] leading-none">1</div></td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td className="pb-8 pt-1 whitespace-nowrap"><div className="flex items-center">

                                                                            <label
                                                                                className={`flex items-center relative inline-block w-[40px] h-4 ${isToggled3 ? 'bg-gray-300' : 'bg-gray-300'
                                                                                    } rounded-full cursor-pointer transition-colors duration-300`}
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    className="sr-only"
                                                                                    checked={isToggled3}
                                                                                    onChange={handleToggle3}
                                                                                />
                                                                                <span
                                                                                    className={`absolute left-0 w-6 h-6 ${isToggled3 ? 'bg-blue-500 translate-x-full' : 'bg-white translate-x-0'
                                                                                        }  rounded-full shadow-md border border-gray-300  transition-colors duration-300 transition-transform duration-300`}
                                                                                ></span>
                                                                            </label>
                                                                        </div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className=" text-center py-8 whitespace-nowrap flex  justify-center gap-3">
                                                                            <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">40</div>
                                                                            <svg width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1 1L0.999999 18" stroke="#E3E5E7" stroke-width="2" stroke-linecap="round" />
                                                                            </svg>

                                                                            <div class="text-slate-500 text-sm font-normal font-['Work Sans'] leading-none">4.0%</div>

                                                                        </td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class="text-slate-800 text-sm  font-normal font-['Work Sans'] leading-none">1</div></td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td className=" py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">Step 4</div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className=" text-center py-8 whitespace-nowrap flex  justify-center gap-3">
                                                                            <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">40</div>
                                                                            <svg width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1 1L0.999999 18" stroke="#E3E5E7" stroke-width="2" stroke-linecap="round" />
                                                                            </svg>

                                                                            <div class="text-slate-500 text-sm font-normal font-['Work Sans'] leading-none">4.0%</div>

                                                                        </td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class="text-slate-800 text-sm  font-normal font-['Work Sans'] leading-none">1</div></td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td className="pb-8 pt-1 whitespace-nowrap"><div className="flex items-center">

                                                                            <label
                                                                                className={`flex items-center relative inline-block w-[40px] h-4 ${isToggled4 ? 'bg-gray-300' : 'bg-gray-300'
                                                                                    } rounded-full cursor-pointer transition-colors duration-300`}
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    className="sr-only"
                                                                                    checked={isToggled4}
                                                                                    onChange={handleToggle4}
                                                                                />
                                                                                <span
                                                                                    className={`absolute left-0 w-6 h-6 ${isToggled4 ? 'bg-blue-500 translate-x-full' : 'bg-white translate-x-0'
                                                                                        }  rounded-full shadow-md border border-gray-300  transition-colors duration-300 transition-transform duration-300`}
                                                                                ></span>
                                                                            </label>
                                                                        </div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className=" text-center py-8 whitespace-nowrap flex  justify-center gap-3">
                                                                            <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">40</div>
                                                                            <svg width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1 1L0.999999 18" stroke="#E3E5E7" stroke-width="2" stroke-linecap="round" />
                                                                            </svg>

                                                                            <div class="text-slate-500 text-sm font-normal font-['Work Sans'] leading-none">4.0%</div>

                                                                        </td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class="text-slate-800 text-sm  font-normal font-['Work Sans'] leading-none">1</div></td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td className=" py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">Step 5</div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className=" text-center py-8 whitespace-nowrap flex  justify-center gap-3">
                                                                            <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">40</div>
                                                                            <svg width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1 1L0.999999 18" stroke="#E3E5E7" stroke-width="2" stroke-linecap="round" />
                                                                            </svg>

                                                                            <div class="text-slate-500 text-sm font-normal font-['Work Sans'] leading-none">4.0%</div>

                                                                        </td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class="text-slate-800 text-sm  font-normal font-['Work Sans'] leading-none">1</div></td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td className="pb-8 pt-1 whitespace-nowrap"><div className="flex items-center">

                                                                            <label
                                                                                className={`flex items-center relative inline-block w-[40px] h-4 ${isToggled5 ? 'bg-gray-300' : 'bg-gray-300'
                                                                                    } rounded-full cursor-pointer transition-colors duration-300`}
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    className="sr-only"
                                                                                    checked={isToggled5}
                                                                                    onChange={handleToggle5}
                                                                                />
                                                                                <span
                                                                                    className={`absolute left-0 w-6 h-6 ${isToggled5 ? 'bg-blue-500 translate-x-full' : 'bg-white translate-x-0'
                                                                                        }  rounded-full shadow-md border border-gray-300  transition-colors duration-300 transition-transform duration-300`}
                                                                                ></span>
                                                                            </label>
                                                                        </div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className=" text-center py-8 whitespace-nowrap flex  justify-center gap-3">
                                                                            <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">40</div>
                                                                            <svg width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1 1L0.999999 18" stroke="#E3E5E7" stroke-width="2" stroke-linecap="round" />
                                                                            </svg>

                                                                            <div class="text-slate-500 text-sm font-normal font-['Work Sans'] leading-none">4.0%</div>

                                                                        </td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class="text-slate-800 text-sm  font-normal font-['Work Sans'] leading-none">1</div></td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td className=" py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">Step 6</div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className=" text-center py-8 whitespace-nowrap flex  justify-center gap-3">
                                                                            <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">40</div>
                                                                            <svg width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1 1L0.999999 18" stroke="#E3E5E7" stroke-width="2" stroke-linecap="round" />
                                                                            </svg>

                                                                            <div class="text-slate-500 text-sm font-normal font-['Work Sans'] leading-none">4.0%</div>

                                                                        </td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class="text-slate-800 text-sm  font-normal font-['Work Sans'] leading-none">1</div></td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td className="pb-8 pt-1 whitespace-nowrap"><div className="flex items-center">

                                                                            <label
                                                                                className={`flex items-center relative inline-block w-[40px] h-4 ${isToggled6 ? 'bg-gray-300' : 'bg-gray-300'
                                                                                    } rounded-full cursor-pointer transition-colors duration-300`}
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    className="sr-only"
                                                                                    checked={isToggled6}
                                                                                    onChange={handleToggle6}
                                                                                />
                                                                                <span
                                                                                    className={`absolute left-0 w-6 h-6 ${isToggled6 ? 'bg-blue-500 translate-x-full' : 'bg-white translate-x-0'
                                                                                        }  rounded-full shadow-md border border-gray-300  transition-colors duration-300 transition-transform duration-300`}
                                                                                ></span>
                                                                            </label>
                                                                        </div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className="text-center  py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                                                                        <td className=" text-center py-8 whitespace-nowrap flex  justify-center gap-3">
                                                                            <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">40</div>
                                                                            <svg width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1 1L0.999999 18" stroke="#E3E5E7" stroke-width="2" stroke-linecap="round" />
                                                                            </svg>

                                                                            <div class="text-slate-500 text-sm font-normal font-['Work Sans'] leading-none">4.0%</div>

                                                                        </td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class="text-slate-800 text-sm  font-normal font-['Work Sans'] leading-none">1</div></td>
                                                                        <td className="text-center py-8 whitespace-nowrap"><div class=" text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>

                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )}

                                    {activeTab2 === 'activity' && (
                                        <h1 className='h-[663px]'>Activity</h1>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div>

                        </div>
                    </div>
                )}

                {activeTab === 'leads' && (
                    <div className='flex flex-col gap-[40px]'>
                        <div className='flex mt-[40px] gap-[40px] justify-between items-center'>
                            <div className='flex  gap-[40px] items-center'>
                                <div class="w-[400px] h-[48px]  bg-[#F3F5F7] rounded-md flex items-center">
                                    <div class=" p-[12px]">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75ZM1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 17.1609 17.1609 21.75 11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5ZM19.4697 19.4697C19.7626 19.1768 20.2374 19.1768 20.5303 19.4697L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L19.4697 20.5303C19.1768 20.2374 19.1768 19.7626 19.4697 19.4697Z" fill="#089CB3" />
                                        </svg>
                                    </div>
                                    <input type="text" placeholder="Search" class="bg-transparent flex-1 p-2 border-none focus:outline-none text-slate-500 text-base font-normal font-['Work Sans']" />
                                </div>

                                <div className='flex items-center gap-[20px]'>
                                    <div className='flex items-center gap-[10px]'>
                                        <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="10.0003" cy="5.00008" r="3.33333" stroke="#089CB3" stroke-width="1.5" />
                                            <path d="M15 7.49992C16.3807 7.49992 17.5 6.56718 17.5 5.41659C17.5 4.26599 16.3807 3.33325 15 3.33325" stroke="#089CB3" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M5 7.49992C3.61929 7.49992 2.5 6.56718 2.5 5.41659C2.5 4.26599 3.61929 3.33325 5 3.33325" stroke="#089CB3" stroke-width="1.5" stroke-linecap="round" />
                                            <ellipse cx="10" cy="14.1666" rx="5" ry="3.33333" stroke="#089CB3" stroke-width="1.5" />
                                            <path d="M16.667 15.8334C18.1289 15.5128 19.167 14.701 19.167 13.7501C19.167 12.7992 18.1289 11.9873 16.667 11.6667" stroke="#089CB3" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M3.33301 15.8334C1.87114 15.5128 0.833008 14.701 0.833008 13.7501C0.833008 12.7992 1.87114 11.9873 3.33301 11.6667" stroke="#089CB3" stroke-width="1.5" stroke-linecap="round" />
                                        </svg>
                                        </div>
                                        <div>123</div>
                                    </div>
                                    <div className='flex items-center gap-[10px]'>
                                        <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7549 3.26836C14.91 2.40547 13.705 2.08718 12.5254 2.42283C12.1934 2.51729 11.8477 2.32474 11.7532 1.99274C11.6587 1.66074 11.8513 1.31502 12.1833 1.22055C13.7985 0.760975 15.4788 1.19974 16.6481 2.39383C16.8895 2.64046 16.8854 3.03617 16.6388 3.27767C16.3921 3.51916 15.9964 3.515 15.7549 3.26836ZM9.32522 2.75707C9.14684 2.45117 8.627 2.26566 8.09893 2.56746C7.5728 2.86814 7.48027 3.39818 7.65555 3.69875L9.76026 7.30802C9.93414 7.6062 9.83338 7.98888 9.53519 8.16277C9.23701 8.33665 8.85433 8.23588 8.68045 7.9377L6.57573 4.32844C6.57563 4.32825 6.57584 4.32862 6.57573 4.32844L5.87416 3.12535C5.69578 2.81945 5.17594 2.63394 4.64787 2.93573C4.12175 3.23642 4.02921 3.76645 4.20449 4.06703L7.36156 9.48092C7.53544 9.77911 7.43468 10.1618 7.13649 10.3357C6.83831 10.5096 6.45563 10.4088 6.28174 10.1106L4.8786 7.70443C4.70022 7.39854 4.18038 7.21302 3.65232 7.51482C3.12619 7.8155 3.03365 8.34554 3.20893 8.64611L6.366 14.06C7.70678 16.3592 11.0154 17.1054 13.8212 15.5018C16.6251 13.8994 17.6218 10.6982 16.2841 8.40424L14.1794 4.79497C14.001 4.48908 13.4812 4.30356 12.9531 4.60536C12.427 4.90605 12.3345 5.43608 12.5097 5.73665L13.9129 8.14283C13.9969 8.28684 14.0198 8.45843 13.9767 8.61945C13.9335 8.78047 13.8278 8.91759 13.6831 9.0003C12.3977 9.73491 12.0038 11.1553 12.5665 12.1204C12.7404 12.4186 12.6397 12.8012 12.3415 12.9751C12.0433 13.149 11.6606 13.0482 11.4867 12.7501C10.604 11.2364 11.1596 9.36411 12.5395 8.26914L9.32522 2.75707ZM11.5987 4.17438L10.405 2.12739C9.80848 1.10439 8.46913 0.916145 7.47869 1.48219C7.17345 1.65664 6.91382 1.89577 6.71807 2.17321C6.05136 1.43914 4.90317 1.35009 4.02763 1.85047C3.03526 2.41762 2.52502 3.66839 3.12467 4.69671L3.95981 6.12885C3.63895 6.1637 3.3207 6.2646 3.03207 6.42955C2.0397 6.9967 1.52946 8.24748 2.12912 9.2758L5.28619 14.6897C7.04514 17.706 11.1733 18.4549 14.4415 16.5871C17.7116 14.7182 19.126 10.7962 17.3639 7.77455L15.2592 4.16529C14.6627 3.14229 13.3233 2.95405 12.3329 3.52009C12.0412 3.6868 11.7912 3.91256 11.5987 4.17438ZM3.67826 14.8826C3.97644 14.7087 4.35913 14.8095 4.53301 15.1077C5.22206 16.2893 6.27547 17.1829 7.57454 17.7627C7.88975 17.9033 8.03123 18.2729 7.89054 18.5881C7.74986 18.9033 7.38029 19.0448 7.06508 18.9041C5.55549 18.2304 4.28899 17.1706 3.45319 15.7374C3.27931 15.4392 3.38008 15.0565 3.67826 14.8826Z" fill="#EA9A00" />
                                        </svg>
                                        </div>
                                        <div>45</div>
                                    </div>
                                    <div className='flex items-center gap-[10px]'>
                                        <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0003 4.58374C6.25046 0.687765 1.66699 3.56168 1.66699 7.61413C1.66699 11.6666 5.01651 13.8261 7.46844 15.7589C8.33366 16.441 9.16699 17.0832 10.0003 17.0832M10.0003 4.58374C13.7502 0.687765 18.3337 3.56168 18.3337 7.61413C18.3337 11.6666 14.9841 13.8261 12.5322 15.7589C11.667 16.441 10.8337 17.0832 10.0003 17.0832M10.0003 4.58374L8.75033 7.08321L11.667 9.16654L9.16699 12.0832L10.8337 13.7499L10.0003 17.0832" stroke="#EF5050" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        </div>
                                        <div>27</div>
                                    </div>
                                    <div className='flex items-center gap-[10px]'>
                                        <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0003 2.29175C5.74313 2.29175 2.29199 5.74289 2.29199 10.0001C2.29199 14.2573 5.74313 17.7084 10.0003 17.7084C14.2575 17.7084 17.7087 14.2573 17.7087 10.0001C17.7087 5.74289 14.2575 2.29175 10.0003 2.29175ZM1.04199 10.0001C1.04199 5.05253 5.05277 1.04175 10.0003 1.04175C14.9479 1.04175 18.9587 5.05253 18.9587 10.0001C18.9587 14.9476 14.9479 18.9584 10.0003 18.9584C5.05277 18.9584 1.04199 14.9476 1.04199 10.0001Z" fill="#D942FF" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.16699 7.12508C6.3741 6.84894 6.76585 6.79297 7.04199 7.00008L8.70866 8.25008C8.86604 8.36812 8.95866 8.55336 8.95866 8.75008C8.95866 8.94681 8.86604 9.13205 8.70866 9.25008L7.04199 10.5001C6.76585 10.7072 6.3741 10.6512 6.16699 10.3751C5.95989 10.0989 6.01585 9.70719 6.29199 9.50008L7.29199 8.75008L6.29199 8.00008C6.01585 7.79298 5.95989 7.40122 6.16699 7.12508Z" fill="#D942FF" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8337 7.12508C13.6266 6.84894 13.2348 6.79297 12.9587 7.00008L11.292 8.25008C11.1346 8.36812 11.042 8.55336 11.042 8.75008C11.042 8.94681 11.1346 9.13205 11.292 9.25008L12.9587 10.5001C13.2348 10.7072 13.6266 10.6512 13.8337 10.3751C14.0408 10.0989 13.9848 9.70719 13.7087 9.50008L12.7087 8.75008L13.7087 8.00008C13.9848 7.79298 14.0408 7.40122 13.8337 7.12508Z" fill="#D942FF" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9423 13.7754C12.6982 14.0194 12.3025 14.0194 12.0584 13.7754L11.667 13.384L11.2756 13.7754C11.1584 13.8926 10.9994 13.9584 10.8337 13.9584C10.6679 13.9584 10.5089 13.8926 10.3917 13.7754L10.0003 13.384L9.60893 13.7754C9.49172 13.8926 9.33275 13.9584 9.16699 13.9584C9.00123 13.9584 8.84226 13.8926 8.72505 13.7754L8.33366 13.384L7.94227 13.7754C7.69819 14.0194 7.30246 14.0194 7.05838 13.7754C6.81431 13.5313 6.81431 13.1356 7.05838 12.8915L7.89172 12.0581C8.00893 11.9409 8.1679 11.8751 8.33366 11.8751C8.49942 11.8751 8.65839 11.9409 8.7756 12.0581L9.16699 12.4495L9.55838 12.0581C9.67559 11.9409 9.83457 11.8751 10.0003 11.8751C10.1661 11.8751 10.3251 11.9409 10.4423 12.0581L10.8337 12.4495L11.2251 12.0581C11.3423 11.9409 11.5012 11.8751 11.667 11.8751C11.8328 11.8751 11.9917 11.9409 12.1089 12.0581L12.9423 12.8915C13.1863 13.1356 13.1863 13.5313 12.9423 13.7754Z" fill="#D942FF" />
                                        </svg>
                                        </div>
                                        <div>84</div>
                                    </div>
                                    <div className='flex items-center gap-[10px]'>
                                        <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.3589 8.35869C13.603 8.11461 13.603 7.71888 13.3589 7.47481C13.1149 7.23073 12.7191 7.23073 12.4751 7.47481L8.75033 11.1995L7.5256 9.97481C7.28152 9.73073 6.8858 9.73073 6.64172 9.97481C6.39764 10.2189 6.39764 10.6146 6.64172 10.8587L8.30838 12.5254C8.55246 12.7694 8.94819 12.7694 9.19227 12.5254L13.3589 8.35869Z" fill="#19AF00" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0003 1.04175C5.05277 1.04175 1.04199 5.05253 1.04199 10.0001C1.04199 14.9476 5.05277 18.9584 10.0003 18.9584C14.9479 18.9584 18.9587 14.9476 18.9587 10.0001C18.9587 5.05253 14.9479 1.04175 10.0003 1.04175ZM2.29199 10.0001C2.29199 5.74289 5.74313 2.29175 10.0003 2.29175C14.2575 2.29175 17.7087 5.74289 17.7087 10.0001C17.7087 14.2573 14.2575 17.7084 10.0003 17.7084C5.74313 17.7084 2.29199 14.2573 2.29199 10.0001Z" fill="#19AF00" />
                                        </svg>
                                        </div>
                                        <div>25</div>
                                    </div>

                                </div>
                            </div>
                            <div className='flex  items-center gap-[20px]'>
                                <button className=" group">
                                    <div className="w-[48px] h-[48px]">
                                        <div className="rounded-lg w-[48px] h-[48px] transition duration-300 ease-in-out cursor-pointer group-hover:bg-gray-200 group-hover:bg-zinc-300  bg-[#F3F5F7]" >
                                            <div className=" h-[48px] flex items-center justify-center font-family:'Work_Sans-Medium',Helvetica]  font-medium text-[#0b84df] text-[16px] text-center tracking-[0]  whitespace-nowrap">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 22.0002H14C17.7712 22.0002 19.6569 22.0002 20.8284 20.8286C22 19.6571 22 17.7714 22 14.0002C22 10.229 22 8.34335 20.8284 7.17178C20.4658 6.80918 20.0343 6.5588 19.4996 6.38591C19.5 6.55544 19.5 6.72881 19.5 6.90517L19.5 9.06327C19.5 9.09263 19.5003 9.12461 19.5006 9.15893C19.5035 9.49938 19.5085 10.07 19.264 10.592C19.0195 11.1141 18.578 11.4756 18.3145 11.6913C18.2882 11.7128 18.263 11.7334 18.2407 11.752L16.7342 13.0075C15.8734 13.7248 15.1241 14.3493 14.4505 14.7825C13.7245 15.2495 12.9391 15.5949 12 15.5949C11.0609 15.5949 10.2756 15.2495 9.54949 14.7825C8.87589 14.3493 8.12661 13.7248 7.26587 13.0075L5.75937 11.752C5.73681 11.7333 5.71207 11.713 5.68551 11.6913C5.42207 11.4756 4.98056 11.1141 4.73604 10.592C4.49152 10.07 4.49648 9.49938 4.49944 9.15893C4.49973 9.12462 4.50001 9.09262 4.50001 9.06327L4.50001 6.90516C4.49999 6.72858 4.49998 6.55528 4.5004 6.38556C3.96577 6.55846 3.53442 6.80893 3.17157 7.17178C2 8.34335 2 10.229 2 14.0002C2 17.7714 2 19.6571 3.17157 20.8286C4.34314 22.0002 6.22877 22.0002 10 22.0002Z" fill="#0B84DF" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.71972 10.5997L8.15898 11.7991C9.99562 13.3296 10.9139 14.0949 12.0001 14.0949C13.0862 14.0949 14.0046 13.3296 15.8412 11.7991L17.2805 10.5997C17.6343 10.3048 17.8113 10.1574 17.9057 9.95578C18.0001 9.75421 18.0001 9.52389 18.0001 9.06325V7C18.0001 6.67937 18.0001 6.38054 17.9982 6.10169C17.9865 4.3306 17.9005 3.36486 17.2679 2.73223C16.5356 2 15.3571 2 13.0001 2H11.0001C8.64306 2 7.46455 2 6.73232 2.73223C6.09969 3.36486 6.01179 4.3306 6.00009 6.10169C5.99824 6.38054 6.00009 6.67937 6.00009 7V9.06325C6.00009 9.52389 6.00009 9.75421 6.0945 9.95578C6.18891 10.1574 6.36584 10.3048 6.71972 10.5997ZM9.25 6C9.25 5.58579 9.58579 5.25 10 5.25H14C14.4142 5.25 14.75 5.58579 14.75 6C14.75 6.41421 14.4142 6.75 14 6.75H10C9.58579 6.75 9.25 6.41421 9.25 6ZM10.25 9C10.25 8.58579 10.5858 8.25 11 8.25H13C13.4142 8.25 13.75 8.58579 13.75 9C13.75 9.41421 13.4142 9.75 13 9.75H11C10.5858 9.75 10.25 9.41421 10.25 9Z" fill="#0B84DF" />
                                                </svg>


                                            </div>
                                        </div>
                                    </div>
                                </button>

                                <button className="  pr-[40px] group">
                                    <div className="w-[160px] h-[48px]">
                                        <div className=" py-[13px] px-[20px] border border-sky-600 flex justify-between items-center  rounded-lg w-[200px] h-[48px] transition duration-300 ease-in-out group-hover:bg-sky-700  bg-white">
                                            <div className="py-[13px] px-[20px text-center text-sky-600 text-base font-normal font-['Work Sans'] leading-snug">
                                                All Status
                                            </div>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z" fill="#0B84DF" />
                                            </svg>

                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div>
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
                                                                <img src='../src/assets/broken.svg' />
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
                                                                <img src='../src/assets/broken.svg' />
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
                                                                <img src='../src/assets/broken.svg' />
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
                                                                <img src='../src/assets/broken.svg' />
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
                                                                <img src='../src/assets/broken.svg' />
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
                                                                <img src='../src/assets/broken.svg' />
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
                                                                <img src='../src/assets/broken.svg' />
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
                                                                <img src='../src/assets/broken.svg' />
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
                        </div>

                    </div>
                )}

                {activeTab === 'sequence' && (
                    <div className='py-[40px]'>
                        <div className='w-[100%] h-[900px] grid grid-cols-6 gap-[40px]'>
                            <div className='col-span-2'>
                                <div className='flex flex-col  gap-[10px] w-[full] h-[full]'>
                                    <div className='w-[280px] p-[20px] h-[240px] bg-white rounded-lg border border-sky-600  flex flex-col  gap-[10px] w-[full] h-[full]'>

                                        <div className='flex items-center justify-between'>
                                            <div class="text-sky-600 text-lg font-bold font-['Work Sans'] leading-snug">Step 1</div>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 6.38597C3 5.90152 3.34538 5.50879 3.77143 5.50879L6.43567 5.50832C6.96502 5.49306 7.43202 5.11033 7.61214 4.54412C7.61688 4.52923 7.62232 4.51087 7.64185 4.44424L7.75665 4.05256C7.8269 3.81241 7.8881 3.60318 7.97375 3.41617C8.31209 2.67736 8.93808 2.16432 9.66147 2.03297C9.84457 1.99972 10.0385 1.99986 10.2611 2.00002H13.7391C13.9617 1.99986 14.1556 1.99972 14.3387 2.03297C15.0621 2.16432 15.6881 2.67736 16.0264 3.41617C16.1121 3.60318 16.1733 3.81241 16.2435 4.05256L16.3583 4.44424C16.3778 4.51087 16.3833 4.52923 16.388 4.54412C16.5682 5.11033 17.1278 5.49353 17.6571 5.50879H20.2286C20.6546 5.50879 21 5.90152 21 6.38597C21 6.87043 20.6546 7.26316 20.2286 7.26316H3.77143C3.34538 7.26316 3 6.87043 3 6.38597Z" fill="#2A333F" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5956 22.0001H12.4044C15.1871 22.0001 16.5785 22.0001 17.4831 21.1142C18.3878 20.2283 18.4803 18.7751 18.6654 15.8686L18.9321 11.6807C19.0326 10.1037 19.0828 9.31524 18.6289 8.81558C18.1751 8.31592 17.4087 8.31592 15.876 8.31592H8.12404C6.59127 8.31592 5.82488 8.31592 5.37105 8.81558C4.91722 9.31524 4.96744 10.1037 5.06788 11.6807L5.33459 15.8686C5.5197 18.7751 5.61225 20.2283 6.51689 21.1142C7.42153 22.0001 8.81289 22.0001 11.5956 22.0001ZM10.2463 12.1886C10.2051 11.7548 9.83753 11.4382 9.42537 11.4816C9.01321 11.525 8.71251 11.9119 8.75372 12.3457L9.25372 17.6089C9.29494 18.0427 9.66247 18.3593 10.0746 18.3159C10.4868 18.2725 10.7875 17.8856 10.7463 17.4518L10.2463 12.1886ZM14.5746 11.4816C14.9868 11.525 15.2875 11.9119 15.2463 12.3457L14.7463 17.6089C14.7051 18.0427 14.3375 18.3593 13.9254 18.3159C13.5132 18.2725 13.2125 17.8856 13.2537 17.4518L13.7537 12.1886C13.7949 11.7548 14.1625 11.4382 14.5746 11.4816Z" fill="#2A333F" />
                                            </svg>
                                        </div>

                                        <div className='mt-[11px] flex flex-col  gap-[10px] justify-center'>
                                            <div class="text-slate-800 text-lg font-bold font-['Work Sans'] leading-snug">Greetings is the title</div>
                                            <div class="w-60 text-slate-500 text-base font-normal font-['Work Sans'] leading-tight">Here’s a little bit of body text as preview ...</div>

                                        </div>

                                        <button className='mt-[15px] mb-[10px] cursor-pointer'>
                                            <div className='flex justify-center rounded-lg  items-center w-[240px] h-[45px] bg-[#F3F5F7]'>
                                                <div class="text-sky-600 text-base font-normal font-['Roboto'] leading-tight">Add variation</div>
                                            </div>
                                        </button>

                                    </div>

                                    <div className='flex flex-col mt-[10px]  gap-[10px]'>
                                        <div className="text-slate-800 text-xs font-normal font-['Work Sans'] leading-none">Wait For</div>

                                        <div className="flex items-center w-[280px] h-[48px] border border-zinc-200 rounded-lg">

                                            <input
                                                type="none"
                                                value={days1}
                                                placeholder="1 days"
                                                className="flex-1 rounded-lg pl-[20px]  placeholder:text-slate-500 text-base font-normal font-['Roboto'] focus:outline-none "
                                                onChange={(e) => setDays1(e.target.value)}
                                            />
                                            <div className='flex items-center pr-[20px] py-[20px] gap-[20px]'>
                                            <svg onClick={decreaseDays1}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12Z" fill="#0B84DF" />
                                            </svg>

                                            <svg onClick={increaseDays1} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H12.75L12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H11.25L11.25 9C11.25 8.58579 11.5858 8.25 12 8.25Z" fill="#0B84DF" />
                                            </svg>
                                            </div>
                                           


                                        </div>

                                    </div>


                                    <div className='w-[280px] p-[20px] h-[240px] bg-[#F3F5F7] rounded-lg   flex flex-col  gap-[10px] w-[full] h-[full]'>

                                        <div className='flex items-center justify-between'>
                                            <div class="text-sky-600 text-lg font-bold font-['Work Sans'] leading-snug">Step 2</div>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 6.38597C3 5.90152 3.34538 5.50879 3.77143 5.50879L6.43567 5.50832C6.96502 5.49306 7.43202 5.11033 7.61214 4.54412C7.61688 4.52923 7.62232 4.51087 7.64185 4.44424L7.75665 4.05256C7.8269 3.81241 7.8881 3.60318 7.97375 3.41617C8.31209 2.67736 8.93808 2.16432 9.66147 2.03297C9.84457 1.99972 10.0385 1.99986 10.2611 2.00002H13.7391C13.9617 1.99986 14.1556 1.99972 14.3387 2.03297C15.0621 2.16432 15.6881 2.67736 16.0264 3.41617C16.1121 3.60318 16.1733 3.81241 16.2435 4.05256L16.3583 4.44424C16.3778 4.51087 16.3833 4.52923 16.388 4.54412C16.5682 5.11033 17.1278 5.49353 17.6571 5.50879H20.2286C20.6546 5.50879 21 5.90152 21 6.38597C21 6.87043 20.6546 7.26316 20.2286 7.26316H3.77143C3.34538 7.26316 3 6.87043 3 6.38597Z" fill="#2A333F" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5956 22.0001H12.4044C15.1871 22.0001 16.5785 22.0001 17.4831 21.1142C18.3878 20.2283 18.4803 18.7751 18.6654 15.8686L18.9321 11.6807C19.0326 10.1037 19.0828 9.31524 18.6289 8.81558C18.1751 8.31592 17.4087 8.31592 15.876 8.31592H8.12404C6.59127 8.31592 5.82488 8.31592 5.37105 8.81558C4.91722 9.31524 4.96744 10.1037 5.06788 11.6807L5.33459 15.8686C5.5197 18.7751 5.61225 20.2283 6.51689 21.1142C7.42153 22.0001 8.81289 22.0001 11.5956 22.0001ZM10.2463 12.1886C10.2051 11.7548 9.83753 11.4382 9.42537 11.4816C9.01321 11.525 8.71251 11.9119 8.75372 12.3457L9.25372 17.6089C9.29494 18.0427 9.66247 18.3593 10.0746 18.3159C10.4868 18.2725 10.7875 17.8856 10.7463 17.4518L10.2463 12.1886ZM14.5746 11.4816C14.9868 11.525 15.2875 11.9119 15.2463 12.3457L14.7463 17.6089C14.7051 18.0427 14.3375 18.3593 13.9254 18.3159C13.5132 18.2725 13.2125 17.8856 13.2537 17.4518L13.7537 12.1886C13.7949 11.7548 14.1625 11.4382 14.5746 11.4816Z" fill="#2A333F" />
                                            </svg>
                                        </div>

                                        <div className='mt-[11px] flex flex-col  gap-[10px] justify-center'>
                                            <div class="text-slate-800 text-lg font-bold font-['Work Sans'] leading-snug">Follow up is the title</div>
                                            <div class="w-60 text-slate-500 text-base font-normal font-['Work Sans'] leading-tight">Here’s a little bit of body text as preview ...</div>

                                        </div>

                                        <button className='mt-[15px] mb-[10px] cursor-pointer'>
                                            <div className='flex justify-center rounded-lg  items-center w-[240px] h-[45px] bg-white'>
                                                <div class="text-sky-600 text-base font-normal font-['Roboto'] leading-tight">Add variation</div>
                                            </div>
                                        </button>

                                    </div>
                                    <div className='flex flex-col mt-[10px]  gap-[10px]'>
                                        <div className="text-slate-800 text-xs font-normal font-['Work Sans'] leading-none">Wait For</div>

                                        <div className="flex items-center w-[280px] h-[48px] border border-zinc-200 rounded-lg">

                                            <input
                                                type="none"
                                                value={days2}
                                                placeholder="1 days"
                                                className="flex-1 rounded-lg pl-[20px]  placeholder:text-slate-500 text-base font-normal font-['Roboto'] focus:outline-none "
                                                onChange={(e) => setDays2(e.target.value)}
                                            />
                                            <div className='flex items-center pr-[20px] py-[20px] gap-[20px]'>
                                            <svg onClick={decreaseDays2}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12Z" fill="#0B84DF" />
                                            </svg>

                                            <svg onClick={increaseDays2} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H12.75L12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H11.25L11.25 9C11.25 8.58579 11.5858 8.25 12 8.25Z" fill="#0B84DF" />
                                            </svg>
                                            </div>
                                           


                                        </div>

                                    </div>

                                    <div className='mt-[10px] w-[280px] flex items-center justify-center h-[48px] rounded-lg bg-sky-600 cursor-pointer '>
                                    <div class="text-center text-white text-base font-medium font-['Work Sans']">Add Step</div>

                                    </div>

                                </div>
                            </div>




                            <div className='col-span-4'>2</div>

                        </div>

                    </div>
                )}

                {activeTab === 'schedule' && (
                    <div>schedule</div>
                )}

                {activeTab === 'more' && (
                    <div>more</div>
                )}

            </div>

        </>
    )
}

export default CampaignDetails;