import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { MdOutlineDarkMode } from 'react-icons/md';
import { BsSun } from 'react-icons/bs'
import { MenuMobile } from './MenuMobile';


interface IHeader {
    hideButtonTheme?: boolean;
}

export const Header = ({ hideButtonTheme }: IHeader) => {
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


    return (
        <header className={`h-[10vh]  ${styles.header} `}>
            <div className=" container mx-auto flex justify-between px-2 items-center">
                <h1 className={`font-semibold  text-3xl hover:opacity-70 ${styles.logo}  dark:text-[#ffc855] text-[#b87d00] transition-all duration-500`} ><Link to={'/'}>Blogger</Link></h1>

                <MenuMobile />

                <nav className={` hidden md:block text-[#b87d00] dark:text-[#ffc855]`}>
                    <ul className='flex gap-4 '>
                        <li className=' flex items-center'><Link to={'/'} className={`${styles.buttonDecotarion}  font-semibold hover:scale-105 transition-all duration-300`}>Home</Link></li>
                        <li className=' flex items-center'><Link to={'/posts'} className={`${styles.buttonDecotarion}  font-semibold hover:scale-105 transition-all duration-300`}>Posts</Link></li>
                        <li className=' flex items-center'><Link to={'/newpost'} className={`${styles.buttonDecotarion}  font-semibold hover:scale-105 transition-all duration-300`}>Novos Posts</Link></li>
                        <li className=' flex items-center'><Link to={'/photogallery'} className={`${styles.buttonDecotarion}  font-semibold hover:scale-105 transition-all duration-300`}>Galeria de fotos</Link></li>
                        <li className=' flex items-center'><Link to={'/users'} className={`${styles.buttonDecotarion}  font-semibold hover:scale-105 transition-all duration-300`}>Usuários</Link></li>

                        {iconLight && !hideButtonTheme &&
                            <button onClick={handleThemeButton}
                                className={`bg-[#b87d00] text-white  rounded-full p-1 opacity-60 hover:opacity-100 transition duration-1000
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

            <img />
        </header>
    )

};