const NewWelcome = () => {
    return (
        <>
            <div className="w-[full] h-[900px]  relative bg-white">
                <div className="pt-[40px] pl-[60px] ">
                    <svg width="166" height="24" viewBox="0 0 166 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 0L16.5 9L9 24H0L12 0H21Z" fill="#0075EF" />
                        <path d="M16.5 9H25.5L33 24H24L16.5 9Z" fill="#0075EF" />
                        <path d="M34.5 9L39 0L43.5 9H34.5Z" fill="#0075EF" />
                        <path d="M34.5 11.55H43.5V24H34.5V11.55Z" fill="#089CB3" />
                        <path d="M155.344 22.146H164.056L165.676 24H151.564V11.4H165.712L164.11 13.254H155.344V16.782H164.866V18.636H155.344V22.146Z" fill="#2A333F" />
                        <path d="M150.12 16.764V22.092L147.276 24H137.952L136.332 22.146H145.278L145.944 21.372V18.618H135.99V13.398L137.7 11.4H149.778L148.194 13.254H140.904L140.094 14.172V16.764H150.12Z" fill="#2A333F" />
                        <path d="M134.542 19.536H124.372V24H120.592V11.4H134.542V19.536ZM130.762 13.254H124.336V17.682H130.762V13.254Z" fill="#2A333F" />
                        <path d="M103.863 11.4H117.885V24H113.745V18.636H107.895V24H103.863V11.4ZM113.655 13.254H107.859V16.764H113.655V13.254Z" fill="#2A333F" />
                        <path d="M101.463 11.4V24L91.8694 17.142V24H88.1074V11.4L97.7554 18.204V11.4H101.463Z" fill="#2A333F" />
                        <path d="M76.9782 18.06L71.0742 11.4H75.4302L78.8682 15.288L82.3062 11.4H86.6622L80.7582 18.06V24H76.9782V18.06Z" fill="#2A333F" />
                        <path d="M69.63 16.764V22.092L66.786 24H57.462L55.842 22.146H64.788L65.454 21.372V18.618H55.5V13.398L57.21 11.4H69.288L67.704 13.254H60.414L59.604 14.172V16.764H69.63Z" fill="#2A333F" />
                    </svg></div>

                    <div className="w-[full] flex flex-col items-center justify-center gap-[40px] mt-[70px]">
                    <div className="text-center text-slate-500 text-2xl font-medium font-['Work Sans']">Welcome To</div>
                    <div>
                    <svg width="221" height="32" viewBox="0 0 221 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28 0L22 12L12 32H0L16 0H28Z" fill="#0075EF"/>
<path d="M22 12H34L44 32H32L22 12Z" fill="#0075EF"/>
<path d="M46 12L52 0L58 12H46Z" fill="#0075EF"/>
<path d="M46 15.4H58V32H46V15.4Z" fill="#089CB3"/>
<path d="M207.126 29.528H218.742L220.902 32H202.086V15.2H220.95L218.814 17.672H207.126V22.376H219.822V24.848H207.126V29.528Z" fill="#2A333F"/>
<path d="M200.16 22.352V29.456L196.368 32H183.936L181.776 29.528H193.704L194.592 28.496V24.824H181.32V17.864L183.6 15.2H199.704L197.592 17.672H187.872L186.792 18.896V22.352H200.16Z" fill="#2A333F"/>
<path d="M179.389 26.048H165.829V32H160.789V15.2H179.389V26.048ZM174.349 17.672H165.781V23.576H174.349V17.672Z" fill="#2A333F"/>
<path d="M138.484 15.2H157.18V32H151.66V24.848H143.86V32H138.484V15.2ZM151.54 17.672H143.812V22.352H151.54V17.672Z" fill="#2A333F"/>
<path d="M135.285 15.2V32L122.493 22.856V32H117.477V15.2L130.341 24.272V15.2H135.285Z" fill="#2A333F"/>
<path d="M102.638 24.08L94.7656 15.2H100.574L105.158 20.384L109.742 15.2H115.55L107.678 24.08V32H102.638V24.08Z" fill="#2A333F"/>
<path d="M92.84 22.352V29.456L89.048 32H76.616L74.456 29.528H86.384L87.272 28.496V24.824H74V17.864L76.28 15.2H92.384L90.272 17.672H80.552L79.472 18.896V22.352H92.84Z" fill="#2A333F"/>
                    </svg>
                    </div>
                    <div className="text-center text-slate-500 text-xl font-normal font-['Work Sans']">Get Started With</div>
                    <div className="flex items-start justify-center gap-[40px] mt-[70px]">
                        <a href="#" className="cursor-pointer w-[240px] h-[120px] rounded-lg flex flex-col items-center justify-center gap-[18px] bg-[#F3F5F7]">
                        <div className="text-center text-slate-800 text-2xl font-semibold font-['All Round Gothic'] leading-10">ICP</div>
                        <div className="text-center text-slate-500 text-base font-normal font-['Work Sans'] leading-relaxed">23 Questions</div>
                        </a>
                        
                        <div className="cursor-pointer  flex flex-col items-center justify-center gap-[20px]">
                        <a href="#" className="w-[240px] h-[120px] rounded-lg flex flex-col items-center justify-center gap-[18px] bg-[#F3F5F7]">
                        <div className="text-center text-slate-800 text-2xl font-semibold font-['All Round Gothic'] leading-10">Profile</div>
                        <div className="text-center text-slate-500 text-base font-normal font-['Work Sans'] leading-relaxed">40 Questions</div>
                        </a>
                        <div className="flex items-center justify-center gap-[5px]">
                            <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.62764 4.507C8.68318 2.61346 9.21095 1.66669 10 1.66669C10.7891 1.66669 11.3168 2.61346 12.3724 4.507L12.6455 4.99688C12.9454 5.53497 13.0954 5.80401 13.3292 5.98153C13.5631 6.15904 13.8543 6.22494 14.4368 6.35673L14.9671 6.47671C17.0168 6.94048 18.0417 7.17237 18.2855 7.95646C18.5293 8.74056 17.8306 9.55758 16.4333 11.1916L16.0717 11.6144C15.6747 12.0787 15.4761 12.3109 15.3868 12.5981C15.2975 12.8853 15.3275 13.1951 15.3875 13.8146L15.4422 14.3787C15.6534 16.5589 15.7591 17.6489 15.1207 18.1335C14.4824 18.6181 13.5228 18.1763 11.6036 17.2927L11.1071 17.0641C10.5617 16.8129 10.2891 16.6874 10 16.6874C9.71096 16.6874 9.43828 16.8129 8.89291 17.0641L8.3964 17.2927C6.47723 18.1763 5.51765 18.6181 4.8793 18.1335C4.24094 17.6489 4.34657 16.5589 4.55784 14.3787L4.61249 13.8146C4.67253 13.1951 4.70254 12.8853 4.61322 12.5981C4.5239 12.3109 4.32536 12.0787 3.92827 11.6144L3.56675 11.1916C2.16938 9.55758 1.47069 8.74056 1.71452 7.95646C1.95835 7.17237 2.98322 6.94048 5.03295 6.47671L5.56324 6.35673C6.14571 6.22494 6.43695 6.15904 6.67079 5.98153C6.90463 5.80401 7.05461 5.53497 7.35456 4.99688L7.62764 4.507Z" fill="#089CB3"/>
                                </svg>
                            </div>
                            <div className="text-slate-800 text-base font-normal font-['Work Sans'] leading-snug">Very Important</div>
                        </div>
                        </div>
                        

                    </div>
                    <button className="mt-[140px] w-[200px] h-[48px] bg-[#E3E5E7] rounded-lg cursor-pointer ">
                    <div class="text-center text-sky-600 text-base font-medium font-['Work Sans'] leading-snug">Skip For Now</div>

                    </button>

                    </div>


               
            </div>
        </>
    )
}
export default NewWelcome;