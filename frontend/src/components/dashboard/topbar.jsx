

const Topbar = () => {
    return(
        <>

        <div className="w-[full] flex justify-between items-center">
        <div className="w-[87px] h-[20px]">
      <div className="text-slate-800 text-sm font-medium font-['Work Sans'] leading-tight  pl-[60px] pt-[15px] leading-[19.6px] whitespace-nowrap">
        Last 30 days
      </div>
    </div>
        <div className="flex justify-between items-center gap-[40px]">

            <button className="pt-[26px]">
                <div className="w-[200px] h-[48px]">
                    <div className="rounded-lg w-[200px] h-[48px]  bg-[#e3e5e7]" >
                        <div className=" h-[48px] flex items-center justify-center font-family:'Work_Sans-Medium',Helvetica]  font-medium text-[#0b84df] text-[16px] text-center tracking-[0]  whitespace-nowrap">
                            Modify Widgets
                        </div>
                    </div>
                </div>
            </button>

            <button className=" pt-[26px] pr-[40px]">
                <div className="w-[200px] h-[48px]">
                    <div className="pl-[36px] pr-[12px] flex justify-between items-center  rounded-lg w-[200px] h-[48px]  bg-[#0b84df]">
                            <div className=" h-[48px] flex items-center justify-center font-family:'Work_Sans-Medium',Helvetica] font-medium text-white text-[16px] text-center tracking-[0]  whitespace-nowrap">
                                Create New
                            </div>
                            <div>
                            <svg width="2" height="26" viewBox="0 0 2 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L0.999999 25" stroke="white" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round"/>
                            </svg>

                            </div>
                            <div>
                                <img src="../src/assets/arrowdown.svg" />
                            </div>
                    </div>
                </div>
            </button>

        </div>
        </div>

        <div className="pt-[40px] pl-[40px] pr-[40px] w-[full] flex justify-between items-center gap-[20px] overflow-x-scroll chrome-scrollbar-hidden ">
        <div class="min-w-57 max-w-110 w-[100%] h-24 relative">
    <div class="min-w-57 max-w-110 w-[100%] h-24 left-0 top-0 absolute bg-white rounded-2xl border border-zinc-200"></div>
    <div class="left-[90px] top-[25px] absolute text-slate-800 text-xs font-medium font-['Work Sans'] leading-none">Total Sent</div>
    <div class="left-[90px] top-[54px] absolute text-slate-800 text-xl font-semibold font-['All Round Gothic'] leading-normal">356</div>
    <div class="w-14 h-14 left-[20px] top-[20px] absolute bg-gray-100 rounded-lg"></div>
    <div class="w-6 h-6 left-[38px] top-[38px] absolute">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H21C21.4142 9.25 21.75 9.58579 21.75 10C21.75 10.4142 21.4142 10.75 21 10.75H3C2.58579 10.75 2.25 10.4142 2.25 10ZM2.25 14C2.25 13.5858 2.58579 13.25 3 13.25H11C11.4142 13.25 11.75 13.5858 11.75 14C11.75 14.4142 11.4142 14.75 11 14.75H3C2.58579 14.75 2.25 14.4142 2.25 14ZM17.5 13.25C17.9142 13.25 18.25 13.5858 18.25 14V18.1893L19.4697 16.9697C19.7626 16.6768 20.2374 16.6768 20.5303 16.9697C20.8232 17.2626 20.8232 17.7374 20.5303 18.0303L18.0303 20.5303C17.7374 20.8232 17.2626 20.8232 16.9697 20.5303L14.4697 18.0303C14.1768 17.7374 14.1768 17.2626 14.4697 16.9697C14.7626 16.6768 15.2374 16.6768 15.5303 16.9697L16.75 18.1893V14C16.75 13.5858 17.0858 13.25 17.5 13.25ZM2.25 18C2.25 17.5858 2.58579 17.25 3 17.25H11C11.4142 17.25 11.75 17.5858 11.75 18C11.75 18.4142 11.4142 18.75 11 18.75H3C2.58579 18.75 2.25 18.4142 2.25 18Z" fill="#089CB3"/>
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
<path d="M22 14.0002C22 17.7714 22 19.657 20.8284 20.8286C19.6569 22.0002 17.7712 22.0002 14 22.0002H10C6.22876 22.0002 4.34315 22.0002 3.17157 20.8286C2 19.657 2 17.7714 2 14.0002C2 10.229 2 8.34334 3.17157 7.17176C3.82475 6.51858 4.69989 6.22957 6 6.10168M18 6.10168C19.3001 6.22957 20.1752 6.51858 20.8284 7.17176C21.4816 7.82494 21.7706 8.70005 21.8985 10.0001" stroke="#089CB3" stroke-width="1.5" stroke-linecap="round"/>
<path d="M10 6H14" stroke="#089CB3" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11 9H13" stroke="#089CB3" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14 2.00261C15.7066 2.01708 16.6474 2.11182 17.2678 2.73223C18 3.46447 18 4.64298 18 7V9.06325C18 9.52389 18 9.75421 17.9056 9.95578C17.8112 10.1574 17.6342 10.3048 17.2804 10.5997L16.5607 11.1994M10 2.00261C8.29344 2.01708 7.35264 2.11182 6.73223 2.73223C6 3.46447 6 4.64298 6 7V9.06325C6 9.52389 6 9.75421 6.09441 9.95578C6.18882 10.1574 6.36576 10.3048 6.71963 10.5997L8.1589 11.7991C9.99553 13.3296 10.9139 14.0949 12 14.0949C12.6493 14.0949 13.2386 13.8214 14 13.2744" stroke="#089CB3" stroke-width="1.5" stroke-linecap="round"/>
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
<path d="M9 4.94198C6.47561 4.02693 5.129 3.65381 4.39141 4.39141C3.55146 5.23136 4.15187 6.86106 5.3527 10.1205L7.3603 15.5696C7.96225 17.2035 8.26322 18.0204 8.92489 18.1658C9.58656 18.3111 10.2022 17.6955 11.4334 16.4643L12.6361 15.2616L16.5744 19.1999C16.9821 19.6077 17.186 19.8116 17.4135 19.9058C17.7168 20.0314 18.0575 20.0314 18.3608 19.9058C18.5882 19.8116 18.7921 19.6077 19.1999 19.1999C19.6077 18.7921 19.8116 18.5882 19.9058 18.3608C20.0314 18.0575 20.0314 17.7168 19.9058 17.4135C19.8116 17.186 19.6077 16.9821 19.1999 16.5744L15.2616 12.6361L16.4643 11.4334C17.6955 10.2022 18.3111 9.58656 18.1658 8.92489C18.0204 8.26322 17.2035 7.96225 15.5696 7.3603L13 6.41359" stroke="#089CB3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
<path d="M13.0867 21.3877L13.7321 21.7697L13.0867 21.3877ZM13.6288 20.4718L12.9833 20.0898L13.6288 20.4718ZM10.3712 20.4718L9.72579 20.8539H9.72579L10.3712 20.4718ZM10.9133 21.3877L11.5587 21.0057L10.9133 21.3877ZM1.25 10.5C1.25 10.9142 1.58579 11.25 2 11.25C2.41421 11.25 2.75 10.9142 2.75 10.5H1.25ZM3.07351 15.6264C2.915 15.2437 2.47627 15.062 2.09359 15.2205C1.71091 15.379 1.52918 15.8177 1.68769 16.2004L3.07351 15.6264ZM7.78958 18.9915L7.77666 19.7413L7.78958 18.9915ZM5.08658 18.6194L4.79957 19.3123H4.79957L5.08658 18.6194ZM21.6194 15.9134L22.3123 16.2004V16.2004L21.6194 15.9134ZM16.2104 18.9915L16.1975 18.2416L16.2104 18.9915ZM18.9134 18.6194L19.2004 19.3123H19.2004L18.9134 18.6194ZM19.6125 2.7368L19.2206 3.37628L19.6125 2.7368ZM21.2632 4.38751L21.9027 3.99563V3.99563L21.2632 4.38751ZM4.38751 2.7368L3.99563 2.09732V2.09732L4.38751 2.7368ZM2.7368 4.38751L2.09732 3.99563H2.09732L2.7368 4.38751ZM9.40279 19.2098L9.77986 18.5615L9.77986 18.5615L9.40279 19.2098ZM13.7321 21.7697L14.2742 20.8539L12.9833 20.0898L12.4412 21.0057L13.7321 21.7697ZM9.72579 20.8539L10.2679 21.7697L11.5587 21.0057L11.0166 20.0898L9.72579 20.8539ZM12.4412 21.0057C12.2485 21.3313 11.7515 21.3313 11.5587 21.0057L10.2679 21.7697C11.0415 23.0767 12.9585 23.0767 13.7321 21.7697L12.4412 21.0057ZM10.5 2.75H13.5V1.25H10.5V2.75ZM21.25 10.5V11.5H22.75V10.5H21.25ZM7.8025 18.2416C6.54706 18.2199 5.88923 18.1401 5.37359 17.9265L4.79957 19.3123C5.60454 19.6457 6.52138 19.7197 7.77666 19.7413L7.8025 18.2416ZM1.68769 16.2004C2.27128 17.6093 3.39066 18.7287 4.79957 19.3123L5.3736 17.9265C4.33223 17.4951 3.50486 16.6678 3.07351 15.6264L1.68769 16.2004ZM21.25 11.5C21.25 12.6751 21.2496 13.5189 21.2042 14.1847C21.1592 14.8438 21.0726 15.2736 20.9265 15.6264L22.3123 16.2004C22.5468 15.6344 22.6505 15.0223 22.7007 14.2868C22.7504 13.5581 22.75 12.6546 22.75 11.5H21.25ZM16.2233 19.7413C17.4786 19.7197 18.3955 19.6457 19.2004 19.3123L18.6264 17.9265C18.1108 18.1401 17.4529 18.2199 16.1975 18.2416L16.2233 19.7413ZM20.9265 15.6264C20.4951 16.6678 19.6678 17.4951 18.6264 17.9265L19.2004 19.3123C20.6093 18.7287 21.7287 17.6093 22.3123 16.2004L20.9265 15.6264ZM13.5 2.75C15.1512 2.75 16.337 2.75079 17.2619 2.83873C18.1757 2.92561 18.7571 3.09223 19.2206 3.37628L20.0044 2.09732C19.2655 1.64457 18.4274 1.44279 17.4039 1.34547C16.3915 1.24921 15.1222 1.25 13.5 1.25V2.75ZM22.75 10.5C22.75 8.87781 22.7508 7.6085 22.6545 6.59611C22.5572 5.57256 22.3554 4.73445 21.9027 3.99563L20.6237 4.77938C20.9078 5.24291 21.0744 5.82434 21.1613 6.73809C21.2492 7.663 21.25 8.84876 21.25 10.5H22.75ZM19.2206 3.37628C19.7925 3.72672 20.2733 4.20752 20.6237 4.77938L21.9027 3.99563C21.4286 3.22194 20.7781 2.57144 20.0044 2.09732L19.2206 3.37628ZM10.5 1.25C8.87781 1.25 7.6085 1.24921 6.59611 1.34547C5.57256 1.44279 4.73445 1.64457 3.99563 2.09732L4.77938 3.37628C5.24291 3.09223 5.82434 2.92561 6.73809 2.83873C7.663 2.75079 8.84876 2.75 10.5 2.75V1.25ZM2.75 10.5C2.75 8.84876 2.75079 7.663 2.83873 6.73809C2.92561 5.82434 3.09223 5.24291 3.37628 4.77938L2.09732 3.99563C1.64457 4.73445 1.44279 5.57256 1.34547 6.59611C1.24921 7.6085 1.25 8.87781 1.25 10.5H2.75ZM3.99563 2.09732C3.22194 2.57144 2.57144 3.22194 2.09732 3.99563L3.37628 4.77938C3.72672 4.20752 4.20752 3.72672 4.77938 3.37628L3.99563 2.09732ZM11.0166 20.0898C10.8136 19.7468 10.6354 19.4441 10.4621 19.2063C10.2795 18.9559 10.0702 18.7304 9.77986 18.5615L9.02572 19.8582C9.07313 19.8857 9.13772 19.936 9.24985 20.0898C9.37122 20.2564 9.50835 20.4865 9.72579 20.8539L11.0166 20.0898ZM7.77666 19.7413C8.21575 19.7489 8.49387 19.7545 8.70588 19.7779C8.90399 19.7999 8.98078 19.832 9.02572 19.8582L9.77986 18.5615C9.4871 18.3912 9.18246 18.3215 8.87097 18.287C8.57339 18.2541 8.21375 18.2487 7.8025 18.2416L7.77666 19.7413ZM14.2742 20.8539C14.4916 20.4865 14.6287 20.2564 14.7501 20.0898C14.8622 19.936 14.9268 19.8857 14.9742 19.8582L14.2201 18.5615C13.9298 18.7304 13.7204 18.9559 13.5379 19.2063C13.3646 19.4441 13.1864 19.7468 12.9833 20.0898L14.2742 20.8539ZM16.1975 18.2416C15.7862 18.2487 15.4266 18.2541 15.129 18.287C14.8175 18.3215 14.5129 18.3912 14.2201 18.5615L14.9742 19.8582C15.0192 19.832 15.096 19.7999 15.2941 19.7779C15.5061 19.7545 15.7842 19.7489 16.2233 19.7413L16.1975 18.2416Z" fill="#089CB3"/>
<path d="M8 11H8.009M11.991 11H12M15.991 11H16" stroke="#089CB3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
<path d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C21.4816 7.82475 21.7706 8.69989 21.8985 10M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22878 22 4.34314 22 3.17157 20.8284C2.51839 20.1752 2.22937 19.3001 2.10149 18" stroke="#089CB3" stroke-width="1.5" stroke-linecap="round"/>
<path d="M16 6C16 4.11438 16 3.17157 15.4142 2.58579C14.8284 2 13.8856 2 12 2C10.1144 2 9.17157 2 8.58579 2.58579C8 3.17157 8 4.11438 8 6" stroke="#089CB3" stroke-width="1.5"/>
<path d="M17 9C17 9.55228 16.5523 10 16 10C15.4477 10 15 9.55228 15 9C15 8.44772 15.4477 8 16 8C16.5523 8 17 8.44772 17 9Z" fill="#089CB3"/>
<path d="M9 9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9C7 8.44772 7.44772 8 8 8C8.55228 8 9 8.44772 9 9Z" fill="#089CB3"/>
</svg>

    </div>
</div>
        </div>
       
        </>
    )
}
export default Topbar;