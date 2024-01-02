import { ReactNode, createContext, useEffect, useState } from "react";
import { NewPosts } from "../types/NewPosts";

const STORAGE_KEY_NEWPOSTS = 'NewPostsContext';

type NewPostsConextType = {
    posts: NewPosts[];
    addPosts: (title: string, body: string) => void;
    removePosts: (id: number) => void;
}

export const NewPostsContext = createContext<NewPostsConextType | null>(null)

export const NewPostsContextProvider = ({ children }: { children: ReactNode }) => {
    const [posts, setPosts] = useState<NewPosts[]>(
        JSON.parse(localStorage.getItem(STORAGE_KEY_NEWPOSTS) || '[]')
    );

    const addPosts = (title: string, body: string) => {
        setPosts([...posts, { id: posts.length, title, body }])
    };

    const removePosts = (id: number) => {
        setPosts(posts.filter(p => {
            return p.id !== id;
        }))
    }

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY_NEWPOSTS, JSON.stringify(posts))
    }, [posts])

    return (

        <NewPostsContext.Provider value={{ posts, addPosts, removePosts }} >
            {children}
        </NewPostsContext.Provider >
    )
}; 