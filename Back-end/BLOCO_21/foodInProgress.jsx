import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

const NEGATIVE_1 = -1;
const NEGATIVE_12 = -12;

const ingredients = (data) => Object.keys(data[0]).filter((
  key,
) => key.includes('strIngredient')).map((
  key,
) => data[0][key]).filter((element) => element !== null && element !== '');

function handleChange({ target }, verified, setVerified) {
  if (verified.indexOf(target.value) === NEGATIVE_1) { // https://www.codegrepper.com/code-examples/javascript/javascript+if+array+not+contains
    setVerified([...verified, target.value]);
  } else if (verified.includes(target.value)) {
    setVerified(verified.filter((element) => element !== target.value));
  }
}

function handleShare(history) {
  return navigator.clipboard.writeText(`http://localhost:3000${history.location.pathname.slice(0, NEGATIVE_12)}`); // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
}

function drinkOrMeal(strDrink) {
  if (strDrink) return 'bebida';
  return 'comida';
}
function FavoriteRecipeInfo(data) {
  const { idMeal, idDrink, strArea, strCategory, strDrinkThumb,
    strDrink, strMeal, strMealThumb, strAlcoholic } = data[0];
  const obj = [{
    id: idMeal || idDrink,
    type: drinkOrMeal(strDrink),
    area: strArea || '',
    category: strCategory || '',
    alcoholicOrNot: strAlcoholic || '',
    name: strMeal || strDrink,
    image: strDrinkThumb || strMealThumb,
  }];
  return obj;
}

function handleFavorite(checkFavorite, setCheckFavorite, data) {
  if (!checkFavorite) {
    setCheckFavorite(true);
    localStorage.setItem('favoriteRecipes', JSON.stringify(FavoriteRecipeInfo(data)));
  } else {
    setCheckFavorite(false);
    localStorage.removeItem('favoriteRecipes');
  }
}

function FoodInProgressCard({
  data, img, meal, category,
  instructions, idMeal, idDrink }) {
  const values = ingredients(data);
  const history = useHistory();
  const [checkFavorite, setCheckFavorite] = useState(() => {
    const favorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favorite) {
      return true;
    }
    return null;
  });
  const [copied, setCopied] = useState(false);
  const [verifiedCheck, setVerifiedCheck] = useState(false);
  const [verified, setVerified] = useState(() => {
    const result = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (result) {
      return result[0].meals[idMeal || idDrink];
    }
    return [];
  });

  useEffect(() => {
    if (verified) {
      setVerifiedCheck(true);
      if (verified && verifiedCheck) {
        return localStorage.setItem(
          'inProgressRecipes', JSON.stringify([{
            meals: {
              [idMeal || idDrink]: [...verified],
            },
          }]),
        );
      }
    }
  }, [verifiedCheck, verified, idMeal, idDrink]);

  return (
    <div className="MainCard" data-testid="in-progress-card">
      <img className="image-details" data-testid="recipe-photo" src={ img } alt={ meal } />
      <p data-testid="recipe-title">{meal}</p>
      {values.map((curr, index) => (
        <label
          key={ index }
          htmlFor={ curr }
          data-testid={ `${index}-ingredient-step` }
        >
          <input
            id={ curr }
            value={ curr }
            type="checkbox"
            checked={ !!verified.includes(curr) }
            onChange={ ({ target }) => handleChange({ target }, verified, setVerified) }
          />
          {curr}
        </label>
      ))}
      <button
        onClick={ () => {
          handleShare(history);
          setCopied(true);
        } }
        className="share-favorite-buttons"
        type="submit"
        data-testid="share-btn"
      >
        <object
          className="rocksGlass"
          type="image/svg+xml"
          data={ shareIcon }
        >
          Share
        </object>
        {copied && <p data-testid="copyed">Link copiado!</p>}
      </button>
      <button
        onClick={ () => handleFavorite(checkFavorite, setCheckFavorite, data) }
        type="button"
        data-testid="handle-favorite-btn"
        className="share-favorite-buttons"
      >
        <img
          data-testid="favorite-btn"
          src={ checkFavorite ? blackHeartIcon : whiteHeartIcon }
          alt="favoritar"
        />
      </button>
      <p className="instructions-recipes" data-testid="recipe-category">{category}</p>
      <p className="instructions-recipes" data-testid="instructions">{instructions}</p>
      <Link to="/receitas-feitas">
        <button
          disabled={ verified.length !== values.length }
          data-testid="finish-recipe-btn"
          type="button"
          className="btnz2 btn btn-success"
        >
          finalizar
        </button>
      </Link>
    </div>
  );
}

FoodInProgressCard.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
  img: PropTypes.string.isRequired,
  meal: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  idMeal: PropTypes.string.isRequired,
  idDrink: PropTypes.string.isRequired,
};

export default FoodInProgressCard;
