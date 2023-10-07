import React, {
  useContext,
  useReducer,
  useEffect,
  useRef,
  useState,
} from 'react';
import { data } from './data';
import reducer from './reducer';

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  // const getLocalStorage = () => {
  //   let bookmark = localStorage.getItem("bookmark");
  //   if (bookmark) {
  //     return JSON.parse(localStorage.getItem("bookmark"));
  //   } else {
  //     return [];
  //   }
  // };

  const initialState = {
    movie_list: data,
    allMovies: data,
    activeFilter: 'all',
    isTrending: false,
    total_movies: 0,
    bookmark: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [searchTerm, setSearchTerm] = useState('');

  const moviesCategory = (value) => {
    dispatch({ type: 'HANDLE_CATEGORY', payload: value });
  };

  const addBookmark = (data) => {
    dispatch({ type: 'ADD_BOOKMARK', payload: data });
  };
  const removeBookmark = (movie, index) => {
    dispatch({ type: 'REMOVE_BOOKMARK', payload: { movie, index } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        moviesCategory,
        searchTerm,
        setSearchTerm,
        addBookmark,
        removeBookmark,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = function () {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
