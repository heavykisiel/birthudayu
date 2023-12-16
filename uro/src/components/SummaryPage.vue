<template>
    <div class="title">
        Summary
  </div> <br>
    <div class="summary-grid">
      <div class="summary-item header">Question</div>
      <div class="summary-item header">Selected Answer</div>
      <div class="summary-item header">Correct Answer</div>
      <div class="summary-item header">Points</div>
        {{ console.log(answeredQuestions) }}
      <!-- Loop through answered questions and display them in the grid -->
      <template v-for="(question, index) in answeredQuestions" :key="index">
      <div class="summary-item">{{ question.question }}</div>
      <div class="summary-item">{{ question.selectedAnswer }}</div>
      <div class="summary-item">{{ question.correctAnswer }}</div>
      <div class="summary-item">{{ question.isCorrect ? "1" : "0" }}</div>
    </template>
        <!-- Display the total points -->
    <div class="summary-item header">Total Points:</div>
    <div class="summary-item"></div>
    <div class="summary-item"></div>
    <div class="summary-item">{{ calculateTotalPoints }}</div>

    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['answeredQuestions']),
      calculateTotalPoints() {
      return this.answeredQuestions.reduce(
        (totalPoints, question) => totalPoints + (question.isCorrect ? 1 : 0),
        0
      );
    },
    },
  };
  </script>
  
  <style>
  .summary-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Adjust columns as per your design */
    grid-gap: 5px; /* Adjust the gap between grid items */
    color: #d1d8e1;
  }
  
  .summary-item {
    padding: 10px;
    border: 1px solid #ccc;
    /* Add other styles for your grid items */
  }
  
  .header {
    font-weight: bold;
    /* Style for header cells */
  }

  .title {
    color: #d1d8e1;
    font-size: 3rem;
  }
  </style>