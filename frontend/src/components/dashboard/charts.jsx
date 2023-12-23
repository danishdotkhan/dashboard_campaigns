import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
    {
      name: "Dec 12",
      Unique_Opens: 0,
      sent: 0,
    Total_Opens: 0,
      Total_Replies:0,
      Total_Clicks:0,
      Unique_Clicks:0,
     
    },
    {
      name: "Dec 14",
      Unique_Opens: 0,
      sent: 0,
      Total_Opens: 0,
      Total_Replies:0,
      Total_Clicks:0,
      Unique_Clicks:0,
     
    },
    {
      name: "Dec 16",
      Unique_Opens: 0,
      sent: 0,
      Total_Opens: 0,
      Total_Replies:0,
      Total_Clicks:0,
      Unique_Clicks:0,
     
    },
    {
      name: "Dec 18",
      Unique_Opens: 4000,
      sent: 3800,
      Total_Opens: 3000,
      Total_Replies:2100,
      Total_Clicks:1200,
      Unique_Clicks:700,
      
    },
    {
      name: "Dec 20",
      Unique_Opens: 6000,
      sent: 5800,
      Total_Opens: 3600,
      Total_Replies:2700,
      Total_Clicks:1700,
      Unique_Clicks:1000,
      
    },
    {
      name: "Dec 22",
      Unique_Opens: 7000,
      sent: 6300,
      Total_Opens: 4200,
      Total_Replies:3200,
      Total_Clicks:2200,
      Unique_Clicks:1600,
    },
    {
      name: "Dec 24",
      Unique_Opens: 8000,
      sent: 7000,
      Total_Opens: 5000,
      Total_Replies:4000,
      Total_Clicks:3000,
      Unique_Clicks:2300,
      
    },
    {
      name: "Dec 26",
      Unique_Opens: 9000,
      sent: 8000,
      Total_Opens: 6000,
      Total_Replies:5000,
      Total_Clicks:3500,
      Unique_Clicks:2900,
     
    },
    {
      name: "Dec 28",
      Unique_Opens: 8000,
      sent: 7000,
      Total_Opens: 5000,
      Total_Replies:4000,
      Total_Clicks:3000,
      Unique_Clicks:2300,
      
    },
    {
      name: "Dec 30",
      Unique_Opens: 7000,
      sent: 6300,
      Total_Opens: 4200,
      Total_Replies:3200,
      Total_Clicks:2200,
      Unique_Clicks:1600,
      
    },
    {
      name: "Jan 01",
      Unique_Opens: 6000,
      sent: 5800,
      Total_Opens: 3600,
      Total_Replies:2700,
      Total_Clicks:1700,
      Unique_Clicks:1000,
      
    },
    {
      name: "Jan 03",
      Unique_Opens: 4000,
      sent: 3800,
      Total_Opens: 3000,
      Total_Replies:2100,
      Total_Clicks:1200,
      Unique_Clicks:700,
     
    },
    {
      name: "Jan 05",
      Unique_Opens: 0,
      sent: 0,
      Total_Opens: 0,
      Total_Replies:0,
      Total_Clicks:0,
      Unique_Clicks:0,
      
    },
    {
      name: "Jan 07",
      Unique_Opens: 0,
      sent: 0,
      Total_Opens: 0,
      Total_Replies:0,
      Total_Clicks:0,
      Unique_Clicks:0,
    },
    {
      name: "Jan 09",
      Unique_Opens: 0,
      sent: 0,
      Total_Opens: 0,
      Total_Replies:0,
      Total_Clicks:0,
      Unique_Clicks:0,
    },
  ];
  
const Charts = () => {
    return (
        <>
        <div  className="m-[40px]   w-[full]  h-[460px] ">
         
            <div className="rounded-custom2 flex flex-col items-center justify-center w-[full] h-[460px] bg-white border border-solid border-[#e3e5e7]">
            <div className=" px-[40px] pb-[40px]  gap-4  max-w-[4300px] w-[100%] flex items-center  justify-between"
            ><h2 className="font-bold text-[20px] text-2A333F">Emails</h2>
            <div className="flex items-center justify-center gap-6 ">
              <div className="flex items-center justify-center gap-2">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="6" r="6" fill="#119BAD"/>
              </svg>
              <div className="text-slate-800 text-xs font-medium font-['Work Sans'] leading-none">Sent</div>
              </div>
              <div className="flex items-center justify-center gap-2">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="6" fill="#E6463B"/>
</svg>
<div className="text-slate-800 text-xs font-medium font-['Work Sans'] leading-none">Total Opens</div>
              
              </div>
              <div className="flex items-center justify-center gap-2">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="6" fill="#30C3FF"/>
</svg>
<div className="text-slate-800 text-xs font-medium font-['Work Sans'] leading-none">  Unique Opens</div>

            
              </div>
              <div className="flex items-center justify-center gap-2">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="6" fill="#1B323F"/>
</svg>
<div className="text-slate-800 text-xs font-medium font-['Work Sans'] leading-none">Total Replies</div>

             
              </div>
              <div className="flex items-center justify-center gap-2">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="6" fill="#A7BED5"/>
</svg>
<div className="text-slate-800 text-xs font-medium font-['Work Sans'] leading-none">Total Clicks</div>

              
              </div>
              <div className="flex items-center justify-center gap-2">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="6" fill="#085C9C"/>
</svg>
<div className="text-slate-800 text-xs font-medium font-['Work Sans'] leading-none">Unique Clicks</div>

              
              </div>
            </div>
            </div>
            <ResponsiveContainer width="100%" height={320} >
   <LineChart width={1200}  height={320} data={data} margin={{ left: 30, right: 30 }} >
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }}  />
      <YAxis />
      <Tooltip />
      
      <Line
        type="monotone"
        dataKey="sent"
        stroke="#119BAD"
        dot={false}
      />
      <Line
        type="monotone"
        dataKey="Total_Opens"
        stroke="#E6463B"
        dot={false}
      />
      <Line type="monotone" dataKey="Unique_Opens" stroke="#30C3FF" dot={false}/>
      <Line type="monotone" dataKey="Total_Replies" stroke="#1B323F" dot={false} />
      <Line type="monotone" dataKey="Total_Clicks" stroke="#A7BED5" dot={false}/>
      <Line type="monotone" dataKey="Unique_Clicks" stroke="#085C9C" dot={false} />
    </LineChart> 
    </ResponsiveContainer>
   
            </div>
        </div>
        </>
      )
}
export default Charts;