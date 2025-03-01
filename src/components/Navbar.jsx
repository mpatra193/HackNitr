import { useState } from "react";
import HoverButton from "./HoverButtons";

function Navbar() {
    

    return (
        <header className="relative py-4 md:py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <div className="flex-shrink-0 text-white font-semibold text-xl md:text-3xl lg:text-5xl">
                        Verify<span style={{color:"#E100FF"}}>AI</span>
                    </div>

                    

                    <div className="hidden lg:absolute lg:inset-y-0 lg:flex lg:items-center lg:justify-center lg:space-x-12 lg:-translate-x-1/2 lg:left-1/2">
                        <HoverButton label="Home"  /> 
                        <HoverButton label="About"  /> 
                        <HoverButton label="How it works"  /> 
                        <HoverButton label="FAQs"  />        
                    </div>

                    <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                        <a href="#" title="" className="text-base font-medium text-[#E100FF] transition-all duration-200 rounded font-pj hover:text-opacity-50 hover:text-[#B000C7]"> Login </a>

                        <a
                            href="#"
                            title=""
                            className="px-5 py-2 text-base font-semibold leading-7 bg-[#E100FF] text-gray-900 transition-all duration-200 rounded-xl font-pj  hover:bg-[#B000C7] hover:text-white"
                            role="button"
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;