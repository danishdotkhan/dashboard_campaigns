import React, {useEffect, useState } from 'react';

const Sidetab = () => {
  const [sidebarWidth, setSidebarWidth] = useState(360);
  const [containerRight, setContainerRight] = useState(360);
  const [showHistoryContent, setShowHistoryContent] = useState(false);
  const [showChatContent, setShowChatContent] = useState(false);

  const toggleSidebar = () => {
    if (sidebarWidth === 360) {
      setSidebarWidth(0);
      setContainerRight(0);
    } else {
      setSidebarWidth(360);
      setContainerRight(360);
    }
  };

  const showHistoryContentOnClick = () => {
    setShowHistoryContent(true);
    setShowChatContent(false);
  };

  const showChatContentOnClick = () => {
    setShowHistoryContent(false);
    setShowChatContent(true);
  };

  useEffect(() => {
    setShowHistoryContent(true);
    setShowChatContent(false);
    setSidebarWidth(0);
    setContainerRight(0);
  }, []);

  return (
    <div className="container">
      <div className="tab-container" style={{ right: `${containerRight}px` , transition: 'right 0.3s ease-in-out' }} onClick={toggleSidebar}>
        Sidebar
      </div>

      <div id="mySidebar" className="sidebar" style={{ width: `${sidebarWidth}px` , transition: 'width 0.3s ease-in-out' }}>
       
        


        {showHistoryContent && (
          <div style={{  color: 'black', height: '100%', overflowY: 'scroll' }}>
            <div class="w-96 h-screen relative bg-white shadow ">
    <div class="left-[20px] top-[859px] absolute text-slate-500 text-base font-normal font-['Work Sans'] leading-snug">Type here...</div>
    <div class="w-96 h-px left-0 top-[840px] absolute border border-zinc-200"></div>
    <div id='history' class="cursor-pointer w-6 h-6 left-[316px] top-[858px] absolute " onClick={showHistoryContentOnClick} ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.6357 15.6701L20.3521 10.5208C21.8516 6.02242 22.6013 3.77322 21.414 2.58595C20.2268 1.39869 17.9776 2.14842 13.4792 3.64788L8.32987 5.36432C4.69923 6.57453 2.88392 7.17964 2.36806 8.06698C1.87731 8.91112 1.87731 9.95369 2.36806 10.7978C2.88392 11.6852 4.69923 12.2903 8.32987 13.5005C8.77981 13.6505 9.28601 13.5434 9.62294 13.2096L15.1286 7.75495C15.4383 7.44808 15.9382 7.45041 16.245 7.76015C16.5519 8.06989 16.5496 8.56975 16.2398 8.87662L10.8231 14.2432C10.4518 14.6111 10.3342 15.1742 10.4995 15.6701C11.7097 19.3007 12.3148 21.1161 13.2022 21.6319C14.0463 22.1227 15.0889 22.1227 15.933 21.6319C16.8204 21.1161 17.4255 19.3008 18.6357 15.6701Z" fill="#0B84DF"/>
</svg></div>
    <div class="p-5 left-[20px] top-[110px] absolute bg-white rounded-lg border border-zinc-200 justify-end items-start gap-2.5 inline-flex">
        <div class="w-60 text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">Lorem ipsum dolor sit amet consectetur. Dignissim euismod tortor et scelerisque. Nisi aenean blandit suspendisse in ante eget vitae quam purus. Posuere at gravida elementum ridiculus eu. Porttitor est lacinia donec id leo vitae commodo purus tellus.</div>
    </div>
    <div class="p-5 left-[80px] top-[306px] absolute bg-gray-100 rounded-lg justify-end items-start gap-2.5 inline-flex">
        <div class="w-56 text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">Lorem ipsum dolor sit amet consectetur.</div>
    </div>
    <div class="left-[20px] top-[21px] absolute text-slate-800 text-2xl font-semibold font-['All Round Gothic'] leading-10">Synapsistance</div>
    <div class="w-96 h-px left-[-0px] top-[80px] absolute border border-zinc-200"></div>
    <div id='chat' class="w-6 h-6 left-[316px] top-[28px] absolute cursor-pointer" onClick={showChatContentOnClick}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.07868 5.06901C8.87402 1.27902 15.0437 1.31932 18.8622 5.13787C22.6824 8.95806 22.7211 15.1314 18.9262 18.9263C15.1312 22.7212 8.95793 22.6825 5.13774 18.8623C2.87389 16.5985 1.93904 13.51 2.34047 10.5813C2.39672 10.1709 2.775 9.88386 3.18537 9.94011C3.59575 9.99636 3.88282 10.3746 3.82658 10.785C3.4866 13.2653 4.27782 15.8811 6.1984 17.8017C9.44288 21.0461 14.6664 21.0647 17.8655 17.8656C21.0646 14.6665 21.046 9.44301 17.8015 6.19853C14.5587 2.95571 9.33889 2.93548 6.13935 6.12966L6.88705 6.13342C7.30126 6.1355 7.63535 6.47297 7.63327 6.88718C7.63119 7.30139 7.29372 7.63548 6.87951 7.6334L4.33396 7.62061C3.92269 7.61854 3.58981 7.28565 3.58774 6.87439L3.57495 4.32884C3.57286 3.91463 3.90696 3.57716 4.32117 3.57508C4.73538 3.57299 5.07285 3.90709 5.07493 4.3213L5.07868 5.06901ZM11.9999 7.25001C12.4141 7.25001 12.7499 7.5858 12.7499 8.00001V11.6894L15.0302 13.9697C15.3231 14.2626 15.3231 14.7374 15.0302 15.0303C14.7373 15.3232 14.2624 15.3232 13.9696 15.0303L11.2499 12.3107V8.00001C11.2499 7.5858 11.5857 7.25001 11.9999 7.25001Z" fill="#0B84DF"/>
</svg>

</div>
</div>
          </div>
        )}

        {showChatContent && (
          <div style={{ color: 'black' , height: '100%', overflowY: 'scroll' }}>
           <div class="w-96 h-screen relative bg-white shadow">
    <div class="left-[20px] top-[21px] absolute text-slate-800 text-2xl font-semibold font-['All Round Gothic'] leading-10">Synapsistance</div>
    <div id='history' class="cursor-pointer w-6 h-6 left-[316px] top-[28px] absolute" onClick={showHistoryContentOnClick}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 9.49999L9.5 14.5M9.49998 9.49997L14.5 14.4999" stroke="#0B84DF" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#0B84DF" stroke-width="1.5" stroke-linecap="round"/>
</svg>
</div>
    <div class="w-96 h-px left-[-0px] top-[80px] absolute border border-zinc-200"></div>
    <div class="left-[40px] top-[120px] absolute text-slate-800 text-xl font-semibold font-['All Round Gothic'] leading-loose">History</div>
    <div class="h-10 left-[40px] top-[193px] absolute">
    <div class="w-72 text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">What we discussed on Lst Week</div>
    <div class="text-slate-500 text-xs font-normal font-['Work Sans'] leading-none">2 days ago</div>
        </div>
    <div class="h-10 left-[40px] top-[273px] absolute">
    <div class="w-72 text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">What we discussed on Lst Week</div>
        <div class="left-0 top-[22px] absolute text-slate-500 text-xs font-normal font-['Work Sans'] leading-none">2 days ago</div>
    </div>
    <div class="h-10 left-[40px] top-[353px] absolute">
    <div class="w-72 text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">What we discussed on Lst Week</div>
       <div class="left-0 top-[22px] absolute text-slate-500 text-xs font-normal font-['Work Sans'] leading-none">2 days ago</div>
    </div>
    <div class="h-10 left-[40px] top-[433px] absolute">
    <div class="w-72 text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">What we discussed on Lst Week</div>
       <div class="left-0 top-[22px] absolute text-slate-500 text-xs font-normal font-['Work Sans'] leading-none">2 days ago</div>
    </div>
    <div class="h-10 left-[40px] top-[513px] absolute">
    <div class="w-72 text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">What we discussed on Lst Week</div>
       <div class="left-0 top-[22px] absolute text-slate-500 text-xs font-normal font-['Work Sans'] leading-none">2 days ago</div>
    </div>
    <div class="h-10 left-[40px] top-[593px] absolute">
    <div class="w-72 text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">What we discussed on Lst Week</div>
        <div class="left-0 top-[22px] absolute text-slate-500 text-xs font-normal font-['Work Sans'] leading-none">2 days ago</div>
    </div>
    <div class="w-72 h-px left-[40px] top-[172px] absolute border border-zinc-200"></div>
    <div class="w-72 h-px left-[40px] top-[252px] absolute border border-zinc-200"></div>
    <div class="w-72 h-px left-[40px] top-[332px] absolute border border-zinc-200"></div>
    <div class="w-72 h-px left-[40px] top-[412px] absolute border border-zinc-200"></div>
    <div class="w-72 h-px left-[40px] top-[492px] absolute border border-zinc-200"></div>
    <div class="w-72 h-px left-[40px] top-[572px] absolute border border-zinc-200"></div>
</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidetab;
