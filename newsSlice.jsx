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

    const API_KEY = "02d142c50d8b4247b974b2532343517";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    try {
      const { data } = await axios (url);
      console.log(data)
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