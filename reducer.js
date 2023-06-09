const reducer = (state, action) => {
  if (action.type === "CATEGORY_MOVIES" && action.payload === "all") {
    return {
      ...state,
      movies: state.allMovies,
      activeFilter: action.payload,
    };
  }
  if (action.type === "TRENDING_MOVIES") {
    let movies = state.allMovies;
    movies = movies.filter((movie) => movie.isTrending === action.payload);

    return {
      ...state,
      movies,
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

    const tempItem = state.bookmark.filter((i) => i.index === index);
    if (tempItem) {
      const tempBookmark = state.bookmark.map((bookmarkMovie) => {
        if (bookmarkMovie.index === index) {
          return { ...bookmarkMovie };
        } else {
          return bookmarkMovie;
        }
      });
      return { ...state, bookmark: tempBookmark };
    } else {
      const newMovie = {
        index: index,
        name: movie.title,
      };
      return {
        ...state,
        bookmark: [...state.bookmark, newMovie],
        tempStock: 1,
      };
    }
  }
  if (action.type === "REMOVE_BOOKMARK") {
    const tempBookmark = state.bookmark.filter(
      (movie) => movie.index !== action.payload
    );
    return {
      ...state,
      bookmark: tempBookmark,
    };
  }

  throw new Error(`No Matching '${action.type}' - action type`);
};

export default reducer;
