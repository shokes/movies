import React, {
  useContext,
  useReducer,
  useEffect,
  useRef,
  useState,
} from "react";
import { data } from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  //   const getLocalStorage = () => {
  //     let bookmark = localStorage.getItem("bookmark");
  //     if (bookmark) {
  //       return JSON.parse(localStorage.getItem("bookmark"));
  //     } else {
  //       return [];
  //     }
  //   };

  const initialState = {
    movies: data,
    allMovies: data,
    activeFilter: "all",
    total_movies: 0,
    bookmark: [],
    tempStock: 1,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [searchTerm, setSearchTerm] = useState("");

  const moviesCategory = (value) => {
    dispatch({ type: "CATEGORY_MOVIES", payload: value });
  };

  const moviesTrending = (value) => {
    dispatch({ type: "TRENDING_MOVIES", payload: value });
  };

  const addBookmark = (value) => {
    dispatch({ type: "ADD_BOOKMARK", payload: { value } });
  };
  const removeBookmark = (index) => {
    dispatch({ type: "REMOVE_BOOKMARK", payload: { index } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        moviesCategory,
        addBookmark,
        removeBookmark,
        moviesTrending,
        searchTerm,
        setSearchTerm,
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
