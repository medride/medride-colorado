import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CostState {
  cost: number
}

const initialState: CostState = {
  cost: 0,
}

export const costSlice = createSlice({
  name: 'cost',
  initialState,
  reducers: {
    setCost: (state, action: PayloadAction<number>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.cost = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCost } = costSlice.actions

export default costSlice.reducer
