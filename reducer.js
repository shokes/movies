const reducer = (state, action) => {
  if (action.type === 'HANDLE_CATEGORY' && action.payload === 'all') {
    return {
      ...state,
      movie_list: state.allMovies,
      activeFilter: action.payload,
    };
  }
  if (action.type === 'HANDLE_CATEGORY') {
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
  if (action.type === 'REMOVE_BOOKMARK') {
    console.log('remove bookmark logic here');

    return {
      ...state,
    };
  }
  if (action.type === 'ADD_BOOKMARK') {
    state.bookmark.push(action.payload);
    return {
      ...state,
    };

    // const { index } = action.payload;
    // const tempItem = state.bookmark.find((i) => i.index === index);
    // console.log(tempItem);
    // if (tempItem) {
    //   const tempBookmark = state.cart.map((bookmarkMovie) => {
    //     if ((bookmarkMovie.index = index)) {
    //       return { ...bookmarkMovie, ...{ isAddedToCart: true } };
    //     } else {
    //       return bookmarkMovie;
    //     }
    //   });
    //   return {
    //     ...state,
    //     bookmark: tempBookmark,
    //   };
    // }
  } else {
    throw new Error(`No Matching '${action.type}' - action type`);
  }
};

export default reducer;
