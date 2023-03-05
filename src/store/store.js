import { createStore } from 'vuex';

// определение состояния
const state = {
  count: 0
};

// определение мутаций
const mutations = {
  increment(state) {
    state.count++;
  }
};

// создание и экспорт хранилища Vuex
export default createStore({
  state,
  mutations
});
