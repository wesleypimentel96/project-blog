import { Photo } from "../types/Photo"

type Props = {
    photoItem: Photo;
    onClick: () => void;
}


export const ImageItem = ({ photoItem, onClick }: Props) => {


    return (
        <div key={photoItem.id} className=" cursor-pointer hover:opacity-70 dark:hover:opacity-70 shadow-lg shadow-gray-400/50 dark:shadow-white/50 rounded-lg hover:scale-105 transition-all duration-300"
            onClick={onClick}
        >
            <img src={`/images/${photoItem.url}`} className=" w-full h-full max-w-full rounded-lg" />
        </div>
    )
}