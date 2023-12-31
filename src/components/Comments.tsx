import { useEffect, useState } from "react";
import { Comments } from "../types/Comments";
import { IoIosArrowBack } from "react-icons/io";

interface Props {
    idPost: number | null;
    goBack: () => void;
}

interface PropsComments {
    postId: number;
    id: number;
    email: string;
    name: string;
    body: string;
}


export const CommentsUser = ({ idPost, goBack }: Props) => {
    const [jsonComments, setJsonComments] = useState<Comments[]>([]);

    const getComments = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const jsonComments = await response.json();
            const comments = jsonComments.filter((comment: PropsComments) => comment.postId === idPost)
            setJsonComments(comments);
            console.log(comments);
        }
        catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getComments();
    }, [idPost])

    return (

        <div className="flex items-center flex-col">

            <section className={` container mx-auto mt-10 p-4  justify-center items-center grid grid-cols-1 md:grid-cols-2 gap-10`}>
                {jsonComments.map(item => (
                    <div key={item.id}
                        onClick={goBack}
                        className={`border border-yellow-500/90 
                    p-5 mb-8 rounded-lg dark:shadow-white/10 shadow-xl
                    hover:scale-105 transition-all duration-300
                    cursor-pointer
                    `}
                    >
                        <div className={`bg-yellow-100 dark:bg-slate-950/90 rounded-md dark:text-white p-3`}>
                            <h2 className={`  p-2 rounded-md font-semibold text-lg`}>{item.name}</h2>
                            <h4 className={` p-2 mb-2`}>{item.email}</h4>
                            <p className=" p-2 rounded-md">{item.body}</p>
                        </div>
                    </div>
                ))}

            </section>

            <button onClick={goBack}
                className={` flex items-center gap-1 bg-[#b87d00] py-2 px-3 rounded-md 
                text-white text-lg font-semibold opacity-70 hover:opacity-100 transition-all 
                duration-500 mt-10
                
                `}
            >
                <IoIosArrowBack className={`
                 text-3xl font-semibold
                `} />
                Voltar</button>
        </div>
    )

};