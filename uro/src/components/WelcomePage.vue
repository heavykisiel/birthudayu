<template>
<div v-if="!quizzStarted">
  <div class="title">
        Welcome to your birthday present!
  </div>
  <div class="synopsis">
    <br>I made quizz for your.
    <br>Earn as many Niko Coins as you can.
    <br>Good luck!
  </div>
  <div class="btn-container">
    <button @click="startQuizz" class="big-black-button">
      Click here to start quizz
    </button>
  </div>


</div>
<div v-else>
  <QuestionComp class="optionSelector"></QuestionComp>
</div>


    
</template>
<script>
import { useStore } from 'vuex';
import QuestionComp from './QuestionComp.vue'; // Adjust the path based on your folder structure


export default {
  components: {
    QuestionComp, // Register the OptionsSelector component
  },
  created() {
    const store = useStore();
    store.dispatch('fetchQuestions');
  },
  data() {
    return {
      quizzStarted: false,
    }
  },
  methods:
  {
    startQuizz(){
    this.quizzStarted = true
  }
  }

};

</script>
<style scoped>
.title {
    color: #d1d8e1;
    font-size: 3rem;
}
.synopsis {
  color: #d1d8e1;
  font-size: 2rem;
}
.optionSelector {
  text-align: center;
  color: #d1d8e1;  
}
.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh; /* Full viewport height */
}
.big-black-button {
  display: inline-block;
  padding: 30px 60px;
  font-size: 32px;
  font-weight: bold;
  color: white;
  background-color: black;
  border: 2px solid black;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Hover effect */
.big-black-button:hover {
  background-color: #333; /* Darker shade when hovered */
}
</style>