import { BiLogoInstagram } from 'react-icons/bi'
import { BiLogoGithub } from 'react-icons/bi'
import { RxVercelLogo } from "react-icons/rx";
import { PiLinkedinLogo } from "react-icons/pi";
import { Link } from 'react-router-dom';
import styles from './Footer.module.css'


export const Footer = () => {


    return (
        <footer className={`h-[10vh]  ${styles.footer} 2xl:text-xl text-[#b87d00] dark:text-[#ffc855]`}>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-2">
                <div>
                    <p className={`font-semibold mb-1 md:mb-0 ${styles.contactDecoration}`}>Wesley Pimentel &copy; </p>
                </div>
                <div>
                    <p className={`font-semibold mb-1 md:mb-0 ${styles.contactDecoration}`}>Todos os direitos reservados.</p>
                </div>
                <div className=' '>
                    <ul className={`flex gap-4 text-[#b87d00] dark:text-[#ffc855]`}>
                        <li><Link to={'https://www.instagram.com/wesleypimeentel'} className='hover:opacity-70 ' target='_blank'><BiLogoInstagram /></Link></li>
                        <li><Link to={'https://github.com/wesleypimentel96'} target='_blank' className='hover:opacity-70'><BiLogoGithub /></Link></li>
                        <li><Link to={'https://vercel.com/wesley-pimentels-projects'} className='hover:opacity-70' target='_blank'><RxVercelLogo /></Link></li>
                        <li><Link to={'https://www.linkedin.com/in/wesley-pimentel96/'} className='hover:opacity-70' target='_blank'><PiLinkedinLogo /></Link></li>
                    </ul>
                </div>
            </div>
        </footer >
    )
};