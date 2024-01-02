import notAfound from '../assets/notafound.jpg';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const NotFound = () => {

    return (
        <div>
            <>
                <Header />
                <img className={` h-[70vh]`} src={notAfound} />
                <Footer />
            </>

        </div>
    )
};