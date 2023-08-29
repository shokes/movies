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
  const getLocalStorage = () => {
    let bookmark = localStorage.getItem("bookmark");
    if (bookmark) {
      return JSON.parse(localStorage.getItem("bookmark"));
    } else {
      return [];
    }
  };

  const initialState = {
    movie_list: data,
    allMovies: data,
    activeFilter: "all",
    total_movies: 0,
    bookmark: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [searchTerm, setSearchTerm] = useState("");

  const moviesCategory = (value) => {
    dispatch({ type: "HANDLE_CATEGORY", payload: value });
  };

  // const moviesSearch = (value) => {
  //   dispatch({ type: "HANDLE_SEARCH", payload: value });
  // };

  const addBookmark = (movie, index) => {
    dispatch({ type: "ADD_BOOKMARK", payload: { movie, index } });
  };
  const removeBookmark = (index) => {
    dispatch({ type: "REMOVE_BOOKMARK", payload: { index } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        moviesCategory,
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
