import createStore from 'teaful';

export const { useStore } = createStore({
  steps: 1,
  personeName: '',
  success: false,
});
