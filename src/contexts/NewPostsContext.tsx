import { ReactNode, createContext, useState } from "react";
import { NewPosts } from "../types/NewPosts";



type NewPostsConextType = {
    posts: NewPosts[];
    addPosts: (title: string, body: string) => void;
    removePosts: (id: number) => void;
}

export const NewPostsContext = createContext<NewPostsConextType | null>(null)

export const NewPostsContextProvider = ({ children }: { children: ReactNode }) => {
    const [posts, setPosts] = useState<NewPosts[]>([]);

    const addPosts = (title: string, body: string) => {
        setPosts([...posts, { id: posts.length, title, body }])
    };

    const removePosts = (id: number) => {
        setPosts(posts.filter(p => {
            return p.id !== id;
        }))
    }

    return (

        <NewPostsContext.Provider value={{ posts, addPosts, removePosts }} >
            {children}
        </NewPostsContext.Provider >
    )
}; 