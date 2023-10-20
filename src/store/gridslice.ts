import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Grid} from "@/features/grid/grid";
import Grid2 from "@mui/material/Unstable_Grid2";

type Cell = string | undefined;
export type Grid = Cell[][]

export interface GridGame  {
    grid: string[];
    placedwords: string[];
    gametype: string;
}

const initialState : GridGame  ={
    grid: [],
    gametype: "",
    placedwords: [],

};

const getWordFinder() = createAction('grid/genwordfinder',function prepare(grid: Grid, placedwords: string[],gametype: string){

    return{

        payload: {
             grid: grid,
            placedwords: placedwords,
            gametype: gametype

        },

    }

})

const gridGameSlice = createSlice({
    name: "gridgame",
    initialState,
    reducers:{

        generateGridForWorldFinder(state, action: PayloadAction<GridGame>) {
                const grid = action.payload;
                const placedwords = action.payload;
                const gametype = action.payload;

                state.grid = [ ...state.grid, ...action.payload.grid ];
                state.placedwords = [...state.placedwords, ...action.payload.placedwords];
                state.gametype = action.payload.gametype;

    }


    }

})

export const {generateGridForWorldFinder} = gridGameSlice.actions;

export default gridGameSlice.reducer;
