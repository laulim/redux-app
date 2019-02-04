import {createStore} from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC': 
      return state - 1;
    case 'RES': 
      return 0;
    default: 
      return state;
  }
}

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const res = () => ({type: 'RES'});



const store = createStore(reducer);

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});

document.getElementById('res').addEventListener('click', () => {
  store.dispatch(res());
});

const update = () => {
  document.getElementById('counter').textContent = store.getState();
};

store.subscribe(update);

// store.subscribe(() => {
//   console.log(store.getState());
// })

// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
