import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export const useRecipes = () => {
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  return { recipes };
};
