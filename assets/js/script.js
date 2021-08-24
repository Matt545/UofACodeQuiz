//QUERY SELECTORS
var headerEl = document.querySelector("#header");
var formEl = document.querySelector("#form");
var answerEl = document.querySelector("#answer");
var startButtonEl = document.querySelector("#btn");
var answerDivEl = document.querySelector("#answers");
var questionEl = document.querySelector("#question");
var viewScoresEl = document.querySelector("#tag");
var correctEl = document.querySelector("#correct");

//COUNTERS
var quizIdCounter = 0;
var counterAnswer = 0;
var clicks = 0;
var correctCounter = 0;

//QUESTIONS
const myQuestions = [
  {
    question: "Why do JavaScript and Java have similar name?",
    answers: {
      a: "They both originated on the island of Java",
      b: "JavaScript is a stripped-down version of Java",
      c: "JavaScript’s syntax is loosely based on Java’s"
    },
    correctAnswer: "2"
  },
  {
    question: "______ JavaScript is also called client-side JavaScript.",
    answers: {
      a: "Microsoft",
      b: "LiveWire",
      c: "Navigator"
    },
    correctAnswer: "2"
  },
  {
    question: "What are variables used for in JavaScript Programs?",
    answers: {
      a: "Varying randomly",
      b: "Causing high-school algebra flashbacks",
      c: "Storing numbers, dates, or other values",
    },
    correctAnswer: "2"
  }
];