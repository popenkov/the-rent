import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

import { filterMinskProps } from "./filterMinsk.types";


const initialFilterMinskState: filterMinskProps = {
    metro: '',
    district: ''
}

export const filterMinskSlice = createSlice({
    name: 'filterMinsk',
    initialState: initialFilterMinskState,
    reducers: {
        setMetro(state, action: PayloadAction<string>) {
            state.metro = action.payload;
        },
        setDistrict(state, action: PayloadAction<string>) {
            state.district = action.payload;
        }
    }
})

export const filterMinskReducer = filterMinskSlice.reducer;
export const filterMinskActions = filterMinskSlice.actions;