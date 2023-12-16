<template>
    <div v-if="!finishedQuizz"> 
      <h3>{{ this.questions[currentQuestionIndex].question }}</h3>
      <div v-if="this.questions[currentQuestionIndex].image">
        <img  :src="this.questions[currentQuestionIndex].image" alt="Question Image"/>
      </div>
     
      <div v-for="(option, index) in this.questions[currentQuestionIndex].options" 
      :key="index" @click="selectOption(option)" class="option">
        {{ option}}
      </div>
  
    </div>
    <SummaryPage v-else/>

  </template>
<script>
import { mapState, mapActions } from 'vuex';
import SummaryPage from './SummaryPage.vue';

// v-if="this.questions[currentQuestionIndex].image" :src="require(this.questions[currentQuestionIndex].image)"
// :src="require('@/assets/quizzpics/logo.png')"
// "image":      "@/assets/quizzpics/logo.png"
export default {
  components: {
    SummaryPage
  },
  computed: {
    ...mapState(['questions', 'currentQuestionIndex', 'finishedQuizz']),
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
  },
  methods: {
    ...mapActions(['fetchQuestions', 'updateLastIndex', 'addAnsweredQuestion']),
    selectOption(option) {
      let isCorrect = false;
      if (option === this.currentQuestion.correctAnswer) {
        console.log('Correct answer!');
        isCorrect = true;
      } else {
        console.log('Incorrect answer.'); // Replace with your logic for incorrect answer
      }
      const answeredQuestion = {
      question: this.currentQuestion.question, // Replace with your question property
      selectedAnswer: option,
      correctAnswer: this.currentQuestion.correctAnswer,
      isCorrect: isCorrect,
      };
      console.log(answeredQuestion, "123");
      this.addAnsweredQuestion(answeredQuestion);
      this.nextQuestion()
    },
    lastIndex() { // Corrected method name to follow camelCase convention
      let lastIndex = 0;

      // Access questions using the mapped state 'this.questions'
      this.questions.forEach(question => {
        if (question.id > lastIndex) {
          lastIndex = question.id;
        }
      });

      // Call the 'updateLastIndex' action to save the last index to the store
      this.updateLastIndex(lastIndex);
    },
    ...mapActions(['nextQuestion']),
  },
  mounted() {
    this.fetchQuestions();
  },
};
</script>
    
    <style>
    .options-container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin-top: 50px;
    }
    
    .option {
      cursor: pointer;
      padding: 10px;
      margin: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    </style>
    