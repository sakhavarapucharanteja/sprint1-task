import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Recipe } from './types';
import { v4 as uuidv4 } from 'uuid';

interface RecipeState {
  recipes: Recipe[];
}

const initialState: RecipeState = {
  recipes: [],
};

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addRecipe: (state, action: PayloadAction<Omit<Recipe, 'id'>>) => {
      state.recipes.push({ ...action.payload, id: uuidv4() });
    },
    updateRecipe: (state, action: PayloadAction<Recipe>) => {
      const index = state.recipes.findIndex(r => r.id === action.payload.id);
      if (index !== -1) state.recipes[index] = action.payload;
    },
    deleteRecipe: (state, action: PayloadAction<string>) => {
      state.recipes = state.recipes.filter(r => r.id !== action.payload);
    },
  },
});

export const { addRecipe, updateRecipe, deleteRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
