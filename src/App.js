

import React, { useState } from "react";
import {
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Box,
  Typography,
  Grid,
  Stack,
  TextField,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import emailjs from "emailjs-com";

const questions = [
  {
    id: 1,
    question: "What is 1/2 of 6?",
    options: { A: "2", B: "3", C: "6", D: "1" },
    correctAnswer: "B",
  },
  {
    id: 2,
    question: "Which of the following is an equivalent fraction of 1/2?",
    options: { A: "2/4", B: "2/3", C: "3/4", D: "1/3" },
    correctAnswer: "A",
  },
  {
    id: 3,
    question: "Which fraction is greater: 3/4 or 2/3?",
    options: {
      A: "3/4",
      B: "2/3",
      C: "Both are equal",
      D: "None of the above",
    },
    correctAnswer: "A",
  },
  {
    id: 4,
    question: "What is the sum of 1/3 and 1/6?",
    options: { A: "1/6", B: "1/2", C: "1/3", D: "1" },
    correctAnswer: "B",
  },
  {
    id: 5,
    question: "Which of the following is an improper fraction?",
    options: { A: "5/4", B: "3/5", C: "1/2", D: "4/7" },
    correctAnswer: "A",
  },
  {
    id: 6,
    question: "What is 3/5 divided by 2?",
    options: { A: "3/10", B: "6/5", C: "5/3", D: "1/3" },
    correctAnswer: "A",
  },
  {
    id: 7,
    question: "Simplify: 4/6 + 1/6",
    options: { A: "5/6", B: "1/6", C: "3/6", D: "4/6" },
    correctAnswer: "A",
  },
  {
    id: 8,
    question: "Convert 7/4 into a mixed fraction.",
    options: { A: "1 3/4", B: "2 3/4", C: "7/4", D: "1/4" },
    correctAnswer: "A",
  },
  {
    id: 9,
    question: "What is the product of 1/2 and 2/3?",
    options: { A: "1/2", B: "2/6", C: "1/3", D: "2/3" },
    correctAnswer: "C",
  },
  {
    id: 10,
    question: "Which of the following is not a fraction?",
    options: { A: "3/4", B: "5", C: "2/3", D: "1/2" },
    correctAnswer: "B",
  },
  {
    id: 11,
    question: "What is the reciprocal of 4/5?",
    options: { A: "5/4", B: "4/5", C: "1/5", D: "1/4" },
    correctAnswer: "A",
  },
  {
    id: 12,
    question: "Which of the following is a mixed fraction?",
    options: { A: "5/7", B: "2 1/2", C: "1/3", D: "3/2" },
    correctAnswer: "B",
  },
  {
    id: 13,
    question: "Simplify: 7/10 - 3/10",
    options: { A: "4/10", B: "1/2", C: "3/10", D: "4/5" },
    correctAnswer: "A",
  },
  {
    id: 14,
    question: "Which of the following fractions is the smallest?",
    options: { A: "1/4", B: "1/2", C: "1/8", D: "1/3" },
    correctAnswer: "C",
  },
  {
    id: 15,
    question: "What is the value of 4/5 + 1/5?",
    options: { A: "5/5", B: "1", C: "4/5", D: "6/5" },
    correctAnswer: "B",
  },
  {
    id: 16,
    question: "What is the improper fraction form of 1 2/3?",
    options: { A: "5/3", B: "3/5", C: "3/2", D: "2/3" },
    correctAnswer: "A",
  },
  {
    id: 17,
    question: "Convert 9/4 to a mixed fraction.",
    options: { A: "2 1/4", B: "3 1/4", C: "2 1/2", D: "3 2/4" },
    correctAnswer: "A",
  },
  {
    id: 18,
    question: "Which fraction represents 50%?",
    options: { A: "1/2", B: "1/4", C: "3/4", D: "2/3" },
    correctAnswer: "A",
  },
  {
    id: 19,
    question: "What is 2/3 of 9?",
    options: { A: "6", B: "3", C: "9", D: "2" },
    correctAnswer: "A",
  },
  {
    id: 20,
    question: "Which of the following is an equivalent fraction of 3/9?",
    options: { A: "1/3", B: "3/6", C: "2/3", D: "1/2" },
    correctAnswer: "A",
  },
  {
    id: 21,
    question: "Which of the following is the decimal form of 1/2?",
    options: { A: "0.2", B: "0.3", C: "0.5", D: "0.4" },
    correctAnswer: "C",
  },
  {
    id: 22,
    question: "What is 0.75 expressed as a fraction?",
    options: { A: "3/4", B: "1/4", C: "2/5", D: "7/8" },
    correctAnswer: "A",
  },
  {
    id: 23,
    question: "Which of the following is greater than 0.45?",
    options: { A: "0.5", B: "0.4", C: "0.35", D: "0.25" },
    correctAnswer: "A",
  },
  {
    id: 24,
    question: "What is the value of 3.25 + 1.75?",
    options: { A: "5", B: "5.5", C: "4", D: "4.75" },
    correctAnswer: "A",
  },
  {
    id: 25,
    question: "What is the value of 7.6 - 3.2?",
    options: { A: "4.3", B: "4.4", C: "4.2", D: "4.5" },
    correctAnswer: "B",
  },
  {
    id: 26,
    question: "Which decimal is equal to 3/5?",
    options: { A: "0.3", B: "0.5", C: "0.6", D: "0.7" },
    correctAnswer: "C",
  },
  {
    id: 27,
    question: "Convert 0.09 to a fraction.",
    options: { A: "9/100", B: "9/10", C: "1/9", D: "90/100" },
    correctAnswer: "A",
  },
  {
    id: 28,
    question: "What is 2.75 + 3.15?",
    options: { A: "5.9", B: "5.8", C: "5.85", D: "5.7" },
    correctAnswer: "B",
  },
  {
    id: 29,
    question: "Which of the following represents 6.25 as a mixed fraction?",
    options: { A: "6 1/4", B: "6 1/5", C: "6 1/2", D: "6 3/4" },
    correctAnswer: "A",
  },
  {
    id: 30,
    question: "What is 1.5 × 2?",
    options: { A: "2.5", B: "3.5", C: "3", D: "4" },
    correctAnswer: "C",
  },
  {
    id: 31,
    question: "0.875 is equal to which fraction?",
    options: { A: "7/8", B: "3/4", C: "1/2", D: "9/10" },
    correctAnswer: "A",
  },
  {
    id: 32,
    question: "What is 0.05 × 10?",
    options: { A: "0.5", B: "0.05", C: "0.55", D: "0.25" },
    correctAnswer: "A",
  },
  {
    id: 33,
    question: "Which decimal is equal to 1/4?",
    options: { A: "0.4", B: "0.25", C: "0.75", D: "0.5" },
    correctAnswer: "B",
  },
  {
    id: 34,
    question: "Convert 2.05 into a fraction.",
    options: { A: "205/100", B: "2 1/5", C: "41/20", D: "21/5" },
    correctAnswer: "C",
  },
  {
    id: 35,
    question: "What is 0.4 + 0.55?",
    options: { A: "0.95", B: "0.9", C: "0.85", D: "1" },
    correctAnswer: "A",
  },
  {
    id: 36,
    question: "What is 2.5 - 1.2?",
    options: { A: "1.3", B: "1.5", C: "1.2", D: "1.25" },
    correctAnswer: "A",
  },
  {
    id: 37,
    question: "Which of the following is closest to 0.67?",
    options: { A: "0.7", B: "0.65", C: "0.6", D: "0.75" },
    correctAnswer: "A",
  },
  {
    id: 38,
    question: "What is 3.4 divided by 2?",
    options: { A: "1.6", B: "1.7", C: "1.8", D: "1.75" },
    correctAnswer: "B",
  },
  {
    id: 39,
    question: "Which decimal is greater than 0.4?",
    options: { A: "0.25", B: "0.3", C: "0.45", D: "0.35" },
    correctAnswer: "C",
  },
  {
    id: 40,
    question: "Convert 4.125 into a fraction.",
    options: { A: "4 1/8", B: "4 1/4", C: "33/8", D: "41/8" },
    correctAnswer: "A",
  },

  {
    id: 41,
    question: "Which of the following is a variable?",
    options: { A: "3", B: "x", C: "5", D: "7" },
    correctAnswer: "B",
  },
  {
    id: 42,
    question: "In the expression 4x + 7, what is the constant?",
    options: { A: "4", B: "x", C: "7", D: "11" },
    correctAnswer: "C",
  },
  {
    id: 43,
    question:
      "In algebra, what do we call an unknown number represented by a letter?",
    options: { A: "Coefficient", B: "Term", C: "Variable", D: "Expression" },
    correctAnswer: "C",
  },
  {
    id: 44,
    question: "What is the value of x if x + 5 = 9?",
    options: { A: "4", B: "5", C: "9", D: "14" },
    correctAnswer: "A",
  },
  {
    id: 45,
    question: "In the expression 5y, what is 5?",
    options: { A: "Variable", B: "Constant", C: "Coefficient", D: "Term" },
    correctAnswer: "C",
  },
  {
    id: 46,
    question: "Which of the following is an equation?",
    options: { A: "4x + 3", B: "x - 5", C: "5y = 15", D: "2 + 3" },
    correctAnswer: "C",
  },
  {
    id: 47,
    question: "If 2x = 10, what is the value of x?",
    options: { A: "5", B: "10", C: "2", D: "20" },
    correctAnswer: "A",
  },
  {
    id: 48,
    question:
      "What is the result of substituting x = 3 in the expression 2x + 1?",
    options: { A: "5", B: "6", C: "7", D: "10" },
    correctAnswer: "C",
  },
  {
    id: 49,
    question:
      "Which of the following is not a term in the expression 3x + 2y + 7?",
    options: { A: "3x", B: "2y", C: "7", D: "9" },
    correctAnswer: "D",
  },
  {
    id: 50,
    question: "In the equation y - 2 = 5, what is the value of y?",
    options: { A: "7", B: "3", C: "5", D: "10" },
    correctAnswer: "A",
  },
  {
    id: 51,
    question: "Which of the following is an algebraic expression?",
    options: { A: "4 + 5", B: "6", C: "3x + 2", D: "7" },
    correctAnswer: "C",
  },
  {
    id: 52,
    question: "If x = 4, what is the value of 2x + 3?",
    options: { A: "8", B: "10", C: "11", D: "15" },
    correctAnswer: "C",
  },
  {
    id: 53,
    question: "Which of the following terms represents a constant?",
    options: { A: "x", B: "5", C: "3x", D: "y" },
    correctAnswer: "B",
  },
  {
    id: 54,
    question: "What is the value of 3y when y = 2?",
    options: { A: "6", B: "5", C: "9", D: "3" },
    correctAnswer: "A",
  },
  {
    id: 55,
    question: "In 4p - 7, what is the coefficient of p?",
    options: { A: "4", B: "7", C: "-7", D: "p" },
    correctAnswer: "A",
  },
  {
    id: 56,
    question: "If 3x = 12, what is the value of x?",
    options: { A: "3", B: "4", C: "6", D: "9" },
    correctAnswer: "B",
  },
  {
    id: 57,
    question: "What is the solution to the equation y + 4 = 9?",
    options: { A: "3", B: "4", C: "5", D: "9" },
    correctAnswer: "C",
  },
  {
    id: 58,
    question: "Which of the following is not an algebraic expression?",
    options: { A: "3x + 4", B: "y - 2", C: "x = 5", D: "7y + 1" },
    correctAnswer: "C",
  },
  {
    id: 59,
    question: "In the expression 2x + 3y, what are the variables?",
    options: { A: "2, 3", B: "x, y", C: "x", D: "y" },
    correctAnswer: "B",
  },
  {
    id: 60,
    question:
      "What do we call the number in front of a variable in an algebraic expression?",
    options: { A: "Term", B: "Coefficient", C: "Variable", D: "Constant" },
    correctAnswer: "B",
  },
  {
    id: 61,
    question: "What is the solution of the equation x + 5 = 12?",
    options: { A: "x = 7", B: "x = 17", C: "x = 5", D: "x = 12" },
    correctAnswer: "A",
  },
  {
    id: 62,
    question: "Solve: 2x = 16",
    options: { A: "x = 8", B: "x = 32", C: "x = 14", D: "x = 6" },
    correctAnswer: "A",
  },
  {
    id: 63,
    question: "What is the value of x in the equation 3x - 2 = 7?",
    options: { A: "x = 2", B: "x = 3", C: "x = 4", D: "x = 6" },
    correctAnswer: "C",
  },
  {
    id: 64,
    question: "If 5x = 25, what is the value of x?",
    options: { A: "x = 10", B: "x = 5", C: "x = 20", D: "x = 25" },
    correctAnswer: "B",
  },
  {
    id: 65,
    question: "What is the solution of x - 4 = 9?",
    options: { A: "x = 13", B: "x = 9", C: "x = 5", D: "x = 4" },
    correctAnswer: "A",
  },
  {
    id: 66,
    question: "Solve for x: x/2 = 6",
    options: { A: "x = 12", B: "x = 3", C: "x = 9", D: "x = 6" },
    correctAnswer: "A",
  },
  {
    id: 67,
    question: "What is the value of x if 4x + 2 = 14?",
    options: { A: "x = 2", B: "x = 3", C: "x = 4", D: "x = 6" },
    correctAnswer: "B",
  },
  {
    id: 68,
    question: "Solve: x + 8 = 20",
    options: { A: "x = 12", B: "x = 28", C: "x = 8", D: "x = 10" },
    correctAnswer: "A",
  },
  {
    id: 69,
    question: "What is the value of x if x - 3 = 10?",
    options: { A: "x = 12", B: "x = 8", C: "x = 13", D: "x = 14" },
    correctAnswer: "C",
  },
  {
    id: 70,
    question: "Solve for x: 3x = 27",
    options: { A: "x = 7", B: "x = 9", C: "x = 6", D: "x = 5" },
    correctAnswer: "B",
  },
  {
    id: 71,
    question: "If x/3 = 5, what is the value of x?",
    options: { A: "x = 15", B: "x = 10", C: "x = 3", D: "x = 8" },
    correctAnswer: "A",
  },
  {
    id: 72,
    question: "Solve the equation: x + 10 = 18",
    options: { A: "x = 8", B: "x = 28", C: "x = 9", D: "x = 10" },
    correctAnswer: "A",
  },
  {
    id: 73,
    question: "What is the solution for x - 6 = 5?",
    options: { A: "x = 1", B: "x = 5", C: "x = 11", D: "x = 6" },
    correctAnswer: "C",
  },
  {
    id: 74,
    question: "If 2x + 3 = 9, what is the value of x?",
    options: { A: "x = 1", B: "x = 2", C: "x = 3", D: "x = 4" },
    correctAnswer: "B",
  },
  {
    id: 75,
    question: "What is the value of x in 3x - 1 = 8?",
    options: { A: "x = 2", B: "x = 3", C: "x = 4", D: "x = 6" },
    correctAnswer: "C",
  },
  {
    id: 76,
    question: "Solve for x: 4x = 32",
    options: { A: "x = 8", B: "x = 7", C: "x = 6", D: "x = 5" },
    correctAnswer: "A",
  },
  {
    id: 77,
    question: "If x + 7 = 15, what is the value of x?",
    options: { A: "x = 5", B: "x = 8", C: "x = 9", D: "x = 15" },
    correctAnswer: "B",
  },
  {
    id: 78,
    question: "Solve for x: x - 9 = 4",
    options: { A: "x = 9", B: "x = 13", C: "x = 15", D: "x = 11" },
    correctAnswer: "B",
  },
  {
    id: 79,
    question: "What is the solution for x in 5x = 45?",
    options: { A: "x = 5", B: "x = 8", C: "x = 7", D: "x = 9" },
    correctAnswer: "D",
  },
  {
    id: 80,
    question: "If x + 6 = 20, what is the value of x?",
    options: { A: "x = 10", B: "x = 14", C: "x = 12", D: "x = 20" },
    correctAnswer: "B",
  },
];

const App = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [submittedForm, setSubmittedForm] = useState(false);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewAnswers, setViewAnswers] = useState(false);
  const questionsPerPage = 10;

  const [result, setResult] = useState({
    attended: 0,
    skipped: 0,
    incorrect: 0,
    marks: 0,
    percentage: 0,
  });

  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name && mobile) {
      setSubmittedForm(true); // Show the MCQ only if form is submitted
    }
  };

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let attended = 0;
    let incorrect = 0;
    let marks = 0;

    answers.forEach((answer, index) => {
      if (answer) {
        attended++;
        if (answer === questions[index].correctAnswer) {
          marks++;
        } else {
          incorrect++;
        }
      }
    });

    const skipped = questions.length - attended;
    const percentage = (marks / questions.length) * 100;

    setResult({ attended, skipped, incorrect, marks, percentage });
    setSubmitted(true);

    // Send the result email
    sendEmail(name, mobile, attended, skipped, incorrect, marks, percentage);
  };

  const sendEmail = (
    name,
    mobile,
    attended,
    skipped,
    incorrect,
    marks,
    percentage
  ) => {
    const templateParams = {
      user_name: name,
      user_mobile: mobile,
      attended_questions: attended,
      skipped_questions: skipped,
      incorrect_answers: incorrect,
      total_marks: marks,
      percentage: percentage,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  const handleViewAnswers = () => {
    setViewAnswers(true);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startQuestionIndex = (currentPage - 1) * questionsPerPage;
  const currentQuestions = questions.slice(
    startQuestionIndex,
    startQuestionIndex + questionsPerPage
  );

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, pb: "120px", overflow: "auto" }}>
      {!submittedForm ? (
        <form onSubmit={handleFormSubmit}>
          <Stack spacing={2} sx={{ maxWidth: 400, margin: "auto" }}>
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              label="Mobile Number"
              variant="outlined"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Start Quiz
            </Button>
          </Stack>
        </form>
      ) : !submitted ? (
        <>
          {currentQuestions.map((q, index) => (
            <Stack
              key={q.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                marginBottom: "20px",
                p: { xs: 2, md: 3 },
              }}
            >
              <FormControl component="fieldset" sx={{ mb: 3 }}>
                <FormLabel component="legend">
                  {startQuestionIndex + index + 1}. {q.question}
                </FormLabel>
                <RadioGroup
                  name={`question-${q.id}`}
                  value={answers[startQuestionIndex + index]}
                  onChange={(e) =>
                    handleChange(startQuestionIndex + index, e.target.value)
                  }
                >
                  <Grid container spacing={2}>
                    {Object.entries(q.options).map(([key, value]) => (
                      <Grid item xs={12} sm={6} key={key}>
                        <FormControlLabel
                          value={key}
                          control={<Radio />}
                          label={`${key}) ${value}`}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </RadioGroup>
              </FormControl>
            </Stack>
          ))}

          {/* Fixed footer for Pagination and Submit */}
          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "white",
              boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
              p: 0,
              zIndex: 1000,
              // border: "1px solid red",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 0 }}
            >
              <Button
                variant="contained"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                size="small"
              >
                Previous
              </Button>
              <Button
                variant="contained"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                size="small"
              >
                Next
              </Button>
            </Stack>

            {/* Fixed Submit Button */}
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{
                width: { xs: "100%", md: "auto" },
                mt: { xs: 2, md: 0 },
              }}
              size="small"
            >
              Submit
            </Button>
          </Box>
        </>
      ) : (
        <Box sx={{ p: { xs: 2, md: 4 } }}>
          <Typography variant="h6">Result Summary</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography>Questions Attended:</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{result.attended}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Questions Skipped:</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{result.skipped}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Incorrect Answers:</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{result.incorrect}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Marks Obtained:</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {result.marks} / {questions.length}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Percentage:</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{result.percentage}%</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="contained"
            sx={{ mt: 3 }}
            onClick={handleViewAnswers}
          >
            View Answers
          </Button>
        </Box>
      )}

      {viewAnswers && (
        <Box sx={{ mt: 4 }}>
          {questions.map((q, index) => (
            <Stack
              key={q.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                marginBottom: "20px",
                p: { xs: 2, md: 3 },
              }}
            >
              <FormControl component="fieldset" sx={{ mb: 3 }}>
                <FormLabel component="legend">
                  {index + 1}. {q.question}
                </FormLabel>
                <RadioGroup name={`question-${q.id}`} value={answers[index]}>
                  <Grid container spacing={2}>
                    {Object.entries(q.options).map(([key, value]) => {
                      const isCorrect = key === q.correctAnswer;
                      const isUserAnswer = answers[index] === key;
                      const isIncorrect = isUserAnswer && !isCorrect;

                      return (
                        <Grid item xs={12} sm={6} key={key}>
                          <FormControlLabel
                            value={key}
                            control={<Radio />}
                            label={`${key}) ${value}`}
                            sx={{
                              backgroundColor: isCorrect
                                ? "green"
                                : isIncorrect
                                ? "red"
                                : "transparent",
                              color:
                                isCorrect || isIncorrect ? "white" : "black",
                            }}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </RadioGroup>
              </FormControl>
            </Stack>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default App;
