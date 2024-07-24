import { useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Button, Typography, Card } from "@mui/material";
import { Helmet } from "react-helmet";

const QuizGame = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [isGameOver, setIsGameOver] = useState(false);

  const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    {
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter",
    },
  ];

  useEffect(() => {
    console.log("Quiz game started");
    setTimer(10);

    return () => {
      console.log("Cleaning up quiz game");
    };
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (timer <= 0) {
      handleNextQuestion();
    }

    const timerId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
      console.log("Timer cleaned up");
    };
  }, [timer]);

  const handleAnswer = (userAnswer) => {
    if (userAnswer === questions[currentQuestionIndex].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setTimer(10);
    } else {
      setIsGameOver(true);
    }
  };

  return (
    <Container className="mt-5">
      <Helmet>
        <title>React Task-6</title>
        <meta name="description" />
      </Helmet>
      <Typography variant="h3" align="center" gutterBottom>
        Quiz Game
      </Typography>
      {isGameOver ? (
        <Alert variant="success" className="text-center">
          <Typography variant="h4">Game Over</Typography>
          <Typography variant="h6">Your score: {score}</Typography>
        </Alert>
      ) : (
        <Card variant="outlined" className="p-3 mb-3">
          <Typography variant="h5">
            Question {currentQuestionIndex + 1}
          </Typography>
          <Typography variant="body1" className="mb-3">
            {questions[currentQuestionIndex].question}
          </Typography>
          <div className="d-flex justify-content-between">
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleAnswer("Paris")}
            >
              Paris
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleAnswer("4")}
            >
              4
            </Button>
            <Button
              variant="outlined"
              color="success"
              onClick={() => handleAnswer("Jupiter")}
            >
              Jupiter
            </Button>
          </div>
          <Typography variant="body2" align="center" className="mt-3">
            Time left: {timer}s
          </Typography>
        </Card>
      )}
    </Container>
  );
};

export default QuizGame;
