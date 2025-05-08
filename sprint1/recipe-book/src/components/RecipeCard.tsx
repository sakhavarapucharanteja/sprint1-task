import { Recipe } from '../features/recipes/types';
import { Link } from 'react-router-dom';

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => (
  <div className="card">
    <img src={recipe.image} alt={recipe.title} />
    <div className="card-content">
      <h3>{recipe.title}</h3>
      <p>{recipe.instructions.substring(0, 80)}...</p>
      <Link to={`/recipe/${recipe.id}`} style={{ display: 'inline-block', marginTop: '0.5rem' }}>
        <button>View Recipe</button>
      </Link>
    </div>
  </div>
);

export default RecipeCard;
