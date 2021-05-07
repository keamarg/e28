import { createStore, createLogger } from 'vuex'
import { axios } from '@/common/app.js';

const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
    plugins,
    state() {
        return {
            questions: [],
            user: null,
            loginForm: false,
            registerForm: true,
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        setLoginForm(state, payload) {
            state.loginForm = payload;
        },
        setRegisterForm(state, payload) {
            state.registerForm = payload;
        },

        //function to model the data to the desired format
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
    },
    actions: {
        fetchQuestions(context) {
            axios.get("question").then((response) => {
                context.commit('setQuestions', response.data.question);
            });
        },

        authUser(context) {
            return new Promise((resolve) => {
                axios.post('auth').then((response) => {
                    if (response.data.authenticated) {
                        context.commit('setUser', response.data.user);
                    } else {
                        context.commit('setUser', false);
                    }

                    resolve();
                });
            });
        },
    },
    getters: {
        getQuestionById(state) {
            return function (id) {
                return state.questions.filter((question) => {
                    return question.id == id;
                }, id)[0];
            }
        }
    }
})