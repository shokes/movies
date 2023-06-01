const reducer = (state, action) => {
  if (action.type === "CATEGORY_MOVIES") {
    let movies = state.allMovies;

    movies = movies.filter((movie) => movie.category === movie.payload);
    return {
      ...state,
      movies,
      activeFilter: action.payload,
    };
  }
  if (action.type === "CATEGORY_MOVIES" && action.payload === "all") {
    return {
      ...state,
      movies: state.allMovies,
      activeFilter: action.payload,
    };
  }
};

export default reducer;
