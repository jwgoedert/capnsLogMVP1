export const createEntry = (entry) => {
    return (dispatch, getState) => {
        //gonna fetch stuff here later....
        dispatch({ type: 'CREATE_ENTRY', entry });
    }
}