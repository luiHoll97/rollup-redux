import { createSlice } from "@reduxjs/toolkit";
import { Tag } from "../types/Tag";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface TagState {
  tags: Tag[];
}

const initialState: TagState = {
  tags: [],
};

export const tagSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTag: (state, action: PayloadAction<string>) => {
      state.tags.push({
        id: Math.max(0, Math.max(...state.tags.map(({ id }) => id))) + 1,
        text: action.payload,
      });
    },
    removeTag: (state, action: PayloadAction<number>) => {
      state.tags = state.tags.filter((tag: Tag) => tag.id !== action.payload);
    },
  },
});

export const { addTag, removeTag } = tagSlice.actions;
export const tagSelector = (state: RootState) => state.tags.tags;
export default tagSlice.reducer;
