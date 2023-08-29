const reducer = (state, action) => {
  if (action.type === "HANDLE_CATEGORY" && action.payload === "all") {
    return {
      ...state,
      movie_list: state.allMovies,
      activeFilter: action.payload,
    };
  }
  if (action.type === "HANDLE_CATEGORY") {
    let movie_list = state.allMovies;
    movie_list = movie_list.filter(
      (movies) => movies.category === action.payload
    );
    return {
      ...state,
      movie_list,
      activeFilter: action.payload,
    };
  }

  throw new Error(`No Matching '${action.type}' - action type`);
};

export default reducer;
