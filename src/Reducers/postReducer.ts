import { Post } from "../types/Post";

type AddAction = {
    type: 'ADD';
    payload: {
        title: string;
        body: string;
    }
};

type RemoveAction = {
    type: 'REMOVE';
    payload: { id: number };
};

export type PostAction = AddAction | RemoveAction;


export const postReducer = (posts: Post[], action: PostAction) => {
    switch (action.type) {
        case 'ADD':
            return [...posts, { id: posts.length, title: action.payload.title, body: action.payload.body }];

        case 'REMOVE':
            return posts.filter(post => post.id !== action.payload.id);

        default:
            return posts;
    }
};