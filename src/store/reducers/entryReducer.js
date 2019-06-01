const initState = {
  entries: [
    {id:1, date:'01.23.1986', location:'new orleans, LA', category: 'journal', content:'it is indeed my birthday'},
    {id:2, date:'01.23.1986', location:'new orleans, LA', category: 'tobacco', content:'it is indeed my birthday'},
    {id:3, date:'01.23.1986', location:'new orleans, LA', category: 'drink', content:'it is indeed my birthday'},
    {id:4, date:'01.23.1986', location:'new orleans, LA', category: 'journal', content:'it is indeed my birthday'},
  ]
};

const entryReducer = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_ENTRY':
      console.log('created entry!', action.entry);  
  }
  return state;
}

export default entryReducer;