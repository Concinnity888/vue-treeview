import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orgStructure: [
      {
        id: 0,
        name: 'Руководство',
        children: [
          {
            id: 1,
            name: 'Отдел 1',
            children: [
              {
                id: 2,
                name: 'Отдел 2',
                children: [],
              },
              {
                id: 3,
                name: 'Отдел 3',
                children: [],
              },
              {
                id: 4,
                name: 'Отдел 4',
                children: [],
              },
            ],
          },
          {
            id: 5,
            name: 'Отдел 5',
            children: [
              {
                id: 6,
                name: 'Отдел 6',
                children: [],
              },
            ],
          },
          {
            id: 7,
            name: 'Отдел 7',
            children: [],
          },
        ],
      },
    ],
  },
  getters: {
    getOrgStructure: (state) => state.orgStructure[0],
  },
  mutations: {
    UPDATE_LIST(state, payload) {
      console.log('payload', payload);
      state.orgStructure = [...state, ...payload];
    },
  },
  actions: {
    updateList({ commit }, payload) {
      commit('UPDATE_LIST', payload);
    },
  },
});
