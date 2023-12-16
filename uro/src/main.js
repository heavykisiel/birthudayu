import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'; // Import createStore from Vuex

const store = createStore({
    state:{
        title: "aaz",
        questions: [],
        currentQuestionIndex: 0,
        lastQuestionIndex: 0,
        finishedQuizz: false,
        answeredQuestions: []
    },
    mutations: {
        SET_QUESTIONS(state, questions) {
          state.questions = questions;
        },
        SET_LAST_QUESTION_INDEX(state, lastIndex) {
          console.log(lastIndex)
          state.lastQuestionIndex = lastIndex;
        },
        INCREMENT_CURRENT_QUESTION_INDEX(state) {
          if (state.currentQuestionIndex < state.lastQuestionIndex){
            state.currentQuestionIndex++;
          } else {
            state.finishedQuizz = true;
          }
        },
        ADD_ANSWERED_QUESTION(state, answeredQuestion){
            state.answeredQuestions.push(answeredQuestion);
        }
      },
    actions: {
        async fetchQuestions({ commit }) {
          try {
            // Fetch the questions.json file (assuming it's in the public folder)
            const response = await fetch('./questions.json');
            const data = await response.json();
            
            commit('SET_QUESTIONS', data.questions); 
            commit('SET_LAST_QUESTION_INDEX', data.questions.length - 1); // Calculate and set the last index
          } catch (error) {
            console.error('Error fetching questions:', error);
          }
        },
        nextQuestion({ commit }) {
          commit('INCREMENT_CURRENT_QUESTION_INDEX');
        },
        addAnsweredQuestion({ commit },answeredQuestion){
          commit('ADD_ANSWERED_QUESTION', answeredQuestion);
        }
      },
      getters: {
        getQuestionById: (state) => (id) => {
          return state.questions.find(question => question.id === id);
        },
      },
    modules: {},
    });
createApp(App).use(store).mount('#app')
