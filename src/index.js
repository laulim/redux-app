import {createStore} from 'redux';
import {downloadJson, uploadJson} from './service/gotService'

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC': 
      return state - 1;
    case 'RES': 
      return 0;
    case 'DNL': 
      return action.value;
    default: 
      return state;
  }
}

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const res = () => ({type: 'RES'});
const dnl = (value) => ({type: 'DNL', value});

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

document.getElementById('dnl').addEventListener('click', () => {
  downloadJson('./db.json').then(({numbers}) => {
    const random = Math.floor(Math.random() * 3 + 1);
    const index = numbers.findIndex((item) => item.id === random);
    const value = numbers[index].const;
    store.dispatch(dnl(value));
  });
});

document.getElementById('upl').addEventListener('click', () => {
  const data = {
    saved: store.getState(),
  }
  console.log(data);
  uploadJson('http://localhost:3001/numbers', data);
});


const update = () => {
  document.getElementById('counter').textContent = store.getState();
};

store.subscribe(update);

