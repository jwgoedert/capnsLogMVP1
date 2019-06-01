const initState = {
  entries: [
    {id:1, date:'01.23.1986', location:'new orleans, LA', category: 'journal', content:'it is indeed my birthday', tags:'things and things'},
    {id:2, date:'01.23.1986', location:'new orleans, LA', category: 'tobacco', content:'it is indeed my birthday', tags:'things and things'},
    {id:3, date:'01.23.1986', location:'new orleans, LA', category: 'drink', content:'it is indeed my birthday', tags:'things and things'},
    {id:4, date:'01.23.1986', location:'new orleans, LA', category: 'journal', content:'it is indeed my birthday', tags:'things and things'},
  ]
};

const entryReducer = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_ENTRY':
      console.log('created entry!', action.entry);  
      return state;
    case 'CREATE_ENTRY_ERROR':
      console.log('Error creating entry', action.err);
      return state;
    default:
      return state;
  }
}

export default entryReducer;