import React, { useContext, useReducer, useEffect } from "react";
import { data } from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  const initialState = {
    movies: data,
    allMovies: data,
    activeFilter: "all",
    total_movies: 0,
    tempStock: 1,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const moviesCategory = (value) => {
    dispatch({ type: "CATEGORY_MOVIES", payload: value });
  };

  const addBookmark = (index, movie) => {
    dispatch({ type: "ADD_BOOKMARK", payload: { index, movie } });
  };
  const removeBookmark = (index, movie) => {
    dispatch({ type: "REMOVE_BOOKMARK", payload: { index, movie } });
  };

  return (
    <AppContext.Provider
      value={{ ...state, moviesCategory, addBookmark, removeBookmark }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = function () {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
