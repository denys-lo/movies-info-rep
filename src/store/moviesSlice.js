import {createSlice} from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: {}
  },
  reducers: {
    getMovies(state, action) {
      console.log(state);
      console.log(action);
      state.movies = action.payload
    }
  }
});

export const {getMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
