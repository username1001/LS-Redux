export default (stateProp = null, action) => {
  console.log('hi');
  switch (action.type) {
    case 'TODO_SELECTED':
      return action.payload;
    default: 
      return stateProp;
  }
}

// Need to update to the switch statement.
