import { createStore, createLogger } from 'vuex'
import { axios } from '@/common/app.js';

// Only load the createLogger plugin when in development mode
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
    plugins,
    state() {
        return {
            // cartCount: 0,
            questions: [],
            user: null,
            loginForm: false,
            registerForm: true,
        }
    },
    //Methods used to alter the state of our store
    mutations: {
        // setCartCount(state, payload) {
        //     state.cartCount = payload;
        // },
        setQuestions(state, payload) {
            payload.forEach(function (value) {
                value.answers = [
                    [value.answer1],
                    [value.answer2],
                    [value.answer3],
                    [value.answer4],
                ];
                value.answers.forEach(function (val, i) {
                    if (i + 1 == value.correct) {
                        value.answers[i][1] = "true";
                    }
                });
                delete value.answer1;
                delete value.answer2;
                delete value.answer3;
                delete value.answer4;
                delete value.correct;
            });
            state.questions = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        }
    },
    //Methods that can contain async. code
    //Can not directly alter the state - has to change state
    //by commiting mutations
    actions: {
        fetchQuestions(context) {
            axios.get("question").then((response) => {
                context.commit('setQuestions', response.data.question);
            });
        },

        authUser(context) {
            axios.post('auth').then((response) => {
                if (response.data.authenticated) {
                    context.commit('setUser', response.data.user);
                }
            });
        },
    },
    getters: {
        // Style A 
        // getQuestionById: (state) => (id) => {
        //     return state.questions.filter((question) => {
        //         return question.id == id;
        //     }, id)[0];
        // }

        // Style B
        getQuestionById(state) {
            return function (id) {
                return state.questions.filter((question) => {
                    return question.id == id;
                }, id)[0];
            }
        }
    }
})