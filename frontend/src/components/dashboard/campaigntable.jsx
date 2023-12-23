
const campaigntable = () =>{
return(
    <>
    
        <div className="m-[40px] rounded-custom2 flex flex-col py-[40px] px-[20px] w-[full] h-[full] bg-white border border-solid border-[#e3e5e7]">
            <div className="flex items-center ">
                <div className="text-sky-600 text-sm font-normal font-['Work Sans'] leading-tight py-[10px] px-[20px] border-b-2 border-sky-600">Campaign Analytics</div>
                <div className="text-slate-800 text-sm font-normal font-['Work Sans'] leading-tight py-[10px] px-[20px] border-b-2 border-gray-200">Account Analytics</div>
            </div>
            <div>
            <div className="mr-[40px] flex flex-col">
        <div className=" overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 mt-8 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className=" overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left  font-medium uppercase tracking-wider text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                    >
                      Campaign
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
                      Sequence Started
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
                      Opportunities
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left  font-medium uppercase tracking-wider text-slate-500 text-sm font-bold font-['Work Sans'] leading-none"
                    >
                      Active
                    </th>
                    <th scope="col" className="px-6 py-3">
                      {/* Empty for the ellipsis */}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Repeat this row for each entry */}
                  <tr>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">Campaign title Here</div></td>
                    <td className="px-6 py-8 whitespace-nowrap fle">
                    <div class="w-16 h-8 px-3 py-1.5 bg-cyan-600 rounded-lg justify-start items-start gap-2.5 inline-flex">
<div class="text-white text-sm font-normal font-['Work Sans'] leading-tight">Active</div>
</div>
                    </td>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                    <td className="px-6 py-8 whitespace-nowrap flex gap-3">
                      <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">40</div>
                      <svg width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L0.999999 18" stroke="#E3E5E7" stroke-width="2" stroke-linecap="round"/>
</svg>

                      <div class="text-slate-500 text-sm font-normal font-['Work Sans'] leading-none">4.0%</div>
                    
                    </td>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm text-right font-normal font-['Work Sans'] leading-none">1</div></td>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-right text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>
                    <td className="px-6 py-8 whitespace-nowrap flex gap-6">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H13.25V18C13.25 18.3034 13.4327 18.5768 13.713 18.6929C13.9932 18.809 14.3158 18.7449 14.5303 18.5304L20.5303 12.5304C20.671 12.3897 20.75 12.1989 20.75 12C20.75 11.8011 20.671 11.6103 20.5303 11.4697L14.5303 5.46969C14.3158 5.25519 13.9932 5.19103 13.713 5.30711C13.4327 5.4232 13.25 5.69668 13.25 6.00002V11.25H4Z" fill="#0B84DF"/>
</svg>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#2A333F"/>
<path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#2A333F"/>
<path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#2A333F"/>
</svg>


                    </td>
                   
                  </tr>
                  <tr >
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">Campaign title Here</div></td>
                    <td className="px-6 py-8 whitespace-nowrap">
                    <div class="w-20 h-8 px-1 py-1.5 bg-slate-500 rounded-lg justify-center items-start gap-2.5 inline-flex">
<div class="text-white text-sm font-normal font-['Work Sans'] leading-tight">Paused</div>
</div>
                    </td>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                    <td className="px-6 py-8 whitespace-nowrap flex gap-3">
                      <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">40</div>
                      <svg width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L0.999999 18" stroke="#E3E5E7" stroke-width="2" stroke-linecap="round"/>
</svg>

                      <div class="text-slate-500 text-sm font-normal font-['Work Sans'] leading-none">4.0%</div>
                    
                    </td>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-right text-sm font-normal font-['Work Sans'] leading-none">1</div></td>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-right text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>
                    <td className="px-6 py-8 whitespace-nowrap flex gap-6">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H13.25V18C13.25 18.3034 13.4327 18.5768 13.713 18.6929C13.9932 18.809 14.3158 18.7449 14.5303 18.5304L20.5303 12.5304C20.671 12.3897 20.75 12.1989 20.75 12C20.75 11.8011 20.671 11.6103 20.5303 11.4697L14.5303 5.46969C14.3158 5.25519 13.9932 5.19103 13.713 5.30711C13.4327 5.4232 13.25 5.69668 13.25 6.00002V11.25H4Z" fill="#0B84DF"/>
</svg>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#2A333F"/>
<path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#2A333F"/>
<path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#2A333F"/>
</svg>


                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">Campaign title Here</div></td>
                    <td className="px-6 py-8 whitespace-nowrap">
                    <div class="w-20 h-8 px-1 py-1.5 bg-slate-500 rounded-lg justify-center items-start gap-2.5 inline-flex">
<div class="text-white text-sm font-normal font-['Work Sans'] leading-tight">Paused</div>
</div>
                    </td>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                    <td className="px-6 py-8 whitespace-nowrap flex gap-3">
                      <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">40</div>
                      <svg width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L0.999999 18" stroke="#E3E5E7" stroke-width="2" stroke-linecap="round"/>
</svg>

                      <div class="text-slate-500 text-sm font-normal font-['Work Sans'] leading-none">4.0%</div>
                    
                    </td>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-right text-sm font-normal font-['Work Sans'] leading-none">1</div></td>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-right text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>
                    <td className="px-6 py-8 whitespace-nowrap flex gap-6">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H13.25V18C13.25 18.3034 13.4327 18.5768 13.713 18.6929C13.9932 18.809 14.3158 18.7449 14.5303 18.5304L20.5303 12.5304C20.671 12.3897 20.75 12.1989 20.75 12C20.75 11.8011 20.671 11.6103 20.5303 11.4697L14.5303 5.46969C14.3158 5.25519 13.9932 5.19103 13.713 5.30711C13.4327 5.4232 13.25 5.69668 13.25 6.00002V11.25H4Z" fill="#0B84DF"/>
</svg>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#2A333F"/>
<path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#2A333F"/>
<path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#2A333F"/>
</svg>


                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">Campaign title Here</div></td>
                    <td className="px-6 py-8 whitespace-nowrap">
                    <div class="w-16 h-8 px-3 py-1.5 bg-cyan-600 rounded-lg justify-start items-start gap-2.5 inline-flex">
<div class="text-white text-sm font-normal font-['Work Sans'] leading-tight">Active</div>
</div>
                    </td>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                    <td className="px-6 py-8 whitespace-nowrap flex gap-3">
                      <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">40</div>
                      <svg width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L0.999999 18" stroke="#E3E5E7" stroke-width="2" stroke-linecap="round"/>
</svg>

                      <div class="text-slate-500 text-sm font-normal font-['Work Sans'] leading-none">4.0%</div>
                    
                    </td>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-right text-sm font-normal font-['Work Sans'] leading-none">1</div></td>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-right text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>
                    <td className="px-6 py-8 whitespace-nowrap flex gap-6">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H13.25V18C13.25 18.3034 13.4327 18.5768 13.713 18.6929C13.9932 18.809 14.3158 18.7449 14.5303 18.5304L20.5303 12.5304C20.671 12.3897 20.75 12.1989 20.75 12C20.75 11.8011 20.671 11.6103 20.5303 11.4697L14.5303 5.46969C14.3158 5.25519 13.9932 5.19103 13.713 5.30711C13.4327 5.4232 13.25 5.69668 13.25 6.00002V11.25H4Z" fill="#0B84DF"/>
</svg>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#2A333F"/>
<path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#2A333F"/>
<path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#2A333F"/>
</svg>


                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-8 whitespace-nowrap">
                    <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">Campaign title Here</div>
                    </td>
                    <td className="px-6 py-8 whitespace-nowrap">
                    <div class="w-16 h-8 px-3 py-1.5 bg-cyan-600 rounded-lg justify-start items-start gap-2.5 inline-flex">
<div class="text-white text-sm font-normal font-['Work Sans'] leading-tight">Active</div>
</div>
                    </td>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                    <td className="px-6 py-8 whitespace-nowrap flex gap-3">
                      <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">40</div>
                      <svg width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L0.999999 18" stroke="#E3E5E7" stroke-width="2" stroke-linecap="round"/>
</svg>

                      <div class="text-slate-500 text-sm font-normal font-['Work Sans'] leading-none">4.0%</div>
                    
                    </td>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-right text-sm font-normal font-['Work Sans'] leading-none">1</div></td>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-right text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>
                    <td className="px-6 py-8 whitespace-nowrap flex gap-6">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H13.25V18C13.25 18.3034 13.4327 18.5768 13.713 18.6929C13.9932 18.809 14.3158 18.7449 14.5303 18.5304L20.5303 12.5304C20.671 12.3897 20.75 12.1989 20.75 12C20.75 11.8011 20.671 11.6103 20.5303 11.4697L14.5303 5.46969C14.3158 5.25519 13.9932 5.19103 13.713 5.30711C13.4327 5.4232 13.25 5.69668 13.25 6.00002V11.25H4Z" fill="#0B84DF"/>
</svg>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#2A333F"/>
<path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#2A333F"/>
<path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#2A333F"/>
</svg>


                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">Campaign title Here</div></td>
                    <td className="px-6 py-8 whitespace-nowrap">
                    <div class="w-16 h-8 px-3 py-1.5 bg-cyan-600 rounded-lg justify-start items-start gap-2.5 inline-flex">
<div class="text-white text-sm font-normal font-['Work Sans'] leading-tight">Active</div>
</div>
                    </td>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">1,011</div></td>
                    <td className="px-6 py-8 whitespace-nowrap flex gap-3">
                      <div class="text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">40</div>
                      <svg width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L0.999999 18" stroke="#E3E5E7" stroke-width="2" stroke-linecap="round"/>
</svg>

                      <div class="text-slate-500 text-sm font-normal font-['Work Sans'] leading-none">4.0%</div>
                    
                    </td>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-slate-800 text-right text-sm font-normal font-['Work Sans'] leading-none">1</div></td>
                    <td className="px-6 py-8 whitespace-nowrap"><div class="text-right text-slate-800 text-sm font-normal font-['Work Sans'] leading-none">0</div></td>
                    <td className="px-6 py-8 whitespace-nowrap flex gap-6">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H13.25V18C13.25 18.3034 13.4327 18.5768 13.713 18.6929C13.9932 18.809 14.3158 18.7449 14.5303 18.5304L20.5303 12.5304C20.671 12.3897 20.75 12.1989 20.75 12C20.75 11.8011 20.671 11.6103 20.5303 11.4697L14.5303 5.46969C14.3158 5.25519 13.9932 5.19103 13.713 5.30711C13.4327 5.4232 13.25 5.69668 13.25 6.00002V11.25H4Z" fill="#0B84DF"/>
</svg>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#2A333F"/>
<path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#2A333F"/>
<path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#2A333F"/>
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
   
    </>
)
}
export default campaigntable;