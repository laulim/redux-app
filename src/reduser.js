const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return +state + 1;
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

export default reducer