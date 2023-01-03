import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    newsList: [], //* api json formatı döndürdüğü için boş array atadık.
    loading : false,
    error: false,

}

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewList : (state)=>
    state.newsList =[];
  },
});

export const {} = newsSlice.actions

export default newsSlice.reducer