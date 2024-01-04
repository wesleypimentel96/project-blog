import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { User } from "../types/User";

import { HiOutlineInformationCircle } from "react-icons/hi";
import { ButtonScrollToTop } from "../components/ButtonToTop";
import { Link } from "react-router-dom";
import { UserImg } from "../components/UserImg";

export const Users = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        setUsers(json);
        setIsLoading(false);
    }

    useEffect(() => {
        setTimeout(() => {
            getUsers();
        }, 1000)

    }, [])

    return (
        <>
            <ButtonScrollToTop />
            <Header />
            <div className="flex flex-col items-center mt-5">


                {isLoading &&
                    <section className={` h-[74vh] flex justify-center items-center`}>
                        <div role="status">
                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        </div>
                    </section>
                }




                <section className={` container mx-auto mt-10 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 max-w-7xl`}>
                    {users.map(item => (
                        <div key={item.id}
                            className={` border-2 border-yellow-400  
                            rounded-md mb-6 shadow-xl flex flex-col justify-between
                            hover:scale-105 transition-all duration-300 cursor-pointer`}>
                            <div className={` flex justify-center  py-8 dark:bg-slate-500/30`}>
                                <UserImg />
                            </div>


                            <div className=" bg-yellow-400/70 dark:bg-white p-4">
                                <h2 className=" font-semibold text-lg">Nome: <span className=" text-md font-normal">{item.name}</span></h2>
                                <p className=" font-semibold text-lg">E-mail: <span className=" text-md font-normal">{item.email}</span></p>
                                <p className=" font-semibold text-lg">Username: <span className=" text-md font-normal">{item.username}</span></p>
                                <div className="flex mt-5">
                                    <Link to={`/userInformation/${item.id}`}
                                        className="flex items-center gap-1 bg-green-400 rounded-md p-1 hover:opacity-80 text-white font-semibold"><span><HiOutlineInformationCircle className={`text-xl`} /></span>Detalhes</Link>
                                </div>
                            </div>
                        </div>
                    ))}


                </section>
            </div>
            <Footer />
        </>
    )
};