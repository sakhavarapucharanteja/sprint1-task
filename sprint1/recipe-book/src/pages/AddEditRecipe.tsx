import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addRecipe, updateRecipe } from '../features/recipes/recipeSlice';
import { RootState } from '../app/store';
import './AddEditRecipe.css'; // <-- import the CSS

const AddEditRecipe = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const existingRecipe = useSelector((state: RootState) =>
    state.recipes.recipes.find(r => r.id === id)
  );

  const formik = useFormik({
    initialValues: {
      title: existingRecipe?.title || '',
      image: existingRecipe?.image || '',
      ingredients: existingRecipe?.ingredients.join(', ') || '',
      instructions: existingRecipe?.instructions || '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      image: Yup.string().url('Must be a valid URL'),
      ingredients: Yup.string().required('Required'),
      instructions: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      const recipeData = {
        id: existingRecipe?.id || '',
        title: values.title,
        image: values.image,
        ingredients: values.ingredients.split(',').map(i => i.trim()),
        instructions: values.instructions,
      };

      if (existingRecipe) {
        dispatch(updateRecipe(recipeData));
      } else {
        dispatch(addRecipe(recipeData));
      }

      navigate('/');
    },
  });

  return (
    <div className="recipe-form-container">
      <div className="recipe-form-wrapper">
        <h2>{existingRecipe ? 'Edit Recipe' : 'Add New Recipe'}</h2>
        <form onSubmit={formik.handleSubmit} className="recipe-form">
          <div>
            <input
              name="title"
              placeholder="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            {formik.touched.title && formik.errors.title && (
              <p className="error">{formik.errors.title}</p>
            )}
          </div>

          <div>
            <input
              name="image"
              placeholder="Image URL"
              value={formik.values.image}
              onChange={formik.handleChange}
            />
            {formik.touched.image && formik.errors.image && (
              <p className="error">{formik.errors.image}</p>
            )}
          </div>

          <div>
            <textarea
              name="ingredients"
              placeholder="Ingredients (comma separated)"
              rows={4}
              value={formik.values.ingredients}
              onChange={formik.handleChange}
            />
            {formik.touched.ingredients && formik.errors.ingredients && (
              <p className="error">{formik.errors.ingredients}</p>
            )}
          </div>

          <div>
            <textarea
              name="instructions"
              placeholder="Instructions"
              rows={6}
              value={formik.values.instructions}
              onChange={formik.handleChange}
            />
            {formik.touched.instructions && formik.errors.instructions && (
              <p className="error">{formik.errors.instructions}</p>
            )}
          </div>

          <button type="submit">
            {existingRecipe ? 'Update Recipe' : 'Save Recipe'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEditRecipe;
