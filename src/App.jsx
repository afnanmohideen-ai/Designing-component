import RecipeCard from './components/RecipeCard';

const recipes = [
  {
    name: 'Spaghetti Carbonara',
    cookingTime: '30 mins',
    difficulty: 'Medium',
    description: 'Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
    image: 'https://example.com/carbonara.jpg',
    ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan Cheese', 'Black Pepper'],
    dietaryTags: ['Gluten-Free'],
  },
  {
    name: 'Vegan Tacos',
    cookingTime: '20 mins',
    difficulty: 'Easy',
    description: 'Delicious tacos filled with seasoned tofu and fresh veggies.',
    image: '',  // purposely blank to test fallback
    ingredients: ['Tortillas', 'Tofu', 'Lettuce', 'Tomato', 'Avocado'],
    dietaryTags: ['Vegan', 'Gluten-Free'],
  },
  {
    name: 'Beef Wellington',
    cookingTime: '2 hours',
    difficulty: 'Hard',
    description: 'A savory beef tenderloin wrapped in puff pastry and baked.',
    // no image to test fallback
    ingredients: ['Beef Tenderloin', 'Mushrooms', 'Puff Pastry', 'Mustard'],
    dietaryTags: [],
  },
  {
    name: 'Caprese Salad',
    cookingTime: '10 mins',
    difficulty: 'Easy',
    description: 'Simple salad with tomatoes, mozzarella, basil, and balsamic glaze.',
    image: 'https://example.com/caprese.jpg',
    dietaryTags: ['Vegetarian'],
  },
];

function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {recipes.map((recipe, idx) => (
        <RecipeCard key={idx} {...recipe} />
      ))}
    </div>
  );
}

export default App;
