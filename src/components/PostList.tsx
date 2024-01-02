import { useContext } from "react";
import { NewPostsContext } from "../contexts/NewPostsContext";



export const PostList = () => {
    const postsCtx = useContext(NewPostsContext);

    const handleRemovePostButton = (id: number) => {
        postsCtx?.removePosts(id);
    }

    return (
        <section className="  container mx-auto lg:max-w-7xl mb-20 grid place-items-center gap-5 md:gap-5 md:max-w-xl h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {postsCtx?.posts.map(item => (
                <div key={item.id}
                    className={`w-72 h-72 shadow-lg py-3 px-3 flex flex-col justify-between dark:shadow-white/10 transition-all duration-300 hover:scale-110  
                    `}
                >
                    <div className="dark:text-white">
                        <h2 className=" font-semibold uppercase break-words">{item.title}</h2>
                        <p className="mt-3 w-full break-words">{item.body}</p>
                    </div>

                    <button className=" bg-red-500 w-8 h-8 rounded-full hover:bg-red-600 hover:scale-105 transition-all duration-300 font-bold text-lg uppercase text-white"
                        onClick={() => handleRemovePostButton(item.id)}>X</button>
                </div>
            ))}
        </section>

    )
};