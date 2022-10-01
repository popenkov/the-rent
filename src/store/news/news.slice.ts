import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

import { INewsPreview } from "components/NewsPreview/NewsPreview.types";
import { NewsListProps } from "components/NewsList/NewsList.types";


const initialNewsState: NewsListProps = {
    data: [],
    newsPerPage: 9,
    currentPage: 1,
    query: ''
}

export const newsSlice = createSlice({
    name: 'news',
    initialState: initialNewsState,
    reducers: {
        setData(state, action: PayloadAction<INewsPreview[]>) {
            state.data = action.payload;
        },
        setNewsPerPage(state, action: PayloadAction<number>) {
            state.newsPerPage = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setQuery(state, action: PayloadAction<string>) {
            state.query = action.payload;
        }
    }
})

//export default newsSlice.reducer;
export const newsReducer = newsSlice.reducer;
export const newsActions = newsSlice.actions;