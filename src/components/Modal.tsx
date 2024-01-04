import { AiOutlineCloseCircle } from 'react-icons/ai';


type Props = {
    imageGallery: string;
    onClick: () => void;

}

export const Modal = ({ imageGallery, onClick }: Props) => {


    return (
        <div className="h-[80vh] md:h-[80vh] container mx-auto flex flex-col items-center px-2">
            <div className='flex justify-center mt-10 max-w-xs md:max-w-3xl lg:max-w-4xl mx-auto'>
                <img className=' h-[30em] md:h-[30em] md:w-[40em] lg:w-[60em] rounded-lg' src={`/images/${imageGallery}`}
                />

            </div>
            
            <div className=' mt-5 bg-red-600 opacity-60 hover:opacity-100 transition-all duration-700 rounded-full text-white w-8 h-8 flex items-center justify-center text-3xl'>
                <button onClick={onClick}><AiOutlineCloseCircle /></button>
            </div>


        </div>
    )
}