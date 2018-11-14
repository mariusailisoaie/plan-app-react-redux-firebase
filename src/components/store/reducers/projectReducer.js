const initState = {
  projects: [
    {id: "1", title: "Finding Mario", content: 'ad'},
    {id: "2", title: "The universe is big", content: 'ad'},
    {id: "3", title: "The car of the year", content: 'ad'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      break;
    default: 
      console.log('default');
      break;
  }
  
  return state;
}

export default projectReducer;