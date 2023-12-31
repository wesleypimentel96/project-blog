import imgDefault from '../assets/user-default.png';

export const UserImg = () => {
    return (
        <div className={` bg-slate-200 border border-yellow-400 rounded-full p-2 flex`}>
            <img src={imgDefault} width={80} height={30} className={` rounded-full`} />
        </div>
    )
};
