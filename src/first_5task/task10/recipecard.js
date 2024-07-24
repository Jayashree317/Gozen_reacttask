import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '18rem',
  margin: theme.spacing(2),
}));

const RecipeCard = ({ recipe }) => {
  if (!recipe) {
    return <div>Recipe data is not available.</div>;
  }

  const { image, title, description } = recipe;

  return (
    <StyledCard>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </StyledCard>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default RecipeCard;
