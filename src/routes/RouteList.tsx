
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NewPost } from "../pages/NewPost";
import { NotFound } from "../pages/NotFound";
import { PhotoGallery } from "../pages/PhotoGallery";
import { Posts } from "../pages/Posts";
import { Users } from "../pages/Users";
import { UserInformation } from "../pages/UserInformation";



export const RouteList = () => {


    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/newpost" element={<NewPost />} />
            <Route path="/photogallery" element={<PhotoGallery />} />
            <Route path="/users" element={<Users />} />
            <Route path="/userinformation/:id" element={<UserInformation />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
};