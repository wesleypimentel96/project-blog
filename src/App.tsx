import './App.css';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { NewPostsContextProvider } from './contexts/NewPostsContext';
import { RouteList } from './routes/RouteList';


export const App = () => {


  return (

    <div className={`dark:bg-[#0b0b1d]`}>
      <ThemeContextProvider>
        <NewPostsContextProvider>
          <RouteList />
        </NewPostsContextProvider>
      </ThemeContextProvider>
    </div>



  )
};