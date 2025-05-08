import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { deleteRecipe } from '../features/recipes/recipeSlice';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useSelector((state: RootState) =>
    state.recipes.recipes.find(r => r.id === id)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!recipe) return <p>Recipe not found</p>;

  const handleDelete = () => {
    dispatch(deleteRecipe(recipe.id));
    navigate('/');
  };

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} width={200} />
      <h4>Ingredients</h4>
      <ul>{recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}</ul>
      <p>{recipe.instructions}</p>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/edit/${recipe.id}`}>Edit</Link>
    </div>
  );
};

export default RecipeDetails;
