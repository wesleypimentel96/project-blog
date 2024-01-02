import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useContext, useState } from "react";
import styles from './Header.module.css';
import { ThemeContext } from "../contexts/ThemeContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from 'react-icons/bs'


type IHeaderMobile = {
    hideButtonTheme?: boolean;
}


export const MenuMobile = ({ hideButtonTheme }: IHeaderMobile) => {
    const [menuHamburger, setMenuHamburger] = useState(true);
    const [menuClose, setMenuClose] = useState(false);
    const [iconLight, setIconLight] = useState(true);
    const [iconDark, setIconDark] = useState(false);
    const themeCtx = useContext(ThemeContext);

    const handleThemeButton = () => {
        themeCtx?.setTheme(themeCtx.theme === 'dark' ? 'ligth' : 'dark');
        if (themeCtx?.theme === 'ligth') {
            setIconLight(false)
            setIconDark(true)
        } else {
            setIconLight(true)
            setIconDark(false)
        }
    };

    const handleMenuHamburger = () => {
        setMenuHamburger(false);
        setMenuClose(true);
    }

    const handleMenuClose = () => {
        setMenuClose(false);
        setMenuHamburger(true);
    }

    return (
        <div className={` sm:block md:hidden  flex flex-col items-end  absolute top-0 right-0 h-screen px-4 py-2
            ${menuHamburger ? '' : 'bg-black/70  transition-all duration-500'}
        `}>
            <div className=" mt-5 cursor-pointer">
                {menuHamburger && 
                    <RxHamburgerMenu onClick={handleMenuHamburger} className={` text-[#b87d00] dark:text-[#ffc855] text-3xl font-bold`} />
                }

                {menuClose && 
                    <IoMdClose onClick={handleMenuClose} className={` text-white text-3xl`} />
                }
            </div>
            <nav className={` mt-6
                ${menuClose ? 'block text-[#b87d00] dark:text-[#ffc855] text-sm' : 'hidden'}
            `}>
                <ul className=" flex flex-col items-end">
                    <li className=' flex items-center mb-1'><Link to={'/'} className={`${styles.buttonDecotarion}  font-semibold hover:scale-95 transition-all duration-300 `}>Home</Link></li>
                    <li className=' flex items-center mb-1'><Link to={'/posts'} className={`${styles.buttonDecotarion}  font-semibold hover:scale-95  transition-all duration-300 `}>Posts</Link></li>
                    <li className=' flex items-center mb-1'><Link to={'/newpost'} className={`${styles.buttonDecotarion}  font-semibold hover:scale-95 transition-all duration-300 `}>Novos Posts</Link></li>
                    <li className=' flex items-center mb-1'><Link to={'/photogallery'} className={`${styles.buttonDecotarion}  font-semibold hover:scale-95 transition-all duration-300 `}>Galeria de fotos</Link></li>
                    <li className=' flex items-center mb-1'><Link to={'/users'} className={`${styles.buttonDecotarion}  font-semibold hover:scale-95 transition-all duration-300 `}>Usuários</Link></li>
                    {iconLight && !hideButtonTheme &&
                        <button onClick={handleThemeButton}
                            className={`bg-[#b87d00]  text-white  rounded-full p-1 opacity-60 hover:opacity-100 transition duration-1000
                        `}>

                            <BsSun className={` text-2xl`} />
                        </button>
                    }

                    {iconDark && !hideButtonTheme &&
                        <button onClick={handleThemeButton}
                            className={` dark:text-white dark:bg-[#2b2b6e] rounded-full p-1 opacity-60 hover:opacity-100 transition duration-1000
                                
                        `}>

                            {<MdOutlineDarkMode className={` text-2xl`} />}
                        </button>
                    }
                </ul>
            </nav>
        </div>
    )
};