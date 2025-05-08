import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import './Home.css';  // Make sure to add or update Home.css for styling.

const Home = () => {
  const recipes = useSelector((state: RootState) => state.recipes.recipes);

  return (
    <div className="home-container">
      {/* Hero section */}
      <div className="hero-section">
        <h1 className="hero-subtitle">
          Discover Simple, Delicious and <span className="highlight">Fast Recipes</span>!
        </h1>
        <p className="hero-subtitle">
          A Recipe is Soulless. The essence of Recipe must Come from you. The Cook.
        </p>
        <Link to="/add">
          <button className="submit-recipe-btn">Submit Recipe</button>
        </Link>
      </div>

      {/* Recipe section */}
      <div className="recipe-section">
        <h2 className="recipes-header">Explore Recipes</h2>
        <div className="recipe-grid">
          {recipes.length === 0 ? (
            <p className="no-recipes-msg">No recipes yet. Click "Submit Recipe" to get started!</p>
          ) : (
            recipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
