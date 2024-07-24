import React, { useState, useMemo, useCallback, lazy, Suspense } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FixedSizeList as List } from "react-window";
import CircularProgress from "@mui/material/CircularProgress";
import { Helmet } from 'react-helmet';

const RecipeCard = lazy(() => import("./recipecard"));

const recipes = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    description: "A classic Italian pasta dish with rich, meaty sauce.",
    image: "https://via.placeholder.com/150?text=Spaghetti+Bolognese",
  },
  {
    id: 2,
    title: "Margherita Pizza",
    description:
      "A simple and delicious pizza topped with tomatoes, mozzarella, and basil.",
    image: "https://via.placeholder.com/150?text=Margherita+Pizza",
  },
  {
    id: 3,
    title: "Caesar Salad",
    description:
      "A fresh and crunchy salad with romaine lettuce, croutons, and Caesar dressing.",
    image: "https://via.placeholder.com/150?text=Caesar+Salad",
  },
  {
    id: 4,
    title: "Beef Tacos",
    description:
      "Mexican-style tacos with seasoned beef, lettuce, cheese, and salsa.",
    image: "https://via.placeholder.com/150?text=Beef+Tacos",
  },
  {
    id: 5,
    title: "Chicken Curry",
    description: "A spicy and flavorful curry with tender chicken pieces.",
    image: "https://via.placeholder.com/150?text=Chicken+Curry",
  },
  {
    id: 6,
    title: "Grilled Cheese Sandwich",
    description:
      "A gooey and crispy sandwich with melted cheese between toasted bread.",
    image: "https://via.placeholder.com/150?text=Grilled+Cheese+Sandwich",
  },
  {
    id: 7,
    title: "Chocolate Cake",
    description: "A rich and moist chocolate cake with creamy frosting.",
    image: "https://via.placeholder.com/150?text=Chocolate+Cake",
  },
  {
    id: 8,
    title: "Sushi Rolls",
    description: "Delicious sushi rolls with fresh fish, rice, and seaweed.",
    image: "https://via.placeholder.com/150?text=Sushi+Rolls",
  },
  {
    id: 9,
    title: "Pancakes",
    description: "Fluffy pancakes served with syrup and butter.",
    image: "https://via.placeholder.com/150?text=Pancakes",
  },
  {
    id: 10,
    title: "Vegetable Stir Fry",
    description:
      "A healthy and vibrant stir fry with mixed vegetables and a savory sauce.",
    image: "https://via.placeholder.com/150?text=Vegetable+Stir+Fry",
  },
  // {
  //   id: 11,
  //   image: "https://example.com/image2.jpg",
  //   title: "Chicken Alfredo",
  //   description:
  //     "Creamy Alfredo sauce served over tender pasta and grilled chicken.",
  // },
  // {
  //   id: 12,
  //   image: "https://example.com/image10.jpg",
  //   title: "Fish Tacos",
  //   description:
  //     "Crispy fish, fresh cabbage, and tangy sauce in a soft tortilla.",
  // },
];

const App = () => {
  const [query, setQuery] = useState("");

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [recipes, query]);

  const renderRecipe = useCallback(
    ({ index, style }) => {
      const recipe = filteredRecipes[index];
      return (
        <div style={style}>
          <Suspense fallback={<CircularProgress />}>
            <RecipeCard recipe={recipe} />
          </Suspense>
        </div>
      );
    },
    [filteredRecipes]
  );

  return (
    <Container>
       <Helmet>
        <title>React Task-10</title>
        <meta name="description"  />
      </Helmet>
      <h1>Recipe Finder</h1>

      <Form>
        <Form.Group controlId="search">
          <Form.Label>Search Recipes</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search by title"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Row>
        {filteredRecipes.map((recipe, index) => (
          <Col key={index} xs={12} md={4} lg={4}>
            <Suspense fallback={<CircularProgress />}>
              <RecipeCard recipe={recipe} />
            </Suspense>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;
