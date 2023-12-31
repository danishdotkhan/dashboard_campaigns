const Welcome = () => {
    return (
        <>
        <div class="w-[full] h-[900px]  relative bg-white">
    <div class="left-[60px] top-[24px]  absolute text-slate-800 text-2xl font-bold font-['Roboto']">Synapse.ai</div>
    <div class="  top-[214px] left-[573px] absolute text-slate-800 text-6xl font-bold font-['Roboto']">Synapse.ai</div>
    <div class="w-[237px] h-[47px] left-[602px] top-[127px] absolute text-center text-slate-500 text-4xl font-normal font-['Work Sans']">Welcome To</div>
    <div class="w-96 h-96 left-[360px] top-[330px] absolute ">
        <div class="w-[720px] h-[360px] left-0 top-[20px] absolute bg-zinc-200 rounded-2xl blur-3xl"></div>
        <div class="w-[720px] h-[360px] left-0 top-0 absolute bg-white rounded-2xl "></div>
        <img class="w-[720px] h-[360px] left-[180px] top-0 absolute rounded-2xl" src="../src/assets/computer.png" />
        <div class="w-14 h-14 left-[330px] top-[150px] absolute bg-white bg-opacity-20 rounded-full"></div>
        <div class="w-6 h-6 left-[349px] top-[168px] absolute">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z" fill="#0B84DF"/>
</svg>

        </div>
    </div>
    <div class="w-60 h-12 left-[840px] top-[770px] absolute rounded-lg cursor-pointer">
        <div class="w-60 h-12 left-0 top-0 absolute bg-sky-600 rounded-lg"></div>
        
        <div class="left-[63.80px] top-[15px] absolute text-center text-white text-base font-medium font-['Work Sans']">Start With ICP</div>
    </div>
    <div class="w-[200px] h-[48px] left-[360px] top-[770px] absolute rounded-lg cursor-pointer">
    <div class="w-[200px] h-[48px] left-0 top-0 absolute bg-zinc-200 rounded-lg"></div>
    <div class="left-[50px] top-[13px] absolute text-center text-sky-600 text-base font-medium font-['Work Sans'] leading-snug">Skip Tutorial</div>
    </div>
</div>
        </>
    )
}
export default Welcome;