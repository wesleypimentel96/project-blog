import { ButtonScrollToTop } from "../components/ButtonToTop";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PostList } from "../components/PostList";
import { NewPostsContext } from "../contexts/NewPostsContext";
import { useState, FormEvent, useContext } from 'react';

export const NewPost = () => {

    const [titleInput, setTitleInput] = useState<string>('');
    const [bodyTextarea, setBodyTextArea] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [errorEmpty, setErrorEmpty] = useState<String>('')
    const [errorChar, setErrorChar] = useState<string>('');

    const newPostsCtx = useContext(NewPostsContext);

    const handleAddPostButton = (e: FormEvent) => {
        e.preventDefault();
        if ((titleInput.length >= 2 && titleInput.trim().length > 0) &&
            (bodyTextarea.length >= 2 && bodyTextarea.trim().length > 0)) {
            newPostsCtx?.addPosts(titleInput, bodyTextarea);
            setError('');
            setErrorChar('');
            setErrorEmpty('');
        } else {
            setError('Campo obrigatório*')
            setErrorChar('Precisa ter no mínimo 2 caracteres*');
            setErrorEmpty('Não pode ser vazio*')
        }
        setTitleInput('');
        setBodyTextArea('');
    }


    return (
        <>
            <ButtonScrollToTop />
            <Header />
            <div className=" flex flex-col">
                <section className={`container mx-auto rounded-xl h-full mb-[49px] mt-20`}>
                    <div className={`flex flex-col justify-center items-center mt-15`}>
                        <h2 className=" font-semibold text-center mb-10 text-3xl text-[#b87d00] dark:text-[#ffc855]">Crie seu post</h2>
                        <form className="flex flex-col  max-w-2xl items-center">
                            <div >
                                <input
                                    type="text"
                                    placeholder="Digite o título do seu post"
                                    minLength={2}
                                    maxLength={50}
                                    required
                                    className={`
                                     w-[19em] md:w-[40em] border-2 border-gray-300 py-2 rounded-md px-2 outline-2 outline-[#b87d00]  transition-all duration-500
                                     ${error ? 'border-red-400' : 'border-gray-300'}
                                     `}
                                    value={titleInput}
                                    onChange={(e) => setTitleInput(e.target.value)}
                                />
                                <div className=" flex flex-col items-center md:items-start">
                                    {error && <p className={`${error ? ' text-red-500' : ''}`}>{error}</p>}
                                    {titleInput.length < 2 && <p className={`${error ? ' text-red-500 break-words' : ''}`}>{errorChar}</p>}
                                    {titleInput.trim().length == 0 && <p className={`${error ? ' text-red-500' : ''}`}>{errorEmpty}</p>}
                                </div>

                            </div>

                            <div>
                                <textarea
                                    cols={30} rows={6}
                                    minLength={2}
                                    maxLength={150}
                                    required
                                    placeholder="Digite aqui o corpo do seu post"
                                    className={` resize-none w-[19em] md:w-[40em] border-2 border-gray-300 mt-3 rounded-md outline-2 outline-[#b87d00] p-2
                                 transition-all duration-500
                                 ${error ? 'border-red-400' : 'border-gray-300'}
                                `}
                                    value={bodyTextarea}
                                    onChange={(e) => setBodyTextArea(e.target.value)}
                                ></textarea>
                                <div className=" flex flex-col items-center md:items-start">
                                    {error && <p className={`${error ? ' text-red-500' : ''}`}>{error}</p>}
                                    {bodyTextarea.length < 2 && <p className={`${error ? ' text-red-500 break-words' : ''}`}>{errorChar}</p>}
                                    {bodyTextarea.trim().length == 0 && <p className={`${error ? ' text-red-500' : ''}`}>{errorEmpty}</p>}
                                </div>
                            </div>

                            <button className=" w-[12.5em] md:w-[26.8em] bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-md py-2 text-2xl flex items-center justify-center font-semibold
                        mt-3 text-white opacity-70 hover:opacity-100 transition-all duration-500
                        "
                                onClick={handleAddPostButton}
                            >Adicionar post</button>
                        </form>
                    </div>
                </section>
                <PostList />
            </div>
            <Footer />



        </>

    )
};