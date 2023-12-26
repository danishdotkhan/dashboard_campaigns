const Signup =() =>{
    return (

        
       
        <div class=" w-[100%] h-[900px] relative bg-white m-0 p-0" >
    <div  >
    <div class=" left-[60px] top-[24px] absolute text-slate-800 text-2xl font-bold font-['Roboto']">Synapse.ai</div>
    <div class="left-[160px] top-[90px] absolute text-slate-800 text-xl font-bold tracking-wide font-nova leading-relaxed">Create Account</div>
    <div class="w-96 left-[160px] top-[126px] absolute text-slate-500 text-base font-normal font-['Work Sans'] leading-snug">Enter the following information to create your free account</div>
    <div class="w-96 h-14 left-[170px] top-[806px] absolute  ">
        <div class="w-96 left-0 top-0 absolute text-center text-slate-500 text-base font-normal font-['Work Sans']">Already have an account?</div>
        <a  href="#"><div class="w-96 left-0 top-[39px] absolute text-center  text-sky-600 text-base font-bold font-['Work Sans'] underline transition duration-300 ease-in-out cursor-pointer hover:text-gray-800">Sign In</div></a>
    </div>
    <div class="w-96 h-12 left-[160px] top-[688px] absolute   cursor-pointer  group">
        <div class="w-96 h-12 left-0 top-0 absolute bg-white rounded-lg border border-zinc-200 transition duration-300 ease-in-out cursor-pointer group-hover:bg-sky-600 group-hover:border-sky-600  cursor-pointer "></div>
       <a href="#">
        <div class="w-52 h-5 left-[100px] top-[14px] absolute">
            <div class="left-[30px] top-[1px] absolute text-center text-slate-800 text-base font-medium font-['Work Sans'] group-hover:text-white transition duration-300 ease-in-out">Continue With Google</div>
            <div class="w-5 h-5 left-0 top-0 absolute flex-col justify-start items-start inline-flex"></div>
        </div>
        </a>
    </div>
    <div class="w-96 left-[160px] top-[640px] absolute">
        <div class="left-[189px] top-0 absolute text-center text-slate-800 text-base font-normal font-['Work Sans']">OR</div>
        <div class="w-44 h-px left-0 top-[9px] absolute border border-zinc-200"></div>
        <div class="w-44 h-px left-[230px] top-[9px] absolute border border-zinc-200"></div>
    </div>

    <form action="#" method="POST">
    <div class="w-96 h-16 left-[160px] top-[278px] absolute">
        <div class="left-0 top-0 absolute text-slate-800 text-xs font-normal font-['Work Sans'] leading-none">Email</div>
        <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder="email@example.com"
        class="placeholder:text-gray-500  focus:outline-sky-600 w-96 h-12 px-[20px] top-[20px] placeholder:text-base  absolute bg-gray-100 rounded-lg  text-slate-800 text-base font-normal font-['Work Sans']" />
        
    </div>
    <div class="w-48 h-16 left-[160px] top-[190px] absolute">
        <div class="left-0 top-0 absolute text-slate-800 text-xs font-normal font-['Work Sans'] leading-none">First Name</div>
        <input type="text"
        id="firstname"
        name="firstname"
        required 
        placeholder="John" class="placeholder:text-gray-500 focus:outline-sky-600 w-48 h-12 px-[20px] top-[20px]  absolute bg-gray-100 rounded-lg  text-slate-500 text-base font-normal font-['Work Sans']" />
        
       
    </div>
    <div class="w-48 h-16 left-[370px] top-[190px] absolute">
        <div class="left-0 top-0 absolute text-slate-800 text-xs font-normal font-['Work Sans'] leading-none">Last Name</div>
        <input type="text"
        id="lastname"
        name="lastname"
        required 
        placeholder="Doe" class="placeholder:text-gray-500 focus:outline-sky-600 w-48 h-12 px-[20px] top-[20px]  absolute bg-gray-100 rounded-lg  text-slate-500 text-base font-normal font-['Work Sans']" />
        
    </div>
    <div class="w-96 h-16 left-[160px] top-[366px] absolute">
        <div class="left-0 top-0 absolute text-slate-800 text-xs font-normal font-['Work Sans'] leading-none">Password</div>
        <input id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
        placeholder="email@example.com" class="placeholder:text-gray-500 placeholder:text-base focus:outline-sky-600 w-96 h-12 px-[20px] top-[20px]  absolute bg-gray-100 rounded-lg  text-slate-800 text-xl font-normal font-['Work Sans']" />
        
    </div>
    <div class="w-96 h-16 left-[160px] top-[454px] absolute">
        <div class="left-0 top-0 absolute text-slate-800 text-xs font-normal font-['Work Sans'] leading-none">Confirm Password</div>
        <input id="cnfpassword"
            name="cnfpassword"
            type="password"
            autoComplete="current-password"
            required
        placeholder="email@example.com" class="placeholder:text-gray-500 placeholder:text-base focus:outline-sky-600 w-96 h-12 px-[20px] top-[20px]  absolute bg-gray-100 rounded-lg  text-slate-800 text-xl font-normal font-['Work Sans']" />
        
    </div>
    <button type="submit">
    <div class="cursor-pointer w-96 h-12 left-[160px] top-[557px] absolute rounded-lg  group">
        <div class="w-96 h-12 left-0 top-0 rounded-lg absolute bg-sky-600  transition duration-300 ease-in-out group-hover:bg-sky-700"></div>
       
        <div class=" left-[154px] top-[15px] absolute  text-center text-white text-base font-medium font-['Work Sans']">Get Started</div>
    </div>
    </button>
    </form>
</div>
<img className="w-[720px] h-[900px] absolute right-0 top-0 " src="../src/assets/signupbg.svg" />
</div>
    

    )
}
export default Signup;