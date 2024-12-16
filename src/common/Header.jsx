import React, { useState, useEffect } from "react";
import CustomButton from "./CustomButton";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    return (
        <nav className="flex lg:flex-col w-full max-lg:pt-[11px] justify-between items-center px-4 max-sm:px-[18px] relative z-50">
            <div className="flex justify-between lg:pb-[198px] pb-20 items-center pt-12 w-full max-w-[1200px]">
                <a href="/"><img className="max-w-[248px] max-h-10 w-full" src="./assets/image/png/page-logo.png" alt="page-logo" /></a>
                <CustomButton tittle="Request a demo"/>
            </div>
            <button className="lg:hidden flex items-center justify-center mb-1 -translate-y-1 w-10 h-10 text-white rounded"
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <span className="block relative w-5 h-5">
                        <span className="absolute block bg-white w-full h-[2px] top-1/2 left-0 transform -translate-y-1/2 rotate-45"></span>
                        <span className="absolute block bg-white w-full h-[2px] top-1/2 left-0 transform -translate-y-1/2 -rotate-45"></span>
                    </span>
                ) : (
                    <span className="block relative w-5 h-5">
                        <span className="block bg-white w-full h-[2px] mb-[5px]"></span>
                        <span className="block bg-white w-full h-[2px] mb-[5px]"></span>
                        <span className="block bg-white w-full h-[2px]"></span>
                        <span className="uppercase text-sm mx-auto text-center absolute left-1 -translate-x-3">menu</span>
                    </span>
                )}
            </button>
            {isOpen && (
                <div className="fixed top-0 right-0 h-screen w-full bg-blue text-white p-6 flex flex-col items-center justify-center shadow-lg transition-transform ease-linear duration-300 transform z-50">
                    <button
                        className="self-end absolute top-4 -translate-y-[2px] -translate-x-1 text-xl"
                        onClick={() => setIsOpen(false)}>
                        <span className="block relative w-5 h-5">
                            <span className="absolute block bg-white w-full h-[2px] top-1/2 left-0 transform -translate-y-1/2 rotate-45"></span>
                            <span className="absolute block bg-white w-full h-[2px] top-1/2 left-0 transform -translate-y-1/2 -rotate-45"></span>
                        </span>
                    </button>
                    {/* {NAVBAR_LIST.map((obj, i) => (
                        <a className="text-white hover:underline underline-offset-2 hover:text-orange hover:scale-[1.04] duration-300 ease-linear opacity-[90%] md:text-xl text-base font-normal mb-4" to={obj.path}
                            key={i} onClick={() => setIsOpen(false)}>
                            {obj.tittle}

                        </a>
                    ))} */}
                    
                </div>
            )}
        </nav>
    );
}

export default Header;
