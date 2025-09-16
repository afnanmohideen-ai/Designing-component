import React from 'react';
import './RecipeCard.css';  // for styling

const difficultyColors = {
  Easy: 'green',
  Medium: 'orange',
  Hard: 'red',
};

export default function RecipeCard({
  name,
  cookingTime,
  difficulty,
  description,
  image,
  ingredients,
  dietaryTags,
}) {
  // Fallback image URL if none provided or broken
  const fallbackImage = 'https://via.placeholder.com/150?text=No+Image';

  return (
    <div className="recipe-card">
      <h2>{name}</h2>

      <img
        src={image || fallbackImage}
        alt={`${name}`}
        onError={(e) => (e.target.src = fallbackImage)}
        className="recipe-image"
      />

      <p><strong>Cooking Time:</strong> {cookingTime}</p>

      <p>
        <strong>Difficulty:</strong>{' '}
        <span style={{ color: difficultyColors[difficulty] || 'black' }}>
          {difficulty}
        </span>
      </p>

      <p>{description}</p>

      {/* Conditional rendering for optional ingredients */}
      {ingredients && ingredients.length > 0 && (
        <div>
          <strong>Ingredients:</strong>
          <ul>
            {ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Conditional rendering for optional dietary tags */}
      {dietaryTags && dietaryTags.length > 0 && (
        <div className="dietary-tags">
          {dietaryTags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}
