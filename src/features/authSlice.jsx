import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user: null,
};

const authSlice = createSlice ({
name:"auth",
initialState,
reducers:{
    setUser: (state, {payload}) => {
        //* action açıp payload şeklindede yazabilirsin. acition yerine {payload} state.user=payload; ya da ikinci parametre action olacak şekilde yazılır. setUsersetUser: (state, action) => {state.user = action.payload},
        // state.user = action.payload
        state.user = payload;

    },

    clearUser: (state) => {
        state.user = null;

    },

}
    
});

export const {setUser, clearUser} = authSlice.actions;
export default authSlice.reducer;