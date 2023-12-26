
const Signin = () => {
    return (



        <div class=" w-[100%] h-[900px] relative bg-white m-0 p-0" >
            <div  >
                <div class=" left-[60px] top-[24px] absolute text-slate-800 text-2xl font-bold font-['Roboto']">Synapse.ai</div>

                <div class="left-[160px] top-[90px] absolute text-slate-800 text-xl font-extrabold font-nova tracking-wide leading-relaxed">Sign In</div>
                <div class="w-96 left-[160px] top-[126px] absolute text-slate-500 text-base font-normal font-['Work Sans'] leading-snug">Enter the email address and password to login to your account</div>
                <div class="w-96 h-14 left-[170px] top-[806px] absolute  ">
                    <div class="w-96 left-0 top-0 absolute text-center text-slate-500 text-base font-normal font-['Work Sans']">Dont have an account yet?</div>
                    <a href="#"><div class="w-96 left-0 top-[39px] absolute text-center  text-sky-600 text-base underline font-bold font-['Work Sans']  transition duration-300 ease-in-out cursor-pointer hover:text-gray-800">Create Account</div></a>
                </div>

                <form action="#" method="POST">
                <div class="w-96 h-16 left-[160px] top-[195px] absolute">
                    
                    <div class="left-0 top-0 absolute text-slate-800 text-xs font-normal font-['Work Sans'] leading-none">Email</div>
                    <input id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="email@example.com"
                        class="placeholder:text-gray-500 focus:outline-sky-600 w-96 h-12 px-[20px] top-[20px] placeholder:text-base  absolute bg-gray-100 rounded-lg  text-slate-800 text-base font-normal font-['Work Sans']" />
                </div>


                <div class="w-96 h-16 left-[160px] top-[295px] absolute">
                    <div class="left-0 top-0 absolute text-slate-800 text-xs font-normal font-['Work Sans'] leading-none">Password</div>
                    <input id="password"
                     name="password"
                     type="password"
                     autoComplete="current-password"
                     required
                    placeholder="email@example.com" class="placeholder:text-gray-500 placeholder:text-base focus:outline-sky-600 w-96 h-12 px-[20px] top-[20px]  absolute bg-gray-100 rounded-lg  text-slate-800 text-xl font-normal font-['Work Sans']" />

                </div>

              <a href="#">  <div class="w-96 h-14 left-[35px] top-[384px] absolute">
                    <div class="w-96 left-0 top-[39px] absolute text-center  text-sky-600 text-base font-bold font-['Work Sans']  transition duration-300 ease-in-out cursor-pointer hover:text-gray-800">Forgot Password?</div>
                </div></a>
                <button type="submit">
                <div class="cursor-pointer w-96 h-12 left-[160px] top-[506px] absolute rounded-lg  group">
                    <div class="w-96 h-12 left-0 top-0 rounded-lg absolute bg-sky-600  transition duration-300 ease-in-out group-hover:bg-sky-700"></div>
              
                    <div class=" left-[154px] top-[15px] absolute  text-center text-white text-base font-medium font-['Work Sans']">Sign In</div>
                </div>
                </button>
                </form>
            </div>
            <img className="w-[720px] h-[900px] absolute right-0 top-0 " src="../src/assets/signupbg.svg" />
        </div>


    )
}
export default Signin;