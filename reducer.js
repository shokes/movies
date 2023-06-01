const reducer = (state, action) => {
  if (action.type === "CATEGORY_MOVIES" && action.payload === "all") {
    return {
      ...state,
      movies: state.allMovies,
      activeFilter: action.payload,
    };
  }
  if (action.type === "CATEGORY_MOVIES") {
    let movies = state.allMovies;
    movies = movies.filter((movie) => movie.category === action.payload);
    return {
      ...state,
      movies,
      activeFilter: action.payload,
    };
  }

  throw new Error(`No Matching '${action.type}' - action type`);
};

export default reducer;
