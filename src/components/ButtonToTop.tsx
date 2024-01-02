import { useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";

export const ButtonScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', () => setIsVisible(!!(window.scrollY > 300)));

    return (
        <>
            {isVisible &&
                <button
                    className={`
         fixed bottom-5 right-10  
        `}

                    onClick={handleScrollToTop}> <IoIosArrowDropup className={` bg-emerald-950 dark:bg-yellow-500 rounded-full text-white text-2xl font-bold `} />

                </button>
            }
        </>
    )
};