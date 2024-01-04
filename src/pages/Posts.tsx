
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Post } from "../types/Post";
import styles from './Posts.module.css'
import { CommentsUser } from "../components/Comments";
import { ButtonScrollToTop } from "../components/ButtonToTop";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [showMore, setShowMore] = useState(false);
    const [showPosts, setShowPosts] = useState(true);
    const [showComments, setShowComments] = useState<number | null>(null);
    const [buttonPosts, setButtonPosts] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const getPosts = async () => {
        try {
            const response = await fetch(`${BASE_URL}/posts`);
            const json = await response.json();
            const arrayPosts = json;
            setPosts(arrayPosts.slice(0, 12));
            setIsLoading(false);
            setButtonPosts(true);
        } catch (err) {
            console.log(err)
        }

    };

    const handleShowMorePosts = async () => {
        setShowPosts(false);
        setShowMore(true);
        try {
            const response = await fetch(`${BASE_URL}/posts`);
            const json = await response.json();
            setPosts(json);
        } catch (err) {
            console.log(err)
        }
    };

    const handleCloseShowMorePosts = () => {
        setShowPosts(true);
        setShowMore(false);
        getPosts()

    };

    useEffect(() => {
        setTimeout(() => {
            getPosts()
        }, 1000)
    }, []);


    const handleGetPostId = (idPost: number) => {
        setShowPosts(false);
        setShowMore(false);
        setButtonPosts(false);
        setShowComments(idPost);

    };

    return (
        <>

            <ButtonScrollToTop />
            <Header />

            {isLoading &&
                <section className={` h-[68vh] flex justify-center items-center`}>
                    <div role="status">
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    </div>
                </section>
            }

            {showPosts &&
                <>
                    <section className={`container max-w-7xl md:max-w-[40em] lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 2xl:max-w-[90em]  place-items-center mt-10 mb-10 gap-10 md:gap-8 2xl:gap-6 dark:bg-[#0b0b1d]`}>

                        {posts.map(item => (

                            <div key={item.id} className={` w-72 md:h-full 2xl:h-96 shadow-lg py-3 
                        px-2 flex flex-col justify-between dark:shadow-white/10 hover:scale-110  
                        transition-all duration-300 cursor-pointer`}
                                onClick={() => handleGetPostId(item.id)}>
                                <h3 className={` font-semibold text-lg capitalize mb-2 dark:text-white`}>{item.title}</h3>
                                <p className={` mb-5 dark:text-white`}>{item.body}</p>
                                <button className={` text-center mb-3 w-full ${styles.buttonPosts}`} onClick={() => handleGetPostId(item.id)}>Mostrar comentários</button>
                            </div>
                        ))
                        }

                    </section>

                </>
            }

            {!showPosts && !showMore &&
                <CommentsUser
                    idPost={showComments}
                    goBack={() => { setShowPosts(true), setButtonPosts(true) }}
                />}

            {showMore &&
                <section className={`container max-w-7xl md:max-w-[40em] lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center mt-10 mb-10 gap-10 md:gap-8 dark:bg-[#0b0b1d]`}>

                    {posts.map(item => (
                        <>
                            <div key={item.id} className={` w-72 md:h-full shadow-lg py-3 px-2 flex 
                        flex-col justify-between dark:shadow-white/10 hover:scale-110  
                        transition-all duration-300 cursor-pointer`}
                                onClick={() => handleGetPostId(item.id)}
                            >
                                <h3 className={` font-semibold text-lg capitalize mb-2 dark:text-white`}>{item.title}</h3>
                                <p className={` mb-5 dark:text-white`}>{item.body}</p>
                                <button className={` text-center mb-3 w-48 ${styles.buttonPosts}`} onClick={() => handleGetPostId(item.id)}>Mostrar comentários</button>
                            </div>
                        </>
                    ))
                    }

                </section>
            }

            <section className={` container mx-auto px-2 flex justify-center mb-10`}>

                {buttonPosts &&
                    <div>
                        <button onClick={handleShowMorePosts} className={` capitalize px-3 py-2 rounded-md mr-4 ${styles.buttonShowMore}`}>Mostrar mais posts</button>
                        {!showPosts &&
                            <button onClick={handleCloseShowMorePosts} className={` capitalize px-3 py-2 rounded-md ${styles.buttonShowMore}`}>Ocultar posts</button>
                        }
                    </div>
                }



            </section>


            <Footer />
        </>

    )
};
