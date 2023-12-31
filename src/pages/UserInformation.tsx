import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { User } from "../types/User";
import { UserImg } from "../components/UserImg";
import { IoIosArrowBack } from "react-icons/io";
import { ButtonScrollToTop } from "../components/ButtonToTop";

export const UserInformation = () => {

    const [userInformation, setUserInformation] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams() as any;
    const idUser = parseInt(id, 10)

    useEffect(() => {
        if (id === undefined || isNaN(id)) {
            navigate('/users');
        }
    }, [])

    const goBack = () => {
        navigate(`/users`)
    };
    const getUserInformation = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const json = await response.json();
        const userInfo = json.filter((userInfo: User) => userInfo.id === idUser);
        setUserInformation(userInfo);
        setIsLoading(false);
    };

    useEffect(() => {
        setTimeout(() => {
            getUserInformation();
        }, 1000)

    }, [])

    return (
        <>

            <ButtonScrollToTop />
            <Header />

            {isLoading &&
                <section className={` h-[55vh] flex justify-center items-center`}>
                    <div role="status">
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    </div>
                </section>
            }


            <section className=" px-4 mt-20">

                {userInformation.map(item => (

                    <div key={item.id}>
                        <div className="  border-2 border-yellow-400 dark:border-white/10 rounded-md mb-6 shadow-white/10 shadow-md px-4 py-4 text-[#b87d00] dark:text-white">
                            <div className="bg-yellow-400/30 dark:bg-slate-950/50 rounded-md px-4 py-3 flex justify-center mb-5">
                                <h1 className="text-2xl font-semibold text-[#b87d00] dark:text-white">Informações</h1>
                            </div>
                            <div className=" flex flex-col lg:flex-row justify-between items-center">
                                <div className=" flex flex-col items-center text-md font-semibold">
                                    <UserImg />
                                    <span><h4>ID: {item.id}</h4></span>
                                </div>
                                <div>
                                    <span><h4>Nome: {item.name}</h4></span>
                                    <span><h4>UserName: {item.username}</h4></span>
                                </div>
                                <div className="flex flex-col items-center " >
                                    <button onClick={goBack} className=" flex px-3 py-2 rounded-md items-center bg-[#b87d00] 
                                    text-white text-lg font-semibold opacity-60 hover:opacity-100 
                                    transition-all duration-500 mt-5">
                                        <IoIosArrowBack className={`text-2xl`} />
                                        <span>Voltar</span></button>
                                </div>
                            </div>
                        </div>

                        <div className="border-2 border-yellow-400 dark:border-white/10  rounded-md mb-6 shadow-white/10 shadow-md  px-4 py-4 text-[#b87d00] dark:text-white font-semibold">
                            <div className="bg-yellow-400/30 dark:bg-slate-950/50 rounded-md px-4 py-3 flex justify-center mb-5">
                                <h1 className="text-2xl font-semibold text-[#b87d00] dark:text-white">Contato</h1>
                            </div>
                            <div className=" flex flex-col lg:flex-row items-center justify-between">
                                <span>Telefone: {item.phone}</span>
                                <span>Site: {item.website}</span>
                                <span>E-mail: {item.email}</span>
                            </div>

                            <div className="bg-yellow-400/30 dark:bg-slate-950/50 rounded-md px-4 py-3 flex justify-center mb-5 mt-5 ">
                                <h1 className="text-2xl font-semibold text-[#b87d00] dark:text-white">Comercial</h1>
                            </div>
                            <div className=" flex flex-col lg:flex-row justify-center lg:justify-between">
                                <div className=" mb-1 flex flex-col items-center">
                                    <span className="mb-1">Empresa: {item.company.name}</span>
                                    <span>Ramo: {item.company.bs}</span>
                                </div>
                                <div className=" flex flex-col items-center">
                                    <span>Slogan: {item.company.catchPhrase}</span>
                                </div>
                            </div>
                        </div>

                        <div className="border-2 border-yellow-400 dark:border-white/10 rounded-md mb-6 shadow-white/10 shadow-md  px-4 py-4 text-[#b87d00] dark:text-white">
                            <div className="bg-yellow-400/30 dark:bg-slate-950/50 rounded-md px-4 py-3 flex justify-center mb-5">
                                <h1 className="text-2xl font-semibold text-[#b87d00] dark:text-white ">Endereço</h1>
                            </div>
                            <div className=" flex flex-col lg:flex-row justify-between items-center font-semibold">
                                <div className="flex flex-col items-center">
                                    <span >Logradouro: {item.address.street}</span>
                                    <span >Cidade: {item.address.city}</span>
                                </div>

                                <div className=" lg:flex flex-col lg:items-center">
                                    <span>Casa: {item.address.suite}</span>
                                    <span>CEP: {item.address.zipcode}</span>
                                </div>

                            </div>
                        </div>

                    </div>
                ))
                }
            </section >


            <Footer />
        </>
    )
};