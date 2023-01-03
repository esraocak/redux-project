import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    newsList: [], //* api json formatı döndürdüğü için boş array atadık.
    loading : false,
    error: false,

}

export const getNews = createAsyncThunk (
  "getNews", //* action types

  async (thunkAPI, { rejectWithValue }) => { //* asyn callback function

    const API_KEY = "0d3a5f16ceec420f86fc22eb5c2aae78"
    const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;
    try {
      const { data } = await axios (url);
      return data.articles;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Something went wrong");
      
    }
  }
  )

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewList : (state)=>{
    state.newsList =[];
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase (getNews.pending, (state) => {
      state.loading = true;
    })
    .addCase (getNews.fulfilled, (state,{payload})=> {
      state.newsList = payload;
      state.loading = false;
    })
    .addCase (getNews.rejected, (state,{payload})=> {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { clearNewsList } = newsSlice.actions;

export default newsSlice.reducer;