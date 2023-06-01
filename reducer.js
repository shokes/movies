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
  if (action.type === "ADD_BOOKMARK") {
    const { index, movie } = action.payload;

    const tempItem = state.bookmark.find((i) => i.index === index);
    if (tempItem) {
      const tempBookmark = state.bookmark.map((bookmarkMovie) => {
        if (bookmarkMovie.index === index) {
          console.log(bookmarkMovie);
        }
      });
    }
  }
  throw new Error(`No Matching '${action.type}' - action type`);
};

export default reducer;
