import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import styles from './Home.module.css'
import { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


export const Home = () => {

    const themeCtx = useContext(ThemeContext);

    useEffect(() => {
        themeCtx?.setTheme('dark');
    }, [])

    return (
        <>

            <div className={`${styles.bannerHome} flex flex-col
            `} >
                <div className={styles.bannerOpacity}>
                    <Header hideButtonTheme={true} />

                    <section className="h-[70vh] md:h-[67.5vh] lg:h-[61.1vh] container mx-auto flex flex-col justify-center items-center px-2 md:items-start md:px-8">
                        <h2 className={` font-bold text-5xl mb-5 text-white`}>Blogs</h2>
                        <p className={` max-w-lg rounded-md mt-3 mb-6 px-6 text-white md:px-0 text-center md:text-left`}>
                            Aliquip consequat dolor Lorem dolore enim reprehenderit proident magna fugiat ipsum tempor aute officia. Commodo velit laborum incididunt nulla aliqua mollit laboris ullamco.
                            Ea amet ea sunt amet consectetur duis labore ea consectetur aute laboris.
                        </p>
                        <button className={`mt-8 px-3 py-2 w-40 ${styles.buttonNewPost}`} ><Link to={'/newpost'}>Crie seu post </Link></button>

                    </section>
                    <Footer />
                </div>
            </div >
        </>
    )
};