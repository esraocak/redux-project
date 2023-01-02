import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user: null,
};

const authSlice = createSlice ({
name:"auth",
initialState,
reducers:{
    setUser: (state, action) => {
        //* action açıp payload şeklindede yazabilirsin. acition yerine {payload} state.user=payload;
        state.user = action.payload

    },

    clearUser: (state) => {
        state.user = null;

    },

}
    
});

export const {setUser, clearUser} = authSlice.actions;