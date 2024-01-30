import { createSlice } from "@reduxjs/toolkit"

export const imageSlice = createSlice({
    name: 'favouriteImages',
    initialState: [],
    reducers: {
        addFavouriteImage: (state, action) => {
            state.push({
                id: action?.payload.id,
                url: action?.payload.url,
                title: action?.payload.title,
            })},
        deleteFavouriteImage: (state, action) => {
            const index = state.findIndex((element) => element.id === action.payload.id);
            index !== (-1) && state.splice(index, 1)}
    },
})

export const { addFavouriteImage, deleteFavouriteImage } = imageSlice.actions

export default imageSlice.reducer